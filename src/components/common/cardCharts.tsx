


// import { overviewNumber } from "@/data/overviewnumber";
import React from "react";
import { MdLocalGroceryStore } from "react-icons/md";
import { BsFillHandbagFill } from "react-icons/bs";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
function cardCharts({overviewNumber} : any) {
    console.log(overviewNumber);
    return (
        <>
            <div className="row stylerow">
                {overviewNumber.map((ele: any, index: number) => {
                    return (
                        <div className="col-sm-3" key={index}>
                            <div className="card stylecard">
                                <div className="card-body d-flex align-items-start  justify-content-between">
                                    <>
                                        <div>
                                            <h3 className="card-title">{ele.number}</h3>
                                            <p className="card-text">{ele.title}</p>
                                            <span className="colorgray">{ele.discount}</span>
                                        </div>
                                        {ele.id === 1 ? (
                                            <MdLocalGroceryStore className="iconstyle fs-3 p-2" />
                                        ) : ele.id === 2 ? (
                                            <BsFillHandbagFill className="iconstyle fs-3 p-2" />
                                        ) : ele.id === 3 ? (
                                            <AiOutlineSafetyCertificate className="iconstyle fs-3 p-2" />
                                        ) : ele.id === 4 ? (
                                            <FiUsers className="iconstyle fs-3 p-2" />
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

export default cardCharts;
