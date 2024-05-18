import Profile from "/images/profile.jpg";
import Text from "./Text";
import Heading from "./Heading";

function ProfileInfo() {
  return (
    <section id="info" className={`flex  items-center`}>
      <div
        id="profile-pic"
        className={` h-14 w-14 overflow-hidden rounded-full `}
      >
        <img
          src={Profile}
          alt=""
          className=" h-full w-full rounded-full object-cover"
        />
      </div>
      <div
        id="name-section"
        className={` ml-2 flex h-full flex-col justify-center text-left`}
      >
        <Heading variant="SubHeading">Ankur Mehta</Heading>
        <Text liteText={true} className="mt-1">
          Full Stack Developer
        </Text>
      </div>
    </section>
  );
}

export default ProfileInfo;
