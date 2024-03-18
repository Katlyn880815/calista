"use client";

import { ReactElement } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #9d8d79;
  border-radius: 1rem;
  padding: 1rem 1.2rem;
  color: #fff;
  box-shadow: 2px 3px 5px -2px rgba(157, 141, 121, 0.93);
  transition: 0.3s all;

  &:hover {
    -webkit-box-shadow: 5px 8px 10px -2px rgba(157, 141, 121, 0.93);
    -moz-box-shadow: 5px 8px 10px -2px rgba(157, 141, 121, 0.93);
    box-shadow: 5px 8px 10px -2px rgba(157, 141, 121, 0.93);
  }
`;

const CtaBtn = ({ children }: { children: ReactElement }) => {
  return <Button>{children}</Button>;
};

export default CtaBtn;
