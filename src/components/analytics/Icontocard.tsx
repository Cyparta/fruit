import React from "react";
import { BiMoneyWithdraw } from "react-icons/bi";
import { BiWalletAlt } from "react-icons/bi";
import { BsFillBoxFill, BsTruck } from "react-icons/bs";
import { FaPercentage } from "react-icons/fa";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import imagewallet from "../../../public/assets/image/Group.svg";
import imagewalletwhite from "../../../public/assets/image/Groupwalletwhite.svg";

import iconmenu from "../../../public/assets/image/Frame.svg";
import iconmenuwhite from "../../../public/assets/image/Framewhitemoney.svg";

import iconfluent from "../../../public/assets/image/fluent-mdl2_coupon.svg";
import iconfluentwhite from "../../../public/assets/image/fluent-mdl2_coupondiswhite.svg";

import iconheroicons from "../../../public/assets/image/heroicons-outline_receipt-tax.svg";
import iconheroiconswhite from "../../../public/assets/image/heroicons-outline_receipt-taxwhite.svg";

import iconmaterial from "../../../public/assets/image/Vectorcar.svg";
import iconmaterialwhite from "../../../public/assets/image/Vectorcarwhite.svg";

import iconmakar from "../../../public/assets/image/akar-icons_shipping-box-02.svg";
import iconmakarwhite from "../../../public/assets/image/Groupboxwhite.svg";
// import iconmakar from "../../../public/assets/image/akar-icons_shipping-box-02.svg";

// import iconmenu from "../../../public/assets/image/Frame.svg";
import Image from "next/image";
function Icontocard({
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
          src={idele === 1 ? imagewalletwhite : imagewallet}
          alt=""
          className={"iconstyle fs-3 p-2"}
        />
      ) : ele.id === 2 ? (
        <Image
          src={idele === 2 ? iconmenuwhite : iconmenu}
          alt=""
          className={"iconstyle fs-3 p-2"}
        />
      ) : ele.id === 3 ? (
        <Image
          src={idele === 3 ? iconfluentwhite : iconfluent}
          alt=""
          className={"iconstyle fs-3 p-2"}
        />
      ) : ele.id === 4 ? (
        <Image
          src={idele === 4 ? iconheroiconswhite : iconheroicons}
          alt=""
          className={"iconstyle fs-3 p-2"}
        />
      ) : ele.id === 5 ? (
        <Image
          src={idele === 5 ? iconmaterialwhite : iconmaterial}
          alt=""
          className={"iconstyle fs-3 p-2"}
        />
      ) : ele.id === 6 ? (
        <Image
          src={idele === 6 ? iconmakarwhite : iconmakar}
          alt=""
          className={"iconstyle fs-3 p-2"}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default Icontocard;
