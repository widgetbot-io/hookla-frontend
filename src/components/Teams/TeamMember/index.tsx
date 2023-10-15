import * as Styles from "./styles";
import { Option, Select } from "@/components/Dash/Select";
import { Button } from "@/components/common/Button";

export enum TeamRole {
  Owner,
  Admin,
  Member,
}

export interface TeamMember {
  email: string;
  role: TeamRole;
}

interface Props {
  member: TeamMember;
}

export function TeamMember({ member }: Props) {
  return (
    <Styles.TeamMember>
      <span>{member.email}</span>
      <Styles.Controls>
        <Select
          value={member.role.toString()}
          disabled={member.role === TeamRole.Owner}
          size="sm"
        >
          {member.role === TeamRole.Owner && (
            <Option value={TeamRole.Owner.toString()} label="Owner" />
          )}
          <Option value={TeamRole.Admin.toString()} label="Admin" />
          <Option value={TeamRole.Member.toString()} label="Member" />
        </Select>
        <Button kind="danger">Remove</Button>
      </Styles.Controls>
    </Styles.TeamMember>
  );
}
