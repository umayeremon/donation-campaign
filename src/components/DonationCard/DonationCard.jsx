import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const DonationCard = ({card}) => {
  const {id, picture,price, category, title, text_button_bg,card_bg,category_bg}=card
  return (
    <div>
      <Card style={{backgroundColor: card_bg}} className="w-full max-w-[48rem] flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0  rounded-r-none"
      >
        <img
          src={picture}
          alt={title}
          className=" h-[200px] w-full object-cover"
        />
      </CardHeader>
      <CardBody>
      <Button style={{backgroundColor: category_bg}} size="sm" className="mb-3 font-bold">{category}</Button>
      <Typography variant="h6" color="black" className="text-lg">
          {title}
        </Typography>
      <Typography variant="h6"  style={{color: text_button_bg}}>
          {price}
        </Typography>

          <Link to={`/donation_details/${id}`}>
          <Button variant="text" style={{backgroundColor: category_bg}} className="text-white">
            View Details
          </Button>
          </Link>
      </CardBody>
    </Card>
    </div>
  );
};


DonationCard.propTypes={
  card: PropTypes.object.isRequired
}

export default DonationCard;