import {useEffect, useState} from 'react';
import axios from 'axios';
const usePost = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (url, apiData) => {
    try {
      setError(null);
      setLoading(true);
      // setError(null);
      //console.log('usePost', apiData);
      const {data: responseData} = await axios.post(url, apiData, {
        withCredentials: true,
      });
      setData(responseData);
      //console.log(responseData.data.user);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setData(null);
      console.log(error);
      setError(error);
    }
  };
  // useEffect(() => {
  //   postData();
  // }, []);

  return {loading, error, data, postData};
};
export default usePost;
