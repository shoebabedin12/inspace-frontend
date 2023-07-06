import axios from "axios";
import React, { useEffect, useState } from "react";
import WorkContent from "../components/work/WorkContent";
import WorkTabs from "../components/work/WorkTabs";

const Work = () => {
  const base_Url = process.env.REACT_APP_LIVE_URL;
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

    async function getBg() {
      await api
        .get(`api/basic-fe`)
        .then((response) => {
          setSectionBg(response.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    async function getUser() {
      await api
        .get(`api/w-cat`)
        .then((response) => {
          setDataCat(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    async function category() {
      await api
        .get(`api/project-fe`)
        .then((response) => {
          setCategory(response.data);
          setLoading(false)
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getBg();
    getUser();
    category();
  }, []);

  useEffect(() => {
    // Set the initial filter state to the entire category array
    setFilter(category);
  }, [category]);

  const TabCat = (data) => {
    if (data === "all") {
        setFilter(category);
      } else {
        const filteredData = category.filter(item => item.cat_id === data);
        setFilter(filteredData);
      }
  };




  return (
    <>
      {loading ?
      <div className="preloader">
        <h1>INSPACE ATELIER</h1>
      </div>
      :<div
        className="work"
        style={{
          backgroundImage: `url(${base_Url}/images/${sectionBg.work_bg_image})`
        }}
      >
        <div className="container">
          <div className="practise-scroll">
            <div className="row">
              <div className="col-lg-3">
                <WorkTabs tabs={dataCat} TabCat={TabCat}/>
              </div>
              <div className="col-lg-9">
                <WorkContent categoryData={filter} base_Url={base_Url} />
              </div>
            </div>
          </div>
        </div>
      </div>}
    </>
  );
};

export default Work;
