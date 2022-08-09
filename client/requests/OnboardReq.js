import axios from "axios";

export const LoginReq = (email, password) => {
  axios
    .post("https://ethriftbe.herokuapp.com/signin", {
      email: email,
      password: password,
    })
    .then((response) => {
      alert("success");
      console.log(response.data);
    })
    .catch((error) => {
      alert(error);
    });
};

export const SignUpReq = (email, password, role, handle) => {
  axios
    .post("https://ethriftbe.herokuapp.com/signup", {
      email: email,
      password: password,
      role: role,
      handle: handle,
    })
    .then((response) => {
      alert("User created!");
      console.log(response.data);
    })
    .catch((error) => {
      alert(error);
    });
};
