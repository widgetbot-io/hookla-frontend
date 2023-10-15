import type { ReactNode } from "react";
import {
  MainContainer,
  MainContent,
  PageContent,
} from "@/components/Dash/MainContainer";
import { Sidebar, SidebarLink } from "@/components/Dash/Sidebar";
import React from "react";

interface Props {
  children: ReactNode;
}

function TeamsLayout({ children }: Props) {
  const links: Array<SidebarLink> = [
    {
      label: "Users",
      href: "/teams/users",
      icon: "/person.svg",
    },
    {
      label: "Settings",
      href: "/teams/settings",
      icon: "/settings.svg",
    },
  ];

  return (
    <MainContainer>
      <MainContent>
        <Sidebar links={links} />
        <PageContent>{children}</PageContent>
      </MainContent>
    </MainContainer>
  );
}

export default TeamsLayout;
