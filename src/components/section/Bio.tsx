import Button from "../ui/Button";
import Heading from "../ui/Heading";
import SocialLinks from "../ui/SocialLinks";
import Text from "../ui/Text";

function Bio() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="w-full ">
        <Heading variant="SubHeading">
          Building bussiness driven by design.
        </Heading>
      </div>
      <div className="my-2">
        <Text
          liteText={true}
          className="text-pretty text-base leading-height-3 tracking-normal"
        >
          Experienced Full-Stack Developer, 1.5 Years of Expertise in Innovative
          and High-Quality Solution Development.
        </Text>
      </div>

      <div className="flex w-full items-center justify-start">
        <Button>Resume</Button>
        <div className="ml-5">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default Bio;
