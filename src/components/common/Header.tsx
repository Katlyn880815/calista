"use client";

import { ReactElement } from "react";
import Image from "next/image";
import styled from "styled-components";

const HeaderBar = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const Header = ({ children }: { children: ReactElement }) => {
  return (
    <HeaderBar>
      <Image
        src="/images/logo.jpg"
        width={80}
        height={80}
        alt="logo of Calista Studio"
      />
      {children}
    </HeaderBar>
  );
};

export default Header;
