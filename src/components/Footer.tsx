import SocialLinks from "./SocialLinks";
import Text from "./Text";

function Footer() {
  return (
    <div id="footer" className=" flex w-full flex-col  pt-8 text-center">
      <SocialLinks />
      <a href="" className="mt-2">
        <Text size="small" isLight={true}>
          ankurmehta9517@gmail.com
        </Text>
      </a>
    </div>
  );
}

export default Footer;
