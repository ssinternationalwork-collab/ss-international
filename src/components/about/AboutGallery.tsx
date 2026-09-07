"use client";
import { Shield, Globe, Users, Layers } from "lucide-react";

export default function AboutGallery() {
  return (
    <section style={{
      background: "#f8f8f8",
      padding: "48px 72px",
      fontFamily: "var(--font-barlow)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 14,
          }}>
            <div style={{ width: 28, height: 1, background: "#1B91FF" }}/>
            <span style={{
              color: "#1B91FF", fontSize: 10, fontWeight: 700,
              letterSpacing: "3px", textTransform: "uppercase",
              fontFamily: "var(--font-inter)",
            }}>Why SS International</span>
            <div style={{ width: 28, height: 1, background: "#1B91FF" }}/>
          </div>
          <h2 style={{
            color: "#141414",
            fontSize: "clamp(26px,3vw,40px)",
            fontWeight: 900, lineHeight: 0.95,
            letterSpacing: "-1.5px", textTransform: "uppercase",
            margin: "0 0 12px",
          }}>
            Built Different. <span style={{ color: "#D7D7D6" }}>Built Right.</span>
          </h2>
          <p style={{
            color: "#666", fontSize: 13, lineHeight: 1.6,
            fontFamily: "var(--font-inter)",
            maxWidth: 480, margin: "0 auto",
          }}>
            Four pillars that make SSI the preferred sealing partner
            for 500+ OEM manufacturers across 40+ countries.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: 12,
        }}>

          {/* Card 1 — 100% In-House */}
          <div
            style={{
              gridColumn: "span 2",
              background: "#fff",
              border: "1px solid #e8e8e8",
              borderRadius: 16,
              padding: "24px 20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 200,
              cursor: "pointer",
              transition: "transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 16px 40px rgba(27,145,255,0.12)";
              e.currentTarget.style.borderColor = "rgba(27,145,255,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "#e8e8e8";
            }}
          >
            <div style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 28px",
            }}>
              <svg
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
                viewBox="0 0 254 104" fill="none"
              >
                <path
                  d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
                  fill="#1B91FF" fillOpacity="0.08"
                />
              </svg>
              <span style={{
                position: "relative",
                fontSize: 40, fontWeight: 900,
                color: "#1B91FF",
                letterSpacing: "-2px",
                lineHeight: 1,
              }}>100%</span>
            </div>
            <h3 style={{
              marginTop: 28, marginBottom: 8,
              fontSize: 18, fontWeight: 800,
              color: "#141414",
              textTransform: "uppercase",
              letterSpacing: "-0.5px",
              textAlign: "center",
            }}>In-House</h3>
            <p style={{
              fontSize: 13, color: "#888",
              textAlign: "center", lineHeight: 1.6,
              fontFamily: "var(--font-inter)",
              margin: 0,
            }}>
              Zero outsourcing. From raw compound to finished profile —
              every stage under one roof.
            </p>
          </div>

          {/* Card 2 — Global Reach */}
          <div
            style={{
              gridColumn: "span 2",
              background: "#fff",
              border: "1px solid #e8e8e8",
              borderRadius: 16,
              padding: "24px 20px",
              minHeight: 200,
              cursor: "pointer",
              transition: "transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 16px 40px rgba(27,145,255,0.12)";
              e.currentTarget.style.borderColor = "rgba(27,145,255,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "#e8e8e8";
            }}
          >
            <div style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 28,
              position: "relative",
            }}>
              <div style={{
                position: "absolute",
                width: 108, height: 108,
                left: "50%", marginLeft: -54,
                borderRadius: "50%",
                border: "1px solid rgba(27,145,255,0.15)",
              }}/>
              <div style={{
                width: 88, height: 88,
                borderRadius: "50%",
                border: "1px solid rgba(27,145,255,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(27,145,255,0.04)",
                position: "relative",
              }}>
                <Globe size={36} color="#1B91FF" strokeWidth={1.2}/>
              </div>
            </div>
            <h3 style={{
              fontSize: 18, fontWeight: 800,
              color: "#141414",
              textTransform: "uppercase",
              letterSpacing: "-0.3px",
              textAlign: "center",
              margin: "0 0 8px",
            }}>Global Standards</h3>
            <p style={{
              fontSize: 13, color: "#666",
              textAlign: "center", lineHeight: 1.65,
              fontFamily: "var(--font-inter)",
              margin: 0,
            }}>
              EN 45545, DIN 7863, BS 6853, ISO 3934, ASTM C-864.
              Certified for the world's most demanding applications.
            </p>
          </div>

          {/* Card 3 — Quality Tested */}
          <div
            style={{
              gridColumn: "span 2",
              background: "#fff",
              border: "1px solid #e8e8e8",
              borderRadius: 16,
              padding: "24px 20px",
              minHeight: 200,
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
              transition: "transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 16px 40px rgba(27,145,255,0.12)";
              e.currentTarget.style.borderColor = "rgba(27,145,255,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "#e8e8e8";
            }}
          >
            <div style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 20,
            }}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: 4,
                width: "100%",
                maxWidth: 200,
              }}>
                {[26, 46, 36, 62, 52, 40, 58, 48, 66, 42].map((h, i) => (
                  <div key={i} style={{
                    height: `${h}px`,
                    background: i === 8 ? "#1B91FF" : "rgba(27,145,255,0.2)",
                    borderRadius: 3,
                    alignSelf: "flex-end",
                  }}/>
                ))}
              </div>
            </div>
            <h3 style={{
              fontSize: 18, fontWeight: 800,
              color: "#141414",
              textTransform: "uppercase",
              letterSpacing: "-0.3px",
              textAlign: "center",
              margin: "0 0 8px",
            }}>10+ Test Instruments</h3>
            <p style={{
              fontSize: 13, color: "#666",
              textAlign: "center", lineHeight: 1.65,
              fontFamily: "var(--font-inter)",
              margin: 0,
            }}>
              In-house lab validates every batch — tensile strength,
              hardness, ozone resistance, compression set.
            </p>
          </div>

          {/* Card 4 — Process Pillar */}
          <div
            style={{
              gridColumn: "span 3",
              background: "#fff",
              border: "1px solid #e8e8e8",
              borderRadius: 16,
              padding: 24,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 32,
              alignItems: "center",
              minHeight: 180,
              cursor: "pointer",
              transition: "transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 16px 40px rgba(27,145,255,0.12)";
              e.currentTarget.style.borderColor = "rgba(27,145,255,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "#e8e8e8";
            }}
          >
            <div>
              <div style={{
                width: 40, height: 40,
                borderRadius: "50%",
                border: "1px solid rgba(27,145,255,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 24,
                background: "rgba(27,145,255,0.04)",
              }}>
                <Layers size={20} color="#1B91FF" strokeWidth={1.5}/>
              </div>
              <h3 style={{
                fontSize: 16, fontWeight: 800,
                color: "#141414",
                textTransform: "uppercase",
                letterSpacing: "-0.3px",
                margin: "0 0 8px",
              }}>End-to-End Capability</h3>
              <p style={{
                fontSize: 13, color: "#666",
                lineHeight: 1.65,
                fontFamily: "var(--font-inter)",
                margin: 0,
              }}>
                Compound mixing, extrusion, UHF curing, flocking, testing,
                vulcanised joints — full process control.
              </p>
            </div>

            {/* Process visualization */}
            <div style={{
              background: "#f8f8f8",
              borderRadius: 12,
              padding: 20,
              minHeight: 120,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 8,
            }}>
              {[
                { label: "Compound", value: 100 },
                { label: "Extrusion", value: 100 },
                { label: "UHF Curing", value: 100 },
                { label: "Testing", value: 100 },
                { label: "Despatch", value: 100 },
              ].map((step, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 10,
                }}>
                  <span style={{
                    fontSize: 9, fontWeight: 700,
                    color: "#888", width: 60,
                    fontFamily: "var(--font-inter)",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}>{step.label}</span>
                  <div style={{
                    flex: 1, height: 4,
                    background: "#e8e8e8",
                    borderRadius: 2,
                    overflow: "hidden",
                  }}>
                    <div style={{
                      width: `${step.value}%`,
                      height: "100%",
                      background: "#1B91FF",
                      borderRadius: 2,
                    }}/>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 5 — Trusted OEMs */}
          <div
            style={{
              gridColumn: "span 3",
              background: "#fff",
              border: "1px solid #e8e8e8",
              borderRadius: 16,
              padding: 24,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 32,
              alignItems: "center",
              minHeight: 180,
              cursor: "pointer",
              transition: "transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 16px 40px rgba(27,145,255,0.12)";
              e.currentTarget.style.borderColor = "rgba(27,145,255,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "#e8e8e8";
            }}
          >
            <div>
              <div style={{
                width: 40, height: 40,
                borderRadius: "50%",
                border: "1px solid rgba(27,145,255,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 24,
                background: "rgba(27,145,255,0.04)",
              }}>
                <Users size={20} color="#1B91FF" strokeWidth={1.5}/>
              </div>
              <h3 style={{
                fontSize: 16, fontWeight: 800,
                color: "#141414",
                textTransform: "uppercase",
                letterSpacing: "-0.3px",
                margin: "0 0 8px",
              }}>Trusted by 500+ OEMs</h3>
              <p style={{
                fontSize: 13, color: "#666",
                lineHeight: 1.65,
                fontFamily: "var(--font-inter)",
                margin: 0,
              }}>
                From Tata Motors to global railway operators —
                25 years of OEM partnerships.
              </p>
            </div>

            {/* OEM badges */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              alignItems: "flex-end",
            }}>
              {[
                { name: "Tata Motors", side: "right" },
                { name: "Indian Railways", side: "left" },
                { name: "Mahindra", side: "right" },
                { name: "Ashok Leyland", side: "left" },
              ].map((oem, i) => (
                <div key={i} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  flexDirection: oem.side === "left" ? "row-reverse" : "row",
                  width: "75%",
                  justifyContent: oem.side === "left" ? "flex-end" : "flex-start",
                  marginLeft: oem.side === "left" ? "auto" : 0,
                  marginRight: oem.side === "left" ? 0 : "auto",
                }}>
                  <span style={{
                    background: "#fff",
                    border: "1px solid #e8e8e8",
                    borderRadius: 6,
                    padding: "5px 10px",
                    fontSize: 11, fontWeight: 700,
                    color: "#141414",
                    fontFamily: "var(--font-inter)",
                    textTransform: "uppercase",
                    letterSpacing: "0.3px",
                    whiteSpace: "nowrap",
                  }}>{oem.name}</span>
                  <div style={{
                    width: 24, height: 24,
                    borderRadius: "50%",
                    background: "#1B91FF",
                    border: "3px solid #fff",
                    boxShadow: "0 0 0 1px #e8e8e8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: 11, fontWeight: 800,
                  }}>{oem.name.charAt(0)}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
