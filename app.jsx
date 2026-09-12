// app.jsx — Main desktop OS shell: window manager, taskbar, start menu, boot.

// Style constants (formerly tweaks) — hardcoded to current values
const STYLE = {
  wallpaper: "image",
  titleHue: 218,
  scanlines: false,
  boot: false,
  font: "tahoma",
};

const APPS = {
  about: { title: "About", icon: "person", w: 660, h: 440 },
  projects: { title: "File Explorer", icon: "folder", w: 720, h: 500 },
  resume: { title: "resume.pdf — Adobe Reader", icon: "doc", w: 600, h: 540 },
  terminal: { title: "Command Prompt", icon: "terminal", w: 540, h: 380 },
  contact: { title: "HotMail", icon: "mail", w: 460, h: 360 },
  guestbook: { title: "Guestbook", icon: "globe", w: 480, h: 460 },
  computer: { title: "My Computer", icon: "computer", w: 520, h: 360 },
};

function iconFor(name, size = 16) {
  const map = {
    person: <IconPerson size={size} />,
    folder: <IconFolder size={size} />,
    doc: <IconDoc size={size} />,
    terminal: <IconTerminal size={size} />,
    mail: <IconMail size={size} />,
    globe: <IconGlobe size={size} />,
    computer: <IconComputer size={size} />,
    floppy: <IconFloppy size={size} />,
    code: <IconCode size={size} />,
    gear: <IconGear size={size} />,
    help: <IconHelp size={size} />,
    search: <IconSearch size={size} />,
  };
  return map[name] || <IconUnknown size={size} />;
}

// ── Draggable / resizable window ────────────────────────────────────────
function Win({
  winState,
  onFocus,
  onClose,
  onMin,
  onMax,
  onMove,
  onResize,
  children,
  statusItems,
}) {
  const titleRef = React.useRef(null);
  const onTitleDown = (e) => {
    if (e.target.closest(".btn-titlebar")) return;
    if (winState.maximized) return;
    onFocus();
    const startX = e.clientX,
      startY = e.clientY;
    const sx = winState.x,
      sy = winState.y;
    const move = (ev) => {
      onMove({
        x: Math.max(0, sx + ev.clientX - startX),
        y: Math.max(0, sy + ev.clientY - startY),
      });
    };
    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };
  const onResizeDown = (e) => {
    if (winState.maximized) return;
    e.stopPropagation();
    onFocus();
    const startX = e.clientX,
      startY = e.clientY;
    const sw = winState.w,
      sh = winState.h;
    const move = (ev) => {
      onResize({
        w: Math.max(280, sw + ev.clientX - startX),
        h: Math.max(180, sh + ev.clientY - startY),
      });
    };
    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };
  const cls = `win ${winState.focused ? "focused" : ""} ${winState.minimized ? "minimized" : ""} ${winState.maximized ? "maximized" : ""}`;
  const geometry = winState.maximized
    ? { left: 0, top: 0, width: "100%", height: "calc(100% - 30px)" }
    : {
        left: winState.x,
        top: winState.y,
        width: winState.w,
        height: winState.h,
      };
  return (
    <div
      className={cls}
      style={{ ...geometry, zIndex: winState.z }}
      onMouseDown={onFocus}
    >
      <div
        className="win-title"
        ref={titleRef}
        onMouseDown={onTitleDown}
        onDoubleClick={onMax}
      >
        <span className="win-icon">{iconFor(winState.icon)}</span>
        <span className="win-title-text">{winState.title}</span>
        <div className="win-controls">
          <button
            className="btn-titlebar"
            onClick={(e) => {
              e.stopPropagation();
              onMin();
            }}
            title="Minimize"
          >
            _
          </button>
          <button
            className="btn-titlebar"
            onClick={(e) => {
              e.stopPropagation();
              onMax();
            }}
            title={winState.maximized ? "Restore" : "Maximize"}
          >
            {winState.maximized ? "❐" : "▢"}
          </button>
          <button
            className="btn-titlebar"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            title="Close"
            style={{ fontWeight: 900 }}
          >
            ✕
          </button>
        </div>
      </div>
      <div className="win-menubar">
        <span>
          <u>F</u>ile
        </span>
        <span>
          <u>E</u>dit
        </span>
        <span>
          <u>V</u>iew
        </span>
        <span>
          <u>H</u>elp
        </span>
      </div>
      <div className="win-body">{children}</div>
      {statusItems && (
        <div className="win-statusbar">
          {statusItems.map((s, i) => (
            <div key={i}>{s}</div>
          ))}
        </div>
      )}
      {!winState.maximized && (
        <div className="win-resize" onMouseDown={onResizeDown} />
      )}
    </div>
  );
}

