import axios from 'axios';

export const fetchLogin = async input => {
  const data = await axios.post(
    `http://localhost:8080/api/v1.0/auth/login`,
    input,
  );
  console.log(data);
  return data;
};

export const myApi = 'http://192.168.1.35:8080/api/v1.0';
