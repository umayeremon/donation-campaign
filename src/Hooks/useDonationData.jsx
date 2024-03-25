import { useEffect, useState } from "react";


const useDonationData = () => {
  const [donationCard, setDonationCard]=useState([]);
  const [loader, setLoader]=useState(true)

  useEffect(()=>{
    const fetchData= async ()=>{
      setLoader(true)
      const res= await fetch('/data.json');
      const data= await res.json();
      setDonationCard(data);
      setLoader(false)
    }
    fetchData()
  },[])
  return (
    {donationCard, loader}
  );
};

export default useDonationData;