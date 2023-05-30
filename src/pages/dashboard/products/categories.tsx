import Breadcrumbs from "@/components/analytics/Breadcrumb ";
import ButtonPrint from "@/components/common/ButtonPrint";
import Inputdata from "@/components/common/Inputdata";
import Search from "@/components/common/Search";
import Seo from "@/components/common/seo";
import Image from "next/image";
import Imagecamero from "../../../../public/assets/image/Status.png";
// import AddImage from "@/components/products/AddImage";
// import Breadcrumbs from "@/components/products/Breadcrumb ";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";

function Categories() {
  let router = useRouter();
  let url = router.route.slice(10).replace("/products", "");
  let data = "";
  if (!url) {
    data = "addproducts";
  } else {
    url = url.replace("/", "");
    data = url;
  }
  const [width, setWidth] = useState<number>(1400);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    console.log(width);
    // don't forget to remove the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return (
    <>
      <Seo pageTitle="categories" />
      <div className={width < 740 ? "m-1" : "m-5"}>
        {/* <Breadcrumbs data={data} mainnav="products" /> */}
        <Breadcrumb data={data} mainnav="products" maintwo="" />
        {width < 995 ? (
          <>
            <Search width="w-100" />
            <div className="w-100">
              <div className="styletoaddphoto row align-items-center justify-content-evenly my-5">
                <div
                  className="col-md-6 col-lg-6 col-sm-12"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingBottom: "35px",
                  }}
                >
                  <Image src={Imagecamero} alt="" />
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12 ">
                  <Inputdata
                    name="categorynumber"
                    desc="Please Enter Category number"
                    title="Category Number"
                  />
                  <Inputdata
                    name="categoryname"
                    desc="Please Enter category name"
                    title="Category name"
                  />
                </div>
              </div>
              <ButtonPrint data="Add" />
            </div>
          </>
        ) : (
          <>
            <Search width="w-40" />
            <div className="w-75">
              <div className="styletoaddphoto row align-items-center justify-content-evenly my-5">
                <div
                  className="col-md-6 col-lg-6 col-sm-12"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingBottom: "35px",
                  }}
                >
                  <Image src={Imagecamero} alt="" />
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12 ">
                  <Inputdata
                    name="categorynumber"
                    desc="Please Enter Category number"
                    title="Category Number"
                  />
                  <Inputdata
                    name="categoryname"
                    desc="Please Enter category name"
                    title="Category name"
                  />
                </div>
              </div>
              <ButtonPrint data="Add" />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Categories;
