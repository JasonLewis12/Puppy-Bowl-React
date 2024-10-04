import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import PuppyList from "./components/puppyList";
import "./App.css";

function App() {
  const [puppy, setPuppy] = useState(null);

  return (
    <div>
      <PuppyList puppy={puppy} setpuppy={setPuppy} />
    </div>
  );
}

export default App;
