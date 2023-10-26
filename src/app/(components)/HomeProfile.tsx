import React from "react";
import profile from "@/images/profile.jpg";
import Image from "next/image";

type Props = {};

const HomeProfile = (props: Props) => {
  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <Image src={profile} fill alt="" />
      </div>
      <div>
        <h2>Wille Lee</h2>
        <p>web frontend developer</p>
      </div>
    </div>
  );
};

export default HomeProfile;
