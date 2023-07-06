import React from "react";

const WorkTabs = ({ tabs, TabCat }) => {


  return (
    <div className="work_tabs">
      <button onClick={() => TabCat("all")}>All</button>
      {tabs.length > 0 && tabs.map((item) => (
        <button key={item.id} id={item.id} onClick={() => TabCat(item.id)}>{item.name}</button>
      ))}
    </div>
  );
};

export default WorkTabs;
