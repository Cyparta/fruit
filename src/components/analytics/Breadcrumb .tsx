import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Breadcrumb } from "react-bootstrap";
interface breadcrumbsprops {
  data: string;
  mainnav: string;
}
function Breadcrumbs({ data, mainnav }: breadcrumbsprops) {
  let result = useSelector((state) => state);

  let router = useRouter();
  //   let dispatch=useDispatch()
  //   useEffect(()=>{
  // dispatch()
  //   })
  function onclickmainnav() {
    if (data === "") {
      router.push({
        pathname: `/dashboard/${mainnav}`,
      });
    } else {
      router.push({
        pathname: `/dashboard/${mainnav}/${data}`,
      });
    }
  }
  return (
    // <ul className="breadcrumbs">
    //   <Link href="/dashboard/analytics" className="">
    //     analytics
    //   </Link>
    //   {data === "" ? (
    //     <Link href="/dashboard/analytics">/products</Link>
    //   ) : (
    //     <Link href={`/dashboard/analytics/${data}`}>/{data}</Link>
    //   )}
    // </ul>
    <ul className="breadcrumbs">
      <Link className="" href={`/dashboard/${mainnav}`}>
        {mainnav}
      </Link>
      {data === "" ? (
        <Link onClick={onclickmainnav} href={`/dashboard/${mainnav}/`}>
          {mainnav === "analytics"
            ? "/products"
            : mainnav === "products"
            ? "/All products"
            : mainnav === "marketing"
            ? "/Ads"
            : mainnav === "profileuser"
            ? "/All Members"
            : ""}
        </Link>
      ) : (
        <Link onClick={onclickmainnav} href={`/dashboard/${mainnav}/${data}`}>
          /{data}
        </Link>
      )}
    </ul>
  );
}
export default Breadcrumbs;
