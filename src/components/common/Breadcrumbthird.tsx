import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Breadcrumb } from "react-bootstrap";
interface breadcrumbsprops {
  data: string;
  mainnav: string;
  maintwo?: string;
}
function Breadcrumbsthrid({ data, mainnav, maintwo }: breadcrumbsprops) {
  let result = useSelector((state) => state);

  let router = useRouter();
  //   let dispatch=useDispatch()
  //   useEffect(()=>{
  // dispatch()
  //   })
  function onclickmainnav() {
    if (data === "") {
      router.push({
        pathname: `/dashboard/${mainnav}/${maintwo}`,
      });
    } else {
      router.push({
        pathname: `/dashboard/${mainnav}/${maintwo}/${data}`,
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
      {mainnav === "profileuser" ? (
        <Link className="" href={`/dashboard/${mainnav}/`}>
          {`${mainnav} / ${maintwo}`}
        </Link>
      ) : (
        <Link className="" href={`/dashboard/${mainnav}/${maintwo}`}>
          {`${mainnav} / ${maintwo}`}
        </Link>
      )}

      {data === "" ? (
        <Link
          onClick={onclickmainnav}
          href={`/dashboard/${mainnav}/${maintwo}`}
        ></Link>
      ) : (
        <Link
          onClick={onclickmainnav}
          href={`/dashboard/${mainnav}/${maintwo}/${data}`}
        >
          {` / ${data}`}
        </Link>
      )}
    </ul>
  );
}
export default Breadcrumbsthrid;
