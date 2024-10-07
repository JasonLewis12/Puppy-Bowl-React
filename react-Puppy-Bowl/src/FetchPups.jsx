import { useEffect } from "react";
import { getAllPuppys } from "./API";
import PuppyCard from "./components/puppyCard";
import "./App.css";

export default function FetchPups({ setPuppy, puppy }) {
  useEffect(() => {
    async function fetchAllPuppys() {
      const puppys = await getAllPuppys();
      setPuppy(puppys);
    }
    fetchAllPuppys();
  }, []);
  return (
    <>
      {puppy.map((pup) => {
        <PuppyCard key={pup.id} puppy={pups} />;
      })}
    </>
  );
}
