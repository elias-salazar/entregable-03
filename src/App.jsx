import { useState } from "react";
import "./App.css";
import useFetch from "./assets/hooks/useFetch";
import Residentes from "./components/Residentes";
import DataLocation from "./components/DataLocation";
function App() {
  const [idLocation, setIdLocation] = useState("");

  const { rmLocation, numResta, numSuma, searchLocation } =
    useFetch(idLocation);
  const [numM, setNumM] = useState(numResta);
  const [numP, setNumP] = useState(numSuma);
  let hide = "hide";
  let hide1 = "hide";
  const move = () => {
    return setNumM(numM + 4), setNumP(numP + 4);
  };
  const back = () => {
    return setNumM(numM - 4), setNumP(numP - 4);
  };
  console.log(rmLocation.name);
  return (
    <div className="container">
      <div className="content-header">
        <div className="bg-header">
          <img src="src/assets/images/rym.png" alt="" />
        </div>

        <div className="search">
          <input
            type="text"
            placeholder="type a location id"
            value={idLocation}
            onChange={(e) => setIdLocation(e.target.value)}
          />
          <button onClick={searchLocation}>
            <b>search</b>
          </button>
        </div>
      </div>
      <div className="content-data-residents">
        <div className="data-location">
          <h2 className="title-location">{rmLocation.name}</h2>
          {<DataLocation location={rmLocation} key={rmLocation.id} />}
        </div>
        <h2 className="title-residentes">Residents:</h2>
        {rmLocation.residents?.length == 0 ? (
          <h4>No hay residentes..</h4>
        ) : (
          <>
            <div className="main">
              {numP > 5 && (hide = "")}
              <div className={`btn-move ${hide}`}>
                <i onClick={back} className="fa-solid fa-angle-left"></i>
              </div>
              <div className="content-cards-residents">
                {rmLocation.residents?.map(
                  (resident, i) =>
                    i >= numM &&
                    i < numP && <Residentes url={resident} key={resident} />
                )}
                {rmLocation.residents?.length % 4 === 0 && (
                  <>
                    <button>hola</button>
                  </>
                )}
              </div>
              {rmLocation.residents?.length > numP && (hide1 = "")}

              <div className={`btn-move ${hide1}`}>
                <i onClick={move} className="fa-solid fa-angle-right"></i>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
