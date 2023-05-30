import React from "react";
import InputControl from "../common/inputControl";

const Taxes = () => {
  return (
    <div className="stylerow">
      <h3 className="head colorblue mb-4">Taxes Settings</h3>
      <div>
        <div className="d-flex flex flex-column gap-4">
          <InputControl text="Tax value" width="275px" />
          <InputControl text="Shipping value" width="275px" />
          <InputControl text="Shipping tax" width="275px" />
        </div>

        <div>
          <div className="d-flex align-items-center mt-4">
            <input type="checkbox" className="me-3" />
            <span className="d-inline-block  ms-3">
              Calculating the tax within the price of the final product
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Taxes;
