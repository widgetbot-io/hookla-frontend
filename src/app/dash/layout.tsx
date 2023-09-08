import type { ReactNode } from "react";
import {
  MainContainer,
  MainContent,
  PageContent,
} from "@/components/Dash/MainContainer";
import { Sidebar } from "@/components/Dash/Sidebar";
import React from "react";

interface Props {
  children: ReactNode;
}

function DashLayout({ children }: Props) {
  return (
    <MainContainer>
      <MainContent>
        <Sidebar />
        <PageContent>{children}</PageContent>
      </MainContent>
    </MainContainer>
  );
}

export default DashLayout;
