import { useParams } from "react-router-dom";
import useDonationData from "../../Hooks/useDonationData";
import { useEffect, useState} from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import { saveToLocalStorage } from "../../Utils/localStorage";


const DonationDetails = () => {
  const [details, setDetails]=useState();
  const {id}=useParams();
  const {donationCard}=useDonationData();
  useEffect(()=>{
    const findData=donationCard.find(item=>item.id===+id);
    setDetails(findData)
  },[donationCard, id])

  const handleDonate =()=>{
    saveToLocalStorage(details)
    toast.success('Added Successfully')
  }

  const {picture, price,title,description, category_bg,card_bg,text_button_bg  }=details || {}
  return (
    <div>
      <Card style={{backgroundColor: card_bg}} className=" max-w-7xl  mx-auto h-[825px] mt-8 rounded-md shadow-none overflow-hidden ">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className=" m-0 rounded-none relative"
      >
        <img
          src={picture}
          alt={title}
          className="w-full"
        />
        <div className="bg-black absolute bottom-0 w-full p-8 bg-opacity-30">
          <Button onClick={handleDonate}  style={{backgroundColor:category_bg}} size="md" className="text-base" > Donate {price}</Button>
        </div>
      </CardHeader>
      <CardBody>
        <Typography style={{color:text_button_bg}} variant="h4" color="blue-gray">
          {title}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          {description}
        </Typography>
      </CardBody>
    </Card>
    <ToastContainer/>
    </div>
  );
};

export default DonationDetails;