import React, { useEffect } from "react";
// import Breadcrumbs from "@/components/common/BreadCrumb";
import InputControl from "@/components/common/inputControl";
import Tabs from "@/components/marketing/tabs";
import { Crumbs } from "@/data/crumbs";
import { useDispatch } from "react-redux";
import { breadcrumdsname, mainnav } from "@/features/marketing/marketingSlice";
import { useRouter } from "next/router";
import Search from "@/components/common/Search";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
// import Breadcrumbs from "@/components/common/Breadcrumb";
import Breadcrumbsthrid from "@/components/common/Breadcrumbthird";
// import Breadcrumbs from "@/components//Breadcrumb ";

const data: Crumbs[] = [
  { title: "marketing", to: "marketing", active: false },
  { title: "coupons", to: "marketing/coupons", active: false },
  { title: "addNewCoupons", to: "/marketing/addNewCoupons", active: true },
];

const AddNewCoupons = () => {
  let dispatch = useDispatch();
  let router = useRouter();
  let url = router.route.slice(10).replace("/marketing", "");
  let dataurl = "";
  if (!url) {
    dispatch(breadcrumdsname("marketing"));
    dispatch(mainnav("marketing"));

    dataurl = "";
  } else {
    url = url.replace("/", "");
    dispatch(breadcrumdsname(url));
    dispatch(mainnav("marketing"));

    dataurl = url;
  }
  useEffect(() => {}, []);
  return (
    <div className="marketing">
      <div className="m-4">
        {/* <Breadcrumbs data={data} /> */}
        <Breadcrumbsthrid
          data={dataurl}
          maintwo="coupons"
          mainnav="marketing"
        />

        <Search width="" />
        <Link href="/dashboard/marketing/coupons">
          <HiArrowLeft className="styletoarrow" />
        </Link>
        <div className="stylerow">
          <div className="mb-3">
            <InputControl
              text="coupon code"
              width="327px"
              placeholder="Please enter coupon code"
            />
          </div>
          <div className="line"></div>

          <div className="mt-4">
            <Tabs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewCoupons;
