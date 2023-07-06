import React from "react";

const PeopleContent = ({ categoryData, base_Url }) => {
  if (!Array.isArray(categoryData)) {
    // Handle the case when categoryData is not an array
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="alert alert-primary" role="alert">
            No data available.
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="people-scroll">
      <div className="row">
        {categoryData.length > 0 ? (
          categoryData.map((item) => (
            <div className="col-lg-3 mb-4" key={item.name}>
              <div className="tabs-content">
                <figure>
                  <img
                    src={`${base_Url}/uploads/${item.image}`}
                    alt=""
                    className="img-thumbnail"
                  />
                </figure>
                <div className="content">
                  <h2>{item.name}</h2>
                  {/* <p>{item.description}</p> */}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-lg-12 text-center">
            <div className="alert alert-primary" role="alert">
            No data available.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PeopleContent;
