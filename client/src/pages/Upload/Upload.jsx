import { Link, useNavigate } from "react-router-dom";
import { createUpload } from "../../models/Uploads";
import { useState } from "react";

export default function Upload() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  
  const handleImageChange = (e) => {
    setFormData({ ...formData, imgFile: e.target.files[0] });
  };

  const submit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const [key, value] of Object.entries(formData)) {
        formDataToSend.append(key, value);
    }
    const upload = await createUpload(formDataToSend);
    if (upload.status === 201) return navigate("/");
    setInfo(upload.msg);
  }

  return (
    <>
      <h1>Upload page</h1>
      <form encType="multipart/form-data">
        <input type="text" name="imgName" placeholder="Enter image name" onChange={handleChange} />
        <input type="file" name="imgFile" onChange={handleImageChange}/>
        <input type="submit" value="Upload file" onClick={submit}/>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
