import ButtonPrint from "../common/ButtonPrint";
import InputControl from "../common/inputControl";

function General() {
  return (
    <>
      <div className="stylerow">
        <h3 className="head colorblue mb-4">Store Address</h3>
        <div className="d-flex flex flex-column gap-4 styleinput">
          <InputControl text="Title" />
          <InputControl text="Selling to specific countries" />
          <InputControl text="Sale to specific cities" />
        </div>
      </div>

      <div className="stylerow mt-3">
        <h3 className="head colorblue mb-4">General options</h3>
        <div className="d-flex flex flex-column gap-4 styleinput">
          <InputControl text="Time zone" />
          <InputControl text="The week begins" />
          <InputControl text="Sale to specific cities" />
        </div>
      </div>
    </>
  );
}

export default General;
