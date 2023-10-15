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

function DashLayout({ children }: Props) {
  const links: Array<SidebarLink> = [
    {
      href: "/dash/providers",
      label: "Providers",
      icon: "/providers.svg",
    },
    {
      href: "/dash/destinations",
      label: "Destinations",
      icon: "/destinations.svg",
    },
    {
      href: "/dash/embed-builder",
      label: "Embed Builder",
      icon: "/embed.svg",
    },
    {
      href: "/dash/settings",
      label: "Settings",
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

export default DashLayout;
