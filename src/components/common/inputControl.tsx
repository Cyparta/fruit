import { useSelector } from "react-redux";

interface InputControlType {
  text: string;
  placeholder?: string;
  width?: string;
  fullWidth?: boolean;
}

function InputControl({
  text,
  placeholder = "",
  fullWidth = false,
}: InputControlType) {
  let { mainnav } = useSelector((state: any) => state.analytics);
  // console.log(result);

  return (
    <>
      {mainnav === "profileuser" ? (
        <div className="d-flex align-items-center flex-1 col-md-6 col-sm-12 col-lg-6 mb-3">
          <p
            className="label"
            dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br />") }}
          />
          <input
            type="text"
            className={`main-input ${fullWidth && "flex-1"}`}
            placeholder={placeholder}
          />
        </div>
      ) : (
        <div className="d-flex align-items-center flex-1 col-md-12 col-sm-12 col-lg-12 mb-3">
          <p
            className="label"
            dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br />") }}
          />
          <input
            type="text"
            className={`main-input ${fullWidth && "flex-1"}`}
            placeholder={placeholder}
          />
        </div>
      )}
    </>
  );
}

export default InputControl;
