import React from "react";
import { BiMoneyWithdraw } from "react-icons/bi";
import { BiWalletAlt } from "react-icons/bi";
import { BsFillBoxFill, BsTruck } from "react-icons/bs";
import { FaPercentage } from "react-icons/fa";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import imagewallet from "../../../public/assets/image/Group.svg";
import iconmenu from "../../../public/assets/image/Frame.svg";
import iconfluent from "../../../public/assets/image/fluent-mdl2_coupon.svg";
import iconheroicons from "../../../public/assets/image/heroicons-outline_receipt-tax.svg";
import iconmaterial from "../../../public/assets/image/Vector.svg";
import iconmakar from "../../../public/assets/image/akar-icons_shipping-box-02.svg";
// import iconmenu from "../../../public/assets/image/Frame.svg";
import Image from "next/image";
function Icontocard({ ele }: { ele: { id: number } }) {
  return (
    <>
      {ele.id === 1 ? (
        <Image src={imagewallet} alt="" className="iconstyle fs-3 p-2" />
      ) : ele.id === 2 ? (
        <Image src={iconmenu} alt="" className="iconstyle fs-3 p-2" />
      ) : ele.id === 3 ? (
        <Image src={iconfluent} alt="" className="iconstyle fs-3 p-2" />
      ) : ele.id === 4 ? (
        <Image src={iconheroicons} alt="" className="iconstyle fs-3 p-2" />
      ) : ele.id === 5 ? (
        <Image src={iconmaterial} alt="" className="iconstyle fs-3 p-2" />
      ) : ele.id === 6 ? (
        <Image src={iconmakar} alt="" className="iconstyle fs-3 p-2" />
      ) : (
        ""
      )}
    </>
  );
}

export default Icontocard;
