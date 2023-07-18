import { useEffect } from "react";
import TabGroup from "../components/TabGroup";

export default function Results() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://cse.google.com/cse.js?cx=613ed320c8f3c4899";
    script.async = true;

    document.body.appendChild(script);
  });

  return (
    <>
      <TabGroup shouldShow={false} />

      {/* For the search results */}
      <div className="gcse-searchresults-only"></div>
    </>
  );
}
