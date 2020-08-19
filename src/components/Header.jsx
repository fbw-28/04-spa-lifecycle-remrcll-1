import React from "react";

export default function Header(props) {
  return (
    <div>
      <header   style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "5vh",
        padding: "20px"
      }}>
        <h1 style={{margin: "0"}}>User search</h1>
        <div style={{justifyContent: "flex-end" }}>
          <span onClick={()=>props.switchPage("search")}>Search || </span>
          <span onClick={()=>props.switchPage("about")}>&nbsp;About</span>
        </div>
      </header>
    </div>
  );
}
