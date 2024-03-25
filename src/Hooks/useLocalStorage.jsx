import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../Utils/localStorage";


const useLocalStorage = () => {
  const [getData, setGetData]=useState([]);

  useEffect(()=>{
    setGetData(getFromLocalStorage())
  },[])
  return {getData};
};

export default useLocalStorage;