type CrownProps = {
  className?: string;
  strokeWidth?: number;
};

/**
 * The Coroana crown monogram — refined line art, five points, subtle jewel
 * dots floating above each tip, double base band. Inherits currentColor.
 */
export default function Crown({ className = "", strokeWidth = 1.6 }: CrownProps) {
  return (
    <svg
      viewBox="0 0 72 56"
      className={className}
      aria-hidden="true"
      role="presentation"
      fill="none"
    >
      <g
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Five-point crown body */}
        <path d="M8 41 L10.5 20 L21.5 32 L23.5 12 L31.5 28 L36 8.5 L40.5 28 L48.5 12 L50.5 32 L61.5 20 L64 41 Z" />
        {/* Double base band */}
        <path d="M8 45.5 H64" />
      </g>
      {/* Jewels above the points */}
      <g fill="currentColor">
        <circle cx="10.5" cy="16" r="1.5" />
        <circle cx="23.5" cy="8" r="1.6" />
        <circle cx="36" cy="4.2" r="1.9" />
        <circle cx="48.5" cy="8" r="1.6" />
        <circle cx="61.5" cy="16" r="1.5" />
        {/* Band jewels */}
        <circle cx="27" cy="43.2" r="1" />
        <circle cx="36" cy="43.2" r="1" />
        <circle cx="45" cy="43.2" r="1" />
      </g>
    </svg>
  );
}
