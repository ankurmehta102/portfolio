import Profile from "../../assets/images/profile.webp";
import Text from "../ui/Text";
import Heading from "../ui/Heading";

function Header() {
  return (
    <section id="info" className={`flex  w-full items-center`}>
      <div
        id="profile-pic"
        className={` h-14 w-14 overflow-hidden rounded-full border-[2px] border-white`}
      >
        <img
          src={Profile}
          alt=""
          className=" h-full w-full rounded-full object-cover"
        />
      </div>
      <div
        id="name-section"
        className={` ml-2 mt-1 flex h-full flex-col justify-center text-left`}
      >
        <Heading variant="SubHeading" className="laptop:text-2xl">
          Ankur Mehta
        </Heading>
        <Text liteText={true} className=" laptop:text-xl">
          Full Stack Developer
        </Text>
      </div>
    </section>
  );
}

export default Header;
