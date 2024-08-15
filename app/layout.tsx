"use client"; // Для клиентского компонента

import { Inter } from "next/font/google";
import "./globals.css";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Link from "next/link";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeTab, setActiveTab] = useState("main");

  const handleSetActiveTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <div className="flex flex-col h-screen justify-between">
          <div className="flex-grow">{children}</div>

          {/* Навигационное меню */}
          <div className="fixed inset-x-0 bottom-0 flex justify-center" style={{ marginBottom: '10px' }}>
            <div className="w-full max-w-md bg-black py-2">
              <Menubar className="bg-black text-gray-400 flex justify-around border-none">
                {/* Main Icon */}
                <MenubarMenu>
                  <MenubarTrigger asChild>
                    <Link
                      href="/"
                      className={`flex flex-col items-center text-sm transition duration-200 ease-in-out transform hover:scale-105 ${
                        activeTab === "main" ? "bg-green-500 text-white rounded-lg p-2" : "text-gray-400"
                      }`}
                      onClick={() => handleSetActiveTab("main")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 12l2-2l7-7 7 7m-2 2v7a2 2 0 01-2 2h-4a2 2 0 01-2-2v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v7"
                        />
                      </svg>
                      <span>main</span>
                    </Link>
                  </MenubarTrigger>
                </MenubarMenu>

                {/* Skills Icon */}
                <MenubarMenu>
                  <MenubarTrigger asChild>
                    <Link
                      href="/skills"
                      className={`flex flex-col items-center text-sm transition duration-200 ease-in-out transform hover:scale-105 ${
                        activeTab === "skills" ? "bg-green-500 text-white rounded-lg p-2" : "text-gray-400"
                      }`}
                      onClick={() => handleSetActiveTab("skills")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      <span>skills</span>
                    </Link>
                  </MenubarTrigger>
                </MenubarMenu>

                {/* Quests Icon */}
                <MenubarMenu>
                  <MenubarTrigger asChild>
                    <Link
                      href="/quests"
                      className={`flex flex-col items-center text-sm transition duration-200 ease-in-out transform hover:scale-105 ${
                        activeTab === "quests" ? "bg-green-500 text-white rounded-lg p-2" : "text-gray-400"
                      }`}
                      onClick={() => handleSetActiveTab("quests")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14M12 5l-2 7h4l-2 7"
                        />
                      </svg>
                      <span>quests</span>
                    </Link>
                  </MenubarTrigger>
                </MenubarMenu>

                {/* Wallet Icon */}
                <MenubarMenu>
                  <MenubarTrigger asChild>
                    <Link
                      href="/wallet"
                      className={`flex flex-col items-center text-sm transition duration-200 ease-in-out transform hover:scale-105 ${
                        activeTab === "wallet" ? "bg-green-500 text-white rounded-lg p-2" : "text-gray-400"
                      }`}
                      onClick={() => handleSetActiveTab("wallet")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 7h14M5 12h14M7 7v10M12 17l5-5"
                        />
                      </svg>
                      <span>wallet</span>
                    </Link>
                  </MenubarTrigger>
                </MenubarMenu>
              </Menubar>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
