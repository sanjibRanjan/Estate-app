import { useState, useEffect } from "react";
import logo from "./assets/companylogo.jpg";
import youtubeLogo from "./assets/Youtube.png";
import instagramLogo from "./assets/Instagram.jpeg";

const FONT_LINK = `@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');`;

const properties = [
  {
    id: 1,
    title: "Skyline Penthouse",
    location: "Bandra West, Mumbai",
    price: "₹4.2 Cr",
    type: "Apartment",
    beds: 4,
    baths: 3,
    area: "3200",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    tag: "Featured",
    description: "Ultra-luxury penthouse with wraparound city views, private deck, and premium Italian finishes in one of Bandra's most coveted towers.",
  },
  {
    id: 2,
    title: "The Garden Villa",
    location: "Whitefield, Bangalore",
    price: "₹2.8 Cr",
    type: "Villa",
    beds: 5,
    baths: 4,
    area: "4500",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
    tag: "New",
    description: "Expansive independent villa with landscaped garden, double-height living, and serene community surroundings ideal for families.",
  },
  {
    id: 3,
    title: "Corporate Plaza Suite",
    location: "Cyber City, Gurugram",
    price: "₹1.1 Cr",
    type: "Office",
    beds: 0,
    baths: 2,
    area: "1800",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    tag: "Hot",
    description: "Grade-A office space in a landmark IT park, ideal for startups or satellite offices with excellent connectivity and amenities.",
  },
  {
    id: 4,
    title: "Lakeside Retreat",
    location: "Jubilee Hills, Hyderabad",
    price: "₹3.6 Cr",
    type: "Villa",
    beds: 4,
    baths: 3,
    area: "3900",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    tag: "Exclusive",
    description: "Resort-style villa overlooking serene greenery, featuring wide balconies, large bedrooms, and a calm upscale neighborhood.",
  },
  {
    id: 5,
    title: "The Heritage Apartment",
    location: "Defence Colony, Delhi",
    price: "₹1.9 Cr",
    type: "Apartment",
    beds: 3,
    baths: 2,
    area: "2100",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    tag: "",
    description: "Tastefully renovated apartment with classic charm, wide living spaces, and tree-lined views in a prestigious South Delhi address.",
  },
  {
    id: 6,
    title: "Prime Commercial Plot",
    location: "Anna Nagar, Chennai",
    price: "₹78 L",
    type: "Plot",
    beds: 0,
    baths: 0,
    area: "2400",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    tag: "Invest",
    description: "Well-proportioned corner plot in a fast-developing micro-market, suitable for boutique commercial or mixed-use development.",
  },
];

const amenities = ["Swimming Pool", "Gym", "24/7 Security", "Power Backup", "Parking", "Garden", "Club House", "CCTV"];

const styles = `
  ${FONT_LINK}
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'DM Sans', sans-serif; background: #ffffff; color: #334155; }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: #ffffff; }
  ::-webkit-scrollbar-thumb { background: #c9a84c; border-radius: 3px; }

  .serif { font-family: 'Cormorant Garamond', serif; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes pulse-gold {
    0%, 100% { box-shadow: 0 0 0 0 rgba(201,168,76,0.4); }
    50% { box-shadow: 0 0 0 8px rgba(201,168,76,0); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }

  .fade-up { animation: fadeUp 0.7s ease both; }
  .fade-up-1 { animation: fadeUp 0.7s 0.1s ease both; }
  .fade-up-2 { animation: fadeUp 0.7s 0.2s ease both; }
  .fade-up-3 { animation: fadeUp 0.7s 0.3s ease both; }
  .fade-up-4 { animation: fadeUp 0.7s 0.4s ease both; }
  .fade-in { animation: fadeIn 0.5s ease both; }

  .gold-text {
    background: linear-gradient(90deg, #c9a84c, #f0d080, #c9a84c);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 3s linear infinite;
  }

  .glass {
    background: rgba(255,255,255,0.04);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(201,168,76,0.15);
  }

  /* Navbar responsiveness */
  .main-nav {
    padding: 0 40px;
  }

  .nav-desktop {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  .nav-toggle {
    display: none;
    background: none;
    border: none;
    color: #c9a84c;
    cursor: pointer;
  }

  .nav-toggle-bar {
    width: 20px;
    height: 2px;
    background: #c9a84c;
    margin: 3px 0;
    transition: transform 0.2s, opacity 0.2s;
  }

  .nav-mobile-menu {
    display: none;
  }

  /* Layout helpers for sections */
  .section {
    padding: 100px 40px;
  }

  .section-narrow {
    padding: 80px 40px;
  }

  .two-col-grid {
    display: grid;
    gap: 80px;
    align-items: center;
  }

  .two-col-grid-equal {
    display: grid;
    gap: 60px;
    align-items: flex-start;
  }

  .detail-grid {
    display: grid;
    gap: 60px;
    align-items: flex-start;
  }

  .detail-sidebar {
    position: sticky;
    top: 100px;
  }

  .admin-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .footer-grid {
    display: grid;
    gap: 60px;
  }

  @media (max-width: 1024px) {
    .section {
      padding: 80px 24px;
    }
    .section-narrow {
      padding: 60px 24px;
    }
    .two-col-grid,
    .two-col-grid-equal,
    .detail-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    .detail-sidebar {
      position: static;
    }
    .footer-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      row-gap: 40px;
    }
  }

  @media (max-width: 768px) {
    .main-nav {
      padding: 0 16px;
    }
    .nav-desktop {
      display: none;
    }
    .nav-toggle {
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 6px;
    }
    .nav-mobile-menu {
      display: flex;
      flex-direction: column;
      gap: 14px;
      padding: 16px 18px 12px;
      background: rgba(10,10,15,0.98);
      position: fixed;
      top: 72px;
      right: 12px;
      width: min(280px, 80vw);
      border-radius: 12px;
      border: 1px solid rgba(201,168,76,0.3);
      box-shadow: 0 18px 45px rgba(0,0,0,0.6);
      max-height: calc(100vh - 88px);
      overflow-y: auto;
    }
    .nav-mobile-menu .nav-link {
      text-align: left;
      padding: 0;
      font-size: 14px;
    }
    .hero-bg {
      align-items: flex-start;
      padding-top: 96px !important;
    }
    .section {
      padding: 60px 16px;
    }
    .section-narrow {
      padding: 40px 16px;
    }
    .footer-grid {
      grid-template-columns: 1fr;
    }
  }

  .card-hover {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .card-hover:hover {
    transform: translateY(-6px);
    border-color: rgba(201,168,76,0.5) !important;
    box-shadow: 0 20px 60px rgba(201,168,76,0.1), 0 0 0 1px rgba(201,168,76,0.2);
  }

  .btn-gold {
    background: linear-gradient(135deg, #c9a84c, #f0d080, #c9a84c);
    background-size: 200% auto;
    color: #0a0a0f;
    font-weight: 600;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
  }
  .btn-gold:hover {
    background-position: right center;
    transform: translateY(-1px);
    box-shadow: 0 8px 30px rgba(201,168,76,0.4);
  }

  .btn-outline {
    background: transparent;
    color: #c9a84c;
    border: 1px solid rgba(201,168,76,0.5);
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .btn-outline:hover {
    background: rgba(201,168,76,0.1);
    border-color: #c9a84c;
  }

  .nav-link {
    color: #c9a84c;
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.05em;
    transition: color 0.2s;
    cursor: pointer;
    background: none;
    border: none;
  }
  .nav-link:hover, .nav-link.active { color: #c9a84c; }

  .hero-bg {
    background:
      linear-gradient(to bottom, rgba(10,10,15,0.3) 0%, rgba(10,10,15,0.85) 100%),
      url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80') center/cover no-repeat;
    min-height: 100vh;
    position: relative;
  }

  .grain {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    opacity: 0.025;
    pointer-events: none;
    z-index: 1000;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  }

  .tag-badge {
    background: linear-gradient(135deg, #c9a84c, #f0d080);
    color: #0a0a0f;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 3px 10px;
    border-radius: 2px;
  }

  .input-field {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(201,168,76,0.2);
    color: #000000;
    padding: 12px 16px;
    border-radius: 8px;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    transition: border-color 0.2s;
    outline: none;
    width: 100%;
  }
  .input-field:focus { border-color: #c9a84c; }
  .input-field::placeholder { color: #000000; font-weight: 600; }

  select.input-field option { background: #1a1a24; }

  .stat-float { animation: float 3s ease-in-out infinite; }

  .divider {
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, #c9a84c, transparent);
    margin: 16px 0;
  }

  .type-chip {
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    border: 1px solid rgba(201,168,76,0.25);
    background: transparent;
    color: #c8bfaa;
  }
  .type-chip.active, .type-chip:hover {
    background: rgba(201,168,76,0.15);
    border-color: #c9a84c;
    color: #c9a84c;
  }

  .admin-row:hover { background: rgba(201,168,76,0.04); }
`;

