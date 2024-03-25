import { useParams } from "react-router-dom";
import useDonationData from "../../Hooks/useDonationData";
import { useEffect, useState} from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";

const DonationDetails = () => {
  const [details, setDetails]=useState();
  console.log(details)
  const {id}=useParams();
  const {donationCard}=useDonationData();
  useEffect(()=>{
    const findData=donationCard.find(item=>item.id===+id);
    setDetails(findData)
  },[donationCard, id])

  const {picture, price,title,description, category_bg }=details || {}
  return (
    <div>
      <Card className=" max-w-7xl  mx-auto h-[800px] mt-8 rounded-md shadow-none overflow-hidden ">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-4 rounded-md"
      >
        <img
          src={picture}
          alt="ui/ux review check"
          className="w-full"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {title}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          {description}
        </Typography>
      </CardBody>
    </Card>
    </div>
  );
};

export default DonationDetails;