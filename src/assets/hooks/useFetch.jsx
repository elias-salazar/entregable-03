import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (id) => {
  const [rmLocation, setRmLocation] = useState({});
  const [numResta, setNumResta] = useState(0);
  const [numSuma, setNumSuma] = useState(4);

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${(id = randomId)}/`)
      .then((res) => setRmLocation(res.data))
      .finally(setNumResta(0), setNumSuma(4));
  }, []);
  const searchLocation = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${id}/`)
      .then((res) => setRmLocation(res.data))
      .finally(setNumResta(0), setNumSuma(4));
  };

  return { rmLocation, searchLocation, numResta, numSuma };
};

export default useFetch;
