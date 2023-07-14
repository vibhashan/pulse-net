import { useState, useEffect } from "react";
import TabGroup from "./components/TabGroup";
import "./App.css";

export default function App() {
  return (
    <>
      <TabGroup />
      {/* For the search box */}
      <div className="gcse-searchbox"></div>

      {/* For the search results */}
      <div className="gcse-searchresults"></div>

      
    </>
  );
}
