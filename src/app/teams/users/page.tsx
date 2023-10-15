import { PageHeader } from "@/components/common/PageHeader";
import { TextInput } from "@/components/common/TextInput";
import { TeamMember, TeamRole } from "@/components/Teams/TeamMember";
import { styled } from "panda/jsx";

const List = styled("ul", {
  base: {
    displayFlex: "column",
    gap: "2",
    marginTop: "4",
  },
});

function Users() {
  const members: Array<TeamMember> = [
    {
      email: "john.doe@example.com",
      role: TeamRole.Owner,
    },
    {
      email: "sus@mog.us",
      role: TeamRole.Admin,
    },
    {
      email: "johny@roingus.dev",
      role: TeamRole.Member,
    },
  ];

  return (
    <>
      <PageHeader title="Users" subtitle="Manage your team's users." />
      <TextInput
        label="Invite user"
        type="email"
        placeholder="john.doe@example.com"
      />
      <List>
        {members.map((member) => (
          <TeamMember member={member} key={member.email} />
        ))}
      </List>
    </>
  );
}

export default Users;
