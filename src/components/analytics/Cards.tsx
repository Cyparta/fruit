import React, { use, useEffect, useState } from "react";
import { MdLocalGroceryStore, MdOutlineNoteAlt } from "react-icons/md";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import {
  analyticsdata,
  analyticsinterface,
  orderdata,
  revenuedata,
  taxesdata,
} from "@/data/analyics";
import { BiMoneyWithdraw } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { clickcard } from "@/features/analytics/analyticsSlice";
import Chart from "../common/Chart";
import {
  dataanalytics,
  ordernalytics,
  revenuedatamonth,
  taxesanalytics,
} from "@/data/datatoanalytics";
import Icontocard from "./Icontocard";
import Icontoorders from "./Icontoorders";
import Icontotax from "./Icontotax";
import iconclick from "../../../public/assets/image/shapeclick.svg";
import iconclickwhite from "../../../public/assets/image/shapeclickwhite.svg";

import iconmenu from "../../../public/assets/image/Frame.svg";
import iconmenuwhite from "../../../public/assets/image/Framewhitemoney.svg";

import iconnote from "../../../public/assets/image/Framefruit.svg";
import iconnotewhite from "../../../public/assets/image/Framewhitenote.svg";

import Image from "next/image";
function Cards({ title }: { title: string }) {
  let { name } = useSelector((state: any) => state.analytics);
  let [result, setresult] = useState([] as analyticsinterface[]);
  let [chartresult, setcharresult] = useState([] as any[]);
  let [click, setclick] = useState(false);
  let [idele, setidele] = React.useState(0);
  function onclickofproduct(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: number
  ) {
    if ((e.target as HTMLDivElement).querySelector("img")) {
      (e.target as HTMLDivElement).classList.toggle("iconstylebackgroundgreen");
      const iconstyleremovecolor = document.querySelectorAll(
        "img.iconstylebackgroundgreen"
      );
      const items = document.getElementsByClassName("card");
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        item.classList.remove("cardstyle");
      }
      for (let i = 0; i < iconstyleremovecolor.length; i++) {
        const iconstyleremovecol = iconstyleremovecolor[i];
        iconstyleremovecol.classList.remove("iconstylebackgroundgreen");
      }
      (e.target as HTMLDivElement).parentElement?.classList.toggle("cardstyle");
      (e.target as HTMLDivElement)
        .querySelector("img")
        ?.classList.add("iconstylebackgroundgreen");
      if (e.target) {
        setidele(id);
      } else {
        setidele(idele);
      }
    }
  }
  useEffect(() => {
    if (name === "revenue") {
      setcharresult(revenuedatamonth);
      setresult(revenuedata);
    } else if (name === "orders") {
      setcharresult(ordernalytics);
      setresult(orderdata);
    } else if (name === "taxes") {
      setcharresult(taxesanalytics);
      setresult(taxesdata);
    } else if (name === "analytics") {
      setcharresult(dataanalytics);

      setresult(analyticsdata);
    } else {
      setcharresult(dataanalytics);

      setresult(analyticsdata);
    }
  }, [result, name]);
  return (
    <>
      <div className="row stylecolumn">
        {result.map((ele, index) => {
          return (
            <div
              className={
                name === "revenue"
                  ? "col-sm-12 col-md-6 col-lg-4"
                  : name === "orders"
                  ? "col-sm-12 col-md-6 col-lg-3"
                  : name === "taxes"
                  ? "col-sm-12 col-md-6 col-lg-3"
                  : "col-sm-12 col-md-6 col-lg-4"
              }
              key={index}
            >
              <div
                className="card my-3 "
                id="card"
                onClick={(e) => onclickofproduct(e, ele.id)}
              >
                <div className="card-body d-flex align-items-start justify-content-between">
                  <>
                    <div>
                      <h3 className="card-title">{ele.number}</h3>
                      <p className="card-text">{ele.title}</p>
                      <span className="colorgray">{ele.discount}</span>
                    </div>
                    <span>
                      {name === "revenue" ? (
                        <Icontocard ele={ele} idele={idele} />
                      ) : name === "orders" ? (
                        <Icontoorders ele={ele} idele={idele} />
                      ) : name === "taxes" ? (
                        <Icontotax ele={ele} idele={idele} />
                      ) : ele.id === 1 ? (
                        <Image
                          src={idele === 1 ? iconclickwhite : iconclick}
                          alt=""
                          className={"iconstyle fs-3 p-2"}
                        />
                      ) : ele.id === 2 ? (
                        <Image
                          src={idele === 2 ? iconmenuwhite : iconmenu}
                          alt=""
                          className={"iconstyle fs-3 p-2"}
                        />
                      ) : ele.id === 3 ? (
                        <Image
                          src={idele === 3 ? iconnotewhite : iconnote}
                          alt=""
                          className={"iconstyle fs-3 p-2"}
                        />
                      ) : (
                        ""
                      )}
                    </span>
                  </>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" mt-5">
        {idele ? (
          chartresult
            .filter((ele) => ele.id === idele)
            .map((ele, index) => {
              return (
                <Chart
                  data={ele.data}
                  title={
                    name === "revenue"
                      ? "revenue"
                      : name === "orders"
                      ? "orders"
                      : name === "taxes"
                      ? "taxes"
                      : "analyics"
                  }
                  key={index}
                />
              );
            })
        ) : (
          <Chart data={dataanalytics[0].data} title={title} key={0} />
        )}
      </div>
    </>
  );
}

export default Cards;
