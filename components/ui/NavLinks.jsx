"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`transition ${isActive ? "underline" :  "" }`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
