"use client";

import { ReactElement } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #9d8d79;
`;

const CtaBtn = ({ children }: { children: ReactElement }) => {
  return <Button>{children}</Button>;
};

export default CtaBtn;
