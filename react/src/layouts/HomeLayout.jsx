import SearchEngine from "../components/SearchEngine";
import TabGroup from "../components/TabGroup";
import ResultLayout from "./ResultLayout";

export default function HomeLayout() {
  // document.querySelector(".gcse-searchresults-only").innerHTML = "Hello";
  return (
    <>
      {/* <TabGroup shouldShow={true} /> */}
      {/* <TabOps /> */}
      <TabGroup />

      {/* <SearchEngine /> */}

      {window.location.href.includes("?") ? <ResultLayout /> : <SearchEngine />}
    </>
  );
}