export default function RealEstateApp() {
  const [page, setPage] = useState("home");
  const [selectedProp, setSelectedProp] = useState(null);
  const [filter, setFilter] = useState("All");
  const [adminPassword, setAdminPassword] = useState("");
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [adminError, setAdminError] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [consultName, setConsultName] = useState("");
  const [consultPhone, setConsultPhone] = useState("");
  const [consultEmail, setConsultEmail] = useState("");
  const [consultMsg, setConsultMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [adminProps, setAdminProps] = useState(properties);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filtered = filter === "All" ? adminProps : adminProps.filter(p => p.type === filter);

  const navigate = (pg, prop = null) => {
    setPage(pg);
    if (prop) setSelectedProp(prop);
    window.scrollTo(0, 0);
    setSubmitted(false);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="grain" />
      <div style={{ minHeight: "100vh", background: "#ffffff" }}>
        <Navbar page={page} navigate={navigate} scrolled={scrolled} />
        {page === "home" && <HomePage navigate={navigate} adminProps={adminProps} />}
        {page === "properties" && <PropertiesPage navigate={navigate} filtered={filtered} filter={filter} setFilter={setFilter} />}
        {page === "detail" && selectedProp && (
          <DetailPage prop={selectedProp} navigate={navigate}
            consultName={consultName} setConsultName={setConsultName}
            consultPhone={consultPhone} setConsultPhone={setConsultPhone}
            consultEmail={consultEmail} setConsultEmail={setConsultEmail}
            consultMsg={consultMsg} setConsultMsg={setConsultMsg}
            submitted={submitted} setSubmitted={setSubmitted}
          />
        )}
        {page === "contact" && <ContactPage />}
        {page === "admin" && (
          <AdminPage
            adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn}
            adminPassword={adminPassword} setAdminPassword={setAdminPassword}
            adminError={adminError} setAdminError={setAdminError}
            showAddForm={showAddForm} setShowAddForm={setShowAddForm}
            adminProps={adminProps} setAdminProps={setAdminProps}
          />
        )}
        <Footer navigate={navigate} />
      </div>
    </>
  );
}

