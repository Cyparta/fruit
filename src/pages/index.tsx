import ButtonPrint from "@/components/common/ButtonPrint";
import Cards from "@/components/overview/Cards";
import Netsales from "@/components/overview/Netsales";
import Search from "@/components/common/Search";
import Totalsales from "@/components/overview/Totalsales";
import React, { useState, useEffect } from "react";
import { CgSearch } from "react-icons/cg";
import { data } from "@/data/overviewnumber";
import Chart from "@/components/common/Chart";
function Overview() {
  const [width, setWidth] = useState<number>(1400);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return (
    <>
      <div className="overview m-4">
        {width > 895 ? (
          <>
            {/* <div className="input-group ">
              <input
                type="text"
                className="form-control p-2"
                placeholder="search"
              />
              <div className="input-group-prepend">
                <span className="styleinputtext">
                </span>
              </div>
            </div> */}
            <div className="input-group  w-40 mb-4 styletosearch">
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
            <Cards />
            <Chart title="Total Sales" data={data} />
            <Chart title="Net Sales" data={data} />
            <ButtonPrint data="Print" />
          </>
        ) : (
          <>
            <Cards />
            <Chart title="Total Sales" data={data} />
            <Chart title="Net Sales" data={data} />
            <ButtonPrint data="Print" />
          </>
        )}
      </div>
    </>
  );
}

export default Overview;
