import React from "react";
import CryptoTable from "./component/CryptoTable";

function App() {
  return (
    <div className="min-h-screen bg-white ">
      <h1 className="text-3xl font-bold text-center p-6">Crypto Assets</h1>
      <CryptoTable />
    </div>
  );
}

export default App;