function Navbar({ page, navigate, scrolled }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="main-nav" style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 900,
      background: scrolled ? "rgba(10,10,15,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(201,168,76,0.12)" : "none",
      transition: "all 0.4s ease",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      height: 72,
    }}>
      <div onClick={() => navigate("home")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
        <img
          src={logo}
          alt="Bangalore North Real Estate logo"
          style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover" }}
        />
        <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 600, letterSpacing: "0.05em", color: "#a68e3c" }}>
          Bangalore North<span style={{ color: "#a68e3c" }}> Real Estate</span>
        </span>
      </div>
      <div className="nav-desktop">
        {["home","properties","contact"].map(p => (
          <button key={p} className={`nav-link ${page === p ? "active" : ""}`} onClick={() => navigate(p)}>
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </button>
        ))}
        <a
          href="https://wa.me/919113203639"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
          style={{ padding: "10px 22px", borderRadius: 6, fontSize: 13, letterSpacing: "0.05em", display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}
        >
          Book Consultation
        </a>
        <button className="nav-link" onClick={() => navigate("admin")} style={{ fontSize: 12, opacity: 0.5 }}>Admin</button>
      </div>
      <button
        className="nav-toggle"
        aria-label="Toggle navigation menu"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <div
          className="nav-toggle-bar"
          style={mobileOpen ? { transform: "translateY(5px) rotate(45deg)" } : {}}
        />
        <div
          className="nav-toggle-bar"
          style={mobileOpen ? { opacity: 0 } : {}}
        />
        <div
          className="nav-toggle-bar"
          style={mobileOpen ? { transform: "translateY(-5px) rotate(-45deg)" } : {}}
        />
      </button>
      {mobileOpen && (
        <>
          {/* Click-away overlay */}
          <div
            onClick={() => setMobileOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              top: 72,
              background: "transparent",
              zIndex: 901,
            }}
          />
          <div className="nav-mobile-menu" style={{ zIndex: 902 }}>
            {["home","properties","contact"].map(p => (
              <button
                key={p}
                className={`nav-link ${page === p ? "active" : ""}`}
                style={{ textAlign: "left" }}
                onClick={() => {
                  navigate(p);
                  setMobileOpen(false);
                }}
              >
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </button>
            ))}
            <a
              href="https://wa.me/919113203639"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ padding: "10px 18px", borderRadius: 6, fontSize: 13, marginTop: 4, textAlign: "center" }}
            >
              Book Consultation
            </a>
            <button
              className="nav-link"
              style={{ fontSize: 12, opacity: 0.6, marginTop: 4, textAlign: "left" }}
              onClick={() => {
                navigate("admin");
                setMobileOpen(false);
              }}
            >
              Admin
            </button>
          </div>
        </>
      )}
    </nav>
  );
}

