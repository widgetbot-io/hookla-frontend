"use client";

import { PageHeader } from "@/components/common/PageHeader";
import { ConnectAccount } from "@/components/Dash/ConnectAccount";
import { useCallback, useState } from "react";
import { SetUp } from "@/components/Dash/SetUp";
import { Option, Select } from "@/components/Dash/Select";
import { Button } from "@/components/common/Button";
import { SetUpChildren } from "@/components/Dash/GraphNode";

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
            <Select size="sm" value={selectOptions[0].value}>
              {selectOptions.map(({ label, value }) => (
                <Option value={value} label={label} />
              ))}
            </Select>
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
