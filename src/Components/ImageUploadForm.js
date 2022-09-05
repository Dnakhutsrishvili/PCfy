import React, { useState, useCallback } from "react";
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

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    const imgFile = acceptedFiles[0];
    setImage(imgFile);
    const formData = new FormData();
    formData.append("userpic", imgFile, imgFile.name);
    console.log(image);
    props.getImage(imgFile);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <div
        style={
          (props.border,
          props.state
            ? { width: " 358px", height: " 244px" }
            : { width: " 878px", height: " 423px" })
        }
        className={classes.parent}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {image.length < 1 ? (
          <div className={classes.uploadedFlex}>
            <p className={classes.text}>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</p>
            <Button
              state={props.state}
              stats={{ height: "60px", width: "233px" }}
              text={"ატვირთე"}
            ></Button>
          </div>
        ) : (
          <div>
            <p className={classes.text}>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</p>
            <img src={image} alt="img"></img>
          </div>
        )}
      </div>

      {image.length < 1 ? (
        <div></div>
      ) : (
        <div className={classes.uploadedParent}>
          <div className={classes.flex}>
            <img className={classes.img} src={uploadedimage} alt="img"></img>
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
