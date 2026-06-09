import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";
import { FloatingPetals } from "./Lotus";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      <FloatingPetals count={6} />
      <Header />
      <main className="relative flex-1">{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
