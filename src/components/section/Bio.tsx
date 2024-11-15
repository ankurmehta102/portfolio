import Button from "../ui/Button";
import Heading from "../ui/Heading";
import SocialLinks from "../ui/SocialLinks";
import Text from "../ui/Text";
import ReactGA from "react-ga4";

function Bio() {
  const resume_link = import.meta.env.VITE_RESUME_LINK;
  function handleResumeClick() {
    ReactGA.event({
      category: "Button",
      action: "Resume_Button_Click",
      label: `link:${resume_link}`,
    });
    window.open(resume_link, "_blank");
  }
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="w-full ">
        <Heading variant="SubHeading" className="text-balance">
          Building seamless web experiences from front to back.
        </Heading>
      </div>
      <div className="my-2">
        <Text
          liteText={true}
          className="text-pretty text-base leading-height-3 tracking-normal"
        >
          I’m a Full-Stack Developer with hands-on experience working on diverse
          projects, ranging from web applications to desktop software
          development.
        </Text>
      </div>

      <div className="flex w-full items-center justify-start">
        <Button onClick={handleResumeClick}>Resume</Button>
        <div className="ml-5">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default Bio;
