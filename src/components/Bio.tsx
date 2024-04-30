import Button from "./Button";

function Bio() {
  return (
    <div className="flex w-full flex-col items-center justify-center px-3 py-20">
      <div className=" mb-2 text-white">
        <p className="leading-height-2 fold:leading-height-3 text-sm fold:text-lg">
          Experienced software developer skilled in React.js, Nest.js(Node.js),
          and MsSQL with 1.5 years of proven expertise and strong full-stack
          development skills.
        </p>
      </div>

      <div className="flex w-full justify-start ">
        <Button>Resume</Button>
      </div>
    </div>
  );
}

export default Bio;
