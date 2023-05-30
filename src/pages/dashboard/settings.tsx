import Search from "@/components/common/Search";
import Seo from "@/components/common/seo";
// import Breadcrumbs from '@/components/products/Breadcrumb ';
import Breadcrumbs from "@/components/analytics/Breadcrumb ";
import Tabs from "@/components/settings/tabs";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ButtonPrint from "@/components/common/ButtonPrint";
import Breadcrumb from "@/components/common/Breadcrumb";
import { useDispatch } from "react-redux";
import { mainnav } from "@/features/analytics/analyticsSlice";
function Settings() {
  const [width, setWidth] = useState<number>(1400);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(mainnav("settings"));
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
      <div className="settings">
        <Seo pageTitle="Products" />
        <div className="m-5">
          <Link
            href="/dashboard/settings"
            style={{
              fontSize: "12px !important",
              textDecoration: "none",
              margin: "20px 0px",
              display: "inline-block",
              fontWeight: "400",
              color: "#121212",
            }}
          >
            Settings
          </Link>
          {/*------- Search ------*/}
          {width < 995 ? <Search width="w-100" /> : <Search width="w-40" />}

          {/*------- main Section ------*/}
          <div>
            <h3 className="colorblue mt-4">Settings</h3>
            <div className="line mb-4"></div>
            <Tabs />
          </div>
          <ButtonPrint data="save" />
        </div>
      </div>
    </>
  );
}

export default Settings;
