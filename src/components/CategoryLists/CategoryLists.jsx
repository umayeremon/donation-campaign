import useDonationData from "../../Hooks/useDonationData";
import Category from "../Category/Category";


const CategoryLists = () => {
  const {donationCard}=useDonationData();
  return (
    <div className="grid md: grid-cols-4 my-12 gap-8 mx-auto max-w-7xl">
      {
        donationCard.map((card, idx)=> <Category key={idx} card={card}></Category>)
      }
    </div>
  );
};

export default CategoryLists;