import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "../../utils/cn";
// import { ViewTransitions } from "next-view-transitions";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sai Tarun",
  description: "Tarun's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    // <ViewTransitions>
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "dark:bg-dot-white/[0.2] bg-dot-black/[0.2] p-16 md:w-8/12 mx-auto "
        )}
      >
        {children}
      </body>
    </html>
    // </ViewTransitions>
  );
}
