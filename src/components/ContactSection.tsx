"use client";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "", company: "", industry: "", message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section style={{
      background: "#f8f8f8",
      fontFamily: "var(--font-barlow)",
      overflow: "hidden",
      height: "100vh",
      maxHeight: "100vh",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "3fr 2fr",
        height: "100%",
      }}>

        {/* LEFT — Image collage */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: 3,
          background: "#141414",
        }}>
          <div style={{ overflow: "hidden", position: "relative" }}>
            <img src="https://images.unsplash.com/photo-1662582038553-06b27d5d5870?w=800&q=80"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "brightness(0.7)" }} alt="" />
          </div>
          <div style={{
            background: "#1B91FF",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            padding: 32, textAlign: "center",
          }}>
            <div style={{ fontSize: 52, fontWeight: 900, color: "#fff", letterSpacing: "-2px", lineHeight: 1 }}>25+</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", textTransform: "uppercase", letterSpacing: "2px", marginTop: 8, fontFamily: "var(--font-inter)" }}>Years of Precision</div>
          </div>
          <div style={{ overflow: "hidden" }}>
            <img src="https://images.unsplash.com/photo-1600684249816-38cdfcf95c17?w=800&q=80"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "brightness(0.7)" }} alt="" />
          </div>
          <div style={{ overflow: "hidden" }}>
            <img src="https://images.unsplash.com/photo-1622645916455-aa13b87438ec?w=800&q=80"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "brightness(0.7)" }} alt="" />
          </div>
        </div>

        {/* RIGHT — Form */}
        <div style={{
          background: "#fff",
          padding: "40px 44px",
          display: "flex", flexDirection: "column", justifyContent: "center",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 24, height: 1.5, background: "#1B91FF" }}/>
            <span style={{
              color: "#1B91FF", fontSize: 10, fontWeight: 700,
              letterSpacing: "3px", textTransform: "uppercase",
              fontFamily: "var(--font-inter)",
            }}>Get in Touch</span>
          </div>

          <h2 style={{
            color: "#141414", fontSize: "clamp(20px,2.5vw,30px)",
            fontWeight: 900, lineHeight: 1, letterSpacing: "-1.5px",
            textTransform: "uppercase", margin: "0 0 8px",
          }}>
            Find Your<br/>
            <span style={{ color: "#D7D7D6" }}>Sealing Solution.</span>
          </h2>

          <p style={{
            color: "#888", fontSize: 13, lineHeight: 1.7,
            fontFamily: "var(--font-inter)", margin: "0 0 32px",
          }}>
            Share your requirement and get a response within 24 hours.
          </p>

          {submitted ? (
            <div style={{
              background: "rgba(27,145,255,0.08)",
              border: "1px solid rgba(27,145,255,0.3)",
              borderRadius: 12, padding: "32px 24px", textAlign: "center",
            }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>✓</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#141414", textTransform: "uppercase", letterSpacing: "-0.5px" }}>Message Received</div>
              <div style={{ fontSize: 13, color: "#888", marginTop: 8, fontFamily: "var(--font-inter)" }}>We'll get back to you within 24 hours.</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>

              {/* Name + Company */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div>
                  <label style={{
                    display: "block", fontSize: 10, fontWeight: 700,
                    color: "#888", textTransform: "uppercase",
                    letterSpacing: "1.5px", marginBottom: 6,
                    fontFamily: "var(--font-inter)",
                  }}>Name</label>
                  <input
                    type="text" required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    style={{
                      width: "100%", padding: "10px 12px",
                      border: "1px solid #e8e8e8", borderRadius: 8,
                      fontSize: 13, fontFamily: "var(--font-inter)",
                      color: "#141414", background: "#f8f8f8",
                      outline: "none", boxSizing: "border-box",
                    }}
                  />
                </div>
                <div>
                  <label style={{
                    display: "block", fontSize: 10, fontWeight: 700,
                    color: "#888", textTransform: "uppercase",
                    letterSpacing: "1.5px", marginBottom: 6,
                    fontFamily: "var(--font-inter)",
                  }}>Company</label>
                  <input
                    type="text" required
                    placeholder="Your company"
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                    style={{
                      width: "100%", padding: "10px 12px",
                      border: "1px solid #e8e8e8", borderRadius: 8,
                      fontSize: 13, fontFamily: "var(--font-inter)",
                      color: "#141414", background: "#f8f8f8",
                      outline: "none", boxSizing: "border-box",
                    }}
                  />
                </div>
              </div>

              {/* Industry */}
              <div>
                <label style={{
                  display: "block", fontSize: 10, fontWeight: 700,
                  color: "#888", textTransform: "uppercase",
                  letterSpacing: "1.5px", marginBottom: 6,
                  fontFamily: "var(--font-inter)",
                }}>Industry</label>
                <select
                  required
                  value={formData.industry}
                  onChange={e => setFormData({...formData, industry: e.target.value})}
                  style={{
                    width: "100%", padding: "12px 14px",
                    border: "1px solid #e8e8e8", borderRadius: 8,
                    fontSize: 13, fontFamily: "var(--font-inter)",
                    color: formData.industry ? "#141414" : "#aaa",
                    background: "#f8f8f8", outline: "none",
                    appearance: "none", boxSizing: "border-box",
                    cursor: "pointer",
                  }}
                >
                  <option value="" disabled>Select your industry</option>
                  <option value="automotive">Automotive</option>
                  <option value="railways">Railways</option>
                  <option value="architecture">Architecture</option>
                  <option value="shipping">Shipping</option>
                  <option value="mining">Mining</option>
                  <option value="power">Power Distribution</option>
                  <option value="roadways">Roadways</option>
                  <option value="infrastructure">Infrastructure</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label style={{
                  display: "block", fontSize: 10, fontWeight: 700,
                  color: "#888", textTransform: "uppercase",
                  letterSpacing: "1.5px", marginBottom: 6,
                  fontFamily: "var(--font-inter)",
                }}>Requirement</label>
                <textarea
                  required rows={3}
                  placeholder="Describe your sealing requirement..."
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  style={{
                    width: "100%", padding: "12px 14px",
                    border: "1px solid #e8e8e8", borderRadius: 8,
                    fontSize: 13, fontFamily: "var(--font-inter)",
                    color: "#141414", background: "#f8f8f8",
                    outline: "none", resize: "none", boxSizing: "border-box",
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                style={{
                  background: isLoading ? "#0f7ae0" : "#1B91FF",
                  color: "#fff", border: "none",
                  padding: "16px 32px", borderRadius: 50,
                  fontSize: 13, fontWeight: 700,
                  letterSpacing: "0.5px", textTransform: "uppercase",
                  cursor: isLoading ? "not-allowed" : "pointer",
                  fontFamily: "var(--font-barlow)",
                  display: "flex", alignItems: "center",
                  justifyContent: "center", gap: 8,
                  transition: "background 0.2s ease",
                  width: "100%",
                }}
              >
                {isLoading ? (
                  <>
                    <svg style={{ animation: "spin 1s linear infinite" }} width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3"/>
                      <path d="M12 2a10 10 0 0 1 10 10" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Submit Requirement
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7H11M7 3L11 7L7 11" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>

            </form>
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        input:focus, textarea:focus, select:focus {
          border-color: #1B91FF !important;
          background: #fff !important;
        }
      `}</style>
    </section>
  );
}
