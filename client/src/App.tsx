import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ItemManagement from "./pages/ItemManagement";
import InvoiceManagement from "./pages/InvoiceManagement";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/items">Item Management</Link>
          <Link to="/invoices">Invoice Management</Link>
        </nav>
        <Routes>
          <Route path="/items" element={<ItemManagement />} />
          <Route path="/invoices" element={<InvoiceManagement />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
