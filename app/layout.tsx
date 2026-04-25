// app/layout.tsx
// Root layout Next.js App Router.
// Charge les polices Oswald + DM Sans, applique le grain global,
// wrappe l'app avec Redux Provider + PersistGate.

import type { Metadata } from "next";
import ReduxProvider from "@/components/ReduxProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "THISISTHEWOD — CrossFit WOD Generator",
  description:
    "Find workouts based on your equipment. Generate, favorite, and track your WODs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
