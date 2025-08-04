import { Twitter, Facebook, Youtube, Linkedin, Instagram, MessageCircle } from "lucide-react"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li>
                <a href="#">Trading View</a>
              </li>
              <li>
                <a href="#">NSE Holidays</a>
              </li>
              <li>
                <a href="#">e-Voting CDSL</a>
              </li>
              <li>
                <a href="#">e-Voting NSDL</a>
              </li>
              <li>
                <a href="#">Market Timings</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">About US</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Offerings</h3>
            <ul>
              <li>
                <a href="#">Compare Broker</a>
              </li>
              <li>
                <a href="#">Fin Calculators</a>
              </li>
              <li>
                <a href="#">IPO</a>
              </li>
              <li>
                <a href="#">All Brokers</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="#">Shark Investor</a>
              </li>
              <li>
                <a href="#">Mutual Funds</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
              <li>
                <a href="#">Indian Indices</a>
              </li>
              <li>
                <a href="#">Bug Bounty Program</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Policy</h3>
            <ul>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Refund Policy</a>
              </li>
              <li>
                <a href="#">Disclaimer</a>
              </li>
              <li>
                <a href="#">Trust & Security</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-social">
            <Twitter className="social-icon" style={{ color: "#1DA1F2" }} />
            <Facebook className="social-icon" style={{ color: "#1877F2" }} />
            <Youtube className="social-icon" style={{ color: "#FF0000" }} />
            <Linkedin className="social-icon" style={{ color: "#0A66C2" }} />
            <Instagram className="social-icon" style={{ color: "#E4405F" }} />
            <MessageCircle className="social-icon" style={{ color: "#25D366" }} />
          </div>

          <div className="footer-company">
            <div className="logo-icon">B</div>
            <span className="logo-text">BLUESTOCK</span>
          </div>

          <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "0.5rem" }}>Bluestock Fintech</p>
          <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "0.5rem" }}>Pune, Maharashtra</p>
          <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "0.5rem" }}>MSME Registration No:</p>
          <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "1rem" }}>UDYAM-MH-01-v0138001</p>

          <div style={{ color: "#FF6B35", fontWeight: "bold", fontSize: "18px", marginBottom: "2rem" }}>
            #startupindia
          </div>

          <div className="footer-disclaimer">
            <p>
              Investment in securities markets are subject to market risks, read all the related documents carefully
              before investing as prescribed by SEBI. Issued in the interest of the investors.
            </p>
            <p>
              The users can write to{" "}
              <a href="mailto:hello@bluestock.in" style={{ color: "#2563eb" }}>
                hello@bluestock.in
              </a>{" "}
              for any app, website related queries. Also you can send IT / Tech related feedback to{" "}
              <a href="mailto:cto@bluestock.in" style={{ color: "#2563eb" }}>
                cto@bluestock.in
              </a>
            </p>
            <p>
              Disclaimer: We are not a SEBI registered research analyst company. We do not provide any kind of stock
              recommendations, buy/sell stock tips, or investment and trading advice. All the stock scripts shown in the
              Bluestock app, website, all social media handles are for educational purposes only.
            </p>
            <p>
              Before making any investment in the financial market, it is advisable to consult with your financial
              advisor. Remember that stock markets are subject to market risks.
            </p>
          </div>

          <div className="footer-copyright">
            <span>Bluestock Fintech All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
