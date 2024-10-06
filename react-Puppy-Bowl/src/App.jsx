import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useEffect } from "react";
import { getAllPuppys } from "./API";
import PuppyCard from "./components/puppyCard";
import "./App.css";

function App() {
  const [puppy, setPuppy] = useState([]);

  useEffect(() => {
    async function fetchAllPuppys() {
      const puppys = await getAllPuppys();
      setPuppy(puppys);
    }
    fetchAllPuppys();
  }, []);
  return (
    <div>
      {puppy.map((puppys) => {
        return <PuppyCard key={puppys.id} puppy={puppys} />;
      })}
    </div>
  );
}
export default App;
