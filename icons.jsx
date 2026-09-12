// icons.jsx — Pixel-art icons drawn with SVG <rect>s.
// Each icon is on a 16x16 grid; for desktop icons we render at 2x (32x32 effective).
// Original art — not lifted from any specific OS.

const PX = 1; // base unit; viewBox is 16 wide

// Helper: a chunky pixel
const P = ({ x, y, c, w = 1, h = 1 }) => (
  <rect x={x} y={y} width={w} height={h} fill={c} />
);

// 16x16 base — render at any size via width/height
function PixelIcon({ size = 32, children, vb = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${vb} ${vb}`}
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="crispEdges"
      style={{ imageRendering: "pixelated" }}
    >
      {children}
    </svg>
  );
}

// ── About / Person icon ─────────────────────────────────────────────────
function IconPerson({ size = 32 }) {
  return (
    <PixelIcon size={size}>
      {/* head */}
      <rect x="5" y="2" width="6" height="6" fill="#f4c89a" />
      {/* long hair framing the face and falling past the shoulders */}
      <rect x="5" y="2" width="6" height="1" fill="#5a3820" />
      <rect x="4" y="3" width="1" height="6" fill="#5a3820" />
      <rect x="11" y="3" width="1" height="6" fill="#5a3820" />
      <rect x="5" y="7" width="6" height="1" fill="#5a3820" />
      {/* bow */}
      <rect x="3" y="1" width="2" height="2" fill="#ff6fa5" />
      {/* eyes */}
      <rect x="6" y="4" width="1" height="1" fill="#1a1a1a" />
      <rect x="9" y="4" width="1" height="1" fill="#1a1a1a" />
      {/* blush */}
      <rect x="5" y="6" width="1" height="1" fill="#f2a08c" />
      <rect x="10" y="6" width="1" height="1" fill="#f2a08c" />
      {/* mouth */}
      <rect x="7" y="6" width="2" height="1" fill="#c86a5a" />
      {/* shirt */}
      <rect x="3" y="9" width="10" height="6" fill="#2a4d8f" />
      <rect x="3" y="9" width="10" height="1" fill="#4a6daf" />
      {/* collar */}
      <rect x="6" y="8" width="4" height="1" fill="#fff5d6" />
      <rect x="7" y="9" width="2" height="2" fill="#fff5d6" />
      {/* bow at the collar, in place of a necktie */}
      <rect x="6" y="9" width="1" height="1" fill="#ff6fa5" />
      <rect x="9" y="9" width="1" height="1" fill="#ff6fa5" />
      <rect x="7" y="9" width="2" height="1" fill="#e0559a" />
    </PixelIcon>
  );
}

// ── Folder icon (Projects) ─────────────────────────────────────────────
function IconFolder({ size = 32, color = "#e8b84a", open = false }) {
  return (
    <PixelIcon size={size}>
      <rect x="1" y="4" width="5" height="1" fill="#8a5a10" />
      <rect x="1" y="4" width="14" height="9" fill={color} />
      <rect x="6" y="3" width="9" height="1" fill="#8a5a10" />
      <rect x="1" y="5" width="14" height="1" fill="#fff1b8" />
      <rect x="1" y="12" width="14" height="1" fill="#8a5a10" />
      <rect x="14" y="5" width="1" height="8" fill="#8a5a10" />
      <rect x="0" y="5" width="1" height="8" fill="#8a5a10" />
    </PixelIcon>
  );
}

// ── Document / Résumé icon ─────────────────────────────────────────────
function IconDoc({ size = 32 }) {
  return (
    <PixelIcon size={size}>
      <rect x="3" y="1" width="9" height="14" fill="#fff" />
      <rect x="3" y="1" width="9" height="1" fill="#8a8470" />
      <rect x="3" y="14" width="9" height="1" fill="#8a8470" />
      <rect x="3" y="1" width="1" height="14" fill="#8a8470" />
      <rect x="11" y="1" width="1" height="14" fill="#8a8470" />
      {/* dog ear */}
      <rect x="9" y="1" width="3" height="3" fill="#d8d4c0" />
      <rect x="9" y="1" width="1" height="3" fill="#8a8470" />
      <rect x="9" y="3" width="3" height="1" fill="#8a8470" />
      {/* lines of text */}
      <rect x="5" y="4" width="5" height="1" fill="#2a4d8f" />
      <rect x="5" y="6" width="5" height="1" fill="#1a1a1a" />
      <rect x="5" y="8" width="5" height="1" fill="#1a1a1a" />
      <rect x="5" y="10" width="3" height="1" fill="#1a1a1a" />
      <rect x="5" y="12" width="5" height="1" fill="#1a1a1a" />
    </PixelIcon>
  );
}

// ── Terminal / Console ──────────────────────────────────────────────────
function IconTerminal({ size = 32 }) {
  return (
    <PixelIcon size={size}>
      <rect x="1" y="2" width="14" height="11" fill="#d8d4c0" />
      <rect x="1" y="2" width="14" height="1" fill="#fff" />
      <rect x="1" y="2" width="1" height="11" fill="#fff" />
      <rect x="14" y="2" width="1" height="11" fill="#6b6655" />
      <rect x="1" y="12" width="14" height="1" fill="#6b6655" />
      <rect x="2" y="3" width="12" height="9" fill="#0a0a0a" />
      {/* prompt > */}
      <rect x="3" y="5" width="1" height="1" fill="#c8e4a4" />
      <rect x="4" y="6" width="1" height="1" fill="#c8e4a4" />
      <rect x="3" y="7" width="1" height="1" fill="#c8e4a4" />
      {/* line */}
      <rect x="6" y="6" width="6" height="1" fill="#c8e4a4" />
      {/* base */}
      <rect x="3" y="13" width="10" height="1" fill="#8a8470" />
      <rect x="5" y="14" width="6" height="1" fill="#6b6655" />
    </PixelIcon>
  );
}

// ── Mail / Contact ──────────────────────────────────────────────────────
function IconMail({ size = 32 }) {
  return (
    <PixelIcon size={size}>
      <rect x="1" y="3" width="14" height="10" fill="#fff" />
      <rect x="1" y="3" width="14" height="1" fill="#8a8470" />
      <rect x="1" y="12" width="14" height="1" fill="#8a8470" />
      <rect x="1" y="3" width="1" height="10" fill="#8a8470" />
      <rect x="14" y="3" width="1" height="10" fill="#8a8470" />
      {/* envelope flap */}
      <rect x="2" y="4" width="2" height="2" fill="#c8c4a8" />
      <rect x="4" y="6" width="2" height="2" fill="#c8c4a8" />
      <rect x="6" y="8" width="4" height="1" fill="#c8c4a8" />
      <rect x="10" y="6" width="2" height="2" fill="#c8c4a8" />
      <rect x="12" y="4" width="2" height="2" fill="#c8c4a8" />
      <rect x="2" y="4" width="12" height="1" fill="#c84a1a" />
    </PixelIcon>
  );
}

// ── Computer / This PC ───────────────────────────────────────────────────
function IconComputer({ size = 32 }) {
  return (
    <PixelIcon size={size} vb={32}>
      {/* monitor casing */}
      <rect x="2" y="0" width="28" height="22" fill="#c0bdb4"/>
      <rect x="2" y="0" width="28" height="1" fill="#e0ddd4"/>
      <rect x="2" y="0" width="1" height="22" fill="#e0ddd4"/>
      <rect x="29" y="1" width="1" height="21" fill="#808070"/>
      <rect x="2" y="21" width="28" height="1" fill="#808070"/>
      {/* screen bezel */}
      <rect x="4" y="2" width="24" height="17" fill="#909088"/>
      <rect x="5" y="3" width="22" height="15" fill="#008080"/>
      {/* back window */}
      <rect x="6" y="4" width="14" height="10" fill="#000080"/>
      <rect x="6" y="4" width="14" height="1" fill="#0000c8"/>
      <rect x="7" y="5" width="12" height="8" fill="#008080"/>
      {/* front window */}
      <rect x="12" y="7" width="13" height="9" fill="#c0c0c0"/>
      <rect x="12" y="7" width="13" height="1" fill="#000080"/>
      <rect x="13" y="8" width="11" height="7" fill="#ffffff"/>
      <rect x="14" y="9" width="8" height="1" fill="#000080"/>
      <rect x="14" y="11" width="6" height="1" fill="#808080"/>
      <rect x="14" y="13" width="7" height="1" fill="#808080"/>
      {/* neck */}
      <rect x="13" y="22" width="6" height="2" fill="#b0ada4"/>
      <rect x="13" y="22" width="6" height="1" fill="#c8c5bc"/>
      {/* base stand */}
      <rect x="8" y="24" width="16" height="3" fill="#c0bdb4"/>
      <rect x="8" y="24" width="16" height="1" fill="#e0ddd4"/>
      <rect x="8" y="24" width="1" height="3" fill="#e0ddd4"/>
      <rect x="23" y="24" width="1" height="3" fill="#808070"/>
      <rect x="8" y="26" width="16" height="1" fill="#808070"/>
      {/* power LED */}
      <rect x="21" y="25" width="2" height="1" fill="#00c800"/>
      {/* keyboard */}
      <rect x="0" y="28" width="32" height="7" fill="#c0bdb4"/>
      <rect x="0" y="28" width="32" height="1" fill="#e0ddd4"/>
      <rect x="0" y="28" width="1" height="7" fill="#e0ddd4"/>
      <rect x="31" y="29" width="1" height="6" fill="#808070"/>
      <rect x="0" y="34" width="32" height="1" fill="#808070"/>
      {/* keys row 1 */}
      <rect x="2" y="29" width="2" height="1" fill="#e8e5dc"/>
      <rect x="5" y="29" width="2" height="1" fill="#e8e5dc"/>
      <rect x="8" y="29" width="2" height="1" fill="#e8e5dc"/>
      <rect x="11" y="29" width="2" height="1" fill="#e8e5dc"/>
      <rect x="14" y="29" width="2" height="1" fill="#e8e5dc"/>
      <rect x="17" y="29" width="2" height="1" fill="#e8e5dc"/>
      <rect x="20" y="29" width="2" height="1" fill="#e8e5dc"/>
      <rect x="23" y="29" width="2" height="1" fill="#e8e5dc"/>
      <rect x="26" y="29" width="2" height="1" fill="#e8e5dc"/>
      {/* keys row 2 */}
      <rect x="2" y="31" width="2" height="1" fill="#e8e5dc"/>
      <rect x="5" y="31" width="2" height="1" fill="#e8e5dc"/>
      <rect x="8" y="31" width="2" height="1" fill="#e8e5dc"/>
      <rect x="11" y="31" width="2" height="1" fill="#e8e5dc"/>
      <rect x="14" y="31" width="2" height="1" fill="#e8e5dc"/>
      <rect x="17" y="31" width="2" height="1" fill="#e8e5dc"/>
      <rect x="20" y="31" width="2" height="1" fill="#e8e5dc"/>
      <rect x="23" y="31" width="2" height="1" fill="#e8e5dc"/>
      <rect x="26" y="31" width="4" height="1" fill="#e8e5dc"/>
      {/* spacebar */}
      <rect x="8" y="33" width="16" height="1" fill="#e8e5dc"/>
    </PixelIcon>
  );
}



// ── Globe / Browser ─────────────────────────────────────────────────────
function IconGlobe({ size = 32 }) {
  return (
    <PixelIcon size={size}>
      <rect x="3" y="2" width="10" height="1" fill="#2a4d8f" />
      <rect x="2" y="3" width="12" height="1" fill="#2a4d8f" />
      <rect x="1" y="4" width="14" height="9" fill="#4a8ad8" />
      <rect x="2" y="13" width="12" height="1" fill="#2a4d8f" />
      <rect x="3" y="14" width="10" height="1" fill="#2a4d8f" />
      {/* continents */}
      <rect x="3" y="5" width="3" height="1" fill="#6abf6a" />
      <rect x="2" y="6" width="2" height="2" fill="#6abf6a" />
      <rect x="9" y="6" width="3" height="2" fill="#6abf6a" />
      <rect x="6" y="9" width="2" height="3" fill="#6abf6a" />
      <rect x="11" y="10" width="2" height="2" fill="#6abf6a" />
      {/* meridians */}
      <rect x="7" y="4" width="1" height="10" fill="rgba(255,255,255,0.3)" />
      <rect x="1" y="8" width="14" height="1" fill="rgba(255,255,255,0.3)" />
    </PixelIcon>
  );
}

// ── Floppy / Save ──────────────────────────────────────────────────────
function IconFloppy({ size = 32 }) {
  return (
    <PixelIcon size={size}>
      <rect x="1" y="1" width="14" height="14" fill="#1a1a1a" />
      <rect x="2" y="2" width="12" height="12" fill="#2a4d8f" />
      {/* shutter */}
      <rect x="4" y="2" width="8" height="5" fill="#c8c4a8" />
      <rect x="9" y="3" width="2" height="3" fill="#1a1a1a" />
      {/* label */}
      <rect x="3" y="9" width="10" height="5" fill="#fff" />
      <rect x="4" y="10" width="8" height="1" fill="#6b6655" />
      <rect x="4" y="12" width="6" height="1" fill="#6b6655" />
    </PixelIcon>
  );
}

// ── Settings / Gear ─────────────────────────────────────────────────────
function IconGear({ size = 32 }) {
  return (
    <PixelIcon size={size}>
      <rect x="7" y="1" width="2" height="2" fill="#6b6655" />
      <rect x="7" y="13" width="2" height="2" fill="#6b6655" />
      <rect x="1" y="7" width="2" height="2" fill="#6b6655" />
      <rect x="13" y="7" width="2" height="2" fill="#6b6655" />
      <rect x="3" y="3" width="2" height="2" fill="#6b6655" />
      <rect x="11" y="3" width="2" height="2" fill="#6b6655" />
      <rect x="3" y="11" width="2" height="2" fill="#6b6655" />
      <rect x="11" y="11" width="2" height="2" fill="#6b6655" />
      <rect x="4" y="4" width="8" height="8" fill="#c8c4a8" />
      <rect x="5" y="5" width="6" height="6" fill="#8a8470" />
      <rect x="6" y="6" width="4" height="4" fill="#1a1a1a" />
    </PixelIcon>
  );
}

// ── Help / Question ─────────────────────────────────────────────────────
function IconHelp({ size = 32 }) {
  return (
    <PixelIcon size={size}>
      <rect x="3" y="1" width="10" height="1" fill="#2a4d8f" />
      <rect x="2" y="2" width="12" height="1" fill="#2a4d8f" />
      <rect x="1" y="3" width="14" height="9" fill="#fff" />
      <rect x="2" y="12" width="12" height="1" fill="#2a4d8f" />
      <rect x="3" y="13" width="10" height="1" fill="#2a4d8f" />
      <rect x="6" y="4" width="4" height="1" fill="#2a4d8f" />
      <rect x="5" y="5" width="2" height="1" fill="#2a4d8f" />
      <rect x="9" y="5" width="2" height="1" fill="#2a4d8f" />
      <rect x="9" y="6" width="2" height="1" fill="#2a4d8f" />
      <rect x="8" y="7" width="2" height="1" fill="#2a4d8f" />
      <rect x="7" y="8" width="2" height="2" fill="#2a4d8f" />
      <rect x="7" y="11" width="2" height="1" fill="#2a4d8f" />
    </PixelIcon>
  );
}

// ── Run / Search ────────────────────────────────────────────────────────
function IconSearch({ size = 32 }) {
  return (
    <PixelIcon size={size}>
      <rect x="3" y="2" width="6" height="1" fill="#1a1a1a" />
      <rect x="2" y="3" width="1" height="1" fill="#1a1a1a" />
      <rect x="9" y="3" width="1" height="1" fill="#1a1a1a" />
      <rect x="2" y="4" width="1" height="3" fill="#1a1a1a" />
      <rect x="9" y="4" width="1" height="3" fill="#1a1a1a" />
      <rect x="3" y="3" width="6" height="4" fill="#a8e4f4" />
      <rect x="2" y="7" width="1" height="1" fill="#1a1a1a" />
      <rect x="9" y="7" width="1" height="1" fill="#1a1a1a" />
      <rect x="3" y="8" width="6" height="1" fill="#1a1a1a" />
      <rect x="9" y="8" width="3" height="1" fill="#1a1a1a" />
      <rect x="10" y="9" width="1" height="1" fill="#1a1a1a" />
      <rect x="11" y="10" width="1" height="1" fill="#1a1a1a" />
      <rect x="12" y="11" width="1" height="1" fill="#1a1a1a" />
      <rect x="13" y="12" width="1" height="1" fill="#1a1a1a" />
    </PixelIcon>
  );
}

// ── Power / Flag (start menu) ───────────────────────────────────────────
function IconStart({ size = 16 }) {
  return (
    <PixelIcon size={size}>
      <rect x="2" y="2" width="5" height="5" fill="#e84a3a" />
      <rect x="7" y="2" width="5" height="5" fill="#6abf6a" />
      <rect x="2" y="7" width="5" height="5" fill="#4a8ae8" />
      <rect x="7" y="7" width="5" height="5" fill="#f4c84a" />
      <rect x="2" y="2" width="5" height="1" fill="rgba(255,255,255,0.5)" />
      <rect x="7" y="2" width="5" height="1" fill="rgba(255,255,255,0.5)" />
      <rect x="2" y="7" width="5" height="1" fill="rgba(255,255,255,0.5)" />
      <rect x="7" y="7" width="5" height="1" fill="rgba(255,255,255,0.5)" />
    </PixelIcon>
  );
}

// ── Speaker / Tray ──────────────────────────────────────────────────────
function IconSpeaker({ size = 14 }) {
  return (
    <PixelIcon size={size}>
      <rect x="3" y="6" width="2" height="4" fill="#6b6655" />
      <rect x="5" y="4" width="3" height="8" fill="#6b6655" />
      <rect x="9" y="5" width="1" height="1" fill="#6b6655" />
      <rect x="10" y="6" width="1" height="4" fill="#6b6655" />
      <rect x="9" y="10" width="1" height="1" fill="#6b6655" />
      <rect x="11" y="4" width="1" height="2" fill="#6b6655" />
      <rect x="12" y="6" width="1" height="4" fill="#6b6655" />
      <rect x="11" y="10" width="1" height="2" fill="#6b6655" />
    </PixelIcon>
  );
}

// ── Network ─────────────────────────────────────────────────────────────
function IconNetwork({ size = 14 }) {
  return (
    <PixelIcon size={size}>
      <rect x="2" y="3" width="5" height="3" fill="#c8c4a8" />
      <rect x="2" y="3" width="5" height="1" fill="#fff" />
      <rect x="2" y="6" width="5" height="1" fill="#6b6655" />
      <rect x="9" y="9" width="5" height="3" fill="#c8c4a8" />
      <rect x="9" y="9" width="5" height="1" fill="#fff" />
      <rect x="9" y="12" width="5" height="1" fill="#6b6655" />
      <rect x="6" y="6" width="1" height="3" fill="#6abf6a" />
      <rect x="7" y="8" width="2" height="1" fill="#6abf6a" />
    </PixelIcon>
  );
}

// ── Code / Brackets ─────────────────────────────────────────────────────
function IconCode({ size = 32 }) {
  return (
    <PixelIcon size={size}>
      <rect x="1" y="1" width="14" height="14" fill="#fff" />
      <rect x="1" y="1" width="14" height="1" fill="#6b6655" />
      <rect x="1" y="14" width="14" height="1" fill="#6b6655" />
      <rect x="1" y="1" width="1" height="14" fill="#6b6655" />
      <rect x="14" y="1" width="1" height="14" fill="#6b6655" />
      {/* < */}
      <rect x="5" y="6" width="1" height="1" fill="#2a4d8f" />
      <rect x="4" y="7" width="1" height="2" fill="#2a4d8f" />
      <rect x="5" y="9" width="1" height="1" fill="#2a4d8f" />
      {/* / */}
      <rect x="9" y="5" width="1" height="1" fill="#c84a1a" />
      <rect x="8" y="6" width="1" height="2" fill="#c84a1a" />
      <rect x="7" y="8" width="1" height="2" fill="#c84a1a" />
      <rect x="6" y="10" width="1" height="1" fill="#c84a1a" />
      {/* > */}
      <rect x="10" y="6" width="1" height="1" fill="#2a4d8f" />
      <rect x="11" y="7" width="1" height="2" fill="#2a4d8f" />
      <rect x="10" y="9" width="1" height="1" fill="#2a4d8f" />
    </PixelIcon>
  );
}

// ── Generic placeholder for unknown ─────────────────────────────────────
function IconUnknown({ size = 32 }) {
  return (
    <PixelIcon size={size}>
      <rect x="3" y="1" width="9" height="14" fill="#fff" />
      <rect x="3" y="1" width="9" height="1" fill="#8a8470" />
      <rect x="3" y="14" width="9" height="1" fill="#8a8470" />
      <rect x="3" y="1" width="1" height="14" fill="#8a8470" />
      <rect x="11" y="1" width="1" height="14" fill="#8a8470" />
      <text x="8" y="11" fontSize="10" fontFamily="monospace" textAnchor="middle" fill="#8a8470">?</text>
    </PixelIcon>
  );
}

Object.assign(window, {
  IconPerson, IconFolder, IconDoc, IconTerminal, IconMail,
  IconComputer, IconGlobe, IconFloppy, IconGear,
  IconHelp, IconSearch, IconStart, IconSpeaker, IconNetwork,
  IconCode, IconUnknown, PixelIcon,
});
