import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  ReloadOutlined,
} from "@ant-design/icons";

import Dark from "../assets/images/dark.png";
import "../assets/styles/TabOps.css";
import SearchEngine from "./SearchEngine";

export default function TabOps({ shouldShow }) {
  return (
    <>
      <div className="tab-ops-wrapper">
        <div className="tab-ops-container">
          <button className="tab-ops" id="backBtn">
            <ArrowLeftOutlined />
          </button>
          <button className="tab-ops">
            <ArrowRightOutlined />
          </button>
          <button className="tab-ops" id="reloadBtn">
            <ReloadOutlined />
          </button>
        </div>
      </div>

      <hr className="divider" />

      <button className="mode-btn">
        <img src={Dark} alt="change mode" height={20} width={20} />
      </button>

      {shouldShow ? <SearchEngine /> : <></>}

      {/* 
      <SearchEngine shouldShow={shouldShow} /> */}
    </>
  );
}
