import Search from "@/components/common/Search";
import Seo from "@/components/common/seo";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import markting from "../../../../public/assets/image/markting/1.png";
import markting2 from "../../../../public/assets/image/markting/2.png";
import { default as NextImage } from "next/image";
import Select from "@/components/common/Select";
import { productsNav } from "@/data/products";
import dashed from "../../../../public/assets/image/markting/dashed.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputControl from "@/components/common/inputControl";
import AddImage from "@/components/products/AddImage";
import Inputdata from "@/components/common/Inputdata";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Crumbs } from "@/data/crumbs";
import { useDispatch, useSelector } from "react-redux";
import Table from "@/components/common/Table";
import { marketingAnalysics, marketingdata } from "@/data/marketing";
import { breadcrumdsname, mainnav } from "@/features/marketing/marketingSlice";
import Imagecamero from "../../../../public/assets/image/Status.png";
import ButtonPrint from "@/components/common/ButtonPrint";
import Breadcrumb from "@/components/common/Breadcrumb";
import imageadd from "../../../../public/assets/image/Coloricons.svg";

const data: Crumbs[] = [
  { title: "marketing", to: "", active: false },
  { title: "Ads", to: "", active: true },
];

function Index() {
  const [show, setShow] = useState(false);
  let dispatch = useDispatch();
  let [imageref, setImageSrc] = useState<any>(Imagecamero);
  let [image, setImages] = useState<any[]>([]);

  const handleCloseandadd = () => {
    // setImageSrc()
    if (imageref) {
      setImages([...image, imageref]);
    }
    console.log(image);
    setShow(!show);
  };
  const handleClose = () => setShow(!show);
  const handleShow = () => setShow(true);
  let router = useRouter();

  let url = router.route.slice(10).replace("/marketing", "");
  let dataurl = "";
  if (!url) {
    dispatch(breadcrumdsname("marketing"));
    dispatch(mainnav("marketing"));
    dataurl = "";
  } else {
    dispatch(breadcrumdsname(url));
    dispatch(mainnav("marketing"));
    dataurl = url;
  }
  const [width, setWidth] = useState<number>(1400);
  let [absimage, setabsimage] = useState<string[]>([]);
  let result = useSelector((state: any) => state.marketing);
  console.log(result);
  useEffect(() => {
    dispatch(mainnav("marketing"));
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    console.log(width);
    // don't forget to remove the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  let {
    canPreviousPage,
    canNextPage,
    previousPage,
    nextPage,
    gotopage,
    pageOptions,
  } = useSelector((state: any) => state.table);
  function handleimagechange(e: any) {
    const reader = new FileReader();
    const file = (e.target as any).files[0];
    const fileName = file?.name;
    reader.onload = (e) => {
      const image = new Image();
      if (e.target?.result) {
        console.log(e.target?.result);
        image.src = e.target?.result as string;
        setImageSrc(image.src);
      }
    };
    reader.readAsDataURL(file);
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="marketing">
      <div className="m-5">
        <Seo pageTitle="marketing" />
        <Breadcrumb data={dataurl} mainnav="marketing" maintwo="Abs" />
        {width < 995 ? <Search width="w-100" /> : <Search width="w-40" />}
        <div className="">
          <h3 className="colorblue mb-3 mt-5">Advertising spaces</h3>
          <div className="row gap-4">
            <div className="add-image col-md-3">
              {/* <img src={dashed} alt="add"/> */}
              <div className="styletoborder" onClick={handleShow}>
                <NextImage
                  src={imageadd}
                  alt="markting"
                  style={{ width: "18%" }}
                />
                <p style={{ color: "#718096" }}>Create New Ad</p>
              </div>
            </div>
            {/* <Slider {...settings}> */}
            {image.map((ele: String, index: number) => {
              return (
                <div className="col-md-3 styleimageads" key={index}>
                  <NextImage
                    src={ele as any}
                    width={200}
                    height={200}
                    alt="markting"
                  />
                  <p
                    className="text-center cursor-pointer delete-ad"
                    onClick={(ele) => {
                      setImages(image.filter((ele, i) => i !== index));
                    }}
                  >
                    Delete Ad
                  </p>
                </div>
              );
            })}
            {/* </Slider> */}

            {/* </Slider> */}
            <div className="col-md-3 styleimageads">
              <NextImage
                src={markting2}
                width={200}
                height={200}
                alt="markting"
              />
              <p className="text-center cursor-pointer delete-ad">Delete Ad</p>
            </div>
          </div>

          <h3 className="colorblue mt-5 mb-3">Ad Overview</h3>
          <div className="stylerow row">
            <div className="col-12 col-md-6 col-lg-6">
              <h3 className="colorblue mb-5">Ads</h3>
            </div>

            <Table
              data={marketingdata}
              columsresult={marketingAnalysics}
              selectvalue="status"
            />
          </div>

          <div className="spancolor p-2 d-flex">
            <div>
              Showing {marketingdata.length} of {marketingdata.length} Results
            </div>
            <div className="pagination d-flex w-25">
              <button
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                {"<"}
              </button>{" "}
              <span className="d-flex w-100 justify-content-evenly" style={{ cursor: "pointer" }}>
                {pageOptions.length > 0
                  ? pageOptions.map((ele: number, index: number) => (
                      <div onClick={() => gotopage(ele)} key={index}>
                        {ele + 1}
                      </div>
                    ))
                  : 1}
              </span>
              <button onClick={() => nextPage()} disabled={!canNextPage}>
                {">"}
              </button>
            </div>
          </div>

          <Modal
            show={show}
            onHide={handleClose}
            keyboard={false}
            centered
            dialogClassName="custom-modal"
          >
            <div className="row align-items-center">
              {width < 995 ? (
                <>
                  <div className="col-md-6 order-2">
                    <div className="" style={{ fontSize: "20px" }}>
                      <h3
                        className="colorblue"
                        style={{ marginBottom: "26px" }}
                      >
                        Add New Ad
                      </h3>
                    </div>

                    <div className="">
                      <Inputdata
                        name="AdTitle"
                        desc="please Enter"
                        title="Ad Title"
                        // onChange={() => console.log("hello")}
                      />
                    </div>
                    <div className="">
                      <Inputdata
                        name="AdDescription"
                        desc="please Enter"
                        title="Ad Description"
                      />
                    </div>

                    <div className="mb-3">
                      <p className="head mb-1">Ad Category</p>
                      <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={(swiper) => console.log(swiper)}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <SwiperSlide>
                          <div
                            className="ad-cate"
                            onClick={(e) => console.log(e)}
                          >
                            Cars
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="ad-cate">Electronics</div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="ad-cate">Home & Garden</div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="ad-cate">Fashion</div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="ad-cate">Sporting Goods</div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="ad-cate">Toys</div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="ad-cate">Real Estate</div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="ad-cate">Services</div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                  <div className="col-md-6 order-1 d-flex justify-content-center align-items-center">
                    <label htmlFor="image">
                      <NextImage
                        src={imageref}
                        width={305}
                        height={287}
                        alt=""
                        // style={{ width: "20%", height: "20%" }}
                      />
                    </label>
                    <input
                      type="file"
                      id="image"
                      style={{ display: "none" }}
                      onChange={
                        (e) => handleimagechange(e)
                        // console.log((e.target as HTMLImageElement).src)
                      }
                    />
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <div className="col-md-6 order-1">
                    <div className="" style={{ fontSize: "20px" }}>
                      <h3
                        className="colorblue"
                        style={{ marginBottom: "26px" }}
                      >
                        Add New Ad
                      </h3>
                    </div>

                    <div className="">
                      <Inputdata
                        name="AdTitle"
                        desc="please Enter"
                        title="Ad Title"
                      />
                    </div>
                    <div className="">
                      <Inputdata
                        name="AdDescription"
                        desc="please Enter"
                        title="Ad Description"
                      />
                    </div>

                    <div className="mb-3">
                      <p className="head mb-1">Ad Category</p>
                      <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <SwiperSlide>
                          <div className="ad-cate">Cars</div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="ad-cate">Electronics</div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="ad-cate">Home & Garden</div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="ad-cate">Fashion</div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="ad-cate">Sporting Goods</div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="ad-cate">Toys</div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="ad-cate">Real Estate</div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="ad-cate">Services</div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                  <div className="col-md-6 order-2 d-flex justify-content-center align-items-center">
                    <label htmlFor="image">
                      <NextImage
                        src={imageref}
                        // style={{ width: "20%", height: "20%" }}
                        width={305}
                        height={287}
                        alt=""
                      />
                    </label>
                    <input
                      type="file"
                      id="image"
                      style={{ display: "none" }}
                      onChange={
                        (e) => handleimagechange(e)
                        // console.log((e.target as HTMLImageElement).src)
                      }
                    />
                  </div>
                </>
              )}
            </div>
            <div className="line mt-5"></div>
            <div
              className="d-flex justify-content-around"
              style={{ padding: "27px" }}
            >
              <button
                onClick={handleCloseandadd}
                style={{
                  color: "#2C3066",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                Save
              </button>
              <button onClick={handleClose}>cancel</button>
            </div>
          </Modal>
        </div>
        <ButtonPrint data="Print" />
      </div>
    </div>
  );
}

export default Index;
