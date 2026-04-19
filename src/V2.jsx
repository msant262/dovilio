// Variation 2 — Apple-inspired (editorial premium)
const V2 = ({ t, lang }) => {
  const c = t.contact;
  const dovName = "Dovilio Ferrari Neto";

  return (
    <div className="v2">
      <nav className="v2-nav">Dovilio Ferrari Neto</nav>

      <section className="v2-hero">
        <div className="container">
          <div className="eyebrow">{t.role}</div>
          <h1>Dovilio.</h1>
          <p className="tagline">{t.tagline}</p>
          <div className="v2-hero-portrait">
            <img src="assets/dovilio.jpg" alt={dovName} />
          </div>
        </div>
        <div className="v2-scroll-hint">
          <span>{t.ui.scrollHint}</span>
          <div className="line"></div>
        </div>
      </section>

      <section className="v2-section v2-about">
        <div className="container">
          <div className="eyebrow">— {t.sections.about}</div>
          <h2>{lang === "pt" ? "Precisão em cada linha de código, cada ciclo de teste." : lang === "de" ? "Präzision in jeder Codezeile, jedem Testzyklus." : "Precision in every line of code, every test cycle."}</h2>
          <p className="subhead">{t.about.body}</p>
        </div>
      </section>

      <section className="v2-section">
        <div className="container">
          <div className="eyebrow">— {t.sections.experience}</div>
          <h2>{lang === "pt" ? "Construído com rigor." : lang === "de" ? "Mit Sorgfalt entwickelt." : "Built with rigour."}</h2>
          <p className="subhead">{lang === "pt" ? "Cinco anos aplicando metodologia, automação e colaboração internacional ao ciclo de testes automotivos." : lang === "de" ? "Fünf Jahre Anwendung von Methodik, Automatisierung und internationaler Zusammenarbeit im automobilen Testzyklus." : "Five years applying methodology, automation and international collaboration to the automotive testing cycle."}</p>
          <div className="v2-exp-list">
            {t.experience.map((e, i) => (
              <div className="v2-exp-card" key={i}>
                <div className="top">
                  <div className="period">
                    {e.period}
                    {e.status && <> · <span className="now">{e.status}</span></>}
                  </div>
                  <div className="period">{e.location}</div>
                </div>
                <h3>{e.role}</h3>
                <div className="company">{e.company}</div>
                <div className="bullets">
                  {e.bullets.map((b, j) => (
                    <div className="bullet" key={j}>
                      <div className="k">{b.label}</div>
                      <div className="t">{b.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="v2-section">
        <div className="container">
          <div className="eyebrow">— {t.sections.skills}</div>
          <h2>{lang === "pt" ? "Ferramentas que domino." : lang === "de" ? "Werkzeuge, die ich beherrsche." : "Tools I master."}</h2>
          <div className="v2-skills">
            {t.skills.technical.map((s, i) => (
              <div className="v2-skill" key={i}>
                <div className="k">{s.k}</div>
                <div className="v">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="v2-section">
        <div className="container">
          <div className="eyebrow">— {t.sections.languages}</div>
          <h2>{lang === "pt" ? "Quatro idiomas. Quatro culturas." : lang === "de" ? "Vier Sprachen. Vier Kulturen." : "Four languages. Four cultures."}</h2>
          <div className="v2-langs">
            {t.languages.map((l, i) => (
              <div className="v2-lang" key={i}>
                <div className="name">{l.lang}</div>
                <div className="level">{l.level}</div>
                {l.inst && <div className="inst">{l.inst}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="v2-section">
        <div className="container">
          <div className="eyebrow">— {t.sections.education} · {t.sections.certifications}</div>
          <h2>{lang === "pt" ? "Formação e credenciais." : lang === "de" ? "Ausbildung und Qualifikationen." : "Education and credentials."}</h2>
          <div className="v2-certs">
            {t.education.map((e, i) => (
              <div className="v2-cert" key={`edu-${i}`}>
                <div className="name">{e.degree} · {e.school}</div>
                <div className="issuer">{e.year}</div>
              </div>
            ))}
            {t.certifications.map((cert, i) => (
              <div className="v2-cert" key={`cert-${i}`}>
                <div className="name">{cert.name}</div>
                <div className="issuer">{cert.issuer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="v2-section">
        <div className="container">
          <div className="eyebrow">— {t.sections.interests}</div>
          <h2>{lang === "pt" ? "Quando não estou testando." : lang === "de" ? "Wenn ich nicht teste." : "When I'm not testing."}</h2>
          <div className="v2-langs" style={{gridTemplateColumns: "repeat(3, 1fr)"}}>
            {t.interests.map((it, i) => (
              <div className="v2-lang" key={i}>
                <div className="name">{it.k}</div>
                <div className="inst">{it.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="v2-contact">
        <div className="container">
          <div className="eyebrow" style={{color: "var(--accent-blue)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 20}}>— {t.sections.contact}</div>
          <h2>{lang === "pt" ? "Vamos\nconstruir juntos." : lang === "de" ? "Lassen Sie uns\nzusammen bauen." : "Let's build\ntogether."}</h2>
          <a href={`mailto:${c.email}`} className="email-big">{c.email}</a>
          <div className="links">
            <a href={c.linkedinUrl} target="_blank" rel="noopener">LinkedIn ↗</a>
            <a href={`tel:${c.phone.replace(/\s/g, "")}`}>{c.phone}</a>
            <button style={{color:"inherit",letterSpacing:"inherit",textTransform:"inherit",fontFamily:"inherit",fontSize:"inherit"}} onClick={() => window.print()}>{t.sections.download} ↓</button>
          </div>
        </div>
      </section>

      <footer className="v2-footer">
        © {new Date().getFullYear()} Dovilio Ferrari Neto · {t.location}
      </footer>
    </div>
  );
};

window.V2 = V2;
