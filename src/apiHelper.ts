import Axios from "axios";

export const getStatusCode = () => {
  return Axios.post("http://localhost:8080/", {
    name: "Nikhil",
    age: "27",
  })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      console.dir(err.response.status);
      return err.response;
    });
};
