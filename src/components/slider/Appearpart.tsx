import { objectproductitem } from "@/data/productsnav";
import React, { ReactNode } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsFolder } from "react-icons/bs";
import { MdAnalytics } from "react-icons/md";
import { BsPercent } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";

interface Appearpartprops {
  data: objectproductitem[];
  name: string;
}
function Appearpart({ data, name }: Appearpartprops) {
  let router = useRouter();
  let [click, setclick] = React.useState(false);
  function onclickofproduct(e: React.MouseEvent<any>) {
    setclick(!click);
    (e.target as HTMLButtonElement).style.color = "";
    Array.from(document.getElementsByClassName("stylecolorblue")).map((ele) => {
      ele.classList.remove("stylecolorblue");
    });

    (e.target as HTMLButtonElement)?.classList.toggle("stylecolorblue");
  }
  function onclickmenu(
    item: string,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    console.log(item);
    const items = document.getElementsByClassName("dropdown-item");

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      item.classList.remove("active");
    }
    (e.target as HTMLAnchorElement).classList.add("active");
    // router.push(item);
  }

  return (
    <>
      <div className="dropdown mb-4">
        {name === "Products" ? (
          <BsFolder
            className={
              click
                ? "iconstyle iconstylebackgroundgreen mr-3 fs-3"
                : "iconstyle mr-3 fs-3"
            }
          />
        ) : name === "Analytics" ? (
          <MdAnalytics
            className={
              click
                ? "iconstyle iconstylebackgroundgreen mr-3 fs-3"
                : "iconstyle mr-3 fs-3"
            }
          />
        ) : name === "Marketing" ? (
          <BsPercent
            className={
              click
                ? "iconstyle iconstylebackgroundgreen mr-3 fs-3"
                : "iconstyle mr-3 fs-3"
            }
          />
        ) : name === "profileuser" ? (
          <FiUsers
            className={
              click
                ? "iconstyle iconstylebackgroundgreen mr-3 fs-3"
                : "iconstyle mr-3 fs-3"
            }
          />
        ) : (
          ""
        )}
        <div className="styletoselect">
          <span
            className=""
            id="dropdownMenuButton1"
            onClick={(e) => onclickofproduct(e)}
          >
            {name}
          </span>
          {click ? (
            <IoIosArrowDown className="ai" onClick={() => setclick(!click)} />
          ) : (
            <IoIosArrowUp className="ai" onClick={() => setclick(!click)} />
          )}
        </div>
      </div>

      <ul id="displayTheProduct" className={click ? "appear" : "hidden"}>
        {data.map((item, index) => {
          return (
            <li key={index} className={index === 0 ? "active" : ""}>
              <Link
                href={item.href ? item.href : ""}
                className={
                  index === 0
                    ? "dropdown-item mb-3 active styletonave"
                    : "dropdown-item mb-3 styletonave"
                }
                onClick={(e) => onclickmenu(item.href ? item.href : "", e)}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Appearpart;
