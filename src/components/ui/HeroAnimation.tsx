"use client";
import { motion } from "framer-motion";

interface Props {
  lang: string;
}

const line1 = "Abbas";
const line2 = "Zein";
const line3 = "Fakih";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045, delayChildren: 0.2 } },
};

const charVariants = {
  hidden: { y: "115%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

function SplitLine({
  text,
  delay = 0,
  accent = false,
}: {
  text: string;
  delay?: number;
  accent?: boolean;
}) {
  return (
    <div style={{ overflow: "hidden", display: "block" }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: "flex",
          flexWrap: "nowrap",
          gap: "0 0.02em",
          paddingBottom: "0.05em", // prevents descender clip
        }}
        custom={delay}
      >
        {text.split("").map((char, i) =>
          char === " " ? (
            <span key={i} style={{ width: "0.28em", display: "inline-block" }} />
          ) : (
            <motion.span
              key={i}
              variants={charVariants}
              style={{
                display: "inline-block",
                color: accent ? "var(--accent)" : "#FAFAFA",
              }}
            >
              {char}
            </motion.span>
          )
        )}
      </motion.div>
    </div>
  );
}

export default function HeroAnimation({ lang }: Props) {
  const greeting = lang === "fr" ? "Bonjour, je suis" : "Hello, I am";
  const role =
    lang === "fr" ? "Développeur Full-Stack" : "Full-Stack Developer";
  const availability =
    lang === "fr"
      ? "Disponible en alternance · 2026-2027 · Lille"
      : "Available for work-study · 2026-2027 · Lille";

  return (
    <div className="flex flex-col w-full">
      {/* Greeting */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.05}
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "clamp(0.6rem, 1.5vw, 0.8rem)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "clamp(0.75rem, 2vw, 1.5rem)",
        }}
      >
        {greeting}
      </motion.p>

      {/* Name — two explicit lines so "Fakih" never wraps mid-word */}
      <h1
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(2.5rem, 8.5vw, 8.5rem)",
          lineHeight: 0.9,
          letterSpacing: "-0.03em",
          margin: 0,
        }}
      >
        <SplitLine text={line1} delay={0} />
        <SplitLine text={line2} delay={0.2} accent />
        <SplitLine text={line3} delay={0.4} accent />
      </h1>

      {/* Role */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.85}
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "clamp(0.8rem, 2vw, 1.4rem)",
          color: "var(--muted)",
          marginTop: "clamp(1rem, 3vw, 2rem)",
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
          flexWrap: "wrap",
        }}
      >
        <span style={{ color: "var(--accent)" }}>&lt;</span>
        <span style={{ color: "#FAFAFA" }}>{role}</span>
        <span style={{ color: "var(--accent)" }}>/&gt;</span>
        <span
          style={{
            display: "inline-block",
            width: "2px",
            height: "1.1em",
            background: "var(--accent)",
            animation: "blink 1s step-end infinite",
            marginLeft: "2px",
          }}
        />
      </motion.div>

      {/* Availability */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1.05}
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "clamp(0.55rem, 1.2vw, 0.7rem)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--muted)",
          marginTop: "clamp(0.75rem, 2vw, 1.5rem)",
        }}
      >
        {availability}
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1.25}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.75rem",
          marginTop: "clamp(1.5rem, 4vw, 2.5rem)",
          alignItems: "center",
        }}
      >
        <a
          href="/cv/mon-cv.pdf"
          download
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "clamp(0.65rem, 1.5vw, 0.875rem) clamp(1rem, 2.5vw, 2rem)",
            background: "var(--accent)",
            color: "#fff",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(0.6rem, 1.2vw, 0.75rem)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "background 0.3s, transform 0.2s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "var(--accent-light)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "var(--accent)")
          }
        >
          <i className="fa fa-download" />
          {lang === "fr" ? "Télécharger CV" : "Download CV"}
        </a>

        <a
          href={`/${lang}#projects`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "clamp(0.65rem, 1.5vw, 0.875rem) clamp(1rem, 2.5vw, 2rem)",
            border: "1px solid var(--border)",
            color: "var(--muted)",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(0.6rem, 1.2vw, 0.75rem)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "color 0.3s, border-color 0.3s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.borderColor = "var(--accent)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--muted)";
            e.currentTarget.style.borderColor = "var(--border)";
          }}
        >
          {lang === "fr" ? "Mes projets" : "Projects"}
          <i className="fa fa-arrow-right" style={{ fontSize: "0.65rem" }} />
        </a>

        {/* Social icons */}
        {[
          {
            href: "https://github.com/abbas-fakih39",
            icon: "fab fa-github",
            hoverColor: "#fff",
          },
          {
            href: "https://www.linkedin.com/in/abbas-zein-fakih-b8649022b/",
            icon: "fab fa-linkedin-in",
            hoverColor: "#0A66C2",
          },
        ].map(({ href, icon, hoverColor }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "clamp(2.2rem, 4vw, 2.75rem)",
              height: "clamp(2.2rem, 4vw, 2.75rem)",
              border: "1px solid var(--border)",
              color: "var(--muted)",
              textDecoration: "none",
              transition: "color 0.3s, border-color 0.3s",
              fontSize: "clamp(0.75rem, 1.5vw, 1rem)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = hoverColor;
              e.currentTarget.style.borderColor = hoverColor;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--muted)";
              e.currentTarget.style.borderColor = "var(--border)";
            }}
          >
            <i className={icon} />
          </a>
        ))}
      </motion.div>
    </div>
  );
}
