import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await result.json();
      console.log({ data });
    };
    fetchData();
  }, []);
  return (
    <div className="App bg-blue-500">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
