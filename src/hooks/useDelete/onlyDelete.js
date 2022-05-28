import {useEffect, useState} from 'react';
import axios from 'axios';
const onlyDelete = () => {
  const deleteData = async url => {
    try {
      //console.log('onlydelete', url);
      const {data: responseData} = await axios.delete(url, null, {
        withCredentials: true,
      });
      //console.log('onlydelete', responseData);
    } catch (error) {
      console.log(error);
    }
  };

  return {deleteData};
};
export default onlyDelete;
