const API_URL = 'http://localhost:9001/items';

const getItems = async () => {
    const response = await fetch(API_URL);
    return response.json();
}

const addItem = async (item) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item),
    });
    return response.json();
}

const deleteItem = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete item');
    }
    const responseBody = await response.json();
    
    return responseBody;
}

const updateItem = async (id, updatedItem) => {
    console.log(updatedItem);

    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedItem),
    });
    if (!response.ok) {
        throw new Error('Failed to update item');
    }
    const responseBody = await response.json();
    
    return responseBody;
}


export default {
    getItems,
    addItem,
    deleteItem,
    updateItem,
};