import { FC } from "react";

type CustomButtonProps = {
  title: string;
  buttonConatinerStyle?: string;
  buttonStyle?: string;
};

const CustomButton: FC<CustomButtonProps> = ({
  title,
  buttonConatinerStyle = "",
  buttonStyle = "",
}) => {
  return (
    <div className={`${buttonConatinerStyle}`}>
      <button
        className={`border-2 border-rose-500 py-3 px-4 rounded-full hover:cursor-pointer hover:border-rose-400 transition duration-200 ${buttonStyle}`}
      >
        {title}
      </button>
    </div>
  );
};

export default CustomButton;
