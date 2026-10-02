import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "My Portfolio",
  description: "My Next.js Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}