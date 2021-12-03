import axios from 'axios';
const hangleLogin = (formValue: any, url: string) => {
  axios.post(url, formValue).then((response) => console.log(response));
};
const hangleSignUp = (formValue: any, url: string) => {
  axios.post(url, formValue).then((response) => console.log(response));
};

export { hangleLogin, hangleSignUp };
