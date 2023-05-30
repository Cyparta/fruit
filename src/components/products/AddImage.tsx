import Image from "next/image";
import React from "react";
import imagecamer from "../../../public/assets/image/Status.png";
// import Image from "next/image";
function AddImage() {
  let [imageSrc, setImageSrc] = React.useState(imagecamer as unknown as string);
  let [width, setwidth] = React.useState(107);
  let [hight, sethight] = React.useState(107);

  function handleimage(e: React.ChangeEvent<HTMLInputElement>) {
    const reader = new FileReader();
    const file = e.target.files && e.target.files[0];
    if (file) {
      reader.onload = () => {
        const image = new window.Image();
        image.src = reader.result as string;
        console.log(image);
        setImageSrc(image.src);
        setwidth(375);
        sethight(375);
        // lableofimage.src = image.src;
      };
      reader.readAsDataURL(file as any);
    }
  }
  return (
    <div className=" d-flex align-items-center  justify-content-center">
      <input
        type="file"
        className="form-control d-none"
        id="file"
        onChange={(e) => handleimage(e)}
      />
      <label className="styledivcamera" htmlFor="file">
        <div>
          <Image
            src={imageSrc}
            alt=""
            id="addimage"
            width={width}
            height={hight}
          />
        </div>
      </label>
    </div>
  );
}

export default AddImage;
