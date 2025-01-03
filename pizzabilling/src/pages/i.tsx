// import React, { useState, useEffect, useRef } from "react";
// import { getInvoices, createInvoice } from "../services/api";
// import { Invoice } from "../models/Invoice";
// // import { useReactToPrint } from "react-to-print";

// // const contentRef = useRef(null);


// const InvoiceManagement: React.FC = () => {
//   const [invoices, setInvoices] = useState<Invoice[]>([]);
//   // const invoiceRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     fetchInvoices();
//   }, []);

//   const fetchInvoices = async () => {
//     const data = await getInvoices();
//     setInvoices(data);
//   };

//   // const handlePrint = useReactToPrint({
//   //   contentRef,
//   // });



//   // const { handlePrint } = useReactToPrint({
//   //   // Now we pass the ref directly inside the hook
//   //   content: () => invoiceRef.current!,
//   // });

//   return (
//     <div>
//       <h2>Invoice Management</h2>
//       <div >
//       {/* ref={contentRef} */}
//         {invoices.map((invoice) => (
//           <div key={invoice.id}>
//             <h3>Invoice #{invoice.id}</h3>
//             <p>Customer: {invoice.customerName}</p>
//             <ul>
//               {invoice.items.map((item) => (
//                 <li key={item.id}>
//                   {item.quantity} x Item {item.itemId} = ${item.subtotal}
//                 </li>
//               ))}
//             </ul>
//             <p>Tax: ${invoice.tax}</p>
//             <p>Total: ${invoice.total}</p>
//           </div>
//         ))}
//       </div>
//       {/* <button onClick={() => handlePrint()}>Print Invoice</button> */}
//     </div>
//   );
// };

// export default InvoiceManagement;
