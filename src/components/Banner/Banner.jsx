import { Button, Input, Typography } from "@material-tailwind/react";
import React from "react";


const Banner = () => {
  const [search, setSearch] = React.useState("");
  const onChange = ({ target }) => setSearch(target.value);
  return (
    <div className="h-[250px] md:h-[500px] relative flex flex-col justify-center items-center mt-6">
      <div className="absolute bg-[url('/Images/Rectangle.png')] inset-0 bg-no-repeat bg-cover bg-center opacity-15">

      </div>
      <Typography variant="h2" className="mb-6 text-xl md:text-4xl">I Grow By Helping People In Need</Typography>
      <div className="relative flex md:w-full max-w-[24rem]">
      <Input
        type="text"
        label="Search here...."
        value={search}
        onChange={onChange}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        color={search ? "green" : "red"}
        className="!absolute right-1 top-1 rounded"
      >
        Search
      </Button>
    </div>
    </div>
  );
};

export default Banner;