import { useState } from "react";

const useFile = () => {
  const [url, seturl] = useState("");
  const FileHandler = (event) => {
    let fileInputControl = event.target;
    let files = fileInputControl.files;
    let firstfile = files[0];
    let fileReader = new FileReader();
    fileReader.onload = function (event) {
      let fileContents = event.target.result;
      seturl(fileContents);
    };

    fileReader.readAsDataURL(firstfile);
  };

  return {
    FileHandler,
    url,
  };
};

export default useFile;
