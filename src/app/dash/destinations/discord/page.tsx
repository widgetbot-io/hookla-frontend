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

const channelNames = ["message-renderer", "hookla", "github-notifications"];
const selectOptions = channelNames.map((name) => ({
  label: name,
  value: name,
}));

function DiscordDestination() {
  const [isAuthed, setIsAuthed] = useState(false);

  const onConnected = useCallback(() => setIsAuthed(true), [setIsAuthed]);

  return (
    <>
      <PageHeader title="Discord" logoUrl="/logo-discord.svg" hasBackButton />
      {isAuthed ? (
        <SetUp
          setUpText="To finish setting up, please select a channel to use as a destination."
          logoUrl="/logo-discord.svg"
        >
          <SetUpChildren>
            <Select options={selectOptions} />
            <Button kind="primary">Done</Button>
          </SetUpChildren>
        </SetUp>
      ) : (
        <ConnectAccount
          connectText="Please connect Discord to get started."
          brandName="Discord"
          logoUrl="/logo-discord.svg"
          onConnect={onConnected}
        />
      )}
    </>
  );
}

export default DiscordDestination;
