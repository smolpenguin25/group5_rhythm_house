import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function SoloDetail() {
  //lay param
  const { id } = useParams();

  const [solo, setsolo] = useState({});

  const getSolo = () => {
    fetch(`https://65d55b883f1ab8c63436c62f.mockapi.io/solo/${id}`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((sol) => {
        //console.log("Student List: " + studentList);
        setsolo(sol);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  };

  //goi ham
  useEffect(() => {
    getSolo();
  });

  return (
    <div>
      <h1>Student Detail</h1>
      <h1 className="user-name">{solo.name}</h1>
      <img src={solo.avatar} alt={solo.avatar} className="user-avatar" />
      <h2 className="user-position">Price: {solo.price}</h2>
    </div>
  );
}

export default SoloDetail;
