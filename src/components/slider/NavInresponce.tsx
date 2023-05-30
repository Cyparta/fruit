import { objectproductitem } from "@/data/productsnav";
import Link from "next/link";
import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
interface Appearpartprops {
  data: objectproductitem[];
  name: string;
}
function NavInresponce({ data, name }: Appearpartprops) {
  let [click, setclick] = React.useState(false);
  function onclickofproduct(e: React.MouseEvent<any>) {
    setclick(!click);
    (e.target as HTMLButtonElement).style.color = "";
  }
  return (
    <>
      <div className="responcestyle">
        <span
          className="colorblue mb-3 fs-5"
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
      <ul id="displayTheProduct" className={click ? "appear" : "hidden"}>
        {data.map((item, index) => {
          return (
            <li key={index} className={index === 0 ? "active" : ""}>
              <Link
                href={item.href ? item.href : ""}
                className={
                  index === 0
                    ? "dropdown-item mb-3 active fs-5"
                    : "dropdown-item mb-3 fs-5"
                }
                // onClick={(e) => onclickmenu(item.href ? item.href : "", e)}
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

export default NavInresponce;
