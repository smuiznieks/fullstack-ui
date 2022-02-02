import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // let [data, setData] = useState();

  // TO DO: Update with correct endpoint
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, []);

  return <div className="App"></div>;
}

export default App;
