import React, { useState } from 'react';

const InvoiceManagement = () => {
    const [invoices, setInvoices] = useState([]);
    const [newInvoice, setNewInvoice] = useState({ customer: '', amount: 0 });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewInvoice({ ...newInvoice, [name]: value });
    };

    const addInvoice = () => {
        setInvoices([...invoices, newInvoice]);
        setNewInvoice({ customer: '', amount: 0 });
    };

    return (
        <div>
            <h1>Invoice Management</h1>
            <div>
                <input
                    type="text"
                    name="customer"
                    placeholder="Customer Name"
                    value={newInvoice.customer}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    value={newInvoice.amount}
                    onChange={handleInputChange}
                />
                <button onClick={addInvoice}>Add Invoice</button>
            </div>
            <h2>Invoices</h2>
            <ul>
                {invoices.map((invoice, index) => (
                    <li key={index}>
                        {invoice.customer} - ${invoice.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InvoiceManagement;