import { useEffect } from "react";
import Logo from "../assets/images/logo.png";
import "../assets/styles/SearchEngine.css";

export default function SearchEngine() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://cse.google.com/cse.js?cx=613ed320c8f3c4899";
    script.async = true;

    document.body.appendChild(script);
  });

  return (
    <>
      <div className="main-wrapper">
        <div style={{ display: "inline" }}>
          <div className="browser-name">PULSE NET</div>
          <div className="browser-slogan">
            Experience lightening fast searches!
          </div>
        </div>
        <img className="browser-logo" src={Logo} height={98} width={112} />
      </div>

      {/* For the search box */}
      <center
        style={{
          marginTop: "20px",
          position: "relative",
        }}
      >
        <div className="gcse-searchbox-only"></div>
      </center>

      {/* For the search results */}
      {/* <div className="gcse-searchresults"></div> */}
    </>
  );
}
