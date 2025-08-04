const AboutPage = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem 1rem" }}>
      <div className="page-header">
        <h1 className="page-title">About Bluestock</h1>
        <p className="page-description">Your trusted partner for IPO investments and financial market insights.</p>
      </div>

      <div style={{ background: "white", borderRadius: "8px", border: "1px solid #e5e7eb", padding: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#111827", marginBottom: "1rem" }}>Our Mission</h2>
        <p style={{ color: "#6b7280", lineHeight: "1.6", marginBottom: "2rem" }}>
          At Bluestock, we are committed to democratizing access to IPO investments and providing comprehensive
          financial market insights to retail investors across India. Our platform simplifies the complex world of
          Initial Public Offerings, making it easier for everyone to participate in the growth stories of emerging
          companies.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#111827", marginBottom: "1rem" }}>
          What We Offer
        </h2>
        <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", color: "#6b7280", marginBottom: "2rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>Real-time IPO listings and updates</li>
          <li style={{ marginBottom: "0.5rem" }}>Comprehensive IPO analysis and research</li>
          <li style={{ marginBottom: "0.5rem" }}>Easy application process for IPO investments</li>
          <li style={{ marginBottom: "0.5rem" }}>Educational resources and market insights</li>
          <li style={{ marginBottom: "0.5rem" }}>Portfolio tracking and management tools</li>
        </ul>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#111827", marginBottom: "1rem" }}>
          Why Choose Bluestock?
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          <div style={{ background: "#f9fafb", padding: "1.5rem", borderRadius: "8px" }}>
            <h3 style={{ fontWeight: "600", color: "#111827", marginBottom: "0.5rem" }}>Trusted Platform</h3>
            <p style={{ color: "#6b7280", fontSize: "14px" }}>
              SEBI compliant platform with secure transactions and data protection.
            </p>
          </div>
          <div style={{ background: "#f9fafb", padding: "1.5rem", borderRadius: "8px" }}>
            <h3 style={{ fontWeight: "600", color: "#111827", marginBottom: "0.5rem" }}>Expert Research</h3>
            <p style={{ color: "#6b7280", fontSize: "14px" }}>
              In-depth analysis and research reports for informed investment decisions.
            </p>
          </div>
          <div style={{ background: "#f9fafb", padding: "1.5rem", borderRadius: "8px" }}>
            <h3 style={{ fontWeight: "600", color: "#111827", marginBottom: "0.5rem" }}>User-Friendly</h3>
            <p style={{ color: "#6b7280", fontSize: "14px" }}>
              Simple and intuitive interface designed for both beginners and experts.
            </p>
          </div>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#111827", marginBottom: "1rem" }}>Contact Us</h2>
        <div style={{ background: "#f9fafb", padding: "1.5rem", borderRadius: "8px" }}>
          <p style={{ color: "#6b7280", marginBottom: "0.5rem" }}>
            <strong>Email:</strong> hello@bluestock.in
          </p>
          <p style={{ color: "#6b7280", marginBottom: "0.5rem" }}>
            <strong>Tech Support:</strong> cto@bluestock.in
          </p>
          <p style={{ color: "#6b7280", marginBottom: "0.5rem" }}>
            <strong>Address:</strong> Pune, Maharashtra, India
          </p>
          <p style={{ color: "#6b7280" }}>
            <strong>MSME Registration:</strong> UDYAM-MH-01-v0138001
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
