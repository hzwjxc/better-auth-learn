"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client"; // import the auth client
import { redirect } from "next/navigation";

export default function Home() {
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome {session?.user.name}</p>
      <Button onClick={() => authClient.signOut()}>Sign out</Button>
    </div>
  );
}
