import { useState } from "react";
import { useRouter } from "next/router";
import { Button, TextInput, Container } from "@mantine/core";
import axios from "axios";
import Link from "next/link";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <Container size="sm">
      <h1 style={{ textAlign: "center" }}>Administrator Login</h1>
      <TextInput
        label="Username"
        placeholder="Enter your username"
        value={username}
        style={{ marginBottom: "1rem" }}
        onChange={(event) => setUsername(event.currentTarget.value)}
      />
      <TextInput
        label="Password"
        placeholder="Enter your password"
        type="password"
        value={password}
        style={{ marginBottom: "1rem" }}
        onChange={(event) => setPassword(event.currentTarget.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Button ><Link href="/dashboard">Login</Link></Button> 
    </Container>
  );
}
