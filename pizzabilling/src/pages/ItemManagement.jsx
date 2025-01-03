import React, { useState } from 'react';

const ItemManagement = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ name: '', price: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewItem({ ...newItem, [name]: value });
    };

    const addItem = () => {
        setItems([...items, newItem]);
        setNewItem({ name: '', price: '' });
    };

    return (
        <div>
            <h1>Item Management</h1>
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Item Name"
                    value={newItem.name}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="price"
                    placeholder="Item Price"
                    value={newItem.price}
                    onChange={handleInputChange}
                />
                <button onClick={addItem}>Add Item</button>
            </div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemManagement;