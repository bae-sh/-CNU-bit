import axios from "axios";
const putAxiosData = (userInfo) => {
    axios
        .put(`http://localhost:4000/users/${userInfo["id"]}`, {
            id: userInfo["id"],
            password: userInfo["password"],
            cash: userInfo["cash"],
            coin: userInfo["coin"],
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
};
export default putAxiosData;
