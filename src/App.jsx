import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full">
        <Header />
      </header>
      <div className="flex flex-grow">
        <aside className="w-1/4">
          <Sidebar />
        </aside>
        <main className="w-3/4 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
