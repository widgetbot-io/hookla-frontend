"use client";

import * as Styles from "./styles";
import { useRouter } from "next/navigation";

interface Props {
  backPath?: string;
}

export function BackButton({ backPath }: Props) {
  const router = useRouter();

  return (
    <Styles.BackButton
      onClick={!backPath ? router.back : undefined}
      href={backPath ?? "#"}
    />
  );
}
