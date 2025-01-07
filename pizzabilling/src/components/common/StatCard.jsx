import React, {useState} from 'react'
import { handleDeleteItem } from '../../controllers/ItemController';

const StatCard = ({id, name, category, price, setItems}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [confirmDelModalOpen, setConfirmDelModalOpen] = useState(false);
    const [newItem, setNewItem] = useState({ name: '', category: 'Pizza', price: ''});
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewItem({ ...newItem, [name]: value });
    };

    const deleteItem = (id) => {
        setNewItem({ name: '', category: '', price: 0});
        
        handleDeleteItem(id, setItems);
        setConfirmDelModalOpen(false);
    };

    return (
        <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                <img className="object-cover" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
                {/* category */}
                <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{category}</span>
            </a>
            <div className="mt-4 px-5 pb-5">
                <a href="#">
                    {/* item name */}
                    <h5 className="text-xl tracking-tight text-slate-900">{name}</h5>
                </a>
                <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                        {/* price */}
                        <span className="text-3xl font-bold text-slate-900">{price}</span>
                    </p>
                    <div className="flex space-x-2">
                        {/* edit icon */}
                    <button className="flex items-center justify-center rounded-md bg-gray-200 p-2 text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                     onClick={() => setIsModalOpen(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L8 9.172V11h1.828l6.586-6.586a2 2 0 000-2.828zM7 12v2h2l6.586-6.586-2-2L7 12zM4 14v2h2v-2H4z" />
                        </svg>
                    </button>
                    {/* delete icon */}
                    <button className="flex items-center justify-center rounded-md bg-gray-200 p-2 text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                     onClick={() => setConfirmDelModalOpen(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 5a1 1 0 011-1h8a1 1 0 011 1v1h4a1 1 0 011 1v1a1 1 0 01-1 1h-1v9a2 2 0 01-2 2H7a2 2 0 01-2-2v-9H4a1 1 0 01-1-1V6a1 1 0 011-1zm2 2v9h8v-9H7z" clipRule="evenodd" />
                        </svg>
                    </button>
                    </div>
                    
                </div>
                <a href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                Add to cart</a>
            </div>
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
                             placeholder={name}
                             value={newItem.name}
                             className="text-xl text-black w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                             onChange={handleInputChange}
                             ref={(input) => input && input.focus()}
                         />
                         {/* selector for catagories */}
                         <label className="block text-xl text-gray-400 mb-2">Select item category</label>
                         <select
                             name='category'
                             className="text-xl text-black w-full px-3 py-2 border rounded-lg focus:outline-none"
                             placeholder={category}
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
                             placeholder={price}
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
             </div>        
            )}
            {confirmDelModalOpen && (
                <div className="fixed flex w-full flex-col rounded-lg border border-gray-100 shadow-md inset-0 z-50 items-center justify-center bg-gray-900 bg-opacity-85">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                        <h5 className="tracking-tight mt-4 mb-3 text-slate-900">Are you sure you want to delete?</h5>
                        <div className="flex justify-end mt-6 space-x-4">
                            <button
                            className="flex text-xl items-center justify-center rounded-md bg-gray-200 px-5 py-2.5 text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            onClick={() => setConfirmDelModalOpen(false)}
                            > Cancel
                            </button>
                            <button
                            className="flex text-xl items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                            onClick={() => {
                                alert('Item deleted!');
                                setConfirmDelModalOpen(false);
                                deleteItem(id);
                            }}
                            > Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default StatCard
