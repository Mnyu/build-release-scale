"use client";
import { useState } from "react";
import Link from "next/link";
import { NAVIGATION_ITEMS } from "@/data";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-50 h-screen transition-all duration-300 flex flex-col justify-center",
        expanded ? "w-56 bg-gradient-to-r from-[#0f1014] via-[#0f1014]/50 to-transparent" : "w-16",
      )}
    >
      <nav
        className="flex flex-col gap-1 px-3 py-6"
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        {NAVIGATION_ITEMS.map(({ label, url, icon: Icon }) => (
          <Link
            key={label}
            href={url}
            onNavigate={(e) => {
              setExpanded(false);
            }}
            className="flex items-center gap-4 rounded-lg p-3 cursor-pointer text-gray-300 hover:text-white hover:font-semibold transition-colors"
          >
            <Icon className="h-4 w-4 shrink-0" />
            <span
              className={cn(
                "text-sm whitespace-nowrap transition-all duration-300 ease-out",
                expanded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-10px] pointer-events-none",
              )}
            >
              {label}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};
export default Sidebar;
