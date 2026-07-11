
import type { ReactNode } from "react";
interface AuthLayoutProps {
  children: ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      {children}
    </div>
  );
}

export default AuthLayout;