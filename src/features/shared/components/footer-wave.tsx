export function FooterWave() {
  return (
    <div className="footer-wave" aria-hidden="true">
      <svg
        className="footer-wave__svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
          />
        </defs>
        <g className="footer-wave__layers">
          <use href="#gentle-wave" x="48" y="0" fill="rgba(255, 208, 47, 0.28)" />
          <use href="#gentle-wave" x="48" y="3" fill="rgba(142, 145, 160, 0.35)" />
          <use href="#gentle-wave" x="48" y="5" fill="rgba(52, 52, 58, 0.82)" />
          <use href="#gentle-wave" x="48" y="7" fill="#1c1c1e" />
        </g>
      </svg>
    </div>
  );
}
