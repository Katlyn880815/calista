"use client";

import styled from "styled-components";
import navigationItems from "../../../data/navigationItems";
import { ReactElement } from "react";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavigationLinkList = styled.ul`
  display: flex;
  gap: 1.5rem;
`;

const StyledLink = styled.a`
  transition: 0.3s color;
  &:hover {
    color: #b1a592;
  }
`;

const Navigation = ({ children }: { children?: ReactElement }) => {
  return (
    <Nav>
      <NavigationLinkList>
        {navigationItems.map((navItem) => (
          <li key={navItem.id}>
            <StyledLink href={navItem.link}>{navItem.title}</StyledLink>
          </li>
        ))}
      </NavigationLinkList>
      {children}
    </Nav>
  );
};

export default Navigation;
