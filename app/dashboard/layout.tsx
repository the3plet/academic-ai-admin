"use client";
import Navbar from "@/components/common/Navbar";
import { AppShell, Burger, Button, Group, Skeleton, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
      //   disabled={disabled}
    >
      <AppShell.Header>
        <Group h="100%" px="lg">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text size="lg">Academic AI</Text>
        </Group>
      </AppShell.Header>
      <Navbar />
      <AppShell.Main>
        <div className="p-5">{children}</div>
      </AppShell.Main>
    </AppShell>
  );
}
