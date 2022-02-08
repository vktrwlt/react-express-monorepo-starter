import "./App.scss";
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/message");
      const json = await response.json();
      setMessage(json.data);
    };

    fetchData().catch(console.error);
  }, []);
  return (
    <div className="App">
      <p>hello from React</p>
      <p>{message}</p>
    </div>
  );
}

export default App;
