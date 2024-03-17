"use client";

import styled from "styled-components";
import navigationItems from "../../../data/navigationItems";

const NavigationLinkList = styled.ul`
  display: flex;
  gap: 1.5rem;
`;

const NavigationLinkItem = styled.li``;

const NavigationLink = styled.a``;

const Navigation = () => {
  return (
    <nav>
      <NavigationLinkList>
        {navigationItems.map((navItem) => (
          <NavigationLinkItem key={navItem.id}>
            <NavigationLink href={navItem.link}>{navItem.title}</NavigationLink>
          </NavigationLinkItem>
        ))}
      </NavigationLinkList>
    </nav>
  );
};

export default Navigation;
