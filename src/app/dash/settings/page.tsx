import { PageHeader } from "@/components/Dash/PageHeader";
import React from "react";
import { TextInput } from "@/components/common/TextInput";

function Settings() {
  return (
    <>
      <PageHeader
        title="Settings"
        subtitle="Configure generic settings for your webhook."
      />
      <TextInput placeholder="Enter webhook name..." />
    </>
  );
}

export default Settings;
