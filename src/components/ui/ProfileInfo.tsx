import Profile from "/images/profile.jpg";
import Text from "./Text";
import Heading from "./Heading";

function ProfileInfo() {
  return (
    <section id="info" className={`flex  items-center`}>
      <div
        id="profile-pic"
        className={` h-14 w-14 overflow-hidden rounded-full border-[1px] border-white`}
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
        <Heading variant="SubHeading" className="">
          Ankur Mehta
        </Heading>
        <Text liteText={true} className="text-base">
          Full Stack Developer
        </Text>
      </div>
    </section>
  );
}

export default ProfileInfo;
