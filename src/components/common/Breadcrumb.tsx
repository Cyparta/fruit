import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
interface breadcrumbsprops {
  data: string;
  mainnav: string;
  maintwo?: string;
}
function Breadcrumb({ data, mainnav, maintwo }: breadcrumbsprops) {
  let router = useRouter();
  function onclickmainnav(e: React.MouseEvent<HTMLAnchorElement>) {
    Array.from(document.getElementsByClassName("active")).map((ele) => {
      ele.classList.remove("active");
    });

    if (data === "") {
      router.push({
        pathname: `/dashboard/${mainnav}`,
      });
    } else {
      router.push({
        pathname: `/dashboard/${mainnav}/${data}`,
      });
    }
    (e.target as HTMLAnchorElement).classList.add("active");
  }
  return (
    <ul className="breadcrumbs">
      {data === "" ? (
        <>
          <Link
            onClick={(e) => onclickmainnav(e)}
            href={`/dashboard/${mainnav}`}
          >
            {`${mainnav} /`}
          </Link>
          <Link
            onClick={(e) => onclickmainnav(e)}
            href={`/dashboard/${mainnav}`}
            className="active"
          >
            {` ${maintwo}`}
          </Link>
        </>
      ) : (
        <>
          <Link
            onClick={(e) => onclickmainnav(e)}
            href={`/dashboard/${mainnav}`}
          >
            {`${mainnav} /`}
          </Link>
          <Link
            onClick={(e) => onclickmainnav(e)}
            href={`/dashboard/${mainnav}`}
          >
            {` ${maintwo}`}
          </Link>
          <Link
            onClick={(e) => onclickmainnav(e)}
            href={`/dashboard/${mainnav}/${data}`}
            className="active"
          >
            {` ${data}`}
          </Link>
        </>
      )}
    </ul>
  );
}

export default Breadcrumb;
