import React from "react";

type Props = {
  children: React.ReactNode;
};

const PageLayout: React.FC<Props> = ({ children }) => (
  <div className="w-screen h-screen grid grid-flow-row auto-rows-auto">{children}</div>
);

export default PageLayout;
