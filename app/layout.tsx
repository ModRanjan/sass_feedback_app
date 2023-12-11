import "./styles/main.scss";
import type { Metadata } from "next";

import ReduxProvider from "@/redux/provider";
import { Container } from "@/design-system/Atom/Container";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-32x32.ico" />
      </head>
      <body>
        <ReduxProvider>
          <main>
            <Container>{children}</Container>{" "}
          </main>
        </ReduxProvider>
      </body>
    </html>
  );
}
