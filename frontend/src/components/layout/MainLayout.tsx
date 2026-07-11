import type { ReactNode } from "react";
import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
}

function MainLayout({ children }: Props) {
  return (
    <div
      className="d-flex flex-column"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f6fa",
      }}
    >
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow-1 py-4">
        <div className="container-fluid px-4">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-top py-3 mt-auto">
        <div className="container-fluid text-center text-muted small">
          © {new Date().getFullYear()} ContactHub • Contact Management System
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;