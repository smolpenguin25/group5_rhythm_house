import AlbumBand from "./AlbumBand";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BandList() {
  const [bandList, setbandList] = useState([]);

  const navigate = useNavigate();

  const getBands = () => {
    fetch("https://65d55b883f1ab8c63436c62f.mockapi.io/band", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((bands) => {
        //console.log("Student List: " + studentList);
        setbandList(bands);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  };

  //goi ham
  useEffect(() => {
    getBands();
  }, []);

  return (
    <div>
      <h1>STUDENT LIST</h1>
      <div className="student-list">
        {bandList.map((ban, index) => (
          <AlbumBand
            avatar={ban.image.avatar}
            name={ban.name}
            prince={ban.prince}
            id={ban.id}
            sell={ban.sell}
            percent={ban.percent}
            key={index}
            // editButton={
            //   <button onClick={() => navigate(`/edit/${ban.id}`)}>Edit</button>
            // }
          />
        ))}
      </div>
    </div>
  );
}

export default BandList;
