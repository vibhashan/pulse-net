import { useEffect } from "react";

export default function ResultLayout() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://cse.google.com/cse.js?cx=613ed320c8f3c4899";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <>
      {/* <TabGroup /> */}

      {/* For the search box */}
      <div className="results-searchbox">
        <div className="gcse-searchbox-only"></div>
      </div>

      {/* <hr style={{ border: "1px solid #e4e4e4" }} /> */}
      {/* For the search results */}
      <div className="gcse-searchresults-only"></div>
    </>
  );
}
