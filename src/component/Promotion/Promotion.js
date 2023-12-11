// PromotionForm.js
import React, { useState } from 'react';
import styles from "./Promotion.module.css";
import { submittools } from "../../api/internal";
import { useNavigate } from "react-router-dom";
import TextInput from "../../components/TextInput/TextInput";

function PromotionForm() {

    const navigate = useNavigate();

  const [toolName, setToolName] = useState('');
  const [description, setDescription] = useState('');
  const [website, setWebsite] = useState('');
  const [g2Review, setG2Review] = useState('');
  
    const submitHandler = async () => {
      // Customize the data based on your requirements
      const data = {
        name: toolName,
        description: description,
        websiteUrl: website,
        review : g2Review
      
      };
      const response = await submittools(data);
      if (response.status === 201) {
        navigate("/");
      }
    };
  
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}><h2>AI Tool Promotion Form</h2></div>
        {/* Title input */}
        <TextInput
          type="text"
          name="toolName"
          placeholder="Title"
          value={toolName}
          onChange={(e) => setToolName(e.target.value)}
          style={{ width: "60%" }}
        />
        {/* Content input */}
        <TextInput
          type="text"
          name="description"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: "60%" }}
        />
          <TextInput
          type="text"
          name="website"
          placeholder="websiteURL"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          style={{ width: "60%" }}
        />
      
        <TextInput
          type="text"
          name="g2Review"
          placeholder="g2Review"
          value={g2Review}
          onChange={(e) => setG2Review(e.target.value)}
          style={{ width: "60%" }}
        />
        <button
          className={styles.submit}
          onClick={submitHandler}
          disabled={toolName === "" || description === "" || website === ""}
        >
          Submit
        </button>
      </div>
    );
  }
export default PromotionForm;
