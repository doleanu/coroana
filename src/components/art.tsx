/* Hand-drawn-feel line art, all inline SVG, inherits currentColor. */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Elegant hotel-room vignette: bed, pillow, round mirror, pendant lamp. */
export function RoomArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 200" className={className} aria-hidden="true" role="presentation">
      <g {...stroke} strokeWidth="1.8">
        {/* round mirror */}
        <circle cx="120" cy="50" r="22" />
        <circle cx="120" cy="50" r="17" opacity="0.55" />
        {/* pendant lamp */}
        <path d="M262 14 V52" />
        <path d="M248 52 H276 L268 72 H256 Z" />
        {/* headboard */}
        <path d="M56 164 V96 Q56 80 72 80 H84" />
        {/* pillow */}
        <path d="M72 134 Q72 116 90 116 H116 Q134 116 134 134" />
        {/* mattress + base */}
        <path d="M56 134 H240 Q252 134 252 146 V164" />
        <path d="M56 150 H252" />
        {/* legs */}
        <path d="M64 164 V178 M244 164 V178" />
        {/* floor */}
        <path d="M24 184 H296" opacity="0.6" />
      </g>
      <g fill="currentColor">
        <circle cx="262" cy="80" r="2.4" />
        <circle cx="120" cy="50" r="1.6" />
      </g>
    </svg>
  );
}

/** Table setting: plate with steam, fork, knife, wine glass, candle. */
export function TableArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 200" className={className} aria-hidden="true" role="presentation">
      <g {...stroke} strokeWidth="1.8">
        {/* candle */}
        <path d="M98 44 Q104 52 98 59 Q92 52 98 44" />
        <path d="M92 64 H104 M92 64 V90 M104 64 V90 M86 90 H110" />
        {/* steam */}
        <path d="M146 106 Q142 116 146 126 M160 100 Q156 112 160 124 M174 106 Q170 116 174 126" opacity="0.65" />
        {/* plate */}
        <ellipse cx="160" cy="148" rx="52" ry="11" />
        <ellipse cx="160" cy="148" rx="33" ry="6.5" opacity="0.55" />
        {/* fork */}
        <path d="M84 112 V148 M78 112 V124 M90 112 V124 M78 124 Q84 130 90 124" />
        {/* knife */}
        <path d="M236 110 V148 M236 110 Q246 122 236 134" />
        {/* wine glass */}
        <path d="M264 58 H290 M264 58 Q266 86 277 86 Q288 86 290 58 M277 86 V110 M266 110 H288" />
        {/* table line */}
        <path d="M28 166 H292" opacity="0.6" />
      </g>
      <g fill="currentColor">
        <circle cx="98" cy="38" r="1.4" />
      </g>
    </svg>
  );
}

/** Laurel branches flanking a centered slot (content rendered by parent). */
export function Laurel({ className = "" }: { className?: string }) {
  const leaf = "M0 0 Q5 -10 14 -12 Q9 -2 0 0 Z";
  const branch = (
    <g>
      <path d="M108 104 Q64 96 46 40" fill="none" />
      {[
        [96, 101, -12],
        [80, 96, -24],
        [66, 87, -40],
        [57, 74, -56],
        [51, 60, -70],
        [47, 46, -84],
      ].map(([x, y, r]) => (
        <path key={`${x}-${y}`} d={leaf} transform={`translate(${x} ${y}) rotate(${r})`} />
      ))}
    </g>
  );
  return (
    <svg viewBox="0 0 240 120" className={className} aria-hidden="true" role="presentation">
      <g {...stroke} strokeWidth="1.7">
        {branch}
        <g transform="translate(240 0) scale(-1 1)">{branch}</g>
      </g>
    </svg>
  );
}

/** Filled five-point star for the rating moment. */
export function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" role="presentation">
      <path
        fill="currentColor"
        d="M12 2.5 L14.9 8.6 L21.5 9.5 L16.7 14.1 L17.9 20.6 L12 17.4 L6.1 20.6 L7.3 14.1 L2.5 9.5 L9.1 8.6 Z"
      />
    </svg>
  );
}
