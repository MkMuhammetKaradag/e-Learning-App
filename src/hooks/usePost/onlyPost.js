import {useEffect, useState} from 'react';
import axios from 'axios';
const onlyPost = () => {
  const postData = async url => {
    try {
      console.log('onlyPost', url);
      const {data: responseData} = await axios.post(url, null, {
        withCredentials: true,
      });
      console.log('onlyPost', responseData);
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   postData();
  // }, []);

  return {postData};
};
export default onlyPost;
