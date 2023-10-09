import "./globals.css";
import { Inter, Raleway } from "next/font/google";

import { AuthProvider } from "@/components/auth-provider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });
const kanit = Raleway({ subsets: ["latin"], weight: "500" })


export const metadata = {
  title: "BlockME",
  description: "Block people and have fun!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={kanit.className} suppressHydrationWarning={true}>
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