function HomePage({ navigate, adminProps }) {
  const [searchCity, setSearchCity] = useState("");
  const [searchType, setSearchType] = useState("All Types");
  const stats = [
    { val: "240+", label: "Properties Listed" },
    { val: "₹2400 Cr", label: "Worth Managed" },
    { val: "1800+", label: "Happy Clients" },
    { val: "12", label: "Cities Covered" },
  ];
  return (
    <div>
      {/* Hero */}
      <div
        className="hero-bg"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 24px 40px",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 70%, rgba(201,168,76,0.08) 0%, transparent 60%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 820 }}>
          <div className="fade-up" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 24, padding: "6px 18px", borderRadius: 20, border: "1px solid rgba(201,168,76,0.3)", background: "rgba(201,168,76,0.06)" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#c9a84c", display: "inline-block" }} />
            <span style={{ fontSize: 12, letterSpacing: "0.15em", color: "#c9a84c", textTransform: "uppercase" }}>Premium Real Estate Consulting</span>
          </div>
          <h1 className="serif fade-up-1" style={{ fontSize: "clamp(52px,8vw,92px)", fontWeight: 300, lineHeight: 1.05, marginBottom: 24, color: "#f0ebe0" }}>
            Find Your<br />
            <span className="gold-text" style={{ fontStyle: "italic", fontWeight: 400 }}>Perfect Space</span>
          </h1>
          <p className="fade-up-2" style={{ fontSize: 18, color: "#9d9080", maxWidth: 520, margin: "0 auto 48px", lineHeight: 1.7, fontWeight: 300 }}>
            Curated luxury properties across India's most coveted addresses. Where vision meets home.
          </p>
          {/* Search Bar */}
          <div className="fade-up-3 glass" style={{ borderRadius: 14, padding: 20, display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginBottom: 48 }}>
          <input
            className="input-field"
            style={{ flex: "1 1 200px", maxWidth: 260 }}
            placeholder="Search properties in Bangalore…"
            value={searchCity}
            onChange={e => setSearchCity(e.target.value)}
          />
            <select className="input-field" style={{ flex: "1 1 150px", maxWidth: 180 }} value={searchType} onChange={e => setSearchType(e.target.value)}>
              {["All Types","Apartment","Villa","Office","Plot"].map(t => <option key={t}>{t}</option>)}
            </select>
            <button className="btn-gold" style={{ padding: "12px 30px", borderRadius: 8, fontSize: 14, whiteSpace: "nowrap" }} onClick={() => navigate("properties")}>
              Search Properties →
            </button>
          </div>
          <div className="fade-up-4" style={{ display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap" }}>
            {stats.map(s => (
              <div key={s.val} style={{ textAlign: "center" }}>
                <div className="serif" style={{ fontSize: 28, fontWeight: 600, color: "#c9a84c" }}>{s.val}</div>
                <div style={{ fontSize: 12, color: "#6b6455", letterSpacing: "0.08em", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", animation: "float 2s ease-in-out infinite" }}>
          <div style={{ width: 24, height: 38, border: "2px solid rgba(201,168,76,0.4)", borderRadius: 12, display: "flex", justifyContent: "center", paddingTop: 6 }}>
            <div style={{ width: 4, height: 8, background: "#c9a84c", borderRadius: 2 }} />
          </div>
        </div>
      </div>

      {/* Featured */}
      <div className="section" style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 60, flexWrap: "wrap", gap: 20 }}>
          <div>
            <p style={{ fontSize: 12, letterSpacing: "0.2em", color: "#c9a84c", textTransform: "uppercase", marginBottom: 12 }}>Handpicked Selection</p>
            <h2 className="serif" style={{ fontSize: "clamp(36px,5vw,58px)", fontWeight: 300, color: "#a68e3c", lineHeight: 1.1 }}>
              Featured<br /><em style={{ color: "#a68e3c" }}>Properties</em>
            </h2>
          </div>
          <button className="btn-outline" style={{ padding: "12px 28px", borderRadius: 8, fontFamily: "'DM Sans',sans-serif", fontSize: 14 }} onClick={() => navigate("properties")}>
            View All Properties →
          </button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 28 }}>
          {adminProps.slice(0, 3).map((p, i) => (
            <PropertyCard key={p.id} prop={p} navigate={navigate} delay={i * 100} />
          ))}
        </div>
      </div>

      {/* Why Us */}
      <div style={{ background: "rgba(201,168,76,0.03)", borderTop: "1px solid rgba(201,168,76,0.08)", borderBottom: "1px solid rgba(201,168,76,0.08)" }} className="section">
        <div className="two-col-grid" style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div>
            <p style={{ fontSize: 12, letterSpacing: "0.2em", color: "#c9a84c", textTransform: "uppercase", marginBottom: 12 }}>Our Difference</p>
            <h2 className="serif" style={{ fontSize: "clamp(34px,4vw,52px)", fontWeight: 300, lineHeight: 1.2, marginBottom: 28, color: "#a68e3c" }}>
              Why Choose <em style={{ color: "#a68e3c" }}>Bangalore North Real Estate</em>?
            </h2>
            <p style={{ color: "#9d9080", lineHeight: 1.8, fontSize: 16, marginBottom: 36 }}>
              We don't just sell properties — we architect life decisions. Our consultants bring decades of market intelligence, legal expertise, and an unwavering eye for value.
            </p>
            <button className="btn-gold" style={{ padding: "14px 32px", borderRadius: 8, fontSize: 14 }} onClick={() => navigate("contact")}>
              Start Consulting
            </button>
          </div>
          <div className="two-col-grid-equal" style={{ gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              { icon: "🏆", title: "Award Winning", desc: "Best Real Estate Consultancy 2024" },
              { icon: "⚡", title: "Fast Closings", desc: "Average 18-day deal completion" },
              { icon: "🔒", title: "Verified Listings", desc: "Every property legally vetted" },
              { icon: "📊", title: "Market Intel", desc: "Data-driven investment advice" },
            ].map(f => (
              <div key={f.title} className="glass card-hover" style={{ padding: 24, borderRadius: 12, border: "1px solid rgba(201,168,76,0.1)" }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
                <div style={{ fontWeight: 600, fontSize: 15, color: "#f0ebe0", marginBottom: 6 }}>{f.title}</div>
                <div style={{ fontSize: 13, color: "#6b6455", lineHeight: 1.5 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="section" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <p style={{ fontSize: 12, letterSpacing: "0.2em", color: "#c9a84c", textTransform: "uppercase", marginBottom: 12 }}>Client Stories</p>
          <h2 className="serif" style={{ fontSize: "clamp(34px,4vw,52px)", fontWeight: 300, color: "#a68e3c" }}>What Our Clients Say</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 28 }}>
          {[
            { quote: "Bangalore North Real Estate found us our dream penthouse in 3 weeks. Their market knowledge is unparalleled.", name: "Riya Sharma", city: "Mumbai", stars: 5 },
            { quote: "Professional, transparent, and incredibly efficient. Best real estate experience we've ever had.", name: "Arjun Mehta", city: "Bangalore", stars: 5 },
            { quote: "The consultation process was thorough and they negotiated a price 12% below asking. Brilliant.", name: "Priya Nair", city: "Hyderabad", stars: 5 },
          ].map(t => (
            <div
              key={t.name}
              className="glass card-hover"
              style={{ padding: 32, borderRadius: 16, border: "1px solid rgba(201,168,76,0.1)" }}
            >
              <div style={{ color: "#c9a84c", fontSize: 20, marginBottom: 16 }}>{"★".repeat(t.stars)}</div>
              <p
                style={{
                  color: "#000000",
                  lineHeight: 1.7,
                  fontSize: 15,
                  marginBottom: 24,
                  fontStyle: "italic",
                  fontWeight: 700,
                }}
              >
                "{t.quote}"
              </p>
              <div style={{ fontWeight: 600, color: "#f0ebe0", fontSize: 14 }}>{t.name}</div>
              <div style={{ fontSize: 12, color: "#6b6455", marginTop: 2 }}>{t.city}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PropertiesPage({ navigate, filtered, filter, setFilter }) {
  return (
    <div style={{ paddingTop: 100, minHeight: "100vh" }}>
      <div className="section-narrow" style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ marginBottom: 56, textAlign: "center" }}>
          <p style={{ fontSize: 12, letterSpacing: "0.2em", color: "#c9a84c", textTransform: "uppercase", marginBottom: 12 }}>Browse All</p>
          <h1 className="serif" style={{ fontSize: "clamp(40px,6vw,70px)", fontWeight: 300, color: "#f0ebe0" }}>
            Our <em style={{ color: "#c9a84c" }}>Properties</em>
          </h1>
          <div className="divider" style={{ margin: "20px auto" }} />
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48, justifyContent: "center" }}>
          {["All","Apartment","Villa","Office","Plot"].map(t => (
            <button key={t} className={`type-chip ${filter === t ? "active" : ""}`} onClick={() => setFilter(t)}>{t}</button>
          ))}
        </div>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0", color: "#6b6455" }}>No properties found for this filter.</div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 28 }}>
            {filtered.map((p, i) => <PropertyCard key={p.id} prop={p} navigate={navigate} delay={i * 80} />)}
          </div>
        )}
      </div>
    </div>
  );
}

function PropertyCard({ prop, navigate, delay = 0 }) {
  return (
    <div className="card-hover" onClick={() => navigate("detail", prop)} style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(201,168,76,0.12)",
      borderRadius: 16, overflow: "hidden", cursor: "pointer",
      animation: `fadeUp 0.6s ${delay}ms ease both`
    }}>
      <div style={{ position: "relative", height: 240, overflow: "hidden" }}>
        <img src={prop.image} alt={prop.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
          onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
          onMouseLeave={e => e.target.style.transform = "scale(1)"} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,15,0.6) 0%, transparent 50%)" }} />
        {prop.tag && <div className="tag-badge" style={{ position: "absolute", top: 16, left: 16 }}>{prop.tag}</div>}
        <div style={{ position: "absolute", top: 16, right: 16, background: "rgba(10,10,15,0.8)", border: "1px solid rgba(201,168,76,0.3)", padding: "4px 12px", borderRadius: 20, fontSize: 12, color: "#c9a84c", backdropFilter: "blur(8px)" }}>
          {prop.type}
        </div>
      </div>
      <div style={{ padding: "24px 24px 28px" }}>
        <h3 className="serif" style={{ fontSize: 22, fontWeight: 500, color: "#a68e3c", marginBottom: 6 }}>{prop.title}</h3>
        <p style={{ fontSize: 13, color: "#6b6455", marginBottom: 8 }}>📍 {prop.location}</p>
        {prop.description && (
          <p style={{ fontSize: 13, color: "#9d9080", marginBottom: 16 }}>
            {prop.description}
          </p>
        )}
        <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
          {prop.beds > 0 && <span style={{ fontSize: 13, color: "#9d9080" }}>🛏 {prop.beds} Beds</span>}
          {prop.baths > 0 && <span style={{ fontSize: 13, color: "#9d9080" }}>🚿 {prop.baths} Baths</span>}
          <span style={{ fontSize: 13, color: "#9d9080" }}>📐 {prop.area} sq.ft</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div className="serif" style={{ fontSize: 26, fontWeight: 600, color: "#c9a84c" }}>{prop.price}</div>
          <span style={{ fontSize: 13, color: "#c9a84c", fontWeight: 500 }}>View Details →</span>
        </div>
      </div>
    </div>
  );
}

function DetailPage({ prop, navigate, consultName, setConsultName, consultPhone, setConsultPhone, consultEmail, setConsultEmail, consultMsg, setConsultMsg, submitted, setSubmitted }) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Prefer multiple images when available; fall back to single image.
  const galleryImages =
    Array.isArray(prop.images) && prop.images.length > 0 ? prop.images : [prop.image];

  const handleSubmit = () => {
    if (!consultName || !consultPhone) return;
    setSubmitted(true);
  };

  const openGallery = (index = 0) => {
    setActiveImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const showNext = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <div style={{ paddingTop: 90, minHeight: "100vh" }}>
      <div className="section-narrow" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <button onClick={() => navigate("properties")} style={{ background: "none", border: "none", color: "#9d9080", cursor: "pointer", fontSize: 14, marginBottom: 40, display: "flex", alignItems: "center", gap: 8 }}>
          ← Back to Properties
        </button>
        <div className="detail-grid" style={{ display: "grid", gridTemplateColumns: "1fr 400px", alignItems: "start" }}>
          <div>
            <div
              style={{ borderRadius: 20, overflow: "hidden", marginBottom: 28, height: 420, cursor: "pointer", position: "relative" }}
              onClick={() => openGallery(0)}
            >
              <img src={prop.image} alt={prop.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.35), transparent 40%)",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  padding: 16,
                  pointerEvents: "none",
                }}
              >
                <div
                  style={{
                    padding: "6px 12px",
                    borderRadius: 999,
                    background: "rgba(0,0,0,0.65)",
                    color: "#f9fafb",
                    fontSize: 12,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span style={{ fontSize: 14 }}>🔍</span>
                  <span>View full screen</span>
                </div>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 40 }}>
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  style={{
                    borderRadius: 10,
                    overflow: "hidden",
                    height: 100,
                    opacity: i === activeImageIndex ? 1 : 0.7,
                    border: i === activeImageIndex ? "2px solid #c9a84c" : "none",
                    cursor: "pointer",
                  }}
                  onClick={() => openGallery(i)}
                >
                  <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
              {prop.tag && <div className="tag-badge">{prop.tag}</div>}
              <div style={{ padding: "3px 12px", borderRadius: 20, border: "1px solid rgba(201,168,76,0.3)", fontSize: 12, color: "#c9a84c" }}>{prop.type}</div>
            </div>
            <h1
              className="serif"
              style={{
                fontSize: "clamp(32px,5vw,52px)",
                fontWeight: 700,
                color: "#c9a84c",
                marginBottom: 8,
              }}
            >
              {prop.title}
            </h1>
            <p style={{ color: "#000000", fontSize: 15, marginBottom: 24, fontWeight: 700 }}>
              📍 {prop.location}
            </p>
            <div className="serif" style={{ fontSize: 38, color: "#c9a84c", fontWeight: 600, marginBottom: 32 }}>{prop.price}</div>
            <div style={{ display: "flex", gap: 28, marginBottom: 36, padding: "24px 0", borderTop: "1px solid rgba(201,168,76,0.1)", borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
              {prop.beds > 0 && (
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 22, marginBottom: 4 }}>🛏</div>
                  <div style={{ fontSize: 20, fontWeight: 700, color: "#000000" }}>{prop.beds}</div>
                  <div style={{ fontSize: 12, color: "#000000", fontWeight: 700 }}>Bedrooms</div>
                </div>
              )}
              {prop.baths > 0 && (
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 22, marginBottom: 4 }}>🚿</div>
                  <div style={{ fontSize: 20, fontWeight: 700, color: "#000000" }}>{prop.baths}</div>
                  <div style={{ fontSize: 12, color: "#000000", fontWeight: 700 }}>Bathrooms</div>
                </div>
              )}
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 22, marginBottom: 4 }}>📐</div>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#000000" }}>{prop.area}</div>
                <div style={{ fontSize: 12, color: "#000000", fontWeight: 700 }}>sq. ft.</div>
              </div>
            </div>
            {prop.description && (
              <>
                <h3 className="serif" style={{ fontSize: 22, color: "#000000", marginBottom: 12, fontWeight: 700 }}>
                  Property Overview
                </h3>
                <p style={{ color: "#000000", fontSize: 15, lineHeight: 1.7, marginBottom: 32, fontWeight: 700 }}>
                  {prop.description}
                </p>
              </>
            )}
            <h3 className="serif" style={{ fontSize: 22, color: "#000000", marginBottom: 16, fontWeight: 700 }}>
              Amenities
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 40 }}>
              {amenities.map(a => (
                <span
                  key={a}
                  style={{
                    padding: "6px 16px",
                    borderRadius: 20,
                    border: "1px solid rgba(201,168,76,0.2)",
                    fontSize: 13,
                    color: "#000000",
                    fontWeight: 700,
                    background: "rgba(201,168,76,0.04)",
                  }}
                >
                  {a}
                </span>
              ))}
            </div>
            <div style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: 16, padding: 24 }}>
              <div style={{ fontSize: 14, color: "#9d9080", marginBottom: 8 }}>📍 Location on Map</div>
              <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(201,168,76,0.2)" }}>
                <iframe
                  title="Property location map"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(prop.location)}&output=embed`}
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="detail-sidebar">
            <div className="glass" style={{ borderRadius: 20, padding: 32, border: "1px solid rgba(201,168,76,0.2)" }}>
              {!submitted ? (
                <>
                  <h3 className="serif" style={{ fontSize: 24, color: "#f0ebe0", marginBottom: 6 }}>Book a Consultation</h3>
                  <p style={{ fontSize: 13, color: "#6b6455", marginBottom: 28 }}>Our expert will contact you within 2 hours</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <input className="input-field" placeholder="Your Full Name *" value={consultName} onChange={e => setConsultName(e.target.value)} />
                    <input className="input-field" placeholder="Phone Number *" value={consultPhone} onChange={e => setConsultPhone(e.target.value)} />
                    <input className="input-field" placeholder="Email Address" value={consultEmail} onChange={e => setConsultEmail(e.target.value)} />
                    <textarea className="input-field" placeholder="Your message or requirements..." rows={4} value={consultMsg} onChange={e => setConsultMsg(e.target.value)} style={{ resize: "none" }} />
                    <button className="btn-gold" style={{ padding: "14px", borderRadius: 10, fontSize: 15, width: "100%" }} onClick={handleSubmit}>
                      Request Consultation
                    </button>
                  </div>
                </>
              ) : (
                <div style={{ textAlign: "center", padding: "20px 0" }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                  <h3 className="serif" style={{ fontSize: 24, color: "#c9a84c", marginBottom: 12 }}>Request Sent!</h3>
                  <p style={{ color: "#9d9080", fontSize: 14, lineHeight: 1.6 }}>Thank you {consultName}! Our consultant will reach out within 2 hours.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {isGalleryOpen && (
        <div
          onClick={closeGallery}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.9)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "80vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={galleryImages[activeImageIndex]}
              alt={prop.title}
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                borderRadius: 16,
                boxShadow: "0 25px 80px rgba(0,0,0,0.6)",
              }}
            />
            {galleryImages.length > 1 && (
              <>
                <button
                  onClick={showPrev}
                  style={{
                    position: "absolute",
                    left: -40,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    border: "1px solid rgba(249,250,251,0.3)",
                    background: "rgba(15,23,42,0.8)",
                    color: "#f9fafb",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                  }}
                >
                  ‹
                </button>
                <button
                  onClick={showNext}
                  style={{
                    position: "absolute",
                    right: -40,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    border: "1px solid rgba(249,250,251,0.3)",
                    background: "rgba(15,23,42,0.8)",
                    color: "#f9fafb",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                  }}
                >
                  ›
                </button>
              </>
            )}
            <button
              onClick={closeGallery}
              style={{
                position: "absolute",
                top: -40,
                right: 0,
                background: "rgba(15,23,42,0.9)",
                border: "1px solid rgba(249,250,251,0.25)",
                borderRadius: 999,
                padding: "6px 14px",
                color: "#f9fafb",
                fontSize: 13,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span style={{ fontSize: 16 }}>✕</span>
              <span>Close</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [done, setDone] = useState(false);
  return (
    <div style={{ paddingTop: 100, minHeight: "100vh" }}>
      <div className="section-narrow" style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <p style={{ fontSize: 12, letterSpacing: "0.2em", color: "#c9a84c", textTransform: "uppercase", marginBottom: 12 }}>Get In Touch</p>
          <h1 className="serif" style={{ fontSize: "clamp(40px,6vw,68px)", fontWeight: 300, color: "#f0ebe0" }}>
            Let's <em style={{ color: "#c9a84c" }}>Talk</em>
          </h1>
          <div className="divider" style={{ margin: "20px auto" }} />
        </div>
        <div className="two-col-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
          <div>
            <h2 className="serif" style={{ fontSize: 28, color: "#c9a84c", fontWeight: 600, marginBottom: 24 }}>Our Office</h2>
            <div style={{ display: "flex", gap: 16, marginBottom: 28, alignItems: "center" }}>
              <span style={{ fontSize: 24 }}>📍</span>
              <div>
                <div style={{ fontSize: 12, color: "#6b6455", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>Address</div>
                <div style={{ color: "#c8bfaa", fontSize: 15 }}>Bangalore North Real Estate Office</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 16, marginBottom: 28, alignItems: "center" }}>
              <span style={{ fontSize: 24 }}>📞</span>
              <div>
                <div style={{ fontSize: 12, color: "#6b6455", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>Phone</div>
                <div style={{ color: "#c8bfaa", fontSize: 15 }}>+91 91132 03639</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8, marginBottom: 28, alignItems: "center", overflow: "hidden", width: "100%" }}>
              <span style={{ 
                fontSize: 10, 
                color: "#c8bfaa", 
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "100%",
                display: "block"
              }}>✉️ BangaloreNorthRealestates@gmail.com</span>
            </div>
            <div style={{ display: "flex", gap: 16, marginBottom: 28, alignItems: "center" }}>
              <span style={{ fontSize: 24 }}>🕒</span>
              <div>
                <div style={{ fontSize: 12, color: "#6b6455", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>Hours</div>
                <div style={{ color: "#c8bfaa", fontSize: 15 }}>Mon–Sat: 10AM – 7PM</div>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.795585715595!2d77.5978028758609!3d12.907287988165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14f5c5a6d5d1%3A0x1234567890abcdef!2sBangalore%20North%20Real%20Estate!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: 16 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="glass" style={{ borderRadius: 20, padding: 36, border: "1px solid rgba(201,168,76,0.2)" }}>
            {!done ? (
              <>
                <h3 className="serif" style={{ fontSize: 24, color: "#c9a84c", fontWeight: 600, marginBottom: 24 }}>Send an Inquiry</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <input className="input-field" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} />
                  <input className="input-field" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
                  <input className="input-field" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                  <textarea className="input-field" placeholder="Your message..." rows={5} value={msg} onChange={e => setMsg(e.target.value)} style={{ resize: "none", color: "#000000", fontWeight: 600 }} />
                  <button className="btn-gold" style={{ padding: "14px", borderRadius: 10, fontSize: 15 }} onClick={() => name && phone && setDone(true)}>
                    Send Message →
                  </button>
                </div>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 56, marginBottom: 20 }}>🎉</div>
                <h3 className="serif" style={{ fontSize: 26, color: "#c9a84c", marginBottom: 12 }}>Message Sent!</h3>
                <p style={{ color: "#9d9080", lineHeight: 1.6 }}>We'll get back to you shortly, {name}!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminPage({ adminLoggedIn, setAdminLoggedIn, adminPassword, setAdminPassword, adminError, setAdminError, showAddForm, setShowAddForm, adminProps, setAdminProps }) {
  const [form, setForm] = useState({
    title: "",
    location: "",
    price: "",
    type: "Apartment",
    beds: "",
    baths: "",
    area: "",
    image: "",
    tag: "",
    description: "",
  });
  const login = () => {
    if (adminPassword === "admin123") { setAdminLoggedIn(true); setAdminError(""); }
    else setAdminError("Incorrect password. Try 'admin123'");
  };
  const addProp = () => {
    if (!form.title || !form.price) return;
    const defaultImage = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80";

    const rawImages = (form.image || "")
      .split(",")
      .map((url) => url.trim())
      .filter(Boolean);

    const images = rawImages.length > 0 ? rawImages : [defaultImage];

    const newProp = {
      ...form,
      id: Date.now(),
      beds: Number(form.beds),
      baths: Number(form.baths),
      image: images[0],
      images,
    };

    setAdminProps([...adminProps, newProp]);
    setForm({
      title: "",
      location: "",
      price: "",
      type: "Apartment",
      beds: "",
      baths: "",
      area: "",
      image: "",
      tag: "",
      description: "",
    });
    setShowAddForm(false);
  };
  const deleteProp = (id) => setAdminProps(adminProps.filter(p => p.id !== id));
  if (!adminLoggedIn) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 20px 40px" }}>
      <div className="glass" style={{ padding: "48px 40px", borderRadius: 20, border: "1px solid rgba(201,168,76,0.2)", width: "100%", maxWidth: 400, textAlign: "center" }}>
        <div style={{ fontSize: 48, marginBottom: 20 }}>🔐</div>
        <h2 className="serif" style={{ fontSize: 32, color: "#f0ebe0", marginBottom: 8 }}>Admin Panel</h2>
        <p style={{ color: "#6b6455", fontSize: 14, marginBottom: 32 }}>Enter password to continue</p>
        <input className="input-field" type="password" placeholder="Password" value={adminPassword} onChange={e => setAdminPassword(e.target.value)}
          onKeyDown={e => e.key === "Enter" && login()} style={{ marginBottom: 14 }} />
        {adminError && <p style={{ color: "#e07070", fontSize: 13, marginBottom: 12 }}>{adminError}</p>}
        <button className="btn-gold" style={{ width: "100%", padding: 14, borderRadius: 10, fontSize: 15 }} onClick={login}>Login →</button>
        <p style={{ fontSize: 12, color: "#3d3830", marginTop: 16 }}>Hint: admin123</p>
      </div>
    </div>
  );
  return (
    <div style={{ paddingTop: 100, minHeight: "100vh" }}>
      <div className="section-narrow" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="admin-header" style={{ marginBottom: 48 }}>
          <div>
            <h1 className="serif" style={{ fontSize: 42, color: "#f0ebe0", fontWeight: 400 }}>Admin <em style={{ color: "#c9a84c" }}>Dashboard</em></h1>
            <p style={{ color: "#6b6455", marginTop: 6 }}>{adminProps.length} properties listed</p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <button className="btn-gold" style={{ padding: "12px 24px", borderRadius: 8, fontSize: 14 }} onClick={() => setShowAddForm(!showAddForm)}>
              {showAddForm ? "✕ Cancel" : "+ Add Property"}
            </button>
            <button className="btn-outline" style={{ padding: "12px 20px", borderRadius: 8, fontFamily: "'DM Sans',sans-serif", fontSize: 14 }} onClick={() => setAdminLoggedIn(false)}>
              Logout
            </button>
          </div>
        </div>
        {showAddForm && (
          <div className="glass" style={{ borderRadius: 16, padding: 32, border: "1px solid rgba(201,168,76,0.25)", marginBottom: 40 }}>
            <h3 className="serif" style={{ fontSize: 22, color: "#f0ebe0", marginBottom: 24 }}>Add New Property</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <input className="input-field" placeholder="Title *" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
              <input className="input-field" placeholder="Location / City" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} />
              <input className="input-field" placeholder="Price (e.g. ₹2.5 Cr) *" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} />
              <select className="input-field" value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
                {["Apartment","Villa","Office","Plot"].map(t => <option key={t}>{t}</option>)}
              </select>
              <input className="input-field" placeholder="Bedrooms" type="number" value={form.beds} onChange={e => setForm({ ...form, beds: e.target.value })} />
              <input className="input-field" placeholder="Bathrooms" type="number" value={form.baths} onChange={e => setForm({ ...form, baths: e.target.value })} />
              <input className="input-field" placeholder="Area (sq.ft)" value={form.area} onChange={e => setForm({ ...form, area: e.target.value })} />
              <input className="input-field" placeholder="Tag (Optional: Featured, Hot...)" value={form.tag} onChange={e => setForm({ ...form, tag: e.target.value })} />
              <textarea
                className="input-field"
                placeholder="Short description (highlights, neighborhood, etc.)"
                rows={3}
                value={form.description}
                onChange={e => setForm({ ...form, description: e.target.value })}
                style={{ gridColumn: "1 / -1", resize: "vertical" }}
              />
              <input className="input-field" placeholder="Image URL (Unsplash link)" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} style={{ gridColumn: "1 / -1" }} />
            </div>
            <button className="btn-gold" style={{ marginTop: 20, padding: "14px 32px", borderRadius: 10, fontSize: 14 }} onClick={addProp}>
              + Add Property
            </button>
          </div>
        )}
        <div style={{ border: "1px solid rgba(201,168,76,0.12)", borderRadius: 16, overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "rgba(201,168,76,0.08)", borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
                {["Property","Location","Type","Price","Status","Actions"].map(h => (
                  <th key={h} style={{ padding: "14px 20px", textAlign: "left", fontSize: 12, letterSpacing: "0.1em", color: "#c9a84c", textTransform: "uppercase", fontWeight: 600 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {adminProps.map(p => (
                <tr key={p.id} className="admin-row" style={{ borderBottom: "1px solid rgba(201,168,76,0.07)", transition: "background 0.2s" }}>
                  <td style={{ padding: "16px 20px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <img src={p.image} style={{ width: 44, height: 44, borderRadius: 8, objectFit: "cover" }} alt="" />
                      <span style={{ color: "#000000", fontWeight: 700, fontSize: 14 }}>{p.title}</span>
                    </div>
                  </td>
                  <td style={{ padding: "16px 20px", color: "#9d9080", fontSize: 13 }}>{p.location}</td>
                  <td style={{ padding: "16px 20px" }}>
                    <span style={{ padding: "3px 10px", borderRadius: 20, border: "1px solid rgba(201,168,76,0.25)", fontSize: 12, color: "#c9a84c" }}>{p.type}</span>
                  </td>
                  <td style={{ padding: "16px 20px" }}><span className="serif" style={{ color: "#c9a84c", fontSize: 16, fontWeight: 600 }}>{p.price}</span></td>
                  <td style={{ padding: "16px 20px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12, color: "#4ade80" }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />Active
                    </span>
                  </td>
                  <td style={{ padding: "16px 20px" }}>
                    <button onClick={() => deleteProp(p.id)} style={{ background: "rgba(220,60,60,0.1)", border: "1px solid rgba(220,60,60,0.3)", color: "#e07070", padding: "6px 14px", borderRadius: 6, cursor: "pointer", fontSize: 12, transition: "all 0.2s" }}
                      onMouseEnter={e => e.target.style.background = "rgba(220,60,60,0.2)"}
                      onMouseLeave={e => e.target.style.background = "rgba(220,60,60,0.1)"}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Footer({ navigate }) {
  return (
    <footer style={{ background: "rgba(201,168,76,0.03)", borderTop: "1px solid rgba(201,168,76,0.1)", padding: "72px 32px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="footer-grid" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))", marginBottom: 32 }}>
          {[
            { title: "Contact", links: [["📞 +91 91132 03639",null],["✉️ BangaloreNorthRealestates@gmail.com",null],["📍 Bangalore North",null]] },
            { title: "Follow Us", links: [
              ["YouTube","https://youtube.com/@bangalorenorthrealestate?si=RfoxprZD5p7KGWN1"],
              ["Instagram","https://instagram.com/bangalorenorthrealestate?igshid=NGVhN2U2NjQ0Yg=="]
            ] },
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ fontSize: 12, letterSpacing: "0.15em", color: "#c9a84c", textTransform: "uppercase", marginBottom: 20, fontWeight: 600 }}>{col.title}</h4>
              <ul style={{ listStyle: "none" }}>
                {col.links.map(([label, pg]) => (
                  <li key={label} style={{ marginBottom: 10 }}>
                    {pg ? (
                      pg.startsWith('http') ? (
                        <a
                          href={pg}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontSize: 14, color: "#6b6455", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}
                        >
                          {label === "YouTube" && (
                            <img
                              src={youtubeLogo}
                              alt="YouTube"
                              style={{ width: 20, height: 20, objectFit: "contain" }}
                            />
                          )}
                          {label === "Instagram" && (
                            <img
                              src={instagramLogo}
                              alt="Instagram"
                              style={{ width: 20, height: 20, objectFit: "contain" }}
                            />
                          )}
                          <span>{label}</span>
                        </a>
                      ) : (
                        <button className="nav-link" onClick={() => navigate(pg)} style={{ fontSize: 14, color: "#6b6455", padding: 0 }}>{label}</button>
                      )
                    ) : (
                      <span style={{ fontSize: 14, color: "#6b6455" }}>{label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(201,168,76,0.1)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 13, color: "#3d3830" }}>© 2025 Bangalore North Real Estate. All rights reserved.</p>
          <p style={{ fontSize: 13, color: "#3d3830" }}>Crafted with precision · Bangalore North, India</p>
        </div>
      </div>
    </footer>
  );
}
