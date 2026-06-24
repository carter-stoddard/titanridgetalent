"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Founder = {
  name: string;
  role: string;
  specialties: string;
  image?: string;
  imageAlt?: string;
  initials?: string;
  bio: string[];
};

const founders: Founder[] = [
  {
    name: "Adrian Ibarra",
    role: "Founder",
    specialties: "Aerospace, Food & Beverage, & IT",
    image: "/images/adrian-headshot.webp",
    imageAlt: "Adrian Ibarra, founder of Titan Ridge Talent",
    bio: [
      "Adrian Ibarra is the founder of Titan Ridge Talent, working across industrial and corporate markets. His career has been built on one principle: that the right placement starts with a real conversation. Not a resume submission.",
      "Throughout his career Adrian has developed deep expertise in Aerospace, Food & Beverage, and IT, working directly with hiring managers, operations leaders, and executives to understand not just what a role requires on paper, but what it demands in practice. That ground-level understanding is what separates a good placement from a permanent one.",
      "When Adrian isn't working a search, he's building the relationships that make future searches possible. At Titan Ridge, that's not a strategy. It's just how he operates.",
    ],
  },
  {
    name: "Edgar Carballo",
    role: "Managing Member",
    specialties: "Aerospace, Automotive, Construction, & Food & Beverage",
    image: "/images/edgar-headshot.webp",
    imageAlt: "Edgar Carballo, co-founder of Titan Ridge Talent",
    bio: [
      "Edgar Carballo is a Managing Member of Titan Ridge Talent and a seasoned Technical Recruiter with expertise in connecting top talent with leading employers. His recruiting philosophy is simple: a recruiter's job is to guide people toward the best opportunity for them — not to force a placement.",
      "Throughout his career, Edgar has developed extensive experience supporting the Aerospace Manufacturing, Automotive Manufacturing, Construction, and Food & Beverage industries. He has successfully recruited both administrative and skilled industrial professionals, helping organizations build high-performing teams while assisting candidates in advancing their careers.",
      "A strong believer in continuous learning and personal development, Edgar is committed to driving ongoing improvement and innovation at Titan Ridge Talent, ensuring exceptional service for both clients and candidates.",
    ],
  },
];

export default function FoundersTeam() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current.filter(Boolean),
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const setCardRef = (i: number) => (el: HTMLElement | null) => {
    cardsRef.current[i] = el;
  };

  return (
    <section
      ref={sectionRef}
      className="founders-team relative w-full"
      style={{
        backgroundColor: "#F5F4F0",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div
        className="team-inner"
        style={{
          paddingLeft: "80px",
          paddingRight: "80px",
          maxWidth: "1280px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div className="team-grid">
          {founders.map((founder, i) => (
            <article
              key={founder.name}
              ref={setCardRef(i)}
              className="founder-card flex flex-col items-center text-center"
              style={{
                opacity: 0,
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                border: "1px solid rgba(20, 31, 49, 0.08)",
                boxShadow: "0 18px 40px rgba(20, 31, 49, 0.08)",
                padding: "48px 40px",
              }}
            >
              {/* Headshot */}
              <div
                className="relative overflow-hidden flex items-center justify-center"
                style={{
                  aspectRatio: "1 / 1",
                  width: "200px",
                  borderRadius: "9999px",
                  backgroundColor: "#141F31",
                  border: "3px solid #CCA662",
                  boxShadow:
                    "0 0 0 1px rgba(204, 166, 98, 0.25), 0 12px 28px rgba(20, 31, 49, 0.18)",
                  marginBottom: "28px",
                }}
              >
                {founder.image ? (
                  <img
                    src={founder.image}
                    alt={founder.imageAlt ?? founder.name}
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ objectPosition: "center top" }}
                  />
                ) : (
                  <span
                    className="font-display font-semibold"
                    style={{
                      fontSize: "64px",
                      letterSpacing: "2px",
                      color: "#CCA662",
                    }}
                  >
                    {founder.initials}
                  </span>
                )}
              </div>

              <p
                className="font-display font-medium uppercase"
                style={{
                  fontSize: "11px",
                  letterSpacing: "4px",
                  color: "#CCA662",
                  marginBottom: "12px",
                }}
              >
                {founder.role}
              </p>

              <h2
                className="font-display font-semibold uppercase"
                style={{
                  fontSize: "clamp(28px, 3vw, 38px)",
                  lineHeight: 0.95,
                  color: "#141F31",
                  marginBottom: "8px",
                }}
              >
                {founder.name}
              </h2>

              <p
                className="font-display"
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  color: "#CCA662",
                  marginBottom: "24px",
                }}
              >
                {founder.specialties}
              </p>

              <div
                className="gold-rule"
                style={{ marginBottom: "28px", width: "60px" }}
              />

              <div className="flex flex-col" style={{ gap: "16px" }}>
                {founder.bio.map((para, p) => (
                  <p
                    key={p}
                    className="font-body"
                    style={{
                      fontSize: "16px",
                      lineHeight: 1.7,
                      color: "#2A2A2A",
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .team-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: stretch;
        }
        @media (max-width: 900px) {
          .founders-team {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          .team-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .team-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .founder-card {
            padding: 40px 28px !important;
          }
        }
      `}</style>
    </section>
  );
}
