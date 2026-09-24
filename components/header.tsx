"use client";

import { useState } from "react";
import { business, navigation } from "@/lib/site-data";
import { Icon } from "@/components/icons";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className={`brand ${light ? "brand-light" : ""}`} aria-label="Tyre Bank, back to top">
      <span className="brand-mark" aria-hidden="true"><span /></span>
      <span className="brand-copy"><strong>TYRE BANK</strong><small>HYDERABAD · EST. 1995</small></span>
    </a>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="topline"><div className="container-wide topline-inner"><span>MRF TYRES & PROFESSIONAL TYRE CARE</span><span>AMBERPET, HYDERABAD <span className="topline-dot">●</span> EST. 1995</span></div></div>
      <header className="site-header">
        <div className="container-wide nav-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
          </nav>
          <a className="nav-call" href={business.phoneHref}><Icon name="phone" width="17" height="17" /> Call Now <Icon name="arrow" width="16" height="16" /></a>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
            <span className={menuOpen ? "line line-one open" : "line line-one"} /><span className={menuOpen ? "line line-two open" : "line line-two"} /><span className={menuOpen ? "line line-three open" : "line line-three"} />
          </button>
        </div>
        {menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {navigation.map((item) => <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<Icon name="arrow" width="18" height="18" /></a>)}
          <a href={business.phoneHref} onClick={() => setMenuOpen(false)}>Call {business.phoneDisplay}<Icon name="phone" width="18" height="18" /></a>
        </nav>}
      </header>
    </>
  );
}
