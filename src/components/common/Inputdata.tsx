import {
  
  updateabsdescr,
  updateabstitle,
} from "@/features/marketing/marketingSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
interface inputdatatypescript {
  name: string;
  desc: string;
  title?: string;
  bgColor?: string;
  border?: string;
}
export interface inputValue {
  AdTitle?: string;
  AdDescription?: string;
}
function Inputdata({
  name,
  desc,
  title,
  bgColor,
  border,
}: inputdatatypescript) {
  let [value, setValue] = React.useState<inputValue>({
    AdTitle: "",
    AdDescription: "",
  });
  let dis;
  let dispatch = useDispatch();
  useEffect(() => {
    // console.log(value);
  }, [value]);
  return (
    <div className="mb-5">
      <h6>{title}</h6>
      <input
        type="text"
        placeholder={desc}
        className="form-control"
        name={name}
        style={{ background: bgColor, border }}
        onChange={(e) => {
          setValue({ ...value, [e.target.name]: e.target.value });
          if (name === "AdTitle") {
            dispatch(updateabstitle(e.target.value));
          } else {
            dispatch(updateabsdescr(e.target.value));
          }
        }}
      />
    </div>
  );
}

export default Inputdata;
