import { FC } from "react";
import CustomButton from "../../components/CustomButton";

const Home: FC = () => {
  return (
    <div className="w-full mt-10 flex justify-center ">
      <CustomButton title="Add task" buttonConatinerStyle="mx-auto" />
    </div>
  );
};

export default Home;
