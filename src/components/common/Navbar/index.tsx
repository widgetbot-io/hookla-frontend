import * as Styles from "./styles";
import Image from "next/image";
import { SearchDocumentation } from "@/components/common/SearchDocumentation";

export function Navbar() {
  return (
    <Styles.Navbar>
      <Styles.LogoContainer>
        <Image src="logo.svg" alt="logo" width={32} height={32} />
        <Styles.LogoText>
          <Styles.Title>Hookla</Styles.Title>
          <Styles.Slogan>Keep your community informed.</Styles.Slogan>
        </Styles.LogoText>
      </Styles.LogoContainer>
      <Styles.User>
        <Image
          className={Styles.UserAvatar}
          src="/pfp.jpg"
          alt="user avatar"
          width={32}
          height={32}
        />
        <Styles.UserText>
          <Styles.WelcomeUsername>Welcome, username</Styles.WelcomeUsername>
          <Styles.LogOut>Log out</Styles.LogOut>
        </Styles.UserText>
      </Styles.User>
      <Styles.SearchContainer>
        <SearchDocumentation />
      </Styles.SearchContainer>
    </Styles.Navbar>
  );
}
