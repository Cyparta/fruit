// import { columsinterface } from "@/data/colums";
import { Product } from "@/data/products";
import React, { useState, useEffect } from "react";
import { CgArrowsExchangeAltV, CgSearch } from "react-icons/cg";
import { useSelector } from "react-redux";
interface GlobalFilterprops {
  filter: string;
  setFilter: (filter: string) => void;
  // column?: columsinterface;
  data?: Product[];
  selectvalue?: string;
}

function GlobalFilter({
  filter,
  setFilter,
  data,
  selectvalue,
}: GlobalFilterprops) {
  // const { filterselect, setfilterselect } = column;
  // const [selectvalue, setselectvalue] = useState();
  let { name, mainnav } = useSelector((state: any) => state.analytics);
  console.log(name, mainnav);
  return (
    <>
      <div className={`input-group  mb-4 styletosearch`}>
        <input
          type="text"
          className="form-control border-0"
          placeholder="Search"
          aria-label="search"
          aria-describedby="basic-addon1"
          onChange={(e) => setFilter(e.target.value)}
        />
        <span className="input-group-text border-0 bg-white" id="basic-addon1">
          <CgSearch id="button-addon2" />
        </span>
      </div>
    </>
  );
}

export default GlobalFilter;
