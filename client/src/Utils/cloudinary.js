const CLOUDINARY_UPLOAD_PRESET = "ml_default";
const cloudinaryUploadUrl = import.meta.env.VITE_CLOUDINARY_IMAGE_UPLOAD_URL;

export const cloudinaryImage = (e, setImageUrl) => {
  //setImageUrl(URL.createObjectURL(e.target.files[0]));
  const file = e.target.files[0];
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

  fetch(cloudinaryUploadUrl, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.secure_url !== "") {
        const uploadedFileUrl = data.secure_url;
        console.log("🚀 + .then + uploadedFileUrl:", uploadedFileUrl);
        setImageUrl(uploadedFileUrl);
      }
    })
    .catch((err) => console.error(err));
};
