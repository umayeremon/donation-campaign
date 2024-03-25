
import useLocalStorage from "../../Hooks/useLocalStorage";
import DonationCard from "../../components/DonationCard/DonationCard";
import { Button } from "@material-tailwind/react";
import { useState } from "react";


const Donation = () => {
  const {getData} =useLocalStorage();
  const [seeAll, setSeeAll]=useState(false);

  const handleSeeAll=()=>{
    setSeeAll(!seeAll)
  }

  return (
   <div className="mt-8">
     <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto gap-4 ">
      {
        getData.slice(0,seeAll? getData.length:4).map((card,idx)=><DonationCard key={idx} card={card}></DonationCard>)
      }
    </div>
   <div className="flex  justify-center mt-4">
    <Button onClick={handleSeeAll}   variant="text" 
    className="text-white text-base font-medium bg-green-400 hover:bg-green-800 " >
     {seeAll? 'See Less': 'See All' }
    </Button>
   </div>
   </div>
  );
};

export default Donation;