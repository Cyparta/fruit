import { useEffect } from "react";
import "../app/globals.css";
import Slider from "@/components/slider/Slider";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.json";
// import "bootstrap/dist/js/bootstrap.bundle.js";
import "../index.scss";
import Seo from "@/components/common/seo";
import { Provider } from "react-redux";
import { store } from "@/app/store";
// import "href='' rel='stylesheet'";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
    // }
  });
  return (
    <>
      <Seo pageTitle="top fruit" />
      <Provider store={store}>
        <Slider>
          <Component {...pageProps} />
        </Slider>
      </Provider>
    </>
  );
}

export default MyApp;
