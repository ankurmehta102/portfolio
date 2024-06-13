import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import Icon from "./Icon";

function SocialLinks() {
  return (
    <section
      id="social-links"
      className={`flex w-full items-center justify-start`}
    >
      <Icon link="https://www.linkedin.com/in/ankur9517/">
        <FaLinkedinIn size={22} />
      </Icon>
      <Icon link="https://twitter.com/ankurmehta01">
        <SiGmail size={22} />
      </Icon>
      <Icon link="https://github.com/ankurmehta102">
        <FaGithub size={22} />
      </Icon>
      <Icon link="https://twitter.com/ankurmehta01">
        <FaXTwitter size={22} />
      </Icon>
    </section>
  );
}

export default SocialLinks;
