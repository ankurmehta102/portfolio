import Profile from "/images/profile.jpg";
import Text from "./Text";

function ProfileInfo() {
  return (
    <section id="info" className={`flex  items-center`}>
      <div
        id="profile-pic"
        className={` h-10 w-10 overflow-hidden rounded-full bg-white  laptop:h-14 laptop:w-14 `}
      >
        <img
          src={Profile}
          alt=""
          className=" h-full w-full rounded-full object-cover"
        />
      </div>
      <div
        id="name-section"
        className={` ml-1  flex h-full flex-col justify-center text-left fold:ml-2 laptop:ml-4 `}
      >
        <Text size="large">Ankur Mehta</Text>
        <Text size="small" isLight={true}>
          Full Stack Developer
        </Text>
      </div>
    </section>
  );
}

export default ProfileInfo;
