import React, { useEffect, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

import Button from "./Button";
import classes from "./ImageUploadForm.module.css";
import img from "../images/uploadedimage.png";
import { base64StringToBlob } from "blob-util";

function ImageUploadForm(props) {
  // const [image, setImage] = React.useState(undefined);

  const handleOnChangeFile = (event) => {
    const imgFile = event.target.files[0];
    const formData = new FormData();
    formData.append("userpic", imgFile, imgFile.name);
    console.log(formData);
    props.getImage(imgFile);
  };
  //   reader.addEventListener("loadend", (val) => {
  //     setImage({
  //       file: imgFile,
  //       blob: val.srcElement.result,
  //     });
  //   });

  //   reader.readAsDataURL(imgFile);
  // };

  // const handleSubmit = () => {
  //   if (image) {
  //     const formData = new FormData();
  //     formData.append("IMAGE", image.file);

  //     console.log("FormData:", formData.get("IMAGE"));
  //     console.log("base-64 encoded blob:", image.blob);

  //     props.getImage(formData.get("IMAGE"));
  //     //here you can use XHR/Axios to upload image, e.g:
  //     /*
  //       axios.post("/file-uploader", (formData OR image.blob));
  //     */
  //   }
  // };

  return (
    <div>
      <form>
        <h1>take a look into console!</h1>
        <input type="file" onChange={handleOnChangeFile} />
      </form>
    </div>
  );
}

export default ImageUploadForm;
