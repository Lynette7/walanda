import { ethers } from "ethers";
import contractabi from "../Contracts/abi.json"

// Define the ABI and address of the contract
const ContractAbi = contractabi
const ContractAddress = '0xEE2DccCe41dC3402ECF16024f7c3f944b38CA57b';

// Function to create a new expense
export const createExpense = async (_name, _description, _targetAmount, _members) => {
    try {
        // Connect to Ethereum provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // Get signer
        const signer = provider.getSigner();

        // Instantiate contract
        const contract = new ethers.Contract(ContractAddress, ContractAbi.abi, signer);

        // Call createExpense function
        const tx = await contract.createExpense(_name, _description, _targetAmount, _members);
        await tx.wait();

        console.log('Expense created successfully');
        return true;
    } catch (error) {
        console.error('Error creating expense:', error);
        return false;
    }
};

// Function to add a member to an existing expense
export const addMember = async (_expenseId, _member) => {
    try {
        // Connect to Ethereum provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // Get signer
        const signer = provider.getSigner();

        // Instantiate contract
        const contract = new ethers.Contract(ContractAddress, ContractAbi.abi, signer);

        // Call addMember function
        const tx = await contract.addMember(_expenseId, _member);
        await tx.wait();

        console.log('Member added successfully');
        return true;
    } catch (error) {
        console.error('Error adding member:', error);
        return false;
    }
};

// Function to make a contribution to an expense
export const contribute = async (_expenseId, _amount) => {
    try {
        // Connect to Ethereum provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // Get signer
        const signer = provider.getSigner();

        // Instantiate contract
        const contract = new ethers.Contract(ContractAddress, ContractAbi.abi, signer);

        // Call contribute function
        const tx = await contract.contribute(_expenseId, { value: _amount });
        await tx.wait();

        console.log('Contribution made successfully');
        return true;
    } catch (error) {
        console.error('Error making contribution:', error);
        return false;
    }
};

// Function to settle an expense
export const settleExpense = async (_expenseId, _withdrawAmount) => {
    try {
        // Connect to Ethereum provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // Get signer
        const signer = provider.getSigner();

        // Instantiate contract
        const contract = new ethers.Contract(ContractAddress, ContractAbi.abi, signer);

        // Call settleExpense function
        const tx = await contract.settleExpense(_expenseId, _withdrawAmount);
        await tx.wait();

        console.log('Expense settled successfully');
        return true;
    } catch (error) {
        console.error('Error settling expense:', error);
        return false;
    }
};
