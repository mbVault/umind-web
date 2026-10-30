type UmindLogoProps = {
  size?: number;
};

/** Circular mark: indigo U with sun smile-dot (spec logo). */
export function UmindLogo({ size = 28 }: UmindLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="16" cy="16" r="16" fill="var(--color-primary)" />
      <path
        d="M10 11.5v5.2c0 3.3 2.7 6 6 6s6-2.7 6-6v-5.2"
        stroke="#ffffff"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="22.5" cy="10.5" r="2.2" fill="var(--color-sun)" />
    </svg>
  );
}
