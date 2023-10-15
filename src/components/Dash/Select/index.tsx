"use client";

import * as RadixSelect from "@radix-ui/react-select";
import * as Styles from "./styles";
import Image from "next/image";
import { ReactNode } from "react";

interface OptionProps {
  value: string;
  label: string;
}

export function Option({ value, label }: OptionProps) {
  return (
    <Styles.Item key={value} value={value}>
      <RadixSelect.ItemText>{label}</RadixSelect.ItemText>
    </Styles.Item>
  );
}

interface Props {
  value?: string;
  children: ReactNode;
  onSelect?(value: string): void;
  disabled?: boolean;
  size?: "sm" | "md";
}

export function Select({ value, children, onSelect, disabled, size }: Props) {
  return (
    <Styles.Container>
      <RadixSelect.Root
        defaultValue={value}
        onValueChange={onSelect}
        disabled={disabled}
      >
        <Styles.Trigger size={size}>
          <RadixSelect.Value />
          <Styles.Caret>
            <Image src="/double_caret.svg" alt="" width={12} height={20} />
          </Styles.Caret>
        </Styles.Trigger>
        <Styles.Content>
          <Styles.Viewport>{children}</Styles.Viewport>
        </Styles.Content>
      </RadixSelect.Root>
    </Styles.Container>
  );
}
