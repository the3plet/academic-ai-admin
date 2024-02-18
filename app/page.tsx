import { Button, NavLink } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-24">
      <Button>
        <Link href="/dashboard">Open dashboard</Link>
      </Button>
    </main>
  );
}
