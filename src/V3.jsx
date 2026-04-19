// Variation 3 — SpaceX-inspired (aerospace, dark, mission-telemetry)
const V3 = ({ t, lang }) => {
  const c = t.contact;
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  const ts = `${now.getUTCFullYear()}-${pad(now.getUTCMonth()+1)}-${pad(now.getUTCDate())}T${pad(now.getUTCHours())}:${pad(now.getUTCMinutes())}Z`;

  // Operational duration since Oct 2021
  const start = new Date(2021, 9, 1);
  const months = Math.floor((now - start) / (1000 * 60 * 60 * 24 * 30.44));
  const years = (months / 12).toFixed(1);

  return (
    <div className="v3">
      <div className="v3-cmdbar">
        <div className="left">DFN-01 · PERSONAL CV · REV 2026.04</div>
        <div className="mid">DOVILIO · FERRARI · NETO</div>
        <div className="right">
          <span className="live">ONLINE</span>
          <span>{ts}</span>
        </div>
      </div>

      <section className="v3-hero">
        <div className="v3-hero-left">
          <div>
            <div className="callsign">// CALLSIGN — DFN · OPERATOR · {t.location.toUpperCase()}</div>
            <h1>Test<br/>Engineer.</h1>
            <p className="tagline">{t.tagline}</p>
          </div>
          <div className="v3-telemetry">
            <div className="v3-tel">
              <div className="l">Role</div>
              <div className="v">{t.role}</div>
            </div>
            <div className="v3-tel">
              <div className="l">Status</div>
              <div className="v" style={{color: "var(--accent-green)"}}>● {t.status}</div>
            </div>
            <div className="v3-tel">
              <div className="l">Mission time</div>
              <div className="v tabular">{years}<span className="unit">YR</span></div>
            </div>
            <div className="v3-tel">
              <div className="l">Languages</div>
              <div className="v">PT · EN · DE · ES</div>
            </div>
          </div>
        </div>
        <div className="v3-hero-right">
          <img src="assets/dovilio.jpg" alt="Dovilio Ferrari Neto" />
          <div className="crosshairs"></div>
          <div className="corner tl"></div>
          <div className="corner tr"></div>
          <div className="corner bl"></div>
          <div className="corner br"></div>
          <div className="tag">
            <span>OPERATOR ID // DFN-01</span>
            <span className="big">DOVILIO FERRARI NETO</span>
            <span>SP · BR — 23.5°S 46.6°W</span>
          </div>
        </div>
      </section>

      <section className="v3-section">
        <div className="head">
          <div className="idx">§ 01 — {t.sections.about}</div>
          <h2>{t.about.title}</h2>
          <div className="stamp">CLASSIFIED / PUBLIC<br/>DOC-DFN-001</div>
        </div>
        <div className="v3-about-body">
          <p className="lede">{t.about.body}</p>
          <div className="v3-sidecard">
            <h4>Operator data</h4>
            <div className="row"><span className="k">Callsign</span><span className="v">DFN-01</span></div>
            <div className="row"><span className="k">Base</span><span className="v">SÃO PAULO</span></div>
            <div className="row"><span className="k">Timezone</span><span className="v">UTC-03</span></div>
            <div className="row"><span className="k">Avail.</span><span className="v" style={{color:"var(--accent-green)"}}>GO</span></div>
            <div className="row"><span className="k">OEMs</span><span className="v">VW · MB</span></div>
            <div className="row"><span className="k">Deploy</span><span className="v">BR · DE</span></div>
          </div>
        </div>
      </section>

      <section className="v3-section">
        <div className="head">
          <div className="idx">§ 02 — {t.sections.experience}</div>
          <h2>{lang === "pt" ? "Registro de missões" : lang === "de" ? "Missionsprotokoll" : "Mission log"}</h2>
          <div className="stamp">{t.experience.length} MISSIONS</div>
        </div>
        <div className="v3-log">
          {t.experience.map((e, i) => (
            <div className="v3-mission" key={i}>
              <div className="side">
                <div>M-{String(t.experience.length - i).padStart(2, "0")}</div>
                <div className="period">{e.period}</div>
                {e.status && <div className="status-active">{e.status}</div>}
                <div>{e.location}</div>
              </div>
              <div>
                <h3>{e.role}</h3>
                <div className="company">▸ {e.company}</div>
                <div className="log">
                  {e.bullets.map((b, j) => (
                    <div className="log-row" key={j}>
                      <div className="k">[{String(j+1).padStart(2,"0")}] {b.label}</div>
                      <div className="t">{b.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="v3-section">
        <div className="head">
          <div className="idx">§ 03 — {t.sections.skills}</div>
          <h2>{lang === "pt" ? "Matriz operacional" : lang === "de" ? "Einsatzmatrix" : "Operational matrix"}</h2>
          <div className="stamp">{t.skills.technical.length} SYSTEMS CERTIFIED</div>
        </div>
        <div className="v3-matrix">
          {t.skills.technical.map((s, i) => (
            <div className="cell" key={i} data-n={`S.${String(i+1).padStart(2,"0")}`}>
              <div className="k">{s.k}</div>
              <div className="v">{s.v}</div>
            </div>
          ))}
        </div>
        <div className="v3-soft">
          {t.skills.soft.map((s, i) => <span key={i}>{s}</span>)}
        </div>
      </section>

      <section className="v3-section">
        <div className="head">
          <div className="idx">§ 04 — {t.sections.languages}</div>
          <h2>{lang === "pt" ? "Canais de comunicação" : lang === "de" ? "Kommunikationskanäle" : "Communication channels"}</h2>
          <div className="stamp">4 BANDS ACTIVE</div>
        </div>
        <div className="v3-langs">
          {t.languages.map((l, i) => {
            const lvl = l.level.toLowerCase();
            const pct = lvl.includes("nati") || lvl.includes("mutter") ? 100 : lvl.includes("avanç") || lvl.includes("advanc") || lvl.includes("fortg") ? 85 : 60;
            return (
              <div className="v3-lang" key={i}>
                <div className="name">{l.lang}</div>
                <div className="bar"><div className="fill" style={{"--lvl": pct + "%"}}></div></div>
                <div className="foot">
                  <span className="lvl">{l.level}</span>
                  <span>{pct}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="v3-section">
        <div className="head">
          <div className="idx">§ 05 — {t.sections.education} / {t.sections.certifications} / {t.sections.interests}</div>
          <h2>{lang === "pt" ? "Dossier" : lang === "de" ? "Dossier" : "Dossier"}</h2>
          <div className="stamp">SUPPLEMENTARY</div>
        </div>
        <div className="v3-about-body" style={{gridTemplateColumns: "1fr 1fr"}}>
          <div>
            <div className="v3-sidecard" style={{marginBottom: 16}}>
              <h4>{t.sections.education}</h4>
              {t.education.map((e, i) => (
                <div key={i} style={{fontFamily:"var(--font-mono)", fontSize:13, padding:"4px 0"}}>
                  <div style={{color:"var(--fg)", letterSpacing:"0.02em"}}>{e.degree}</div>
                  <div style={{color:"var(--fg-dim)", fontSize:11, letterSpacing:"0.1em"}}>{e.school} — {e.year}</div>
                </div>
              ))}
            </div>
            <div className="v3-sidecard">
              <h4>{t.sections.certifications}</h4>
              {t.certifications.map((cert, i) => (
                <div className="row" key={i}>
                  <span className="k" style={{textTransform:"none", letterSpacing:"0.02em", color:"var(--fg)", fontSize:12}}>{cert.name}</span>
                  <span className="v" style={{color:"var(--accent-blue)", fontSize:11}}>{cert.issuer}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="v3-sidecard">
            <h4>{t.sections.interests}</h4>
            {t.interests.map((it, i) => (
              <div className="row" key={i}>
                <span className="k" style={{color:"var(--fg)", fontSize:13, letterSpacing:"0.02em", textTransform:"none"}}>{it.k}</span>
                <span className="v" style={{color:"var(--fg-dim)", fontSize:11}}>{it.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="v3-contact">
        <div className="head" style={{marginBottom: 32}}>
          <div className="idx">§ 06 — {t.sections.contact}</div>
          <h2>{lang === "pt" ? "Estabelecer conexão" : lang === "de" ? "Verbindung herstellen" : "Establish link"}</h2>
          <div className="stamp">CHANNEL OPEN</div>
        </div>
        <div className="v3-term">
          <div className="tbar">
            <span>dfn@ground-station ~ </span>
            <span>● ● ●</span>
          </div>
          <div className="body">
            <div className="line"><span className="prompt">$</span><span className="cmd">whoami</span></div>
            <div className="out">dovilio.ferrari.neto · test engineer · {t.location}</div>
            <div className="line"><span className="prompt">$</span><span className="cmd">cat contact.txt</span></div>
            <div className="out">
              email    <a href={`mailto:${c.email}`}>{c.email}</a><br/>
              phone    <a href={`tel:${c.phone.replace(/\s/g, "")}`}>{c.phone}</a><br/>
              linkedin <a href={c.linkedinUrl} target="_blank" rel="noopener">{c.linkedin}</a>
            </div>
            <div className="line"><span className="prompt">$</span><span className="cmd">status</span></div>
            <div className="out" style={{color:"var(--accent-green)"}}>▸ {t.status} <span className="cursor"></span></div>
            <div className="actions">
              <a className="btn" href={`mailto:${c.email}`}>→ {t.ui.sendEmail}</a>
              <a className="btn" href={c.linkedinUrl} target="_blank" rel="noopener">↗ LinkedIn</a>
              <button className="btn" onClick={() => window.print()}>↓ {t.sections.download}</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="v3-footer">
        <span>© {now.getFullYear()} DFN-01 · DOVILIO FERRARI NETO</span>
        <span>GROUND STATION · SÃO PAULO · BR</span>
        <span>v3 · MISSION-BRIEF</span>
      </footer>
    </div>
  );
};

window.V3 = V3;
