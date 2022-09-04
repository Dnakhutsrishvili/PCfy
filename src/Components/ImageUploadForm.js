import React, { useEffect, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Button from "./Button";
import classes from "./ImageUploadForm.module.css";
import uploadedimage from "../images/uploadedimage.png";

function ImageUploadForm(props) {
  //local storage doesnt work
  const [image, setImage] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("image");

    return saved || [];
  });

  useEffect(() => {
    localStorage.setItem("image", image);
  }, [image]);

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    const imgFile = acceptedFiles[0];
    setImage(imgFile);
    const formData = new FormData();
    formData.append("userpic", imgFile, imgFile.name);

    props.getImage(imgFile);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <div style={props.border} className={classes.parent} {...getRootProps()}>
        <input {...getInputProps()} />
        {image.length < 1 ? (
          <div className={classes.uploadedFlex}>
            <p className={classes.text}>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</p>
            <Button
              stats={{ height: "60px", width: "233px" }}
              text={"ატვირთე"}
            ></Button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      {image.length < 1 ? (
        <div></div>
      ) : (
        <div className={classes.uploadedParent}>
          <div className={classes.flex}>
            <img className={classes.img} src={uploadedimage}></img>
            <p>{image.name}</p>
            <p>{image.size + "mb"}</p>
          </div>
          <div {...getRootProps()}>
            <Button
              stats={{ height: "60px", width: "233px" }}
              text={"ხელახლა ატვირთე"}
            ></Button>
          </div>
        </div>
      )}
    </>
  );
}

export default ImageUploadForm;
