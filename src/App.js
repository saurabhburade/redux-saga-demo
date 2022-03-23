import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch()
  const [users, setUsers] = useState([]);
  useEffect(() => {
    dispatch({ type: "FETCH_DATA_INIT" });
  }, []);
  return (
    <div className="App bg-blue-500">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
