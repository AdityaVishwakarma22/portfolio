import "@/app/ui/global.css";
import { poppin } from "./lib/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppin.className} antialiased`}>{children}</body>
    </html>
  );
}
