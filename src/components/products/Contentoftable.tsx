import { Product, productsNav } from "@/data/products";
import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

function Contentoftable({
  no,
  sku,
  category,
  product_name,
  country_of_origin,
  amount,
  price,
}: Product) {
  let [result, setresult] = React.useState(productsNav);
  function deletedatatable(no: number) {
    setresult(result.filter((ele) => ele.no !== no));
    // console.log(result.filter((ele) => ele.no !== no));
  }
  return (
    <tr>
      <th scope="row">{no}</th>
      <td>{sku}</td>
      <td>{category}</td>
      <td>{product_name}</td>
      <td>{country_of_origin}</td>
      <td>{amount}</td>
      <td>{price}</td>
      <td>
        <button
          className="iconstyle btn  ml-3"
          id="bar"
          // onClick={(e) => handleClick("bar", e)}
        >
          <AiFillEdit />
        </button>
        <span
          className="iconstyle btn  ml-3"
          id="bar"
          onClick={() => deletedatatable(no)}
        >
          <AiFillDelete />
        </span>
      </td>
    </tr>
  );
}

export default Contentoftable;
