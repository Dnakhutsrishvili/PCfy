import React, { useEffect, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

import Button from "./Button";
import classes from "./ImageUploadForm.module.css";
import img from "../images/uploadedimage.png";

function ImageUploadForm(props) {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files

    props.getLeptopImage(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
}

export default ImageUploadForm;
