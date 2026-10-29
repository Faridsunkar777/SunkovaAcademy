
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/catalog";
import { Container } from "./home/shared";




const footerLink = `
  group
  inline-flex w-fit
  origin-left
  items-center gap-1.5

  text-[13px]
  leading-[1.6]
  text-[#111115]/65!

  scale-100
  transition-[color,scale]
  duration-[650ms]
  ease-[cubic-bezier(0.22,1,0.36,1)]

  motion-safe:hover:scale-[1.055]
  hover:text-[#8B7BDB]!

  motion-safe:focus-visible:scale-[1.055]
  focus-visible:text-[#8B7BDB]!
  focus-visible:rounded-sm
  focus-visible:outline-2
  focus-visible:outline-offset-4
  focus-visible:outline-[#8B7BDB]

  dark:text-[#F5F5F7]/65!
  dark:hover:text-[#8B7BDB]!
  dark:focus-visible:text-[#8B7BDB]!

  motion-reduce:transition-none
`;



function FooterHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h3
      className="mb-6 font-academy-mono text-[11px] leading-none font-medium uppercase tracking-[0.22em] text-[#111115] dark:text-[#F5F5F7]"
    >
      {children}
    </h3>
  );
}

export function Footer() {
  return (
    <footer
      className="
        bg-[#F5F5F7]
        pt-12 pb-7
        text-[#111115]
        transition-colors duration-300
        dark:bg-[#111115]
        dark:text-[#F5F5F7]
        sm:pt-16 sm:pb-8
        lg:pt-20
      "
    >
      <Container>
        {/* Main footer columns */}
        <div
          className="
            grid grid-cols-1 gap-12
            lg:grid-cols-[1.1fr_2.9fr]
            lg:gap-16
          "
        >
          {/* Brand column */}
          <div className="max-w-[280px]">
            <Link
              href="/"
              aria-label="Sunkova Academy home"
              className="
                inline-flex
                items-center gap-3
                focus-visible:rounded-sm
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[#8B7BDB]
              "
            >
              <Image
                src="/assets/brand/black-logo.png"
                alt="Sunkova"
                width={120}
                height={32}
                className="
                  h-[23px] w-auto
                  object-contain
                  dark:invert
                "
              />

              <span
                aria-hidden="true"
                className="
                  h-4 w-px
                  bg-[#111115]/25
                  dark:bg-white/25
                "
              />

              <span
                className="
                  font-academy-mono
                  text-[10px]
                  tracking-[0.18em]
                  text-[#111115]/75
                  dark:text-[#F5F5F7]/75
                "
              >
                ACADEMY
              </span>
            </Link>

            <p
              className="
                mt-7 max-w-[250px]
                text-[13px]
                leading-[1.85]
                text-[#111115]/60
                dark:text-[#F5F5F7]/60
              "
            >
              Challenge-based learning for career
              switchers and beginners who want to
              ship — not just study.
            </p>
          </div>

          {/* Navigation columns */}
          <nav
            aria-label="Footer navigation"
            className="
              grid grid-cols-2
              gap-x-6 gap-y-12
              sm:grid-cols-3
              sm:gap-x-10
              lg:gap-x-14
            "
          >
            {/* Learn */}
            <div className="min-w-0">
              <FooterHeading>LEARN</FooterHeading>

              <div className="flex flex-col items-start gap-3">
                <Link href="/courses" className={footerLink}>
                  All courses
                </Link>

                {categories.map((category) => (
                  <Link
                    href={`/courses/${category.slug}`}
                    key={category.slug}
                    className={footerLink}
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Academy */}
            <div className="min-w-0">
              <FooterHeading>ACADEMY</FooterHeading>

              <div className="flex flex-col items-start gap-3">
                <Link href="/about" className={footerLink}>
                  About
                </Link>

                <Link href="/contact" className={footerLink}>
                  Contact
                </Link>

                <Link href="/learn/login" className={footerLink}>
                  Learner portal
                </Link>

                <Link href="/#method" className={footerLink}>
                  How it works
                </Link>

                <Link href="/courses" className={footerLink}>
                  Live & self-paced
                </Link>
              </div>
            </div>

            {/* Studio */}
            <div className="col-span-2 min-w-0 sm:col-span-1">
              <FooterHeading>STUDIO</FooterHeading>

              <div className="flex flex-col items-start gap-3">
                <a
                  href="https://sunkova.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group ${footerLink}`}
                >
                  sunkova.com

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.7}
                    className="
                      transition-transform duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                      motion-reduce:transform-none
                    "
                  />
                </a>

                <a
                  href="mailto:hello@sunkova.com"
                  className={`${footerLink} break-all`}
                >
                  hello@sunkova.com
                </a>

                <span
                  className="
                    text-[13px]
                    leading-[1.6]
                    text-[#111115]/60
                    dark:text-[#F5F5F7]/60
                  "
                >
                  Nairobi, Kenya — Global
                </span>
              </div>
            </div>
          </nav>
        </div>

        {/* Copyright */}
        <div
          className="
            mt-16
            border-t border-[#111115]/12
            pt-6
            dark:border-white/15
            sm:mt-20
            sm:pt-7
            lg:mt-24
          "
        >
          <div
            className="
              flex flex-col
              gap-3
              text-[11px]
              leading-[1.6]
              text-[#111115]/55
              dark:text-[#F5F5F7]/55
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:gap-6
            "
          >
            <span>
              © {new Date().getFullYear()} Sunkova.
              All rights reserved.
            </span>

            <span>
              Built as a sibling brand to the Sunkova studio.
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
