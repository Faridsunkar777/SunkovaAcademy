import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ArrowUpRight, Code2, Sparkles, ShieldCheck } from "@/components/icons";
export const metadata: Metadata = {
  title: "About the Academy",
  description:
    "Practical, challenge-based education designed by Sunkova, a design and technology studio in Nairobi.",
};
export default function About() {
  return (
    <>
      <section className="interior-hero about-hero">
        <div className="site-width">
          <Reveal>
            <span className="eyebrow">THIS IS SUNKOVA ACADEMY</span>
            <h1>
              Education
              <br />
              for <em>doers.</em>
            </h1>
            <div className="interior-hero-bottom">
              <p>
                We believe the future belongs to people who are willing to
                learn, experiment, and create something that matters.
              </p>
              <span>OUR STORY ↓</span>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="about-feature">
        <div className="site-width about-feature-grid">
          <Reveal className="about-feature-media">
            <img
              src="/assets/images/about-craft.webp"
              alt="Creative work in the studio"
              loading="lazy"
            />
            <span>THE ART OF MAKING THINGS REAL</span>
          </Reveal>
          <Reveal className="about-feature-content">
            <span className="eyebrow">01 / WHY WE EXIST</span>
            <h2>
              Built by makers.
              <br />
              <em>For makers.</em>
            </h2>
            <p>
              Sunkova Academy is the education arm of{" "}
              <a
                href="https://sunkova.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sunkova Studio <ArrowUpRight size={16} />
              </a>
              , a design and technology company that creates digital products
              and experiences.
            </p>
            <p>
              We started with a simple idea: the best way to learn how to build
              technology is to actually build it. Our programs turn abstract
              skills into concrete outcomes.
            </p>
            <Link href="/courses" className="pill-button dark">
              Explore programs <ArrowUpRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="principles">
        <div className="site-width">
          <Reveal>
            <span className="eyebrow">02 / OUR PRINCIPLES</span>
            <h2>
              What we believe
              <br />
              <em>changes everything.</em>
            </h2>
          </Reveal>
          <div className="principle-grid">
            <Reveal>
              <article>
                <span className="principle-num">01</span>
                <Code2 size={29} />
                <h3>Build to learn.</h3>
                <p>
                  Real challenges become a bridge between understanding
                  something and knowing how to use it.
                </p>
              </article>
            </Reveal>
            <Reveal delay={75}>
              <article>
                <span className="principle-num">02</span>
                <Sparkles size={29} />
                <h3>Stay curious.</h3>
                <p>
                  Technology changes. Good questions, creative thinking, and the
                  courage to try never go out of style.
                </p>
              </article>
            </Reveal>
            <Reveal delay={150}>
              <article>
                <span className="principle-num">03</span>
                <ShieldCheck size={29} />
                <h3>Make it meaningful.</h3>
                <p>
                  Learn to create technology that is useful, responsible,
                  inclusive, and relevant in the real world.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="about-close">
        <div className="site-width">
          <Reveal>
            <span className="eyebrow light-eyebrow">
              FROM NAIROBI TO EVERYWHERE
            </span>
            <h2>
              Learn here.
              <br />
              <em>Build anywhere.</em>
            </h2>
            <p>
              We’re proud of where we started and optimistic about where our
              learners will go.
            </p>
            <Link href="/contact" className="pill-button light">
              Say hello <ArrowUpRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
