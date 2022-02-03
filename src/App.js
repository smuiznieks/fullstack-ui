import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // let [data, setData] = useState();

  // TO DO: Update with correct endpoint
  useEffect(() => {
    fetch("https://my-fancy-backend.herokuapp.com/users")
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, []);

  return <div className="App"></div>;
}

export default App;
