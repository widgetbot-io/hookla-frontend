"use client";

import * as RadixSelect from "@radix-ui/react-select";
import * as Styles from "./styles";
import Image from "next/image";

interface Props {
  options: Array<{ label: string; value: string }>;
  value?: string;
}

export function Select({ options, value }: Props) {
  return (
    <Styles.Container>
      <RadixSelect.Root defaultValue={value ?? options[0].value}>
        <Styles.Trigger>
          <RadixSelect.Value />
          <Styles.Caret>
            <Image src="/double_caret.svg" alt="" width={12} height={20} />
          </Styles.Caret>
        </Styles.Trigger>
        <Styles.Content>
          <Styles.Viewport>
            {options.map(({ label, value }) => (
              <Styles.Item key={value} value={value}>
                <RadixSelect.ItemText>{label}</RadixSelect.ItemText>
              </Styles.Item>
            ))}
          </Styles.Viewport>
        </Styles.Content>
      </RadixSelect.Root>
    </Styles.Container>
  );
}
