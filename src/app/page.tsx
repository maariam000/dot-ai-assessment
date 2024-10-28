"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/layout/all");
  }, [router]);

  return (
    <div className="mb-auto h-full w-full p-2 pt-5 md:pr-2">
      Hwllo
    </div>
  );
}
