import React from "react";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import PageContainer from "../components/PageContainer/PageContainer";
import { MotionDiv } from "../components/MotionDiv/MotionDiv";

export default function page() {
  return (
    <PageContainer>
      <MotionDiv
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}>
        <GetInTouch />
      </MotionDiv>
    </PageContainer>
  );
}
