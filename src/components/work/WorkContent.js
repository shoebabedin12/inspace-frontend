import React from "react";
import { Link } from "react-router-dom";

const WorkContent = ({ categoryData, base_Url }) => {
  if (!Array.isArray(categoryData)) {
    // Handle the case when categoryData is not an array
    return <p>No data available.</p>;
  }
  return (
    <>
      <div className="work-scroll">
        <div className="row">
          {categoryData.map((item) => (
            <div className="col-lg-3 mb-4" key={item.name}>
              <Link to={`/work-details/${item.id}`}>
                <div className="tabs-content">
                  <img
                    src={`${base_Url}/images/${item.image_01}`}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                  <div className="content">
                    <p>{item.name}</p>
                  </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkContent;
