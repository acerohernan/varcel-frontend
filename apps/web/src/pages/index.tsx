import { useRouter } from "next/router";
import React from "react";

export default function Home() {
  const { push } = useRouter();

  React.useEffect(() => {
    push("/dashboard");
  }, []);

  return <></>;
}
