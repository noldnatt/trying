import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SERENITY AT HOME",
  description: "Compassionate, respectful, dependable in-home care.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Flex column so footer stays at bottom */}
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="mx-auto max-w-5xl px-4 py-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
