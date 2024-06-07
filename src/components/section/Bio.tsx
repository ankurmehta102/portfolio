import Button from "../ui/Button";
import Text from "../ui/Text";

function Bio() {
  return (
    <div className="flex w-full flex-col items-center justify-center px-3 py-10">
      <div className=" my-2">
        <Text
          liteText={true}
          className="text-base leading-height-3 tracking-normal"
        >
          Passionate full-stack developer with 1.5 years of experience dedicated
          to crafting elegant solutions that drive innovation and exceed
          expectations.
        </Text>
      </div>

      <div className="flex w-full items-center justify-start">
        <Button>Resume</Button>
      </div>
    </div>
  );
}

export default Bio;
