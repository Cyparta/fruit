import React from "react";
import { AiOutlineLineChart } from "react-icons/ai";
import { BiMoneyWithdraw } from "react-icons/bi";
import { BsFillBagFill } from "react-icons/bs";
import { MdLocalGroceryStore, MdOutlineNoteAlt } from "react-icons/md";
import imagecarbon from "../../../public/assets/image/carbon_chart-average.svg";
import imagestreamline from "../../../public/assets/image/streamline_shopping-bag-hand-bag-2-shopping-bag-purse-goods-item-products.svg";
import iconclick from "../../../public/assets/image/shapeclick.svg";
import Image from "next/image";
import iconmenu from "../../../public/assets/image/Frame.svg";
function Icontoorders({ ele }: { ele: { id: number } }) {
  return (
    <>
      {ele.id === 1 ? (
        <Image src={iconclick} alt="" className="iconstyle fs-3 p-2" />
      ) : ele.id === 2 ? (
        <Image src={iconmenu} alt="" className="iconstyle fs-3 p-2" />
      ) : ele.id === 3 ? (
        <Image src={imagecarbon} alt="" className="iconstyle fs-3 p-2" />
      ) : ele.id === 4 ? (
        <Image src={imagestreamline} alt="" className="iconstyle fs-3 p-2" />
      ) : (
        ""
      )}
    </>
  );
}

export default Icontoorders;
