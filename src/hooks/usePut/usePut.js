import {useEffect, useState} from 'react';
import axios from 'axios';
const usePut = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const putData = async (url, apiData) => {
    try {
      setError(null);
      setLoading(true);

      const {data: responseData} = await axios.put(url, apiData, {
        withCredentials: true,
      });
      setData(responseData);
      //console.log(responseData.data.user);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setData(null);
      //console.log(error.message);
      setError(error);
    }
  };

  return {loading, error, data, putData};
};
export default usePut;
