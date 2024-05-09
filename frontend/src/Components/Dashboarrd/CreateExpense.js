
import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import OpenExpenses from './OpenExpenses';
import ClosedExpenses from './ClosedExpenses';


function CreateExpense(props) {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [members, setMembers] = useState([]);
    const [show, setShow] = useState(false);
    const [openExpenses, setOpenExpenses] = useState([]);
    const [closedExpenses, setClosedExpenses] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddMember = () => {
        if (members.trim() !== '' && !members.includes(members.trim())) {
            setMembers([...members, members.trim()]);
            setMembers('');
        }
    };

    const handleAddExpense = () => {
        const newExpense = {
          name: name,
          amount: amount,
          description: description,
          members: members,
        };
        setOpenExpenses([...openExpenses, newExpense]);
        handleClose();
      };

      const handleCloseExpense = (index) => {
        const closedExpense = openExpenses[index];
        setClosedExpenses([...closedExpenses, closedExpense]);
        setOpenExpenses(openExpenses.filter((expense, i) => i !== index));
      };

    return (
        <>
            <button
                onClick={handleShow}
                className="block mx-auto m-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
                + Add Expense
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Create Expense</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            setName('');
                            setAmount('');
                            setDescription('');
                            setMembers([]);
                            props.newExpense(name, amount, description, members);
                        }}
                        id="editmodal"
                        className="w-full max-w-sm"
                    >
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    for="name"
                                >
                                    Expense Name
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="name"
                                    placeholder="Birthday"
                                    type="text"
                                    value={name}
                                    required
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    for="role"
                                >
                                    Amount
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="amount"
                                    placeholder="amount"
                                    type="text"
                                    value={amount}
                                    required
                                    onChange={(e) => {
                                        setAmount(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                >
                                    Description
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="description"
                                    type="text"
                                    name="description"
                                    value={description}
                                    required
                                    onChange={(e) => {
                                        setDescription(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                >
                                    Members
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="members"
                                    type="text"
                                    value={members}
                                    placeholder="Enter member name"
                                    onChange={(e) => setMembers(e.target.value)}
                                />
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
                                    type="button"
                                    onClick={handleAddMember}
                                >
                                    Add Member
                                </button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
                        onClick={handleClose}
                    >
                        Close
                    </button>
                    <button
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleAddExpense}
                        form="editmodal"
                    >
                        Add
                    </button>
                </Modal.Footer>
            </Modal>
            {/* <DisplayExpense expenses={expenses} /> */}
            <OpenExpenses openExpenses={openExpenses} handleCloseExpense={handleCloseExpense} />
            <ClosedExpenses closedExpenses={closedExpenses} />

        </>
    );
}

export default CreateExpense;
