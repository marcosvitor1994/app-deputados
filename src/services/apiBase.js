import axios from "axios";

const ApiDeputados = axios.create({
  baseURL: "https://dadosabertos.camara.leg.br/api/v2",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default ApiDeputados;
