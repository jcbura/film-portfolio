"use client";

import { useRouter } from "next/navigation";

const Custom404 = () => {
  const router = useRouter();
  router.replace("/home");

  return;
};

export default Custom404;
