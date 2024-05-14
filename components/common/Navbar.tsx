"use client";
import { AppShell, Button, NavLink, ScrollArea } from "@mantine/core";
import {
  BookOpenCheck,
  LayoutDashboard,
  LibraryBig,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = {};

const routes = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <LayoutDashboard size={20} />,
  },
  {
    label: "Courses",
    path: "/dashboard/course",
    icon: <LibraryBig size={20} />,
  },
  {
    label: "Exams/Assessments",
    path: "/dashboard/exam",
    icon: <BookOpenCheck size={20} />,
  },
  {
    label: "Analytics",
    path: "/dashboard/analytics",
    icon: <BookOpenCheck size={20} />,
  },
];

const Navbar = (props: Props) => {
  const pathname = usePathname();

  return (
    <AppShell.Navbar p="md">
      <AppShell.Section grow component={ScrollArea}>
        {routes.map((route) => (
          <Link href={route.path}>
            <NavLink
              component="span"
              variant="light"
              leftSection={route.icon}
              label={route.label}
              active={route.path === pathname}
            />
          </Link>
        ))}
      </AppShell.Section>

      <AppShell.Section>
        <Button
          leftSection={<LogOut className="rotate-180" size={18} />}
          variant="light"
          color="red"
          fullWidth
        >
          <Link href="/">Log out</Link> 
        </Button>
      </AppShell.Section>
    </AppShell.Navbar>
  );
};

export default Navbar;
