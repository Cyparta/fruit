import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import Appearpart from "./Appearpart";
import {
  MarketingNav,
  analyticsNav,
  productsNav,
  usersNav,
} from "@/data/productsnav";
import { AiOutlineMenu, AiOutlineSetting } from "react-icons/ai";
import { useRouter } from "next/router";
function Nav() {
  let [click, setclick] = React.useState(false);
  let router = useRouter();
  function onclickofproduct(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    result: string
  ) {
    let element = (e.target as HTMLAnchorElement).parentElement;

    if (element?.getAttribute("id") === "overview") {
      document
        .getElementById("overviewicon")
        ?.classList.toggle("iconstylebackgroundgreen");
      document
        .getElementById("settingsicon")
        ?.classList.remove("iconstylebackgroundgreen");
    } else {
      document
        .getElementById("settingsicon")
        ?.classList.toggle("iconstylebackgroundgreen");
      document
        .getElementById("overviewicon")
        ?.classList.remove("iconstylebackgroundgreen");
    }
    Array.from(document.getElementsByClassName("stylecolorblue")).map((ele) => {
      ele.classList.remove("stylecolorblue");
    });

    element?.classList.toggle("stylecolorblue");
  }
  function onclickbuttom(result: string) {
    router.push(result);
  }
  return (
    <>
      <ul className="p-0">
        <li>
          <Link
            href="/"
            className="d-flex align-items-center mb-4 styletonave"
            onClick={(e) => onclickofproduct(e, "/")}
            id="overview"
          >
            <BiTimeFive
              className={
                click
                  ? "iconstyle iconstylebackgroundgreen mr-3 fs-3"
                  : "iconstyle mr-3 fs-3"
              }
              id="overviewicon"
            />
            <div className="ms-2 fs-5">Overview</div>
          </Link>
        </li>
        <li>
          <Link
            // onClick={() => onclickbuttom("/dashboard/products")
            href={"/dashboard/products"}
            className="w-100 styletonave"
          >
            <Appearpart data={productsNav} name="Products" />
          </Link>
        </li>
        <li>
          <Link
            // onClick={() => onclickbuttom("/dashboard/analytics")}
            href={"/dashboard/analytics"}
            className=" w-100 styletonave"
          >
            <Appearpart data={analyticsNav} name="Analytics" />
          </Link>
        </li>
        <li>
          <Link
            // onClick={() => onclickbuttom("/dashboard/marketing")}
            href={"/dashboard/marketing"}
            className=" w-100 styletonave"
          >
            <Appearpart data={MarketingNav} name="Marketing" />
          </Link>
        </li>
        <li>
          <Link href={"/dashboard/profileuser"} className=" w-100 styletonave">
            <Appearpart data={usersNav} name="profileuser" />
          </Link>
        </li>
        <li>
          <Link
            href={"/dashboard/settings"}
            // onClick={() => onclickbuttom("/dashboard/settings")}
            className="d-flex align-items-center mb-3  w-100 styletonave"
            onClick={(e) => onclickofproduct(e, "/dashboard/settings")}
            id="settings"
          >
            <AiOutlineSetting
              className={
                click
                  ? "iconstyle iconstylebackgroundgreen mr-3 fs-3"
                  : "iconstyle mr-3 fs-3"
              }
              id="settingsicon"
            />
            <div className="ms-2 fs-5">Settings</div>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Nav;
