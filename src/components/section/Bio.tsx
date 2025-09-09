import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import ReactGA from "react-ga4";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import Icon from "../ui/Icon";

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
        <div
          id="social-links"
          className={`ml-5 flex w-full items-center justify-start space-x-4`}
        >
          <Icon
            link="https://www.linkedin.com/in/ankur9517/"
            target="_blank"
            tooltipText="Linkedin"
          >
            <FaLinkedinIn size={22} />
          </Icon>
          <Icon
            link="mailto:ankurmehta9517@gmail.com"
            tooltipText="ankurmehta9517@gmail.com"
          >
            <SiGmail size={22} />
          </Icon>
          <Icon
            link="https://github.com/ankurmehta102"
            target="_blank"
            tooltipText="Github"
          >
            <FaGithub size={22} />
          </Icon>
        </div>
        );
      </div>
    </div>
  );
}

export default Bio;
