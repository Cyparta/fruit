import React from "react";
import { AiOutlineLineChart } from "react-icons/ai";
import { BiMoneyWithdraw } from "react-icons/bi";
import { BsFillBagFill } from "react-icons/bs";
import { MdLocalGroceryStore, MdOutlineNoteAlt } from "react-icons/md";

function Icontotax({ ele }: { ele: { id: number } }) {
  return (
    <>
      {ele.id === 1 ? (
        <MdLocalGroceryStore className="iconstyle fs-3 p-2" />
      ) : ele.id === 2 ? (
        <BiMoneyWithdraw className="iconstyle fs-3 p-2" />
      ) : ele.id === 3 ? (
        <AiOutlineLineChart className="iconstyle fs-3 p-2" />
      ) : ele.id === 4 ? (
        <BsFillBagFill className="iconstyle fs-3 p-2" />
      ) : (
        ""
      )}
    </>
  );
}

export default Icontotax;
