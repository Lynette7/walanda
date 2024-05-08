// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ExpenseSplitter {
    address public owner;
    uint256 public expenseId;

    struct Dutch {
        uint256 id;
        address creator;
        string name;
        string description;
        uint256 targetAmount;
        uint256 contributedAmount;
        uint256 contributionPerMember;
        bool settled;
        address[] members;
    }

     mapping(uint256 => Dutch) public expenses;
    mapping(uint256 => mapping(address => uint256)) public contributions;

    event ExpenseCreated(
        uint256 id,
        address creator,
        string name,
        string description,
        uint256 targetAmount
    );
    event MemberAdded(uint256 expenseId, address member);
    event ContributionMade(
        uint256 indexed expenseId,
        address contributor,
        uint256 amount
    );
    event ExpenseSettled(uint256 expenseId);
    modifier onlyOwner() {
        require(msg.sender == owner, "Only contract owner can perform this action");
        _;
    }

    modifier onlyExpenseCreator(uint256 _expenseId) {
        require(
            msg.sender == expenses[_expenseId].creator,
            "Only the expense creator can perform this action"
        );
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function createExpense(
        string memory _name,
        string memory _description,
        uint256 _targetAmount,
        address[] memory _members
    ) external {
        require(_targetAmount > 0, "Target amount must be greater than zero");
        require(_members.length > 0, "Expense must have at least one member");

        uint256 newExpenseId = expenseId;
        uint256 contributionPerMember = _targetAmount / _members.length;

        expenses[newExpenseId] = Dutch(
            newExpenseId,
            msg.sender,
            _name,
            _description,
            _targetAmount,
            0,
            contributionPerMember,
            false,
            _members
        );

        for (uint256 i = 0; i < _members.length; i++) {
            contributions[newExpenseId][_members[i]] = 0;
        }

        emit ExpenseCreated(
            newExpenseId,
            msg.sender,
            _name,
            _description,
            _targetAmount
        );

        for (uint256 i = 0; i < _members.length; i++) {
            emit MemberAdded(newExpenseId, _members[i]);
        }

        expenseId++;
    }

    function addMember(uint256 _expenseId, address _member)
        external
        onlyExpenseCreator(_expenseId)
    {
        expenses[_expenseId].members.push(_member);
        expenses[_expenseId].contributionPerMember = expenses[_expenseId]
            .targetAmount / expenses[_expenseId].members.length;
        emit MemberAdded(_expenseId, _member);
    }

    function contribute(uint256 _expenseId, uint256 _amount) external payable {
        Dutch storage expense = expenses[_expenseId];
        require(_amount > 0, "Contribution amount must be greater than zero");
        require(isMemberOfExpense(_expenseId, msg.sender), "Caller is not a member of the expense");
        require(_amount == expense.contributionPerMember, "Incorrect contribution amount");

        contributions[_expenseId][msg.sender] += _amount;
        expense.contributedAmount += _amount;

        emit ContributionMade(_expenseId, msg.sender, _amount);
    }

    function isMemberOfExpense(uint256 _expenseId, address _address) public view returns (bool) {
        Dutch storage expense = expenses[_expenseId];
        for (uint256 i = 0; i < expense.members.length; i++) {
            if (expense.members[i] == _address) {
                return true;
            }
        }
        return false;
    }
}