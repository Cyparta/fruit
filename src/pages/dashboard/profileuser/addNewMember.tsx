import ButtonPrint from "@/components/common/ButtonPrint";
import Search from "@/components/common/Search";
import Seo from "@/components/common/seo";

import InputControl from "@/components/common/inputControl";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Crumbs } from "@/data/crumbs";

import { useDispatch } from "react-redux";
import { mainnav } from "@/features/analytics/analyticsSlice";
import Breadcrumbs from "@/components/analytics/Breadcrumb ";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import Breadcrumbsthrid from "@/components/common/Breadcrumbthird";



const AddNewMember = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(mainnav("profileuser"));
  }, []);
  let router = useRouter();
  let url = router.route.slice(10).replace("/user", "");
  let dataurl = "";
  if (!url) {
    dataurl = "";
  } else {
    url = url.replace("/", "");

    dataurl = url;
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
    <div className="profile">
      <div className="m-5">
        <Seo pageTitle="profile" />

        {/* ------ Bread Crumb -------*/}
        {/* <Breadcrumbs data={data} /> */}
        {/* <Breadcrumbs data={dataurl} mainnav="marketing" /> */}
        <Breadcrumbsthrid
          data={dataurl}
          mainnav="profileuser"
          maintwo="All Members"
        />
        {/*------- Search ------*/}
        {width < 995 ? <Search width="w-100" /> : <Search width="w-40" />}
        {/* <Search /> */}
        <Link href={"/dashboard/profileuser"}>
          <HiArrowLeft className="styletoarrow" />
        </Link>
        {/*------- main Section ------*/}
        <div className="stylerow">
          <h3 className="colorblue">Add New member</h3>
          <div className="line mb-4"></div>

          <div className="row flex flex-column ">
            <div className="row flex-wrap   styleinput">
              <InputControl
                text="User Name"
                placeholder="Enter user name"
                fullWidth={true}
              />
              <InputControl
                text="First Name"
                placeholder="Enter first name"
                fullWidth={true}
              />
            </div>

            <div className="row flex-wrap  styleinput">
              <InputControl
                text="Last name"
                placeholder="Enter last name"
                fullWidth={true}
              />
              <InputControl
                text="Email address"
                placeholder="Member email addess"
                fullWidth={true}
              />
            </div>

            <div className="row flex-wrap  styleinput">
              <InputControl
                text="Password"
                placeholder="Password"
                fullWidth={true}
              />
              <InputControl
                text="Role"
                placeholder="Choose Role"
                fullWidth={true}
              />
            </div>

            <InputControl text="Region" placeholder="Choose Region" />
          </div>
        </div>

        <ButtonPrint data="Add" />
      </div>
    </div>
  );
};

export default AddNewMember;
