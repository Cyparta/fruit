import React from "react";
import { CgSearch } from "react-icons/cg";
interface searchprops {
  width: string;
}
function Search({ width }: searchprops) {
  return (
    <div className={`input-group ${width} mb-4 styletosearch`}>
      <input
        type="text"
        className="form-control border-0"
        placeholder="Search"
        aria-label="search"
        aria-describedby="basic-addon1"
      />
      <span className="input-group-text border-0 bg-white" id="basic-addon1">
        <CgSearch id="button-addon2" />
      </span>
    </div>
  );
}

export default Search;
