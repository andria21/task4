import "./globals.css";
import { Inter } from "next/font/google";

import { AuthProvider } from "@/components/auth-provider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BlockME",
  description: "Block people and have fun!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className} suppressHydrationWarning={true}>
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
