import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import Header from '../components/common/Header';
import StatCard from '../components/common/StatCard';
import { handleGetItems, handleAddItem } from '../controllers/ItemController';

const ItemManagement = () => {

    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ id: '', name: '', category: 'Pizza', price: 0});
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        handleGetItems(setItems)
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewItem({ ...newItem, [name]: value });
    };

    const addItem = () => {
        if (newItem.name && newItem.price) {
            // convert price to number
            const convertedItem = {...newItem, price: parseFloat(newItem.price)};
            handleAddItem(convertedItem, setItems);
            setNewItem({ name: '', category: '', price: 0});
            setIsModalOpen(false);
        }
    };

    return (
        <div className='flex-1 overflow-auto relative z-10 w-full'>
            <Header title="Items"/>

            <main className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
                <div>
                    <div className="flex justify-end mb-4">
                    <button className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    onClick={() => setIsModalOpen(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3z" />
                        </svg>
                        Add new item
                    </button>
                    </div>
                </div>
                <motion.div 
                    className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}>
                    {/* <StatCard name="Total Items" value={items.length} /> */}

                    {/* default items */}
                    {/* <StatCard name="Chicken pizza" category="Pizza"  price="3 lkr" />
                    <StatCard name="Chicken pizza" category="Pizza"  price="3 lkr" />
                    <StatCard name="Chicken pizza" category="Pizza"  price="3 lkr" />
                    <StatCard name="Chicken pizza" category="Pizza"  price="3 lkr" />
                    <StatCard name="Chicken pizza" category="Pizza"  price="3 lkr" />
                    <StatCard name="Chicken pizza"  category="Pizza"  price="3 lkr"/> */}
      

                    {items.map((item, index) => (
                        <StatCard
                            key={index}
                            id={item.id}
                            name={item.name}
                            category={item.category}
                            price={`${item.price} LKR`}
                            setItems={setItems}
                        />
                    ))}
                </motion.div>


                {/* add items model */}
                {isModalOpen && (
                    <div className="fixed flex w-full flex-col rounded-lg border border-gray-100 shadow-md inset-0 z-50 items-center justify-center bg-gray-900 bg-opacity-85">
                        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                            <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl bg-gray-100">
                                <img
                                    className="object-cover content-center"
                                    src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="modal banner"
                                />
                            </div>

                            <h5 className="tracking-tight mt-4 mb-3 text-slate-900">Add New Item</h5>


                            {/* Content */}
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    name='name'
                                    placeholder="Enter item name"
                                    value={newItem.name}
                                    className="text-xl text-black w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={handleInputChange}
                                />
                                {/* selector for catagories */}
                                <label className="block text-xl text-gray-400 mb-2">Select item category</label>
                                <select
                                    name='category'
                                    className="text-xl text-black w-full px-3 py-2 border rounded-lg focus:outline-none"
                                    placeholder="Select item category"
                                    value={newItem.category}
                                    onChange={handleInputChange}
                                >
                                    <option value="Pizza">Pizza</option>
                                    <option value="Topping">Topping</option>
                                    <option value="Beverage">Beverage</option>
                                </select>
                                <input
                                    type="number"
                                    name='price'
                                    placeholder="Enter item price (LKR)"
                                    value={newItem.price}
                                    className="text-xl text-black w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={handleInputChange}
                                />
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-end mt-6 space-x-4">
                                <button
                                className="flex text-xl items-center justify-center rounded-md bg-gray-200 px-5 py-2.5 text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                onClick={() => setIsModalOpen(false)}
                                >
                                Cancel
                                </button>
                                <button
                                className="flex text-xl items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                                onClick={() => {
                                    alert('Item saved!');
                                    setIsModalOpen(false);
                                    addItem();
                                }}
                                >
                                Save
                                </button>
                            </div>
                        </div>
                    </div>)}
            </main>
        </div>
    );
};

export default ItemManagement;