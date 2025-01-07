import React, { useState } from 'react';
import Header from '../components/common/Header';
import ListTable from '../components/common/ListTable';

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
        <div className='flex-1 overflow-auto relative z-10 w-full'>
            <Header title="Invoices"/>

            <main className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
                <ListTable />
            </main>
        </div>
       
    );
};

export default InvoiceManagement;