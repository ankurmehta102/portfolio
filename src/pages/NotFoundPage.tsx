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
        className=" text-3xl font-bold leading-height-3 tracking-widest laptop:text-3xl"
      >
        Page Not Found
      </Text>
      <Button onClick={handleClick} className=" px-4">
        <div className="flex items-center justify-center space-x-1">
          <IoArrowBackCircle size={25} /> <p className="text-2xl">Back</p>
        </div>
      </Button>
    </div>
  );
}

export default NotFoundPage;
