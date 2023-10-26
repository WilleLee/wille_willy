import MarkdownWrapper from "@/components/common/MarkdownWrapper";
import Image from "next/image";
import github from "@/svgs/github.svg";
import linkedin from "@/svgs/linkedin.svg";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image src={github} width={48} alt="" />
        <Image src={linkedin} width={48} alt="" />
      </div>
      <MarkdownWrapper category="test" id="0" />
      <div>
        &copy; 2023 Inpyo Lee, All Rights Reserved, Powered by Next.js and
        Vercel.
      </div>
    </div>
  );
};

export default Home;
