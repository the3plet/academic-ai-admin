import { Button } from "@mantine/core";
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
