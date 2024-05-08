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
}