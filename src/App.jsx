import React from "react";

const Button = (props) => {
  const { children = "default", variant = "bg-black" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

const Header = () => {
  return (
    <header className="bg-green-600 text-white p-4 text-center w-full">
      <h1 className="text-2xl font-bold">Selamat Datang Di Web Saya</h1>
    </header>
  );
};

function App() {
  return (
    <div className="flex flex-col justify-center bg-blue-600 min-h-screen items-center">
     
      <Header />

      <div className="flex gap-x-3 mt-6">
        <Button variant="bg-blue-700">Login</Button>
        <Button variant="bg-slate-700">Logout</Button>
        <Button>Selvi Desti Riyani</Button>
      </div>
    </div>
  );
}

export default App;
