"use client";

import * as Select from "@radix-ui/react-select";
import * as Styles from "./styles";
import Image from "next/image";

export function WebhookSelect() {
  const options = [
    {
      label: "WidgetBot",
      value: "widgetbot",
    },
    {
      label: "Kindolin",
      value: "kindolin",
    },
    {
      label: "Prism",
      value: "prism",
    },
  ];

  return (
    <Styles.Container>
      <Select.Root defaultValue={options[0].value}>
        <Styles.Trigger>
          <Select.SelectIcon className={Styles.Icon}>
            <Image src="/globe.svg" alt="" width={24} height={24} />
          </Select.SelectIcon>
          <Select.Value />
          <Styles.Caret>
            <Image src="/double_caret.svg" alt="" width={12} height={20} />
          </Styles.Caret>
        </Styles.Trigger>
        <Styles.Content>
          <Styles.Viewport>
            {options.map(({ label, value }) => (
              <Styles.Item key={value} value={value}>
                <div className={Styles.Icon}>
                  <Image src="/globe.svg" alt="" width={24} height={24} />
                </div>
                <Select.ItemText>{label}</Select.ItemText>
                {/* <Image */}
                {/*   className={cx(Styles.Arrow, "arrow")} */}
                {/*   src="/arrow.svg" */}
                {/*   alt="" */}
                {/*   width={32} */}
                {/*   height={12} */}
                {/* /> */}
              </Styles.Item>
            ))}
          </Styles.Viewport>
        </Styles.Content>
      </Select.Root>
    </Styles.Container>
  );
}
