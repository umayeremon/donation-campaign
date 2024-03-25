import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Category = ({card}) => {
  const {id, picture, category, title, text_button_bg,card_bg,category_bg }=card || {};
  return (
    <div>
      <Link to={`/donation_details/${id}`}>
      <Card style={{backgroundColor: card_bg}} className=" overflow-hidden cursor-pointer">
      <CardHeader color="blue-gray" className="rounded-none shadow-none m-0 h-48">
        <img
          src={picture}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Button style={{backgroundColor: category_bg}} size="sm" className="mb-3 font-bold">{category}</Button>
        <Typography variant="h6" color={text_button_bg} style={{color: text_button_bg}}>
          {title}
        </Typography>
      </CardBody>
      </Card>
      </Link>
    </div>
  );
};

Category.propTypes={
  card: PropTypes.object.isRequired,
}

export default Category;