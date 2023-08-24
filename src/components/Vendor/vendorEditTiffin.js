import React, { useState } from "react";
import axios from "axios";
import config from "../../config";
import { useNavigate } from "react-router-dom";

function EditTiffin() {
  const [tiffinName, setTiffinName] = useState("");
  const [description, setDescription] = useState("");
  const [tiffinCategory, setCategory] = useState("");
  const [tiffinPrice, setPrice] = useState("");
  const [imageLink, setImageLink] = useState("");

  const navigate = useNavigate();
  const handleEditTiffin = () => {
    try {
      const responsePromise = axios.patch(
        `${config.backendUrl}/api/Vendors/updatetiffin`,
        {
          tiffinName,
          description,
          tiffinCategory,
          tiffinPrice,
          imageLink,
        }
      );
      // Handle successful tiffin addition

      responsePromise.then((response) => {
        console.log("Vendors/addtiffin response: ", response);
      });
    } catch (error) {
      // Handle tiffin addition error
    }
  };

  return (
    <div className="container-tiffin">
      <center>
        <h1>Edit Tiffin</h1>
        <input
          style={{ border: "2px solid Green", margin: "10px", width: "30%" }}
          type="text"
          placeholder="Tiffin Name"
          value={tiffinName}
          onChange={(e) => setTiffinName(e.target.value)}
        />
        <br />
        <input
          style={{
            border: "2px solid Green",
            margin: "10px",
            width: "30%",
            height: "150px",
          }}
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <input
          style={{ border: "2px solid Green", margin: "10px", width: "30%" }}
          type="text"
          placeholder="Category"
          value={tiffinCategory}
          onChange={(e) => setCategory(e.target.value)}
        />
        <br />
        <input
          style={{ border: "2px solid Green", margin: "10px", width: "30%" }}
          type="text"
          placeholder="Price"
          value={tiffinPrice}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <input
          style={{ border: "2px solid Green", margin: "10px", width: "30%" }}
          type="text"
          placeholder="Image Link"
          value={imageLink}
          onChange={(e) => setImageLink(e.target.value)}
        />
        <br />
        <br />
        <br />
        <button onClick={handleEditTiffin} className="add-button info-button">
          Update
        </button>
        <span style={{ marginLeft: "10px", marginRight: "10px" }}></span>
        <button
          onClick={() => navigate("/VendorTiffins")}
          className="add-button danger-button"
        >
          Cancel
        </button>
      </center>
    </div>
  );
}

export default EditTiffin;
