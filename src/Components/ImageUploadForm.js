import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import Button from "./Button";
import classes from "./ImageUploadForm.module.css";

function ImageUploadForm(props) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  console.log(files);

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <div></div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className={classes.parent}>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p className={classes.text}>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</p>
        <div className={classes.btn}>
          <Button
            stats={{ height: "60px", width: "233px" }}
            text={"ატვირთე"}
          ></Button>
        </div>
      </div>
      <aside>{thumbs}</aside>
    </section>
  );
}

export default ImageUploadForm;
