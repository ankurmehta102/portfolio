import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import Icon from "./Icon";

function SocialLinks() {
  return (
    <section
      id="social-links"
      className={`flex w-full items-center justify-start`}
    >
      <Icon link="https://www.linkedin.com/in/ankur9517/">
        <FaLinkedinIn className=" h-full w-full " />
      </Icon>
      <Icon link="https://github.com/ankurmehta102">
        <FaGithub className=" h-full w-full " />
      </Icon>
      <Icon link="https://twitter.com/ankurmehta01">
        <FaXTwitter className=" h-full w-full " />
      </Icon>
    </section>
  );
}

export default SocialLinks;
