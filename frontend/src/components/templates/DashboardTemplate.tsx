import { ReactNode } from "react";

export const DashboardTemplate = ({ children }: { children: ReactNode }) => (
  <div className="p-6 bg-gray-100 min-h-screen">
    <header className="text-2xl mb-4">FinanceBox</header>
    {children}
  </div>
);
