"use client";

import { useRouter } from "next/navigation";

const Error = () => {
  const router = useRouter();
  router.replace("/home");

  return;
};

export default Error;
