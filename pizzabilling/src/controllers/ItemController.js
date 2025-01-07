import ItemModel from '../models/ItemModel';

export const handleGetItems = async (setItems) => {
    try {
        const items = await ItemModel.getItems();
        // map items in required format
        const formattedItems = items.map((item) => ({
            id: item.ID,
            name: item.name,
            category: item.category,
            price: item.price,
        }));
        
        setItems(formattedItems);
    } catch (error) {
        console.error('Error when fetch items', error);
    }
};


export const handleAddItem = async (item, setItems) => {
    try {
        await ItemModel.addItem(item);

        handleGetItems(setItems);
        // const updatedItems = await ItemModel.getItems();
        // setItems(updatedItems);
    } catch (error) {
        console.error('Error when adding item', error);
    }
};

export const handleDeleteItem = async (id, setItems) => {
    try {
        await ItemModel.deleteItem(id);

        handleGetItems(setItems);
    } catch (error) {
        console.error('Error when deleting item', error);
    }
}