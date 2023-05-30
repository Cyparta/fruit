import Link from "next/link";
import React, { useEffect, useState } from "react";
import image1 from "../../../public/assets/image/fruit.png";
import Image from "next/image";
import Nav from "./Nav";
import Seo from "../common/seo.js";
import { AiOutlineMenu } from "react-icons/ai";
import Appearpart from "./Appearpart";
import {
  MarketingNav,
  analyticsNav,
  productsNav,
  usersNav,
} from "@/data/productsnav";
import NavInresponce from "./NavInresponce";
import Search from "../common/Search";
import { CgSearch } from "react-icons/cg";

// import {styles} from "../../public/assets/scss/component/"
function Slider({ children }: { children: React.ReactNode }) {
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
      <Seo pageTitle="top fruit" />
      {width <= 895 ? (
        <>
          <div className="row  justify-content-between align-items-center">
            <div className="col-md-3 col-sm-3 col-xs-button-9">
              <button
                className="navbar-toggler tomenuicon m-4"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <AiOutlineMenu />
              </button>
            </div>
            <div className="col-md-9 col-sm-9 col-xs-9">
              <div className="input-group  styletosearch">
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="Search"
                  aria-label="search"
                  aria-describedby="basic-addon1"
                />
                <span
                  className="input-group-text border-0 bg-white"
                  id="basic-addon1"
                >
                  <CgSearch id="button-addon2" />
                </span>
              </div>
            </div>
          </div>
          <nav className="collapse m-4" id="navbarToggleExternalContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active mb-3"
                  aria-current="page"
                  href="/"
                >
                  overview
                </Link>
              </li>
              <li className="nav-item">
                <NavInresponce data={productsNav} name="Products" />
              </li>
              <li className="nav-item">
                <NavInresponce data={analyticsNav} name="Analytics" />
              </li>
              <li className="nav-item">
                <NavInresponce data={MarketingNav} name="Marketing" />
              </li>
              <li className="nav-item">
                <NavInresponce data={usersNav} name="profileuser" />
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active mb-3"
                  aria-current="page"
                  href="/dashboard/settings"
                >
                  settings
                </Link>
              </li>
            </ul>
          </nav>
        </>
      ) : (
        <>
          <div className="position-fixed styletosliderofdashboard vh-100 ">
            <Image src={image1} alt={""} style={{ marginBottom: "35px" }} />
            <Nav />
          </div>
        </>
      )}
      <main className={width > 895 ? "themainpartofdash" : ""}>{children}</main>
    </>
  );
}

export default Slider;
