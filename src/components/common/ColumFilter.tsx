// import { columsinterface } from "@/data/colums";
import { Product } from "@/data/products";
import React, { useState } from "react";
import { CgArrowsExchangeAltV, CgSearch } from "react-icons/cg";
interface GlobalFilterprops {
  filter: string;
  setFilter: (filter: string) => void;
  // column?: columsinterface;
  data?: Product[];
}
interface columsinterface {
  filterValue: any;
  setFilter: any;
  preFilteredRows: any;
  id: any;
}
interface columnmain {
  column: columsinterface;
}
function ColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}: columnmain) {
  const options = React.useMemo(() => {
    const options = new Set() as any;
    preFilteredRows.forEach((row:any) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <select
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      className="form-control"
    >
      <option value="">{id}</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default ColumnFilter;
