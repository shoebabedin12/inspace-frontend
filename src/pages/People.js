import axios from "axios";
import React, { useEffect, useState } from "react";
import PeopleContent from "../components/people/PeopleContent";

const People = () => {
  const base_Url = process.env.REACT_APP_LOCAL_URL;
  const [data, setData] = useState({});
  const [sectionBg, setSectionBg] = useState({});
  const [category, setCategory] = useState({});
  const [dataCat, setDataCat] = useState({});
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const api = axios.create({
      baseURL: process.env.REACT_APP_LIVE_URL,
      withCredentials: true
    });

    axios
    .get(`${base_Url}/people`)
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

    async function getUser() {
      await api
        .get(`api/p-cat`)
        .then((response) => {
          setDataCat(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    async function category() {
      await api
        .get(`api/people-fe`)
        .then((response) => {
          setCategory(response.data);
          setLoading(false)
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getUser();
    category();
  }, []);

  useEffect(() => {
    // Set the initial filter state to the entire category array
    setFilter(category);
  }, [category]);

  // const TabCat = (data) => {
  //   if (data === "all") {
  //     setFilter(category);
  //   } else {
  //     const filteredData = category.filter((item) => item.cat_id === data);
  //     setFilter(filteredData);
  //   }
  // };
console.log(data);
  return (
    <>
      {loading ?
      <div className="preloader">
        <h1>INSPACE ATELIER</h1>
      </div>
      :
      <div
        className="people"
        style={{
          background: `#000`
        }}
      >
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-3">
              <PeopleTabs tabs={dataCat} TabCat={TabCat} />
            </div> */}
            <div className="col-lg-12">
              <PeopleContent categoryData={data} base_Url={base_Url}/>
            </div>
          </div>
        </div>
      </div>}
    </>
  );
};

export default People;
