import { useState, useEffect } from "react";
import TabGroup from "./components/TabGroup";

let id = 1;

export default function App() {
  // Create a script and append it the document
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://cse.google.com/cse.js?cx=613ed320c8f3c4899";
    script.async = true;

    document.body.appendChild(script);
  });

  const [tabs, setTabs] = useState([
    { id: "abc", title: "New Tab", active: true },
  ]);

  const addTab = () => {
    id++;
    setTabs([
      ...tabs,
      {
        id: `tab-id-${id}`,
        title: `New Tabs ${id}`,
        favicon: tabs.length % 2 ? fb : google,
      },
    ]);
  };

  const closeAll = () => setTabs([]);

  return (
    <>
      <TabGroup />

      {/* For the search box */}
      <div class="gcse-searchbox"></div>

      {/* For the search results */}
      <div class="gcse-searchresults"></div>
    </>
  );
}
