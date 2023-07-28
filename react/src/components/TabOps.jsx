import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  HomeOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import "../assets/styles/light/TabOps.css";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function TabOps() {
  // Use the useNavigate hook
  const nav = useNavigate();

  const [urlVal, setUrlVal] = useState(window.location.href);

  return (
    <>
      <div className="tab-ops-wrapper">
        <div className="tab-ops-container">
          <button className="tab-ops" id="backBtn" onClick={() => nav(-1)}>
            <ArrowLeftOutlined />
          </button>
          <button className="tab-ops" id="forwardBtn" onClick={() => nav(1)}>
            <ArrowRightOutlined />
          </button>
          <button className="tab-ops" id="reloadBtn" onClick={() => nav(0)}>
            <ReloadOutlined />
          </button>
          <button
            className="tab-ops"
            id="reloadBtn"
            onClick={() => window.location.replace("http://localhost:3000")}
          >
            <HomeOutlined />
          </button>

          <input
            id="urlBar"
            type="text"
            value={urlVal}
            readOnly
            onFocus={(e) => e.target.select()}
            onChange={(e) => setUrlVal(e.target.value)}
            onKeyUp={(e) => {
              e.preventDefault();
              if (e.key === "Enter") {
                if (urlVal === "") {
                } else {
                  window.location.replace("http://localhost:3000/?q=" + urlVal);
                }
              }
            }}
          />
        </div>
      </div>

      <hr className="divider" />

      <button id="mode-button" className="mode-btn">
        <img
          src="/images/dark.png"
          alt="change mode"
          height={20}
          width={20}
          id="mode-button-icon"
        />
      </button>
    </>
  );
}
