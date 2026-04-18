// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App




import React, { useState } from "react";

export default function App() {
  const [lang, setLang] = useState("en");
  const isAr = lang === "ar";

  const t = {
    en: {
      title: "We Build Digital Products",
      desc: "Web, Mobile & Desktop applications for modern businesses.",
      services: "Our Services",
      about: "About Us",
      aboutText:
        "We are a software development company delivering scalable and secure solutions.",
      contact: "Contact Us",
    },
    ar: {
      title: "نقوم ببناء منتجات رقمية",
      desc: "تطوير تطبيقات الويب والموبايل وسطح المكتب باحترافية.",
      services: "خدماتنا",
      about: "من نحن",
      aboutText:
        "نحن شركة تطوير برمجيات نقدم حلولًا رقمية آمنة وقابلة للتوسع.",
      contact: "تواصل معنا",
    },
  }[lang];

  return (
    <div
      style={{
        ...styles.app,
        direction: isAr ? "rtl" : "ltr",
      }}
    >
      {/* NAVBAR */}
      <header style={styles.nav}>
        <div style={styles.container}>
          <h2>Aggeray Tech</h2>
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            style={styles.lang}
          >
            {lang === "en" ? "العربية" : "English"}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.containerCenter}>
          <h1 style={styles.heroTitle}>{t.title}</h1>
          <p style={styles.heroText}>{t.desc}</p>

          <div style={styles.heroBtns}>
            <button style={styles.primary}>Start</button>
            <button style={styles.secondary}>Work</button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>{t.services}</h2>
          <div style={styles.grid}>
            <Card icon="🌐" title="Web" />
            <Card icon="📱" title="Mobile" />
            <Card icon="🖥️" title="Desktop" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={styles.sectionAlt}>
        <div style={styles.containerCenter}>
          <h2 style={styles.sectionTitle}>{t.about}</h2>
          <p style={styles.about}>{t.aboutText}</p>
        </div>
      </section>

      {/* CONTACT */}
      <section style={styles.contact}>
        <div style={styles.containerCenter}>
          <h2>{t.contact}</h2>
          <button style={styles.primary}>{t.contact}</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} Aggeray Tech
      </footer>
    </div>
  );
}

function Card({ icon, title }) {
  return (
    <div style={styles.card}>
      <div style={{ fontSize: "32px" }}>{icon}</div>
      <h3>{title}</h3>
      <p>Professional solutions</p>
    </div>
  );
}

/* ===== STYLES ===== */

const styles = {
  app: {
    width: "100%",
    minHeight: "100vh",
    background: "#020617",
    color: "#e5e7eb",
    fontFamily: "system-ui, Arial",
  },

  /* LAYOUT HELPERS */
  container: {
    width: "100%",
    maxWidth: "1200px",
    margin: "auto",
    padding: "0 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "16px",
  },

  containerCenter: {
    maxWidth: "900px",
    margin: "auto",
    padding: "0 16px",
    textAlign: "center",
  },

  /* NAV */
  nav: {
    width: "100%",
    padding: "16px 0",
    borderBottom: "1px solid #1e293b",
  },

  lang: {
    padding: "6px 14px",
    borderRadius: "20px",
    cursor: "pointer",
  },

  /* HERO */
  hero: {
    width: "100%",
    padding: "clamp(80px, 12vw, 140px) 0",
    background: "linear-gradient(135deg,#1e3a8a,#020617)",
  },

  heroTitle: {
    fontSize: "clamp(30px, 6vw, 56px)",
    marginBottom: "12px",
  },

  heroText: {
    fontSize: "18px",
    opacity: 0.9,
  },

  heroBtns: {
    marginTop: "28px",
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    flexWrap: "wrap",
  },

  /* BUTTONS */
  primary: {
    padding: "12px 30px",
    borderRadius: "24px",
    background: "#38bdf8",
    border: "none",
    cursor: "pointer",
  },

  secondary: {
    padding: "12px 30px",
    borderRadius: "24px",
    border: "1px solid #38bdf8",
    background: "transparent",
    color: "#38bdf8",
  },

  /* SECTIONS */
  section: {
    width: "100%",
    padding: "clamp(70px, 10vw, 110px) 0",
  },

  sectionAlt: {
    width: "100%",
    padding: "clamp(70px, 10vw, 110px) 0",
    background: "#020617",
  },

  sectionTitle: {
    textAlign: "center",
    fontSize: "clamp(24px, 4vw, 34px)",
    marginBottom: "40px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
    width: "100%",
  },

  card: {
    padding: "28px",
    background: "rgba(255,255,255,0.05)",
    borderRadius: "20px",
    textAlign: "center",
  },

  about: {
    maxWidth: "720px",
    margin: "auto",
    lineHeight: 1.7,
  },

  /* CONTACT */
  contact: {
    width: "100%",
    padding: "90px 0",
    background: "linear-gradient(135deg,#1e3a8a,#020617)",
    textAlign: "center",
  },

  footer: {
    width: "100%",
    padding: "20px",
    textAlign: "center",
    fontSize: "14px",
    borderTop: "1px solid #1e293b",
  },
};
