import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppLayout } from "@/components/layout/AppLayout";
import { mockUser } from "@/lib/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Track - Government Performance & Accountability Platform",
  description: "A comprehensive platform for tracking government projects, finances, and performance across ministries, departments, and agencies.",
  keywords: ["government", "accountability", "projects", "finance", "tracking", "performance"],
  authors: [{ name: "E-Track Development Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full antialiased`}>
        <AppLayout user={mockUser}>
          {children}
        </AppLayout>
      </body>
    </html>
  );
}
