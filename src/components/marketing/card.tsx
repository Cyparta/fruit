import React, { use, useEffect, useState } from "react";

import { analyticsinterface } from "@/data/analyics";

import { useSelector } from "react-redux";

import Chart from "../common/Chart";
import { conponsanalytics, conponsresult } from "@/data/marketingcarde";
import { CgSearchFound } from "react-icons/cg";
import { BsFillMapFill } from "react-icons/bs";
import cardcharts from "../../../public/assets/image/Groupcard.svg";
import Image from "next/image";
function Cards() {
  let { name } = useSelector((state: any) => state.marketing);
  let [result, setresult] = useState([] as analyticsinterface[]);
  let [chartresult, setcharresult] = useState(conponsanalytics as any[]);

  let [idele, setidele] = React.useState(0);
  function onclickofproduct(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: number
  ) {
    (e.target as HTMLDivElement).classList.toggle("iconstylebackgroundgreen");
    const iconstyleremovecolor = document.querySelectorAll(
      ".iconstylebackgroundgreen"
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
      .querySelector("svg")
      ?.classList.add("iconstylebackgroundgreen");
    setidele(id);
  }
  useEffect(() => {
    if (name === "coupons") {
      setcharresult(conponsanalytics);
      setresult(conponsresult);
    }
    console.log(chartresult, result, name);
  }, [result, name]);
  return (
    <>
      <div className="row">
        {result.map((ele, index) => {
          return (
            <div
              className={
                name === "revenue"
                  ? "col-sm-4"
                  : name === "orders"
                  ? "col-sm-3"
                  : name === "taxes"
                  ? "col-sm-3"
                  : "col-sm-6"
              }
              key={index}
              onClick={(e) => onclickofproduct(e, ele.id)}
            >
              <div className="card my-3" id="card">
                <div className="card-body d-flex align-items-start justify-content-between">
                  <>
                    <div>
                      <h3 className="card-title">{ele.number}</h3>
                      <p className="card-text">{ele.title}</p>
                      <span className="colorgray">{ele.discount}</span>
                    </div>
                    {ele.id === 1 ? (
                      <Image
                        src={cardcharts}
                        alt=""
                        className="iconstyle fs-3 p-2"
                      />
                    ) : ele.id === 2 ? (
                      <BsFillMapFill className="iconstyle fs-3 p-2" />
                    ) : (
                      ""
                    )}
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
                  title={"Offer valid orders"}
                  key={index}
                />
              );
            })
        ) : (
          <Chart
            data={conponsanalytics[0].data}
            title="Offer valid orders"
            key={0}
          />
        )}
      </div>
    </>
  );
}

export default Cards;
