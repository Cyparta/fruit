import React from "react";
import { AiOutlineLineChart } from "react-icons/ai";
import { BiMoneyWithdraw } from "react-icons/bi";
import { BsFillBagFill } from "react-icons/bs";
import { MdLocalGroceryStore, MdOutlineNoteAlt } from "react-icons/md";
import imagecarbon from "../../../public/assets/image/carbon_chart-average.svg";
import imagecarbonwhite from "../../../public/assets/image/carbon_chart-averagewhite.svg";

import imagestreamline from "../../../public/assets/image/streamline_shopping-bag-hand-bag-2-shopping-bag-purse-goods-item-products.svg";
import imagestreamlinewhite from "../../../public/assets/image/Vectorwhite.svg";

// import imagestreamline from "../../../public/assets/image/streamline_shopping-bag-hand-bag-2-shopping-bag-purse-goods-item-products.svg";

import iconclick from "../../../public/assets/image/shapeclick.svg";
import iconclickwhite from "../../../public/assets/image/shapeclickwhite.svg";

import Image from "next/image";
import iconmenu from "../../../public/assets/image/Frame.svg";
import iconmenumoney from "../../../public/assets/image/Framewhitemoney.svg";

function Icontoorders({
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
          src={idele === 2 ? iconmenumoney : iconmenu}
          alt=""
          className={"iconstyle fs-3 p-2"}
        />
      ) : ele.id === 3 ? (
        <Image
          src={idele === 3 ? imagecarbonwhite : imagecarbon}
          alt=""
          className={"iconstyle fs-3 p-2"}
        />
      ) : ele.id === 4 ? (
        <Image
          src={idele === 4 ? imagestreamlinewhite : imagestreamline}
          alt=""
          className={"iconstyle fs-3 p-2"}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default Icontoorders;
