import Text from "../components/ui/Text";
import Button from "../components/ui/Button";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="m-auto space-y-2 text-center">
      <h1 className="font-Primary text-8xl  tracking-widest text-white ">
        404
      </h1>
      <Text
        liteText={true}
        className=" text-3xl  leading-height-3  laptop:text-3xl"
      >
        Page Not Found
      </Text>
      <Button onClick={handleClick} className="">
        <div className="flex items-center space-x-1">
          <IoArrowBackCircle size={30} />{" "}
          <p className="font-Primary text-[1.35rem]">Back</p>
        </div>
      </Button>
    </div>
  );
}

export default NotFoundPage;
