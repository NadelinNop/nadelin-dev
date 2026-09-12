// windows.jsx — Window content components for each app

// Helper: ASCII-style placeholder screenshots for projects (drawn as div blocks)
function ProjScreenshot({ kind }) {
  const common = { width: "100%", height: "100%", display: "block" };
  if (kind === "circuit") {
    return (
      <svg viewBox="0 0 200 130" preserveAspectRatio="none" style={common}>
        <rect width="200" height="130" fill="#0a0e22" />
        {/* attention heads grid */}
        {Array.from({ length: 8 }).map((_, i) =>
          Array.from({ length: 6 }).map((__, j) => {
            const v = (Math.sin(i * 1.7 + j * 2.3) + 1) / 2;
            return (
              <rect
                key={`${i}-${j}`}
                x={20 + i * 20}
                y={14 + j * 16}
                width={16}
                height={12}
                fill={`rgba(106, 191, 248, ${v.toFixed(2)})`}
              />
            );
          }),
        )}
        {/* connection */}
        <path
          d="M 20 70 Q 100 30 180 70"
          stroke="#f4d44a"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M 20 90 Q 100 110 180 90"
          stroke="#e8845a"
          strokeWidth="1"
          fill="none"
        />
        <text x="10" y="124" fill="#6a8acc" fontSize="9" fontFamily="monospace">
          attn-head circuit
        </text>
      </svg>
    );
  }
  if (kind === "bars") {
    return (
      <svg viewBox="0 0 200 130" preserveAspectRatio="none" style={common}>
        <rect width="200" height="130" fill="#fff" />
        <rect x="0" y="110" width="200" height="1" fill="#1a1a1a" />
        <rect x="20" y="0" width="1" height="120" fill="#1a1a1a" />
        {[68, 32, 84, 51, 92, 44, 76, 28, 60, 88].map((h, i) => (
          <rect
            key={i}
            x={28 + i * 16}
            y={110 - h}
            width={12}
            height={h}
            fill={i === 4 || i === 9 ? "#c84a1a" : "#2a4d8f"}
          />
        ))}
        <text x="28" y="14" fill="#1a1a1a" fontSize="9" fontFamily="monospace">
          retriever recall@5
        </text>
      </svg>
    );
  }
  if (kind === "tree") {
    return (
      <div
        style={{
          ...common,
          background: "#0a0a0a",
          color: "#c8e4a4",
          fontFamily: "var(--mono-font)",
          fontSize: 9,
          padding: 8,
          lineHeight: 1.3,
        }}
      >
        <div style={{ color: "#f4d44a" }}>$ tinytrace ./agent.py</div>
        <div>├─ tool: search("ICLR papers")</div>
        <div>│ └─ ok (240ms, 3 hits)</div>
        <div>├─ think: pick top-2 abstracts</div>
        <div>├─ tool: read(arxiv:2401.0...)</div>
        <div>│ └─ ok (1.1s)</div>
        <div>
          └─ <span style={{ color: "#e8845a" }}>err</span>: rate-limit, retry…
        </div>
        <div>{"   "}└─ ok (412ms)</div>
        <div style={{ color: "#6a8a5a" }}>traced 6 events → ./trace.db</div>
      </div>
    );
  }
  if (kind === "shelf") {
    return (
      <svg viewBox="0 0 200 130" preserveAspectRatio="none" style={common}>
        <rect width="200" height="130" fill="#f6e8c4" />
        {[
          ["#c84a1a", 14, 88],
          ["#2a4d8f", 32, 70],
          ["#6abf6a", 50, 96],
          ["#d8a72a", 68, 80],
          ["#8a4d8f", 86, 100],
          ["#1a8a8a", 104, 74],
          ["#c84a1a", 122, 90],
          ["#2a4d8f", 140, 84],
          ["#d8a72a", 158, 92],
        ].map(([c, x, h], i) => (
          <rect key={i} x={x} y={108 - h} width={14} height={h} fill={c} />
        ))}
        <rect x="6" y="108" width="190" height="6" fill="#8a5a10" />
        <rect x="6" y="6" width="190" height="2" fill="#8a5a10" />
        <text x="10" y="22" fill="#3a2410" fontSize="9" fontFamily="monospace">
          noteshelf · 142 cards
        </text>
      </svg>
    );
  }

  if (kind === "bench") {
    return (
      <div
        style={{
          ...common,
          background: "#0a0a0a",
          color: "#c8e4a4",
          fontFamily: "var(--mono-font)",
          fontSize: 9,
          padding: 8,
          lineHeight: 1.35,
        }}
      >
        <div style={{ color: "#f4d44a" }}>compbench v0.4 — sweep</div>
        <div>microbf · gcc-13 · 2.4s ▮▮▮▮▮▮▮</div>
        <div>
          microbf · clang-17·{" "}
          <span style={{ color: "#e8845a" }}>3.1s ▮▮▮▮▮▮▮▮▮▮</span>
        </div>
        <div>ed-asm · gcc-13 · 0.8s ▮▮</div>
        <div>ed-asm · clang-17· 0.9s ▮▮▮</div>
        <div>tlisp · gcc-13 · 4.1s ▮▮▮▮▮▮▮▮▮▮▮▮</div>
        <div style={{ color: "#6a8a5a", marginTop: 6 }}>
          regression: clang-17 -O3
        </div>
      </div>
    );
  }
  if (kind === "MonitorCRMS") {
    return (
      <img
        src="monitor_crms_logo.jpg"
        alt="MonitorCRMS"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    );
  }
  if (kind === "Qeeri.AI") {
    return (
      <img
        src="qeeri.png"
        alt="Qeeri.AI"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "center",
          background: "#000",
        }}
      />
    );
  }
  if (kind === "Botum") {
    return (
      <img
        src="Botum.jpg"
        alt="Botum"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "center",
          background: "#000",
        }}
      />
    );
  }
  if (kind === "stock") {
    return (
      <img
        src="stock.png"
        alt="Stock Prediction"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "center",
          background: "#000",
        }}
      />
    );
  }
  if (kind === "senti") {
    return (
      <img
        src="senti.jpg"
        alt="Sentiment-Based Stock Advisor"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "center",
          background: "#000",
        }}
      />
    );
  }

  return null;
}

