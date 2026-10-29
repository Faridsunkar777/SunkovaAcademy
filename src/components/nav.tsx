
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "./icons";
import { useTheme } from "./theme-provider";

const links = [
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B7BDB]";

export function Nav() {
  const path = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const open = menuPath === path;
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const surface = dark
    ? "border-white/15 bg-[#111115]/95 text-[#F5F5F7]"
    : "border-[#111115]/10 bg-white/95 text-[#111115]";

  const navText = dark
    ? "text-[#F5F5F7]/65 hover:text-[#F5F5F7]"
    : "text-[#111115]/65 hover:text-[#111115]";


  const iconSurface = dark
    ? "appearance-none border-white/20 bg-transparent! text-[#F5F5F7]! hover:border-[#8B7BDB]/60 hover:bg-white/10 [-webkit-tap-highlight-color:transparent]"
    : "appearance-none border-[#111115]/15 bg-transparent! text-[#111115]! hover:border-[#8B7BDB]/60 hover:bg-[#EAE6FB]/60 [-webkit-tap-highlight-color:transparent]";


  const ctaSurface = dark
    ? "bg-[#F5F5F7]! text-[#111115]! hover:bg-[#F5F5F7]! hover:text-[#111115]!"
    : "bg-[#111115]! text-[#F5F5F7]! hover:bg-[#111115]! hover:text-[#F5F5F7]!";

  const ctaText = dark
    ? "text-[#111115]!"
    : "text-[#F5F5F7]!";

  return (
    <header
      className={`fixed inset-x-0 top-3 z-[100] mx-auto w-[calc(100%-24px)] max-w-[1160px] rounded-full border shadow-[0_8px_30px_rgba(0,0,0,0.10)] backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 sm:top-[17px] sm:w-[calc(100%-48px)] ${surface} ${
        scrolled
          ? "shadow-[0_12px_36px_rgba(0,0,0,0.16)]"
          : ""
      }`}
    >
      <div className="flex h-[58px] items-center justify-between gap-3 px-3 sm:gap-5 sm:px-5 lg:gap-8 lg:px-6">
        {/* Original Sunkova logo */}
        <Link
          href="/"
          aria-label="Sunkova Academy home"
          className={`flex min-w-0 shrink-0 items-center gap-2 ${focus}`}
        >
          <span className="relative block h-[18px] w-[64px] shrink-0 sm:h-[20px] sm:w-[72px]">
            <Image
              src="/assets/brand/black-logo.png"
              alt="Sunkova"
              fill
              priority
              sizes="(max-width: 639px) 64px, 72px"
              className={`object-contain object-left ${
                dark ? "brightness-0 invert" : ""
              }`}
            />
          </span>

          <span
            className={`whitespace-nowrap border-l pl-2 font-academy-mono text-[9px] leading-none tracking-[0.16em] sm:text-[10px] ${
              dark
                ? "border-white/30 text-[#F5F5F7]/80"
                : "border-black/25 text-[#111115]/75"
            }`}
          >
            ACADEMY
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-5 lg:flex xl:gap-7"
          aria-label="Main navigation"
        >
          {links.map((link) => {
            const active =
              link.href !== "/#programs" &&
              path.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`border-b-2 pb-1 font-academy-mono text-[10px] uppercase tracking-[0.12em] transition-colors duration-200 ${focus} ${
                  active
                    ? dark
                      ? "border-[#8B7BDB] text-[#F5F5F7]"
                      : "border-[#8B7BDB] text-[#111115]"
                    : `border-transparent hover:border-[#8B7BDB]/60 ${navText}`
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <a
            href="https://sunkova.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1 border-b-2 border-transparent pb-1 font-academy-mono text-[10px] uppercase tracking-[0.1em] transition-colors hover:border-[#8B7BDB]/60 ${navText} ${focus}`}
          >
            Sunkova Studio
            <ArrowUpRight size={13} />
          </a>
        </nav>

        {/* Navigation actions */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5">
          <button
            type="button"
            aria-label={
              dark ? "Switch to light mode" : "Switch to dark mode"
            }
            onClick={toggle}
            className={`grid size-9 place-items-center rounded-full border transition-[background-color,border-color] duration-200 ${iconSurface} ${focus}`}
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Desktop Apply / Enrol */}
          <Link
            href="/contact?program=Academy%20enrolment"
            className={`group hidden shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 text-[11px] font-semibold leading-none shadow-sm transition-[transform,box-shadow] duration-300 ease-out hover:scale-105 hover:ring-2 hover:ring-[#8B7BDB]/60 active:scale-95 motion-reduce:transform-none sm:inline-flex ${ctaSurface} ${focus}`}
          >
            <span className={ctaText}>Apply / Enrol</span>
            <ArrowUpRight
              size={15}
              className={`shrink-0 ${ctaText}`}
            />
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setMenuPath(open ? null : path)}
            className={`grid size-9 place-items-center rounded-full border transition-colors lg:hidden ${iconSurface} ${focus}`}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className={`absolute inset-x-0 top-[calc(100%+10px)] flex max-h-[calc(100dvh-96px)] flex-col overflow-y-auto rounded-[24px] border p-5 shadow-xl lg:hidden ${surface}`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuPath(null)}
              className={`flex items-center justify-between border-b py-4 text-lg transition-colors hover:text-[#8B7BDB] ${
                dark ? "border-white/10" : "border-black/10"
              } ${focus}`}
            >
              {link.label}
              <ArrowUpRight size={17} />
            </Link>
          ))}

          <a
            href="https://sunkova.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-between py-4 text-lg transition-colors hover:text-[#8B7BDB] ${focus}`}
          >
            Sunkova Studio
            <ArrowUpRight size={17} />
          </a>

          {/* Mobile Apply / Enrol */}
          <Link
            href="/contact?program=Academy%20enrolment"
            onClick={() => setMenuPath(null)}
            className={`mt-3 flex items-center justify-between rounded-2xl px-5 py-4 text-base font-semibold transition-[transform,box-shadow] duration-300 hover:scale-[1.03] hover:ring-2 hover:ring-[#8B7BDB]/60 active:scale-95 motion-reduce:transform-none ${ctaSurface} ${focus}`}
          >
            <span className={ctaText}>Apply / Enrol</span>
            <ArrowUpRight size={17} className={ctaText} />
          </Link>
        </nav>
      )}
    </header>
  );
}
