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
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
function Nav() {
  let [click, setclick] = React.useState(false);
  let router = useRouter();
  function onclickofproduct(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
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
            <div
              className="ms-2 fs-5"
              onClick={(e) => onclickofproduct(e, "/")}
            >
              Overview
            </div>
          </Link>
        </li>
        <li>
          
            <Appearpart data={productsNav} name="Products" tolink="products"/>
          {/* </Link> */}
        </li>
        <li>
         
            <Appearpart data={analyticsNav} name="Analytics"tolink="analytics" />
        
          
        </li>
        <li>
         
            <Appearpart data={MarketingNav} name="Marketing" tolink="marketing"/>
          {/* </Link> */}
        </li>
        <li>
          {/* <Link href={"/dashboard/profileuser"} className=" w-100 styletonave"> */}
            <Appearpart data={usersNav} name="profileuser"tolink="profileuser" />
          {/* </Link> */}
        </li>
        <li>
          <Link
            href={"/dashboard/settings"}
            // onClick={() => onclickbuttom("/dashboard/settings")}
            className="d-flex align-items-center mb-3  w-100 styletonave"
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

            <div
              className="ms-2 fs-5"
              onClick={(e) => onclickofproduct(e, "/dashboard/settings")}
            >
              Settings
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Nav;
