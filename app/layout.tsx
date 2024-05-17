import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/ui/layout/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Container from "@/components/Container";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Digital Hotel",
  description: "Réservez un hôtel de votre choix",
  icons: {
    icon: "/icons/hotel-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          {/* <link rel="icon" type="image/svg+xml" href="/icons/hotel-logo.svg" /> */}
          {/* <link rel="icon" href="/hotel-logo.svg" sizes="any" /> */}
        </head>

        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            <main>
              <Navbar />
              <Container>{children}</Container>
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
