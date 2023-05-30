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
import Breadcrumb from "@/components/common/Breadcrumb";

// const data: Crumbs[] = [{ title: "users", to: "/dashboard/users", active: false },
//      { title: "profile", to: "/dashboard/profile", active: true },
// ]

const Profile = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(mainnav("profileuser"));
  }, []);
  let router = useRouter();
  let url = router.route.slice(10).replace("/profileuser", "");
  let data = "";
  if (!url) {
    data = "";
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
    <div className="profile">
      <div className="m-5">
        <Seo pageTitle="profile" />

        <Breadcrumb data={data} mainnav="profileuser" maintwo="" />

        {/*------- Search ------*/}
        {width < 995 ? <Search width="w-100" /> : <Search width="w-40" />}

        {/*------- main Section ------*/}
        <div className="stylerow">
          <h3 className="colorblue">Personal settings</h3>
          <div className="line mb-4"></div>

          <div className="d-flex flex flex-column ">
            <div className="row   flex-wrap styletouserinput">
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

            <div className="row  styletouserinput">
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

            <div className="row    styletouserinput">
              <InputControl
                text="Password"
                placeholder="Password"
                fullWidth={false}
              />
            </div>
          </div>
        </div>

        <ButtonPrint data="Edit" />
      </div>
    </div>
  );
};

export default Profile;
