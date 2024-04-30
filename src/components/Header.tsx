import ProfileInfo from "./ProfileInfo";
import SocialLinks from "./SocialLinks";

function ProfileSection() {
  return (
    <header className={`flex w-full items-center justify-between px-3`}>
      <ProfileInfo />
      <SocialLinks />
    </header>
  );
}

export default ProfileSection;
