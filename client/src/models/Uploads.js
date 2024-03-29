export const getUploads = async () => {
    const req = await fetch("http://localhost:3000/uploads", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await req.json();
    return {
      status: req.status,
      payload: data.payload,
      msg: data.msg,
    };
  };
  export const getUpload = async (id) => {
    const req = await fetch(`http://localhost:3000/uploads/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await req.json();
    return {
      status: req.status,
      payload: data.payload,
      msg: data.msg,
    };
  };
  export const createUpload = async (formData) => {
    const req = await fetch(`http://localhost:3000/uploads`, {
      method: "POST",
      body: formData,
    });
    const data = await req.json();
    return {
      status: req.status,
      payload: data.payload,
      msg: data.msg,
    };
  };