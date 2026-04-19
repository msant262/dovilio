// Variation 1 — Meio-termo (engenheiro técnico pragmático)
const V1 = ({ t, lang }) => {
  const c = t.contact;
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  const ts = `${now.getUTCFullYear()}-${pad(now.getUTCMonth()+1)}-${pad(now.getUTCDate())} ${pad(now.getUTCHours())}:${pad(now.getUTCMinutes())} UTC`;

  const [copied, setCopied] = React.useState(null);
  const copy = (val, key) => {
    navigator.clipboard?.writeText(val);
    setCopied(key);
    setTimeout(() => setCopied(null), 1400);
  };

  const dovName = "Dovilio Ferrari Neto";

  return (
    <div className="v1">
      <div className="v1-topstrip">
        <div className="container">
          <div className="cell"><span className="dot"></span><span>{t.status}</span></div>
          <div className="cell"><span>{t.location}</span></div>
          <div className="cell"><span>REV 2026.04 · {ts}</span></div>
        </div>
      </div>

      <section className="v1-hero">
        <div className="container">
          <div>
            <div className="meta">
              <span>DFN · 01</span>
              <span>{t.role}</span>
              <span>EST. 2015</span>
            </div>
            <h1>
              Dovilio<br/>
              <span className="line2">Ferrari Neto.</span>
            </h1>
            <p className="tagline">{t.tagline}</p>
            <div className="cta-row">
              <a href={`mailto:${c.email}`} className="v1-btn primary">
                {t.ui.sendEmail} →
              </a>
              <a href={c.linkedinUrl} target="_blank" rel="noopener" className="v1-btn">
                LinkedIn ↗
              </a>
              <button className="v1-btn" onClick={() => window.print()}>
                {t.sections.download}
              </button>
            </div>
          </div>
          <div className="v1-portrait">
            <img src="assets/dovilio.jpg" alt={dovName} />
            <div className="tag">
              <span>DFN</span>
              <span>SÃO PAULO · BR</span>
            </div>
          </div>
        </div>
      </section>

      <section className="v1-stats">
        <div className="container">
          <div className="v1-stat">
            <div className="n">4<span className="plus">+</span></div>
            <div className="l">{t.ui.yearsExperience}</div>
          </div>
          <div className="v1-stat">
            <div className="n">4</div>
            <div className="l">{t.ui.languagesSpoken}</div>
          </div>
          <div className="v1-stat">
            <div className="n">2</div>
            <div className="l">{lang === "pt" ? "OEMs globais (VW, MB)" : lang === "de" ? "globale OEMs (VW, MB)" : "global OEMs (VW, MB)"}</div>
          </div>
          <div className="v1-stat">
            <div className="n">DE<span style={{color:"var(--fg-dim)"}}>/</span>BR</div>
            <div className="l">{t.ui.continents}</div>
          </div>
        </div>
      </section>

      <section className="v1-section v1-about" id="about">
        <div className="container">
          <div className="header">
            <div className="section-label">01 · {t.sections.about}</div>
            <h2>{t.about.title}</h2>
          </div>
          <div className="body">
            <div></div>
            <p className="lede">{t.about.body}</p>
          </div>
        </div>
      </section>

      <section className="v1-section" id="experience">
        <div className="container">
          <div className="header">
            <div className="section-label">02 · {t.sections.experience}</div>
            <h2>{lang === "pt" ? "Onde atuei." : lang === "de" ? "Wo ich gearbeitet habe." : "Where I've worked."}</h2>
          </div>
          {t.experience.map((e, i) => (
            <div className="v1-exp-item" key={i}>
              <div className="when">
                <div>{e.period}</div>
                {e.status && <span className="badge">{e.status}</span>}
              </div>
              <div>
                <div className="role">{e.role}</div>
                <div className="company">
                  {e.company}<span className="loc">{e.location}</span>
                </div>
                <div className="bullets">
                  {e.bullets.map((b, j) => (
                    <div className="bullet" key={j}>
                      <div className="k">{b.label}</div>
                      <div className="t">{b.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="v1-section" id="skills">
        <div className="container">
          <div className="header">
            <div className="section-label">03 · {t.sections.skills}</div>
            <h2>{lang === "pt" ? "Stack técnica." : lang === "de" ? "Technischer Stack." : "Technical stack."}</h2>
          </div>
          <div className="v1-skills-grid">
            {t.skills.technical.map((s, i) => (
              <div className="v1-skill" key={i}>
                <div className="k">{s.k}</div>
                <div className="v">{s.v}</div>
              </div>
            ))}
          </div>
          <div className="v1-soft">
            {t.skills.soft.map((s, i) => <span key={i}>{s}</span>)}
          </div>
        </div>
      </section>

      <section className="v1-section" id="languages">
        <div className="container">
          <div className="header">
            <div className="section-label">04 · {t.sections.languages} / {t.sections.education}</div>
            <h2>{lang === "pt" ? "Idiomas e formação." : lang === "de" ? "Sprachen und Ausbildung." : "Languages and education."}</h2>
          </div>
          <div className="v1-two-col">
            <div className="v1-block">
              <h3>{t.sections.languages}</h3>
              {t.languages.map((l, i) => (
                <div className="v1-lang-row" key={i}>
                  <div className="lang">{l.lang}</div>
                  <div className="level">{l.level}</div>
                  <div className="inst">{l.inst}</div>
                </div>
              ))}
            </div>
            <div className="v1-block">
              <h3>{t.sections.education}</h3>
              {t.education.map((e, i) => (
                <div className="v1-edu" key={i}>
                  <div className="degree">{e.degree}</div>
                  <div className="school">{e.school} · {e.year}</div>
                </div>
              ))}
              <h3 style={{marginTop: 32}}>{t.sections.certifications}</h3>
              {t.certifications.map((cert, i) => (
                <div className="v1-cert" key={i}>
                  <div className="name">{cert.name}</div>
                  <div className="issuer">{cert.issuer}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="v1-section" id="interests">
        <div className="container">
          <div className="header">
            <div className="section-label">05 · {t.sections.interests}</div>
            <h2>{lang === "pt" ? "Fora do escritório." : lang === "de" ? "Außerhalb des Büros." : "Outside the office."}</h2>
          </div>
          <div className="v1-skills-grid" style={{gridTemplateColumns: "repeat(3, 1fr)"}}>
            {t.interests.map((it, i) => (
              <div className="v1-skill" key={i}>
                <div className="k">{it.k}</div>
                <div className="v">{it.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="v1-contact" id="contact">
        <div className="container">
          <div className="section-label" style={{marginBottom: 32}}>06 · {t.sections.contact}</div>
          <h2>
            {lang === "pt" ? "Vamos conversar." : lang === "de" ? "Sprechen wir." : "Let's talk."}
          </h2>
          <div className="grid">
            <button className="v1-contact-card" onClick={() => copy(c.email, "email")}>
              <div className="label">Email</div>
              <div className="value">{c.email}</div>
              <div className="action">{copied === "email" ? t.ui.copied + " ✓" : t.ui.copy + " →"}</div>
            </button>
            <button className="v1-contact-card" onClick={() => copy(c.phone, "phone")}>
              <div className="label">{t.ui.call}</div>
              <div className="value">{c.phone}</div>
              <div className="action">{copied === "phone" ? t.ui.copied + " ✓" : t.ui.copy + " →"}</div>
            </button>
            <a className="v1-contact-card" href={c.linkedinUrl} target="_blank" rel="noopener">
              <div className="label">LinkedIn</div>
              <div className="value">/dovilio-ferrari-neto</div>
              <div className="action">{t.ui.openLinkedIn} ↗</div>
            </a>
          </div>
        </div>
      </section>

      <footer className="v1-footer">
        <div className="container">
          <div>© {now.getFullYear()} Dovilio Ferrari Neto</div>
          <div>v1 · engineering-brief</div>
        </div>
      </footer>
    </div>
  );
};

window.V1 = V1;
