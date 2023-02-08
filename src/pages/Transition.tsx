import React from "react";
import { ClipLoader } from "react-spinners";
import { PageLayout } from "../components";

const Transition: React.FC = () => (
  <PageLayout>
    <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-screen h-screen">
      <ClipLoader />
    </div>
  </PageLayout>
);

export default Transition;
