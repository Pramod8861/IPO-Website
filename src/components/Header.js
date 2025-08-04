"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X, Search } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <div className="logo-icon">B</div>
          <span className="logo-text">BLUESTOCK</span>
        </Link>

        <nav className="nav">
          <Link to="/" className="nav-link">
            Products
          </Link>
          <Link to="/" className="nav-link">
            Pricing
          </Link>
          <Link to="/" className="nav-link">
            Community
          </Link>
          <Link to="/" className="nav-link">
            Learn
          </Link>
          <Link to="/" className="nav-link">
            Support
          </Link>
        </nav>

        <div className="header-actions">
          <Search className="search-icon" />
          <button className="sign-in-btn">Sign In</button>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" className="mobile-nav-link">
          Products
        </Link>
        <Link to="/" className="mobile-nav-link">
          Pricing
        </Link>
        <Link to="/" className="mobile-nav-link">
          Community
        </Link>
        <Link to="/" className="mobile-nav-link">
          Learn
        </Link>
        <Link to="/" className="mobile-nav-link">
          Support
        </Link>
        <button className="sign-in-btn mobile-sign-in">Sign In</button>
      </nav>
    </header>
  )
}

export default Header
