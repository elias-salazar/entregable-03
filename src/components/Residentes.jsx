import axios from "axios";
import React, { useEffect, useState } from "react";

const Residentes = ({ url }) => {
  const [resident, setResident] = useState({});
  useEffect(() => {
    axios.get(url).then((res) => setResident(res.data));
  }, []);
  return (
    <div className="card-resident">
      <div className="img-card-resident">
        <img src={resident.image} alt="" />
      </div>

      <div className="data-card-resident">
        <h3 className="card-name">{resident.name}</h3>

        <p>
          {resident.status == "Alive" ? (
            <i className="fa-sharp fa-solid fa-circle green"></i>
          ) : resident.status == "Dead" ? (
            <i className="fa-sharp fa-solid fa-circle red"></i>
          ) : (
            <i className="fa-sharp fa-solid fa-circle gray"></i>
          )}{" "}
          {resident.status} - {resident.species}
        </p>
        <p>
          <b>Origin:</b>

          {resident.origin?.name}
        </p>
        <p>
          <b>Episodes where appear:</b>
          {resident.episode?.length}
        </p>
      </div>
    </div>
  );
};

export default Residentes;
