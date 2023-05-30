import Link from "next/link";
// import { useRouter } from "next/router";
import React from "react";
// import { Breadcrumb } from "react-bootstrap";
interface breadcrumbsprops {
  data: string;
}
function Breadcrumbs({ data }: breadcrumbsprops) {
  // let router = useRouter();

  return (
    <ul className="breadcrumbs">
      <Link href="/dashboard/products" className="">
        products{" "}
      </Link>
      {data === "" ? (
        <Link href="/dashboard/products">/All products</Link>
      ) : (
        <Link href={`/dashboard/products/${data}`}>/{data}</Link>
      )}
    </ul>
  );
}
export default Breadcrumbs;
