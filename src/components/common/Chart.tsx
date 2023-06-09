import { data, datatype } from "@/data/overviewnumber";
import React, { useEffect, useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { RiLineChartLine } from "react-icons/ri";
import { AiOutlineBarChart } from "react-icons/ai";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { BsBarChartLine } from "react-icons/bs";
import { BiLineChart } from "react-icons/bi";
import Image from "next/image";
// import line from "../../../public/assets/image/Line.svg";
import columngreen from "../../../public/assets/image/FrameLinegreen.svg";

import column from "../../../public/assets/image/column.svg";
import lineblack from "../../../public/assets/image/FrameLineblack.svg";
import line from "../../../public/assets/image/Line.svg";

interface chartprops {
  data: datatype[];
  title: string;
}
function Chart({ data, title }: chartprops) {
  let [typeofchart, settypeofchart] = React.useState("bar");
  let [idele, setidele] = React.useState("line");
  let [click, setclick] = React.useState(true);
  // let arrayicon = [
  //   { id: "line", data: [line, linegreen] },
  //   { id: "bar", data: [bar, line] },
  // ];
  function handleClick(
    event: string,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    if (event === "line") {
      setidele("line");
      settypeofchart("line");
    } else {
      setidele("bar");
      settypeofchart("bar");
    }
    setclick(true);
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
    <div className="stylerow my-3">
      <h3 className="color-blue">{title}</h3>
      <div className="row align-items-center">
        {width < 995 ? (
          <>
            <div className="col-sm-12 col-md-9 col-lg-9 d-flex justify-content-evenly flex-wrap row order-2 ">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="input-group   mb-4 styletosearch">
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="start date"
                      aria-label="Start date"
                      aria-describedby="basic-addon1"
                    />
                    <span
                      className="input-group-text border-0 bg-white"
                      id="basic-addon1"
                    >
                      <CiCalendarDate id="button-addon2" />
                    </span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 ml-3 col-lg-6">
                  <div className="input-group   mb-4 styletosearch">
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="end date"
                      aria-label="End date"
                      aria-describedby="basic-addon1"
                    />
                    <span
                      className="input-group-text border-0 bg-white"
                      id="basic-addon1"
                    >
                      <CiCalendarDate id="button-addon2" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 d-flex justify-content-end align-items-center order-1 mb-4">
              <Image
                src={idele === "line" && click ? line : lineblack}
                id="line"
                alt=""
                onClick={(e) => handleClick("line", e)}
                className="btn  ml-3 marginlefttobuttom iconchartstyle"
              />

              <Image
                src={idele === "bar" && click ? columngreen : column}
                id="bar"
                alt=""
                onClick={(e) => handleClick("bar", e)}
                className=" btn  marginlefttobuttom iconchartstyle"
              />
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="col-sm-12 col-md-9 col-lg-9 d-flex justify-content-evenly flex-wrap row order-1 ">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="input-group   mb-4 styletosearch">
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="start date"
                      aria-label="Start date"
                      aria-describedby="basic-addon1"
                    />
                    <span
                      className="input-group-text border-0 bg-white"
                      id="basic-addon1"
                    >
                      <CiCalendarDate id="button-addon2" />
                    </span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 ml-3 col-lg-6">
                  <div className="input-group   mb-4 styletosearch">
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="end date"
                      aria-label="End date"
                      aria-describedby="basic-addon1"
                    />
                    <span
                      className="input-group-text border-0 bg-white"
                      id="basic-addon1"
                    >
                      <CiCalendarDate id="button-addon2" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 d-flex justify-content-end align-items-center order-2 mb-4">
              <Image
                src={idele === "line" && click ? line : lineblack}
                id="line"
                alt=""
                onClick={(e) => handleClick("line", e)}
                className="btn  ml-3 marginlefttobuttom iconchartstyle"
              />

              <Image
                src={idele === "bar" && click ? columngreen : column}
                id="bar"
                alt=""
                onClick={(e) => handleClick("bar", e)}
                className=" btn  marginlefttobuttom iconchartstyle"
              />
            </div>
          </>
        )}
      </div>
      {typeofchart === "line" ? (
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <XAxis dataKey="month" />
            <YAxis dataKey="value" />
            <Tooltip />

            <CartesianGrid strokeDasharray="3 3" />
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <Tooltip />
            {/* <Legend /> */}
            <Line
              type="monotone"
              dataKey="value"
              stroke="#9897D0"
              activeDot={{ r: 8 }}
            />
            {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
  <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} /> */}
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <XAxis dataKey="month" />
            <YAxis dataKey="value" />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="value" fill="#9897D0" barSize={40} />
            {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
  <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} /> */}
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default Chart;
