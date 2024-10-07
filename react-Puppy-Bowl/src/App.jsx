import { useState } from "react";
import { useEffect } from "react";
import { getAllPuppys } from "./API";
import SinglePuppy from "./components/SinglePuppy";
import { Route, Routes, useNavigate } from "react-router-dom";
import FetchPups from "./FetchPups";
import "./App.css";

function App() {
  const [puppy, setPuppy] = useState([]);
  const [singlePup, SetSinglePup] = useState(null);

  return (
    <>
      {singlePup ? (
        <SinglePuppy singlePup={singlePup} SetSinglePup={SetSinglePup} />
      ) : (
        <FetchPups setPuppy={setPuppy} puppy={puppy} />
      )}
      <Routes>
        <Route />
        <Route />
        <Route path="/:id" element={<SinglePuppy />} />
      </Routes>
    </>
  );
}
export default App;
