"use client";

import { PageHeader } from "@/components/Dash/PageHeader";
import { ConnectAccount } from "@/components/Dash/ConnectAccount";
import { useCallback, useState } from "react";
import { SetUp } from "@/components/Dash/SetUp";
import { Select } from "@/components/Dash/Select";
import { Button } from "@/components/common/Button";
import { styled } from "panda/jsx";

const SetUpChildren = styled("div", {
  base: {
    display: "flex",
    flexDirection: "row",
    gap: "4",
  },
});

function GitHubProvider() {
  const [isAuthed, setIsAuthed] = useState(false);

  const onConnected = useCallback(() => setIsAuthed(true), [setIsAuthed]);

  return (
    <>
      <PageHeader title="GitHub" logoUrl="/logo-github.svg" hasBackButton />
      {isAuthed ? (
        <SetUp
          setUpText="To finish setting up, please select the repositories to use as providers."
          logoUrl="/logo-github.svg"
        >
          <SetUpChildren>
            <Select
              options={[
                { label: "message-renderer", value: "message-renderer" },
              ]}
            />
            <Button kind="primary">Done</Button>
          </SetUpChildren>
        </SetUp>
      ) : (
        <ConnectAccount
          connectText="Please connect GitHub to get started."
          brandName="GitHub"
          logoUrl="/logo-github.svg"
          onConnect={onConnected}
        />
      )}
    </>
  );
}

export default GitHubProvider;
