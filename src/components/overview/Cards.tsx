import { overviewNumber } from "@/data/overviewnumber";
import React from "react";
import { MdLocalGroceryStore } from "react-icons/md";
import { BsFillHandbagFill } from "react-icons/bs";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import iconshop from "../../../public/assets/image/Color.svg";
import iconbag from "../../../public/assets/image/shapebag.svg";
import iconclick from "../../../public/assets/image/shapeclick.svg";
import iconuser from "../../../public/assets/image/shapeuser.svg";

import Image from "next/image";
function Cards() {
  return (
    <>
      <div className="row stylerow">
        {overviewNumber.map((ele, index) => {
          return (
            <div className="col-md-6 col-lg-3 col-sm-12 my-3" key={index}>
              <div className="card stylecard">
                <div className="card-body d-flex align-items-start  justify-content-between">
                  <>
                    <div>
                      <h2 className="card-title fw-bold">{ele.number}</h2>
                      <p className="card-text fs-5 fw-normal">{ele.title}</p>
                      <span className="colorgray fw-normal ">
                        {ele.discount}
                      </span>
                    </div>
                    {ele.id === 1 ? (
                      <Image
                        src={iconshop}
                        alt=""
                        className="iconstyle fs-3 p-2"
                      />
                    ) : ele.id === 2 ? (
                      <Image
                        src={iconbag}
                        alt=""
                        className="iconstyle fs-3 p-2"
                      />
                    ) : // <BsFillHandbagFill className="iconstyle fs-3 p-2" />
                    ele.id === 3 ? (
                      <Image
                        src={iconclick}
                        alt=""
                        className="iconstyle fs-3 p-2"
                      />
                    ) : ele.id === 4 ? (
                      <Image
                        src={iconuser}
                        alt=""
                        className="iconstyle fs-3 p-2"
                      />
                    ) : (
                      ""
                    )}
                    {/* <MdLocalGroceryStore className="iconstyle fs-1" /> */}
                  </>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cards;
