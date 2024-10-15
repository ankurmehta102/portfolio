import Text from "../ui/Text";

function Footer() {
  return (
    <div id="footer" className=" flex w-full  justify-center  ">
      <Text
        liteText={true}
        className=" w-full border-b border-grey text-left  text-sm leading-[0.1em] laptop:text-base  laptop:leading-[0.1em]"
      >
        <span className="bg-background pr-2">ankurmehta9517@gmail.com</span>
      </Text>
    </div>
  );
}

export default Footer;
