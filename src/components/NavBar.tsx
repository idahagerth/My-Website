"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 w-full bg-white transition-transform duration-100 ${
        isScrollingDown ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 sm:justify-between">
          <Link href="/" className="font-bold text-xl"></Link>

          <div className="flex space-x-4 sm:space-x-8">
            {pathname === "/projects" ? (
              <Link
                href="/"
                className="text-stone-800 transition-all hover:scale-110 active:scale-95"
              >
                ← Home
              </Link>
            ) : pathname.startsWith("/projects/") ? (
              <>
                <Link
                  href="/"
                  className="text-stone-800 transition-all hover:scale-110 active:scale-95"
                >
                  ← Home
                </Link>
                <Link
                  href="/projects"
                  className="text-stone-800 transition-all hover:scale-110 active:scale-95"
                >
                  ← Projects
                </Link>
              </>
            ) : (
              <>
                <Link
                  target="_blank"
                  href="https://github.com/idahagerth"
                  className="text-stone-800 transition-all hover:scale-110 active:scale-95"
                >
                  Github
                </Link>
                <Link
                  href="/projects"
                  className="text-stone-800 transition-all hover:scale-110 active:scale-95"
                >
                  Projects
                </Link>
                <Link
                  href="#contact"
                  className="text-stone-800 transition-all hover:scale-110 active:scale-95"
                >
                  Contact
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
