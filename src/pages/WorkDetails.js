import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import ReactPlayer from "react-player";
import { Navigation, Pagination } from "swiper";

const WorkDetails = ({ props }) => {
  const params = useParams();
  const base_Url = process.env.REACT_APP_LIVE_URL;
  const [category, setCategory] = useState({});
  const [sectionBg, setSectionBg] = useState({});
  const [isOpen, setIsOpen] = useState(false);
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

    async function category() {
      await api
        .get(`api/project-fe`)
        .then((response) => {
          setCategory(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    category();
    getBg();
  }, []);

  let singleCategory =
    category.length > 0 &&
    category.find((item) => {
      return item.id == params.id;
    });

  console.log(singleCategory);

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   autoplay: false,
  //   autoplaySpeed: 2000,
  //   slidesToShow: 1.1,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 769,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         arrows: false
  //       }
  //     }
  //   ]
  // };

  return (
    <>
      {loading ? (
        <div className="preloader">
          <h1>INSPACE ATELIER</h1>
        </div>
      ) : (
        <div
          className="work_details"
          style={{
            backgroundImage: `url(${base_Url}/images/${sectionBg.work_bg_image})`
          }}
        >
          <div className="container">
            <div className="work-scroll">
              <div className="row">
                <div className="col-lg-3 col-12 order-2 order-lg-1">
                  <div className="work_details_left">
                    <div className="work_details_content">
                      <h4>{singleCategory.name}</h4>
                    </div>
                    <div className="work_details_content">
                      <p>
                        {singleCategory.description
                          ? singleCategory.description
                          : "Content comming soon"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-12 order-1 order-lg-2">
                 
                    <div className="col-12">
                      <Swiper
                        slidesPerView={1}
                        spaceBetween={8}
                        navigation={true}
                        pagination={{
                          clickable: true,
                          dynamicBullets: true
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                        breakpoints={{
                          640: {
                            slidesPerView: 1,
                          },
                          768: {
                            slidesPerView: 1,
                          },
                          1024: {
                            slidesPerView: 1.1
                          }
                        }}
                      >
                        {singleCategory.image_01 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_01}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_02 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_02}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_03 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_03}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_04 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_04}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_05 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_05}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_06 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_06}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_07 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_07}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_08 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_08}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_09 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_09}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_10 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_10}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_11 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_11}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_12 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_12}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_13 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_13}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_14 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_14}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_15 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_15}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_16 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_16}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_17 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_17}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_18 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_18}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_19 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_19}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_20 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_20}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_21 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_21}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_22 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_22}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_23 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_23}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_24 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_24}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_25 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_25}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_26 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_26}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_27 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_27}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_27 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_27}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_28 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_28}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_29 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_29}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_30 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_30}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_31 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_31}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_32 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_32}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_33 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_33}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_34 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_34}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_35 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_35}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_36 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_36}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_37 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_37}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_38 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_38}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_39 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_39}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_40 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_40}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_41 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_41}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_42 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_42}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_43 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_43}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_44 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_44}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_45 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_45}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_46 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_46}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_47 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_47}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_48 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_48}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_49 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_49}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.image_50 !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <img
                                src={`${base_Url}/images/${singleCategory.image_50}`}
                                alt=""
                                className="img-fluid work_gellary_item"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                        {singleCategory.video !== null ? (
                          <SwiperSlide>
                            <div className="work_gellary">
                              <ReactPlayer
                                url={`${singleCategory.video}`}
                                controls={true}
                                height={350}
                                onPlay={() => console.log("video is playing")}
                                onPause={() => console.log("video is paused")}
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )}
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )}
    </>
  );
};

export default WorkDetails;
