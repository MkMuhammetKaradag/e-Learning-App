import {useEffect, useState} from 'react';
import axios from 'axios';
const useFetchOnly = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      //console.log(url, 'gelmedi');
      const {data: res} = await axios.get(url, {
        withCredentials: true,
      });
      setData(res.data);
      //console.log('fetc-asasas', res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      //console.log(error);
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return {loading, error, data};
};
export default useFetchOnly;
