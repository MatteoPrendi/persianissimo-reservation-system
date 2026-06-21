import { Inter } from "next/font/google";
import "@/app/global.css";

interface Props {
  readonly children: React.ReactNode;
}

const inter = Inter({ variable: "--font-sans", subsets: ["latin"] });
export default function RootLayout({ children }: Props) {
  return (
    <html lang="it" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
