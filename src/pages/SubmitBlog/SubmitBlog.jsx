import React, { useState } from "react";
import { submitBlog } from "../../api/internal";
import { useNavigate } from "react-router-dom";
import styles from "./SubmitBlog.module.css";
import TextInput from "../../components/TextInput/TextInput";

function SubmitBlog() {
  const navigate = useNavigate();

  // States for each field
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState("");
  const [varient, setVarient] = useState("");
  const [genre, setGenre] = useState([]);
  const [costrange, setCostrange] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [popupdec , setpopupdec] = useState("");

  const getPhoto = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPhoto(reader.result);
    };
  };

  const submitHandler = async () => {
    // Customize the data based on your requirements
    const data = {
      name: title,
      img: photo,
      varient: varient,
      genre: genre, // Handle genre based on your frontend input
      costrange: costrange,
      description: content,
      websiteUrl: websiteUrl,
      popUpDescription : popupdec
    };
    const response = await submitBlog(data);

    if (response.status === 201) {
      navigate("/submit");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Create a blog!</div>
      {/* Title input */}
      <TextInput
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "60%" }}
      />
      {/* Content input */}
      <TextInput
        type="text"
        name="content"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ width: "60%" }}
      />
        <TextInput
        type="text"
        name="popupdec"
        placeholder="popupdec"
        value={popupdec}
        onChange={(e) => setpopupdec(e.target.value)}
        style={{ width: "60%" }}
      />
      {/* Photo input */}
      <div className={styles.photoPrompt}>
        <p>Choose a photo</p>
        <input
          type="file"
          name="photo"
          id="photo"
          accept="image/jpg, image/jpeg, image/png"
          onChange={getPhoto}
        />
        {photo !== "" ? (
          <img src={photo} width={150} height={150} alt="chosen" />
        ) : (
          ""
        )}
      </div>
      <TextInput
        type="text"
        name="varient"
        placeholder="Varient"
        value={varient}
        onChange={(e) => setVarient(e.target.value)}
        style={{ width: "60%" }}
      />

      {/* Genre input - Customize based on your UI (e.g., dropdown, multi-select, etc.) */}
      <div>
        <label>Genre:</label>
        {/* Customize the input based on your UI for selecting multiple genres */}
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={genre.join(", ")} // Display selected genres as comma-separated
          onChange={(e) => setGenre(e.target.value.split(", "))} // Update genres as an array
          style={{ width: "60%" }}
        />
      </div>

      <TextInput
        type="text"
        name="costrange"
        placeholder="Cost Range"
        value={costrange}
        onChange={(e) => setCostrange(e.target.value)}
        style={{ width: "60%" }}
      />

      <TextInput
        type="text"
        name="websiteUrl"
        placeholder="Website URL"
        value={websiteUrl}
        onChange={(e) => setWebsiteUrl(e.target.value)}
        style={{ width: "60%" }}
      />

      <button
        className={styles.submit}
        onClick={submitHandler}
        disabled={title === "" || content === "" || photo === ""}
      >
        Submit
      </button>
    </div>
  );
}

export default SubmitBlog;
