import "./App.scss";
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/hello");
      const json = await response.json();
      setMessage(json.data);
    };

    fetchData().catch(console.error);
  }, []);
  return <div className="App">{message}</div>;
}

export default App;
