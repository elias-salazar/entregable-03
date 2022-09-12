import axios from "axios";
import React, { useEffect, useState } from "react";
import useFetch from "../assets/hooks/useFetch";
import DataLocation from "./DataLocation";
import Residentes from "./Residentes";

const RickMorty = () => {
  const [idLocation, setIdLocation] = useState("");
  const { rmLocation, searchLocation } = useFetch(idLocation);

  // const [rickMorty, setRickMorty] = useState({});
  //
  // const [numM, setNumM] = useState(0);
  // const [numP, setNumP] = useState(4);

  // useEffect(() => {
  //   const randomId = Math.floor(Math.random() * 126) + 1;
  //   axios
  //     .get(`https://rickandmortyapi.com/api/location/${randomId}/`)
  //     .then((res) => setRickMorty(res.data))
  //     .finally(setNumM(0), setNumP(4));
  // }, []);

  //!PRUEBA DE COSAS

  //!FIN DE PRUEBAS

  return (
    <div className="container">
      <div className="search">
        <input
          type="text"
          placeholder="type a location id"
          value={idLocation}
          onChange={(e) => setIdLocation(e.target.value)}
        />
        <button onClick={searchLocation}>search</button>
      </div>
      <h1>{rmLocation?.name}</h1>
      {<DataLocation location={rmLocation} key={rmLocation.id} />}{" "}
      <h2 className="title-residentes">residentes</h2>
      {rickMorty.residents?.length == 0 ? (
        "no hay residentes "
      ) : (
        <>
          <div className="content-cards-residents">
            {numP > 5 && (
              <button onClick={() => setNumM(numM - 4)(setNumP(numP - 4))}>
                <p>atras</p>
              </button>
            )}
            {rickMorty.residents?.map(
              (resident, i) =>
                i >= numM &&
                i < numP && <Residentes url={resident} key={resident} />
            )}
            {rickMorty.residents?.length > numP && (
              <button onClick={() => setNumM(numM + 4)(setNumP(numP + 4))}>
                <p>adelante</p>
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default RickMorty;
