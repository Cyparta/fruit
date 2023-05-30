import React from "react";
interface buttonPrintprops {
  data: string;
}
function ButtonPrint({ data }: buttonPrintprops) {
  function handlePrintClick() {
    if (data === "Print") {
      window.print();
    }
  }
  return (
    <>
      <button
        className={`iconstyle iconstylebackgroundgreen  ml-auto my-4 d-flex justify-content-center align-items-center colorblue ms-auto `}
        onClick={handlePrintClick}
      >
        {data}
      </button>
    </>
  );
}

export default ButtonPrint;
