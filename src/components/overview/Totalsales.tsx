// import { data } from "autoprefixer";
import { data } from "@/data/overviewnumber";
import React from "react";
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
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Totalsales() {
  let [typeofchart, settypeofchart] = React.useState("line");
  let [click, setclick] = React.useState(false);
  function handleClick(
    event: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    
    let element = e.target as HTMLButtonElement;
    if (element) {
      if (event === "line") {
        settypeofchart("line");
        element.classList.add("iconstylebackgroundgreen");
        document
          .getElementById("bar")
          ?.classList.remove("iconstylebackgroundgreen");
      } else {
        settypeofchart("bar");
        console.log(event);
        element.classList.add("iconstylebackgroundgreen");
        document
          .getElementById("line")
          ?.classList.remove("iconstylebackgroundgreen");
      }
    }
  }
  return (
    <div className="stylerow mt-2">
      <h3 className="mb-5">Total Sales</h3>
      <div className="row align-items-center">
        <div className="col-sm-8 d-flex justify-content-between">
          <div className="col-sm-6">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <CiCalendarDate id="button-addon2" className=" p-2" />
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="start data"
                aria-label="startdata"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="col-sm-6 ml-3">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <CiCalendarDate id="button-addon2" className=" p-2" />
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="end data"
                aria-label="enddata"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>
        <div className="col-sm-4 d-flex justify-content-end align-items-center">
          <button
            className="iconstyle btn iconstylebackgroundgreen"
            id="line"
            onClick={(e) => handleClick("line", e)}
          >
            <RiLineChartLine />
          </button>
          <button
            className="iconstyle btn  ml-3"
            id="bar"
            onClick={(e) => handleClick("bar", e)}
          >
            <AiOutlineBarChart />
          </button>
        </div>
      </div>
      {typeofchart === "line" ? (
        <LineChart
          width={1100}
          height={200}
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="month" />
          <YAxis dataKey="value" />
          <Tooltip />
          <CartesianGrid stroke="black" />
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
      ) : (
        <BarChart
          width={1100}
          height={200}
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="month" />
          <YAxis dataKey="value" />
          <Tooltip />
          <CartesianGrid stroke="black" />
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="value" fill="#9897D0" />
          {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
  <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} /> */}
        </BarChart>
      )}
    </div>
  );
}

export default Totalsales;
