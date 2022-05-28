import {useEffect, useState} from 'react';
import axios from 'axios';
const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async url => {
    try {
      setLoading(true);
      //console.log(url);
      const {data: res} = await axios.get(url, {
        withCredentials: true,
      });
      setData(res.data);
      //console.log('fetc-', res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      //console.log(error);
      setError(error.message);
    }
  };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return {loading, error, data, fetchData};
};
export default useFetch;
