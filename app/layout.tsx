import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IdeaNest",
  description: "Make awesome notes",
  icons: {
    icon: [
      {
      media: "(prefers-color-scheme: light)",
      url: "/ideanist.svg",
      href: "/ideanist.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/ideanist2.svg",
        href: "/ideanist2.svg",
        }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="ideanest-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
