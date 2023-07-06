import React from "react";

const PeopleTabs = ({ tabs, TabCat }) => {
  return (
    <div className="people_tabs">
      <button onClick={() => TabCat("all")}>All</button>
      {tabs.length > 0 &&
        tabs.map((item) => (
          <button key={item.id} id={item.id} onClick={() => TabCat(item.id)}>
            {item.name}
          </button>
        ))}
    </div>
  );
};

export default PeopleTabs;
