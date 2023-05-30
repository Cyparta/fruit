import React from "react";
import ButtonPrint from "../common/ButtonPrint";
import InputControl from "../common/inputControl";

const Products = () => {
  return (
    <div className="stylerow">
      <div className="d-flex flex flex-column gap-4">
        <InputControl
          text="The number of products left to put in a <br /> case The product stock is marked as low in stock"
          placeholder="write number"
          width="275px"
          fullWidth={false}
        />
        <InputControl
          text="The number of products left to put in a <br /> case The product stock is marked as low in stock"
          placeholder="write number"
          width="275px"
          fullWidth={false}
        />
        <div className="d-flex align-items-center mb-5">
          <p className="label">Notification recipient</p>
          <select
            name="cars"
            id="cars"
            style={{ width: "275px" }}
            className="main-input"
          >
            <option value="volvo">volvo</option>
            <option value="saab">saab</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Audi">Audi</option>
          </select>
        </div>
      </div>

      <div className="line mb-3"></div>

      <div>
        <p className="label mb-4">Inventory Management</p>
        <div className="d-flex align-items-center">
          <input type="checkbox" className="me-3"/>
          <span className="d-inline-block  ms-3">
            Enable inventory management
          </span>
        </div>
      </div>

      <div className="mt-3">
        <p className="label mb-2">notifications</p>
        <div className="d-flex align-items-center">
          <input type="checkbox" className="me-3"/>
          <span className="d-inline-block  ms-3">Enable low stock alerts</span>
        </div>
        <div className="d-flex align-items-center">
          <input type="checkbox" className="me-3" />
          <span className="d-inline-block ms-3">
            Enable out of stock alerts
          </span>
        </div>
      </div>

      <div className="mt-3">
        <p className="label mb-2">Showing out of stock</p>
        <div className="d-flex align-items-center">
          <input type="checkbox" className="me-3"/>
          <span className="d-inline-block  ms-3">
            Hide out-of-stock items from the catalog
          </span>
        </div>
      </div>
    </div>
  );
};

export default Products;
