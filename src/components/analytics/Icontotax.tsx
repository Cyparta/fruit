import Image from "next/image";
import React from "react";
import { AiOutlineLineChart } from "react-icons/ai";
import { BiMoneyWithdraw } from "react-icons/bi";
import { BsFillBagFill } from "react-icons/bs";
import { MdLocalGroceryStore, MdOutlineNoteAlt } from "react-icons/md";
import iconclick from "../../../public/assets/image/shapeclick.svg";
import iconclickwhite from "../../../public/assets/image/shapeclickwhite.svg";
import icontaxnote from "../../../public/assets/image/Grouptaxnote.svg";
import icontaxmore from "../../../public/assets/image/Groupmoretax.svg";
import icontaxmorewhite from "../../../public/assets/image/Groupmoretaxwhite.svg";
import iconshippingtax from "../../../public/assets/image/Groupshippingtax.svg";
import iconshippingtaxwhite from "../../../public/assets/image/Grouptaxshippingwhite.svg";

import icontaxnotewhite from "../../../public/assets/image/Grouptaxwhite.svg";

function Icontotax({
  ele,
  idele,
}: // clickvalue,
{
  ele: { id: number };
  idele: number;
  // clickvalue: boolean;
}) {
  return (
    <>
      {ele.id === 1 ? (
        <Image
          src={idele === 1 ? iconclickwhite : iconclick}
          alt=""
          className={"iconstyle fs-3 p-2"}
        />
      ) : ele.id === 2 ? (
        <Image
          src={idele === 2 ? icontaxnotewhite : icontaxnote}
          alt=""
          className={"iconstyle fs-3 p-2"}
        />
      ) : ele.id === 3 ? (
        <Image
          src={idele === 3 ? icontaxmorewhite : icontaxmore}
          alt=""
          className={"iconstyle fs-3 p-2"}
        />
      ) : ele.id === 4 ? (
        <Image
          src={idele === 4 ? iconshippingtaxwhite : iconshippingtax}
          alt=""
          className={"iconstyle fs-3 p-2"}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default Icontotax;
