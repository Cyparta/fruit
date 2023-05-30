import { Product } from "@/data/products";
import React from "react";
import { AiFillDelete, AiFillEdit, AiOutlineBarChart } from "react-icons/ai";
import Contentoftable from "./Contentoftable";
interface tableprops {
  data: Product[];
}
function Table({ data }: tableprops) {
  let headeroftable = Object.keys(data[0]);
  return (
    <table className="table" data-bs-filter-control="true">
      <thead>
        <tr>
          {headeroftable.map((ele, index) => {
            return (
              <th scope="col" data-bs-field={ele} key={index}>
                {ele}
              </th>
            );
          })}
          <th scope="col" data-bs-field="action">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((ele, index) => {
          return (
            <Contentoftable
              no={ele.no}
              sku={ele.sku}
              category={ele.category}
              product_name={ele.product_name}
              country_of_origin={ele.country_of_origin}
              amount={ele.amount}
              price={ele.price}
              key={index}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
