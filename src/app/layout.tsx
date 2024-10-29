"use client";
import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import routes from "@/components/routes";
import Navbar from "@/components/navbar";
import { queryClient } from "@/app/stateManagement/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(true);
  const [currentRoute, setCurrentRoute] = useState("All");

  useEffect(() => {
    const activeRoute = routes.find(
      (route) => pathname === `${route.layout}/${route.path}`
    );
    setCurrentRoute(activeRoute ? activeRoute.name : "All");
  }, [pathname, routes]);
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <body className="">
          <div className="flex h-screen w-screen">
            <div className="w-[15vw]">
              <Sidebar
                open={open}
                onClose={() => setOpen(false)}
                routes={routes}
              />
            </div>
            <div className="h-full w-[85vw] bg-lightPrimary ">
              <main className="h-full w-full  transition-all md:pr-2 ">
                <div className="ml-4 w-full h-full">
                  <div className="w-full my-4">
                    <Navbar
                      onOpenSidenav={() => setOpen(true)}
                      brandText={currentRoute}
                      // {...rest}
                    />
                  </div>

                  <div className="pt-5 w-full h-auto border-borderColor border-[3px] bg-backgroundColor mb-auto min-h-[84vh] p-2 md:pr-2">
                    {children}
                  </div>
                </div>
              </main>
            </div>
          </div>
        </body>
      </QueryClientProvider>
    </html>
  );
}
