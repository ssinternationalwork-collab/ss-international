const stats = [
  { number: "1999", label: "Year Founded" },
  { number: "25+", label: "Years of Precision" },
  { number: "500+", label: "OEM Clients" },
  { number: "8", label: "Industries Served" },
  { number: "14", label: "Product Categories" },
  { number: "40+", label: "Countries Exported" },
];

export default function AboutStats() {
  return (
    <section style={{
      background: "#141414",
      padding: "80px 72px",
      fontFamily: "var(--font-barlow)",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: 0,
        maxWidth: 1200,
        margin: "0 auto",
      }}>
        {stats.map((stat, i) => (
          <div key={i} style={{
            padding: "32px 24px",
            borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
            textAlign: "center",
          }}>
            <div style={{
              fontSize: "clamp(28px,3vw,48px)",
              fontWeight: 900,
              color: "#1B91FF",
              letterSpacing: "-1.5px",
              lineHeight: 1,
              marginBottom: 8,
            }}>{stat.number}</div>
            <div style={{
              fontSize: 11,
              color: "rgba(255,255,255,0.35)",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              fontFamily: "var(--font-inter)",
              fontWeight: 600,
            }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
