import React from "react";

const DataLocation = ({ location }) => {
  return (
    <div className="dataLocation">
      <p>
        <b>Type:</b> {location.type}{" "}
      </p>
      <p>
        <b>Dimension:</b> {location.dimension}
      </p>
      <p>
        <b>population:</b> {location.residents?.length}
      </p>
    </div>
  );
};

export default DataLocation;
