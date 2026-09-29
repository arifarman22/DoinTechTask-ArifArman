// Scalable vector 3D-styled ornaments matching the Figma Hero_Frame
export const LimeZigzag = () => (
  <svg width="100" height="150" viewBox="0 0 100 150" fill="none">
    <path
      d="M30 15 C 65 30, 85 45, 60 70 C 35 95, 75 115, 60 135"
      stroke="url(#limeZigzagGrad)"
      strokeWidth="28"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="limeZigzagGrad" x1="0" y1="0" x2="100" y2="150" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E2FF38" />
        <stop offset="0.6" stopColor="#D4FF00" />
        <stop offset="1" stopColor="#A6D600" />
      </linearGradient>
    </defs>
  </svg>
);

export const WhiteDonut = () => (
  <svg width="110" height="110" viewBox="0 0 110 110" fill="none">
    <ellipse cx="55" cy="55" rx="46" ry="46" fill="url(#whiteDonutGrad)" />
    <ellipse cx="55" cy="55" rx="20" ry="20" fill="#003BE2" />
    <defs>
      <linearGradient id="whiteDonutGrad" x1="15" y1="15" x2="95" y2="95" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" />
        <stop offset="0.7" stopColor="#E2E8F0" />
        <stop offset="1" stopColor="#94A3B8" />
      </linearGradient>
    </defs>
  </svg>
);

export const LimeCylinder = () => (
  <svg width="90" height="120" viewBox="0 0 90 120" fill="none">
    <path
      d="M10 30 C10 16 80 16 80 30 L80 90 C80 104 10 104 10 90 Z"
      fill="url(#limeCylinderBody)"
    />
    <ellipse cx="45" cy="30" rx="35" ry="14" fill="#E8FF54" />
    <defs>
      <linearGradient id="limeCylinderBody" x1="10" y1="50" x2="80" y2="50" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D4FF00" />
        <stop offset="0.4" stopColor="#E2FF38" />
        <stop offset="1" stopColor="#8EBC00" />
      </linearGradient>
    </defs>
  </svg>
);

export const WhiteCone = () => (
  <svg width="80" height="100" viewBox="0 0 80 100" fill="none">
    <path
      d="M40 8 L72 80 C72 90 8 90 8 80 Z"
      fill="url(#whiteConeGrad)"
    />
    <ellipse cx="40" cy="80" rx="32" ry="10" fill="#CBD5E1" opacity="0.6" />
    <defs>
      <linearGradient id="whiteConeGrad" x1="40" y1="8" x2="72" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" />
        <stop offset="0.8" stopColor="#E2E8F0" />
        <stop offset="1" stopColor="#94A3B8" />
      </linearGradient>
    </defs>
  </svg>
);

export const WhiteZigzag = () => (
  <svg width="90" height="130" viewBox="0 0 90 130" fill="none">
    <path
      d="M20 20 C 60 35, 75 55, 45 75 C 15 95, 65 110, 50 120"
      stroke="url(#whiteZigzagGrad)"
      strokeWidth="24"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="whiteZigzagGrad" x1="0" y1="0" x2="90" y2="130" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" />
        <stop offset="0.7" stopColor="#E2E8F0" />
        <stop offset="1" stopColor="#94A3B8" />
      </linearGradient>
    </defs>
  </svg>
);