// ── About window ────────────────────────────────────────────────────────
function AboutBody() {
  return (
    <div className="about-grid">
      <div>
        <div className="avatar-frame">
          <img
            src="nades.jpg"
            alt={PERSONA.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              imageRendering: "auto",
              display: "block",
            }}
          />
        </div>
      </div>
      <div className="about-text">
        <h2>Hi, I'm {PERSONA.name}.</h2>
        <div className="role">
          {PERSONA.role} · {PERSONA.location}
        </div>
        <p>
          I like designing and building software. I have a BSc in Computer
          Science with a double major in Software Development and AI/ML.
          Hackathons are where I think best. I am currently looking for research
          assistant positions in any computing field to explore my interests for
          post graduate studies so feel free to reach out!
        </p>

        <div
          style={{
            marginTop: 10,
            fontSize: 11,
            color: "var(--ink-soft)",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          Stack
        </div>
        <div className="tag-row">
          {PERSONA.skills.map((s) => (
            <span className="tag" key={s}>
              {s}
            </span>
          ))}
        </div>
        <div
          style={{
            marginTop: 6,
            fontSize: 11,
            color: "var(--ink-soft)",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          Research interests
        </div>
        <div className="tag-row">
          {PERSONA.interests.map((s) => (
            <span
              className="tag"
              key={s}
              style={{
                background: "#d4e4f4",
                borderColor: "#2a4d8f",
                color: "#1a3d6a",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Projects window ─────────────────────────────────────────────────────
function ProjectsBody() {
  const folders = Array.from(new Set(PROJECTS.map((p) => p.folder)));
  // remove the "All" and default to first folder
  const [folder, setFolder] = React.useState(folders[0]);
  const list =
    folder === "All" ? PROJECTS : PROJECTS.filter((p) => p.folder === folder);
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div className="proj-toolbar">
        <button className="btn">◀ Back</button>
        <button className="btn">Forward ▶</button>
        <div className="sep"></div>
        <div className="addr">
          <IconFolder size={14} />
          <span>
            C:\Users\nadelin\Projects\{folder === "All" ? "" : folder}
          </span>
        </div>
      </div>
      <div className="proj-split">
        <div className="proj-side">
          <div className="proj-side-hd">Folders</div>
          {folders.map((f) => (
            <div
              key={f}
              className={`proj-folder ${folder === f ? "active" : ""}`}
              onClick={() => setFolder(f)}
            >
              <IconFolder
                size={16}
                color={folder === f ? "#fff5b8" : "#e8b84a"}
              />
              {f}
            </div>
          ))}
        </div>
        <div className="proj-list">
          {list.map((p) => (
            <div className="proj-card" key={p.id}>
              <div className="proj-screenshot">
                <ProjScreenshot kind={p.art} />
              </div>
              <div className="proj-info">
                <h3>{p.name}</h3>
                <div className="meta">
                  <span>
                    <b>{p.year}</b>
                  </span>
                  <span>{p.role}</span>
                </div>
                {Array.isArray(p.desc) ? (
                  <ul style={{ margin: "4px 0", paddingLeft: 16 }}>
                    {p.desc.map((b, i) => (
                      <li key={i} style={{ marginBottom: 4 }}>
                        {b}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="desc">{p.desc}</div>
                )}
                <div className="tag-row">
                  {p.stack.map((s) => (
                    <span className="tag" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
                {p?.repo && (
                  <div
                    style={{
                      marginTop: 6,
                      fontSize: 11,
                      fontFamily: "var(--mono-font)",
                      color: "var(--link)",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    →{" "}
                    <a
                      href={
                        p.repo.startsWith("http") ? p.repo : `https://${p.repo}`
                      }
                      style={{ color: "var(--link)" }}
                    >
                      {p.repo.replace("https://", "")}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Résumé window ───────────────────────────────────────────────────────
// Renders the real resume.pdf directly — no hand-typed copy to keep in sync.
function ResumeBody() {
  return (
    <object
      data="resume.pdf"
      type="application/pdf"
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      {/* Fallback for browsers/contexts that can't render inline PDFs */}
      <div style={{ padding: 16, fontSize: 12 }}>
        <p>Your browser can't preview PDFs inline.</p>
        <a
          className="btn"
          href="resume.pdf"
          download="Nadelin_Nop_Resume.pdf"
          style={{ display: "inline-block", textDecoration: "none" }}
        >
          ⬇ Download Resume (PDF)
        </a>
      </div>
    </object>
  );
}

// ── Terminal ────────────────────────────────────────────────────────────
const TERM_HELP = [
  ["whoami", "print my name + role"],
  ["about", "open the about window"],
  ["ls projects/", "list projects"],
  ["cat resume.txt", "open résumé"],
  ["contact", "open contact form"],
  ["skills", "list skills"],
  ["interests", "research interests"],
  ["sudo hire-me", "🙏"],
  ["bsod", "trigger a fake crash (it's fine, really)"],
  ["clear", "clear screen"],
  ["help", "this list"],
];

function Terminal({ openWindow, onBsod }) {
  const [history, setHistory] = React.useState([
    { type: "out", text: "NADELIN-OS [Version 4.0.1.998]" },
    {
      type: "out",
      text: "(c) 2026 Holloway Software Inc. All rights reserved.",
    },
    { type: "out", text: "" },
    { type: "out", text: "Type `help` for a list of commands." },
    { type: "out", text: "" },
  ]);
  const [input, setInput] = React.useState("");
  const inputRef = React.useRef(null);
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);
  React.useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [history]);

  const run = (cmd) => {
    const out = [...history, { type: "in", text: cmd }];
    const c = cmd.trim().toLowerCase();
    if (c === "" || c === "clear") {
      if (c === "clear") return setHistory([]);
      setHistory(out);
      return;
    }
    if (c === "help") {
      out.push({ type: "out", text: "Commands:" });
      TERM_HELP.forEach(([k, v]) =>
        out.push({ type: "out", text: `  ${k.padEnd(18)} ${v}`, accent: true }),
      );
    } else if (c === "whoami") {
      out.push({ type: "out", text: `${PERSONA.name} — ${PERSONA.role}` });
      out.push({ type: "out", text: `${PERSONA.tagline}` });
    } else if (c === "about") {
      openWindow("about");
      out.push({ type: "out", text: "Opening About…" });
    } else if (c === "ls projects/" || c === "ls" || c === "ls projects") {
      PROJECTS.forEach((p) => {
        out.push({
          type: "out",
          text: `${p.name.padEnd(22)} ${p.year}  ★ ${p.stars}`,
        });
      });
    } else if (c === "cat resume.txt" || c === "resume" || c === "cat resume") {
      openWindow("resume");
      out.push({ type: "out", text: "Opening résumé…" });
    } else if (c === "contact") {
      openWindow("contact");
      out.push({ type: "out", text: "Opening compose mail…" });
    } else if (c === "skills") {
      out.push({ type: "out", text: PERSONA.skills.join(", ") });
    } else if (c === "interests") {
      out.push({ type: "out", text: PERSONA.interests.join(", ") });
    } else if (c === "sudo hire-me") {
      out.push({ type: "out", text: "[sudo] password for nadelin: ******" });
      out.push({
        type: "out",
        text: "✔ request accepted. she'll be in touch.",
        accent: true,
      });
    } else if (c === "bsod") {
      out.push({ type: "out", text: "kernel panic in 3…" });
      setTimeout(onBsod, 600);
    } else if (c === "exit") {
      out.push({ type: "out", text: "you cannot exit. there is no exit." });
    } else {
      out.push({
        type: "err",
        text: `'${cmd}' is not recognized as an internal or external command.`,
      });
    }
    setHistory(out);
  };

  const onKey = (e) => {
    if (e.key === "Enter") {
      run(input);
      setInput("");
    }
  };

  return (
    <div
      className="terminal"
      ref={scrollRef}
      onClick={() => inputRef.current && inputRef.current.focus()}
    >
      {history.map((h, i) => {
        if (h.type === "in")
          return (
            <div className="line" key={i}>
              <span className="prompt">C:\Users\nadelin&gt;</span> {h.text}
            </div>
          );
        if (h.type === "err")
          return (
            <div className="line err" key={i}>
              {h.text}
            </div>
          );
        return (
          <div className={`line ${h.accent ? "accent" : ""}`} key={i}>
            {h.text || "\u00A0"}
          </div>
        );
      })}
      <div className="input-row">
        <span className="prompt">C:\Users\nadelin&gt;</span>
        <input
          ref={inputRef}
          value={input}
          onKeyDown={onKey}
          onChange={(e) => setInput(e.target.value)}
          spellCheck={false}
          autoCapitalize="off"
          autoCorrect="off"
        />
        <span className="terminal-cursor" />
      </div>
    </div>
  );
}
function ContactBody({ closeSelf }) {
  const [form, setForm] = React.useState({
    to: PERSONA.email,
    from: "",
    subject: "Hi from your portfolio",
    body: "",
  });
  const [sent, setSent] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState("");

  const send = async () => {
    if (!form.from.trim() || !form.body.trim()) {
      setError("Please fill in your email and message.");
      return;
    }
    setSending(true);
    setError("");
    try {
      await emailjs.send(
        "service_g45av7q",
        "template_278e2xm",
        {
          from_email: form.from,
          subject: form.subject,
          message: form.body,
        },
        "6EMvP1m2s4QF5H-BB",
      );
      setSent(true);
    } catch (e) {
      setError("Failed to send. Try emailing directly.");
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div style={{ padding: 24, textAlign: "center" }}>
        <div
          style={{
            fontFamily: "var(--display-font)",
            fontSize: 22,
            color: "var(--title-from)",
          }}
        >
          ✉ Message sent!
        </div>
        <p>Thanks ˚˖𓍢ִ໋❀ I'll get back to you soon.</p>
        <button className="btn" onClick={closeSelf}>
          OK
        </button>
      </div>
    );
  }

  return (
    <div className="contact-form">
      <div className="row">
        <label>
          <span style={{ fontSize: 11, color: "var(--ink-soft)" }}>To</span>
          <input value={form.to} readOnly />
        </label>
      </div>
      <div className="row">
        <label>
          <span style={{ fontSize: 11, color: "var(--ink-soft)" }}>From</span>
          <input
            value={form.from}
            placeholder="you@somewhere.com"
            onChange={(e) => setForm({ ...form, from: e.target.value })}
          />
        </label>
        <label>
          <span style={{ fontSize: 11, color: "var(--ink-soft)" }}>
            Subject
          </span>
          <input
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
          />
        </label>
      </div>
      <label>
        <span style={{ fontSize: 11, color: "var(--ink-soft)" }}>Message</span>
        <textarea
          value={form.body}
          placeholder="hey nadelin — I'd love to connect about…"
          onChange={(e) => setForm({ ...form, body: e.target.value })}
        />
      </label>
      {error && (
        <div style={{ fontSize: 11, color: "var(--accent)" }}>{error}</div>
      )}
      <div className="actions">
        <button className="btn" onClick={closeSelf}>
          Cancel
        </button>
        <button
          className="btn pressed"
          style={{ background: "#d4e4f4" }}
          onClick={send}
          disabled={sending}
        >
          {sending ? "Sending…" : "📧 Send"}
        </button>
      </div>
      <div
        style={{ fontSize: 11, color: "var(--ink-soft)", textAlign: "center" }}
      >
        Or email <a href={`mailto:${PERSONA.email}`}>{PERSONA.email}</a>{" "}
        directly.
      </div>
    </div>
  );
}
function GuestbookBody() {
  const SUPABASE_URL = "https://wkbvyizilzhwlhimwhgh.supabase.co";
  const SUPABASE_KEY = "sb_publishable_alB-_XP9l3IwTYHn0JgTow_JS9dK6yh";
  const headers = {
    "Content-Type": "application/json",
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`,
  };

  const [entries, setEntries] = React.useState(GUESTBOOK);
  const [draft, setDraft] = React.useState({ who: "", msg: "" });
  const [loading, setLoading] = React.useState(true);

  // Fetch entries on mount
  React.useEffect(() => {
    fetch(`${SUPABASE_URL}/rest/v1/guestbook?order=id.desc`, { headers })
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setEntries(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const post = async () => {
    if (!draft.who.trim() || !draft.msg.trim()) return;
    const now = new Date().toLocaleDateString("en-AU", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    const entry = { who: draft.who.trim(), msg: draft.msg.trim(), when: now };
    // Optimistic insert so it feels instant; we reconcile with the server
    // response below (or roll it back if the save actually failed).
    setEntries((e) => [entry, ...e]);
    setDraft({ who: "", msg: "" });
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/guestbook`, {
        method: "POST",
        headers: { ...headers, Prefer: "return=representation" },
        body: JSON.stringify(entry),
      });
      if (!res.ok) throw new Error(`save failed (${res.status})`);
      const [saved] = await res.json();
      if (saved) {
        setEntries((e) => [saved, ...e.filter((x) => x !== entry)]);
      }
    } catch (err) {
      console.error("Guestbook save failed:", err);
      // Roll back the optimistic entry — it never actually saved, so don't
      // let it sit there looking persisted when a refresh will drop it.
      setEntries((e) => e.filter((x) => x !== entry));
      setDraft({ who: entry.who, msg: entry.msg });
      alert("Couldn't save your entry — please try again in a moment.");
    }
  };

  return (
    <div
      style={{ padding: 12, display: "flex", flexDirection: "column", gap: 10 }}
    >
      <div className="inset" style={{ padding: 10, background: "#fffbe0" }}>
        <div
          style={{
            fontFamily: "var(--display-font)",
            fontSize: 16,
            color: "var(--accent)",
          }}
        >
          ★ Sign the guestbook ★
        </div>
        <div style={{ fontSize: 11, color: "var(--ink-soft)" }}>
          Leave a note — it'll show up for everyone!
        </div>
      </div>
      <div className="contact-form" style={{ padding: 0 }}>
        <div className="row">
          <input
            placeholder="your name"
            value={draft.who}
            onChange={(e) => setDraft({ ...draft, who: e.target.value })}
          />
        </div>
        <textarea
          placeholder="leave a note…"
          value={draft.msg}
          onChange={(e) => setDraft({ ...draft, msg: e.target.value })}
          style={{ height: 50 }}
        />
        <div className="actions">
          <button className="btn" onClick={post}>
            Sign
          </button>
        </div>
      </div>
      <div
        className="inset"
        style={{ background: "#fff", maxHeight: 220, overflow: "auto" }}
      >
        {loading && <div style={{ padding: 8, fontSize: 11 }}>Loading…</div>}
        {entries.map((e, i) => (
          <div
            key={e.id ?? i}
            style={{
              padding: "8px 10px",
              borderBottom:
                i < entries.length - 1 ? "1px dashed #c8c4a8" : "none",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 11,
              }}
            >
              <b style={{ color: "var(--link)" }}>{e.who}</b>
              <span style={{ color: "var(--ink-soft)" }}>{e.when}</span>
            </div>
            <div style={{ fontSize: 12, marginTop: 2 }}>{e.msg}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
Object.assign(window, {
  AboutBody,
  ProjectsBody,
  ResumeBody,
  Terminal,
  ContactBody,
  GuestbookBody,
});
