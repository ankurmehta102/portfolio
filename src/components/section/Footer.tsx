import SocialLinks from "../ui/SocialLinks";
import Text from "../ui/Text";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.div
      id="footer"
      className="  flex w-full flex-col border-t border-slate-700 px-3 pt-4"
    >
      <SocialLinks />
      <a href="" className="mt-2">
        <Text
          liteText={false}
          className="hover:text-slate-400   laptop:text-sm"
        >
          ankurmehta9517@gmail.com
        </Text>
      </a>
    </motion.div>
  );
}

export default Footer;
