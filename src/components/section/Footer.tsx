import SocialLinks from "../ui/SocialLinks";
import Text from "../ui/Text";

function Footer() {
  return (
    <div
      id="footer"
      className=" mb-2  flex w-full flex-col border-t border-slate-700 px-3 pt-4"
    >
      <SocialLinks />
      <a href="" className="mt-2">
        <Text liteText={false} className="text-sm  hover:text-slate-400">
          ankurmehta9517@gmail.com
        </Text>
      </a>
    </div>
  );
}

export default Footer;