// ── BSOD ────────────────────────────────────────────────────────────────
function Bsod({ onDismiss }) {
  React.useEffect(() => {
    const t = setTimeout(onDismiss, 5000);
    const k = () => onDismiss();
    window.addEventListener("keydown", k);
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", k);
    };
  }, []);
  return (
    <div className="bsod" onClick={onDismiss}>
      <h1>Windows-OS</h1>
      <p>
        A problem has been detected and recruiting has been shut down to prevent
        damage to your hiring funnel.
      </p>
      <p>
        Just kidding please email <b>{PERSONA.email}</b> instead.
      </p>
      <p style={{ marginTop: 32 }}>
        Technical information:
        <br />
        *** STOP: 0x000000HIRE (0xNadelin, 0x2026, 0xRESEARCH, 0x0)
      </p>
      <p style={{ marginTop: 32 }}>Press any key to continue _</p>
    </div>
  );
}

// ── Boot screen ─────────────────────────────────────────────────────────
function Boot({ onDone }) {
  const [step, setStep] = React.useState(0);
  const lines = [
    "Holloway BIOS v4.0.1.998 — (c) 2026",
    "CPU: AMD K6-2 @ 333MHz · MEM: 64MB OK",
    "Detecting drives... C: [128GB] D: [CD-ROM]",
    "Loading NADELIN-OS kernel... [OK]",
    "Mounting /home/nadelin ........ [OK]",
    "Starting recruiter daemon .... [OK]",
    "Ready.",
  ];
  React.useEffect(() => {
    if (step >= lines.length) {
      const t = setTimeout(onDone, 600);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setStep(step + 1), step === 0 ? 400 : 220);
    return () => clearTimeout(t);
  }, [step]);
  return (
    <div className="boot">
      <div className="boot-logo">NADELIN-OS</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {lines.slice(0, step).map((l, i) => (
          <div className="boot-line" key={i}>
            {l}
          </div>
        ))}
        {step < lines.length && (
          <div className="boot-line boot-cursor">
            {lines[step]?.slice(0, 2) || ""}
          </div>
        )}
      </div>
      <div className="boot-bar">
        {Array.from({ length: 22 }).map((_, i) => (
          <i
            key={i}
            style={{
              visibility: i < (step / lines.length) * 22 ? "visible" : "hidden",
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ── Start menu ──────────────────────────────────────────────────────────
function StartMenu({ open, onAction, onClose }) {
  React.useEffect(() => {
    if (!open) return;
    const h = (e) => {
      if (!e.target.closest(".start-menu") && !e.target.closest(".start-btn"))
        onClose();
    };
    setTimeout(() => document.addEventListener("mousedown", h), 0);
    return () => document.removeEventListener("mousedown", h);
  }, [open, onClose]);
  if (!open) return null;
  const items = [
    { id: "about", icon: "person", label: "About me", big: true },
    { id: "projects", icon: "folder", label: "My Projects", big: true },
    { id: "resume", icon: "doc", label: "Resume.doc" },
    { id: "terminal", icon: "terminal", label: "Command Prompt" },
    { id: "guestbook", icon: "globe", label: "Sign Guestbook" },
    { id: "contact", icon: "mail", label: "Send Mail…" },
    { id: "_div" },
    { id: "computer", icon: "computer", label: "My Computer" },
    { id: "_div" },
    { id: "bsod", icon: "help", label: "Shut Down…" },
  ];
  return (
    <div className="start-menu">
      <div className="start-rail">
        {PERSONA.name.split(" ")[0]}-<b>OS</b>
      </div>
      <div className="start-items">
        {items.map((it, i) => {
          if (it.id === "_div")
            return <div className="start-divider" key={i} />;
          return (
            <div
              className="start-item"
              key={it.id}
              onClick={() => onAction(it.id)}
              style={it.big ? { fontWeight: 700 } : {}}
            >
              {iconFor(it.icon, it.big ? 24 : 18)}
              <span>{it.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Clock ───────────────────────────────────────────────────────────────
function Clock() {
  const [t, setT] = React.useState(new Date());
  React.useEffect(() => {
    const i = setInterval(() => setT(new Date()), 30_000);
    return () => clearInterval(i);
  }, []);
  const hh = t.getHours() % 12 || 12;
  const mm = String(t.getMinutes()).padStart(2, "0");
  const ap = t.getHours() < 12 ? "AM" : "PM";
  return (
    <span>
      {hh}:{mm} {ap}
    </span>
  );
}

// ── My Computer body ────────────────────────────────────────────────────
function ComputerBody() {
  return (
    <div style={{ padding: 16, fontSize: 12 }}>
      <div className="inset" style={{ background: "#fff", padding: 14 }}>
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <IconComputer size={48} />
          <div>
            <div
              style={{
                fontFamily: "var(--display-font)",
                fontSize: 18,
                color: "var(--title-from)",
              }}
            >
              {PERSONA.name}'s Workstation
            </div>
            <div style={{ color: "var(--ink-soft)" }}>
              NADELIN-OS · Build 2026.04.998
            </div>
          </div>
        </div>
        <hr style={{ borderColor: "var(--bevel-mid)" }} />
        <table
          style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}
        >
          <tbody>
            <tr>
              <td
                style={{
                  padding: "3px 0",
                  color: "var(--ink-soft)",
                  width: 130,
                }}
              >
                Processor
              </td>
              <td>AMD K6-II @ 333 MHz (vibes only)</td>
            </tr>
            <tr>
              <td style={{ padding: "3px 0", color: "var(--ink-soft)" }}>
                Memory
              </td>
              <td>64 MB SDRAM (your browser has more)</td>
            </tr>
            <tr>
              <td style={{ padding: "3px 0", color: "var(--ink-soft)" }}>
                Hard disk
              </td>
              <td>C:\ 12.4 GB free of 128 GB</td>
            </tr>
            <tr>
              <td style={{ padding: "3px 0", color: "var(--ink-soft)" }}>
                Network
              </td>
              <td>56k v.90 modem · connected</td>
            </tr>
            <tr>
              <td style={{ padding: "3px 0", color: "var(--ink-soft)" }}>
                Owner
              </td>
              <td>{PERSONA.name}</td>
            </tr>
            <tr>
              <td style={{ padding: "3px 0", color: "var(--ink-soft)" }}>
                Status
              </td>
              <td style={{ color: "#1a8a3a", fontWeight: 700 }}>
                ● Available (open to research assistant roles)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── App ─────────────────────────────────────────────────────────────────
function App() {
  const [windows, setWindows] = React.useState([]);
  // Ref (not state) so back-to-back opens/focuses in the same tick — e.g.
  // the boot sequence below — each get a genuinely higher z, instead of
  // reading the same stale value out of a closure.
  const zSeqRef = React.useRef(100);
  const nextZ = () => ++zSeqRef.current;
  const [startOpen, setStartOpen] = React.useState(false);
  const [bootDone, setBootDone] = React.useState(!STYLE.boot);
  const [bsod, setBsod] = React.useState(false);

  // Apply hardcoded style constants via CSS variables on mount
  React.useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--title-from", `hsl(${STYLE.titleHue}, 60%, 36%)`);
    r.style.setProperty("--title-to", `hsl(${STYLE.titleHue}, 70%, 65%)`);
    r.style.setProperty("--link", `hsl(${STYLE.titleHue}, 60%, 36%)`);
    r.style.setProperty(
      "--ui-font",
      '"Tahoma","Geneva","Verdana","DejaVu Sans",sans-serif',
    );
  }, []);

  // Open the initial window once boot finishes. Just "About" (the "Hi, I'm
  // Nadelin Nop" intro), centered in the viewport — Projects no longer
  // auto-opens alongside it.
  React.useEffect(() => {
    if (!bootDone) return;
    if (windows.length === 0) {
      const TASKBAR_H = 30;
      const MARGIN = 20;
      const { w: aboutW, h: aboutH } = APPS.about;
      const maxY = window.innerHeight - TASKBAR_H - MARGIN;

      const centerX = Math.max(MARGIN, (window.innerWidth - aboutW) / 2);
      const centerY = Math.max(MARGIN, (maxY - aboutH) / 2);

      openWindow("about", { x: centerX, y: centerY });
    }
  }, [bootDone]);

  const openWindow = (id, opts = {}) => {
    setWindows((ws) => {
      const existing = ws.find((w) => w.id === id);
      if (existing) {
        return ws.map((w) =>
          w.id === id
            ? { ...w, minimized: false, focused: true, z: nextZ() }
            : { ...w, focused: false },
        );
      }
      const meta = APPS[id];
      const newWin = {
        id,
        title: meta.title,
        icon: meta.icon,
        x: opts.x ?? 80 + ws.length * 32,
        y: opts.y ?? 60 + ws.length * 28,
        w: meta.w,
        h: meta.h,
        focused: true,
        minimized: false,
        z: nextZ(),
      };
      return [...ws.map((w) => ({ ...w, focused: false })), newWin];
    });
  };

  const focusWindow = (id) => {
    setWindows((ws) =>
      ws.map((w) =>
        w.id === id
          ? { ...w, focused: true, minimized: false, z: nextZ() }
          : { ...w, focused: false },
      ),
    );
  };
  const closeWindow = (id) => setWindows((ws) => ws.filter((w) => w.id !== id));
  const minWindow = (id) =>
    setWindows((ws) =>
      ws.map((w) =>
        w.id === id ? { ...w, minimized: !w.minimized, focused: false } : w,
      ),
    );
  const moveWindow = (id, pos) =>
    setWindows((ws) => ws.map((w) => (w.id === id ? { ...w, ...pos } : w)));
  const resizeWindow = (id, sz) =>
    setWindows((ws) => ws.map((w) => (w.id === id ? { ...w, ...sz } : w)));
  const maxWindow = (id) =>
    setWindows((ws) =>
      ws.map((w) =>
        w.id === id
          ? { ...w, maximized: !w.maximized, focused: true, z: nextZ() }
          : { ...w, focused: false },
      ),
    );

  const onStartAction = (id) => {
    setStartOpen(false);
    if (id === "bsod") {
      setBsod(true);
      return;
    }
    openWindow(id);
  };

  const renderBody = (w) => {
    switch (w.id) {
      case "about":
        return <AboutBody />;
      case "projects":
        return <ProjectsBody />;
      case "resume":
        return <ResumeBody />;
      case "terminal":
        return (
          <Terminal openWindow={openWindow} onBsod={() => setBsod(true)} />
        );
      case "contact":
        return <ContactBody closeSelf={() => closeWindow("contact")} />;
      case "guestbook":
        return <GuestbookBody />;
      case "computer":
        return <ComputerBody />;
      default:
        return null;
    }
  };

  const statusFor = (id) => {
    if (id === "projects")
      return [`${PROJECTS.length} object(s)`, `disk free: 12.4 GB`];
    if (id === "resume") return [`resume.pdf`, `100%`];
    if (id === "guestbook")
      return [`Connected`, `https://nadelin.nop.dev/guestbook`];
    if (id === "computer") return [`NADELIN-OS 4.0.1`, `Uptime: 3d 14h 22m`];
    return null;
  };

  return (
    <div className="desktop os-root">
      <div
        className={`wallpaper ${STYLE.wallpaper === "hill" ? "" : STYLE.wallpaper}`}
      />

      {/* Desktop icons */}
      <div className="icon-grid">
        {[
          { id: "computer", label: "My Computer", icon: "computer" },
          { id: "about", label: "About Nadelin", icon: "person" },
          { id: "projects", label: "Experience  Projects", icon: "folder" },
          { id: "resume", label: "Resume.doc", icon: "doc" },
          { id: "terminal", label: "Cmd Prompt", icon: "terminal" },
          { id: "guestbook", label: "Guestbook", icon: "globe" },
          { id: "contact", label: "Send Mail", icon: "mail" },
        ].map((it) => (
          <DIcon
            key={it.id}
            icon={it.icon}
            label={it.label}
            onOpen={() => openWindow(it.id)}
          />
        ))}
      </div>

      {/* Windows */}
      {windows.map((w) => (
        <Win
          key={w.id}
          winState={w}
          onFocus={() => focusWindow(w.id)}
          onClose={() => closeWindow(w.id)}
          onMin={() => minWindow(w.id)}
          onMax={() => maxWindow(w.id)}
          onMove={(p) => moveWindow(w.id, p)}
          onResize={(s) => resizeWindow(w.id, s)}
          statusItems={statusFor(w.id)}
        >
          {renderBody(w)}
        </Win>
      ))}

      {/* Taskbar */}
      <div className="taskbar">
        <button
          className={`start-btn ${startOpen ? "open" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            setStartOpen((o) => !o);
          }}
        >
          <span className="start-icon">
            <IconStart size={16} />
          </span>
          Start
        </button>
        <div className="task-list">
          {windows.map((w) => (
            <div
              key={w.id}
              className={`task-item ${w.focused && !w.minimized ? "active" : ""}`}
              onClick={() => {
                if (w.focused && !w.minimized) minWindow(w.id);
                else focusWindow(w.id);
              }}
            >
              <span style={{ display: "flex" }}>{iconFor(w.icon, 14)}</span>
              <span>{w.title}</span>
            </div>
          ))}
        </div>
        <div className="tray">
          <span className="tray-icon">
            <IconNetwork size={14} />
          </span>
          <span className="tray-icon">
            <IconSpeaker size={14} />
          </span>
          <Clock />
        </div>
      </div>

      <StartMenu
        open={startOpen}
        onAction={onStartAction}
        onClose={() => setStartOpen(false)}
      />

      {!bootDone && STYLE.boot && <Boot onDone={() => setBootDone(true)} />}
      {bsod && <Bsod onDismiss={() => setBsod(false)} />}
    </div>
  );
}

// ── Desktop icon ────────────────────────────────────────────────────────
function DIcon({ icon, label, onOpen }) {
  const [sel, setSel] = React.useState(false);
  const onClick = (e) => {
    e.stopPropagation();
    setSel(true);
  };
  React.useEffect(() => {
    if (!sel) return;
    const h = () => setSel(false);
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [sel]);
  return (
    <div
      className={`dicon ${sel ? "selected" : ""}`}
      onMouseDown={onClick}
      onDoubleClick={onOpen}
    >
      <span className="dicon-art">{iconFor(icon, 36)}</span>
      <span className="dicon-label">{label}</span>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
