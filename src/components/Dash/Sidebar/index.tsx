"use client";

import * as Styles from "./styles";
import { WebhookSelect } from "@/components/Dash/WebhookSelect";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
  href: string;
  children: string;
  iconUrl: string;
  isActive: boolean;
}

function SidebarLink({ href, children, iconUrl, isActive }: SidebarLinkProps) {
  return (
    <Styles.NavLink href={href} isActive={isActive}>
      <Styles.NavIcon>
        <Image src={iconUrl} alt="" width={24} height={24} />
      </Styles.NavIcon>
      {children}
    </Styles.NavLink>
  );
}

export interface SidebarLink {
  href: string;
  label: string;
  icon: `/${string}`;
}

interface Props {
  links: Array<SidebarLink>;
}

export function Sidebar({ links }: Props) {
  const pathname = usePathname();

  return (
    <Styles.Sidebar>
      <Styles.Section>
        <Styles.Label>Webhook</Styles.Label>
        <WebhookSelect />
      </Styles.Section>
      <Styles.Section>
        <Styles.Label>Configure</Styles.Label>
        <Styles.Nav>
          {links.map(({ href, label, icon }) => (
            <SidebarLink
              href={href}
              iconUrl={icon}
              key={href}
              isActive={pathname.startsWith(href)}
            >
              {label}
            </SidebarLink>
          ))}
        </Styles.Nav>
      </Styles.Section>
    </Styles.Sidebar>
  );
}
