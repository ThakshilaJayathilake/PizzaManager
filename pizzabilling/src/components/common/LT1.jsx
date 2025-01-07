import React, { useState, useEffect } from "react";
import { animate, motion } from "framer-motion";
import { Edit, Trash2 } from "lucide-react";

import { handleGetItems } from "../../controllers/ItemController";

// DISPLAY invoices (Invoice ID, Customer Name, Total, Date)
const DATA = [
  {
    id: 1,
    customer: "John Doe",
    total: 100,
    date: "2021-07-01",
  },
  {
    id: 2,
    customer: "Jane Doe",
    total: 150,
    date: "2021-07-02",
  },
  {
    id: 3,
    customer: "John Doe",
    total: 200,
    date: "2021-07-03",
  },
  {
    id: 4,
    customer: "Jane Doe",
    total: 250,
    date: "2021-07-04",
  },
  {
    id: 5,
    customer: "John Doe",
    total: 300,
    date: "2021-07-05",
  },
];
const ListTable = () => {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const [invoice, setInvoice] = useState({
    id: "",
    customerName: "",
    items: [],
    tax: 0,
    total: 0,
  });

  const [currItem, setCurrItem] = useState({
    itemId: "",
    quantity: 0,
    subTotal: 0,
  });

  useEffect(() => {
    handleGetItems(setItems);
    console.log(items);
  }, []);

  console.log("invoice", invoice);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCustNameChange = (e) => {
    const { name, value } = e.target;
    setInvoice({ ...invoice, [name]: value });
  };

  const handleInputChange = (index, field, value) => {
    const updatedItems = [...invoice.items];
    updatedItems[index][field] = value;
    setInvoice({ ...invoice, items: updatedItems });
  };

  const handleAddItem = () => {
    setInvoice([...invoice.items, { itemId: "", quantity: 1 }]);
  };

  const addInvoice = () => {
    alert("Invoice Created!");
    setIsModalOpen(false);
    // console.log("items", items);

    // console.log("invoice", invoice);
    // console.log("selectedItems", selectedItems);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Invoice List</h2>
      </div>
      <div>
        <div className="flex justify-end mb-4">
          <button
            className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={() => setIsModalOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h18v18H3V3z"
              />
            </svg>
            Create Invoice
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Customer ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Customer Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Total Bill
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {DATA.map((invoice1) => (
              <motion.tr key={invoice1.id} className="text-sm text-gray-100">
                <td className="px-6 py-4">{invoice1.id}</td>
                <td className="px-6 py-4">{invoice1.customer}</td>
                <td className="px-6 py-4">{invoice1.total}</td>
                <td className="px-6 py-4">{invoice1.date}</td>
                <td className="px-6 py-4">
                  <button className="mr-2">
                    <Edit size={20} />
                  </button>
                  <button>
                    <Trash2 size={20} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>

        {/* create invoice model */}
        {isModalOpen && (
          <div className="fixed flex w-full flex-col rounded-lg border border-gray-100 shadow-md inset-0 z-50 items-center justify-center bg-gray-900 bg-opacity-85">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
              <h5 className="tracking-tight mt-4 mb-3 text-slate-900">
                Create Invoice here
              </h5>

              {/* Content */}
              <div className="space-y-4">
                <input
                  type="text"
                  name="customerName"
                  placeholder="Customer name"
                  value={invoice.customerName}
                  className="text-xl text-black w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleCustNameChange}
                />

                <button
                  onClick={handleAddItem}
                  className="flex text-xl items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Add Item
                </button>

                {/* Render the dynamically added item selectors */}
                {invoice.items?.map((currItem1, index) => (
                  <div key={index} className="space-y-4">
                    {/* Item Selector */}
                    <select
                      name="itemId"
                      className="text-xl text-black w-full px-3 py-2 border rounded-lg focus:outline-none"
                      value={currItem1.itemId}
                      onChange={(e) =>
                        handleInputChange(index, "itemId", e.target.value)
                      }
                    >
                      <option value="">Select item</option>
                      {items.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>

                    {/* Quantity Input */}
                    <div className="flex items-center space-x-2">
                      <label
                        htmlFor={`quantity-${index}`}
                        className="text-lg font-medium"
                      >
                        Quantity:
                      </label>
                      <input
                        type="number"
                        id={`quantity-${index}`}
                        name="quantity"
                        className="text-xl text-black px-3 py-2 border rounded-lg focus:outline-none w-full"
                        value={currItem1.quantity || ""}
                        onChange={(e) =>
                          handleInputChange(
                            index,
                            "quantity",
                            parseInt(e.target.value, 10)
                          )
                        }
                        min="1"
                      />
                    </div>
                  </div>
                ))}
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
                    addInvoice();
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ListTable;
