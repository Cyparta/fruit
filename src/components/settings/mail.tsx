import React from "react";
import InputControl from "../common/inputControl";

const Mail = () => {
  return (
    <div className="stylerow">
      <h3 className="head colorblue mb-4">e-mail settings</h3>
      <div>
        <div className="d-flex flex flex-column gap-4">
          <InputControl text="E-mail" width="275px" />
          <InputControl text="Welcome message" width="275px" />
          <InputControl
            text="message after completion shopping"
            width="275px"
          />
        </div>

        <div>
          <div className="d-flex align-items-center mt-4">
            <input type="checkbox"  className="me-3"/>
            <span className="d-inline-block  ms-3">
              Calculating the tax within the price of the final product
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mail;
