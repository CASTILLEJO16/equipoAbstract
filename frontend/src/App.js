import { useState, useEffect } from "react";

const RESTAURANTS = {
  chino: {
    id: "chino",
    name: "皇朝",
    subtitle: "Huáng Cháo Imperial",
    tagline: "Tradición milenaria en cada bocado",
    country: "China",
    flag: "🇨🇳",
    heroImage: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=992&auto=format&fit=crop",
    // Deep red lacquer + gold + black ink aesthetic
    palette: {
      bg: "#0D0705",
      primary: "#C41E1E",
      secondary: "#D4A017",
      accent: "#FF6B35",
      text: "#F5E6D3",
      muted: "#8B7355",
      card: "#1A0F0A",
      border: "rgba(212,160,23,0.3)",
      gradient: "linear-gradient(135deg, #0D0705 0%, #1A0B08 50%, #0D0705 100%)",
      heroOverlay: "linear-gradient(to right, rgba(13,7,5,0.95) 40%, rgba(13,7,5,0.4) 100%)",
    },
    font: { display: "'Ma Shan Zheng', 'Noto Serif SC', serif", body: "'Cormorant Garamond', serif" },
    pattern: "radial-gradient(circle at 20% 50%, rgba(196,30,30,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(212,160,23,0.06) 0%, transparent 40%)",
    menu: [
      { type: "Plato Fuerte", name: "Chow Mein", desc: "Fideos wok salteados con verduras frescas y salsa de soja envejecida", img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=992&auto=format&fit=crop", icon: "🍜" },
      { type: "Bebida", name: "Té Jazmín", desc: "Flores de jazmín sobre hojas verdes de Anhui, infusión de 3 minutos", img: "https://images.unsplash.com/photo-1597318181302-0466233a784e?q=80&w=687&auto=format&fit=crop", icon: "🍵" },
      { type: "Postre", name: "Rollito Dulce con Nieve", desc: "Masa fina de arroz glutinoso, helado artesanal de lichee y sésamo negro", img: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?q=80&w=1374&auto=format&fit=crop", icon: "🍡" },
    ],
    decorElement: "⬡",
  },
  japones: {
    id: "japones",
    name: "侘寂",
    subtitle: "Wabi-Sabi Cuisine",
    tagline: "La belleza en la imperfección",
    country: "Japón",
    flag: "🇯🇵",
    heroImage: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=880&auto=format&fit=crop",
    palette: {
      bg: "#F5F0EA",
      primary: "#1A1A2E",
      secondary: "#C75B5B",
      accent: "#E8956D",
      text: "#2C2416",
      muted: "#7A6E65",
      card: "#FFFFFF",
      border: "rgba(199,91,91,0.2)",
      gradient: "linear-gradient(135deg, #F5F0EA 0%, #EDE5D8 100%)",
      heroOverlay: "linear-gradient(to right, rgba(245,240,234,0.96) 35%, rgba(245,240,234,0.2) 100%)",
    },
    font: { display: "'Shippori Mincho', 'Noto Serif JP', serif", body: "'DM Serif Display', serif" },
    pattern: "radial-gradient(ellipse at 70% 30%, rgba(199,91,91,0.06) 0%, transparent 60%)",
    menu: [
      { type: "Plato Fuerte", name: "Ramen", desc: "Caldo tonkotsu 18h, chashu de cerdo, nori, bambú y huevo ajitsuke", img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=880&auto=format&fit=crop", icon: "🍜" },
      { type: "Bebida", name: "Sake", desc: "Junmai Daiginjo de Niigata, notas florales y melocotón blanco", img: "https://images.unsplash.com/photo-1589961546603-d4281f3cfdfa?q=80&w=687&auto=format&fit=crop", icon: "🍶" },
      { type: "Postre", name: "Dango", desc: "Bolas de mochi sobre brocheta de bambú, glaseado mitarashi caramelizado", img: "https://images.unsplash.com/photo-1601317266542-4f4abae2cca4?q=80&w=1528&auto=format&fit=crop", icon: "🍡" },
    ],
    decorElement: "◯",
  },
  mexicano: {
    id: "mexicano",
    name: "La Milpa",
    subtitle: "Cocina de Raíz",
    tagline: "Patrimonio vivo de México",
    country: "México",
    flag: "🇲🇽",
    heroImage: "https://images.unsplash.com/photo-1707603571504-86c1ea50903e?q=80&w=687&auto=format&fit=crop",
    palette: {
      bg: "#1C0A00",
      primary: "#E8690A",
      secondary: "#2D8A4E",
      accent: "#F4C430",
      text: "#FFF3E0",
      muted: "#A0714F",
      card: "#261200",
      border: "rgba(232,105,10,0.3)",
      gradient: "linear-gradient(135deg, #1C0A00 0%, #2A1000 100%)",
      heroOverlay: "linear-gradient(to right, rgba(28,10,0,0.95) 40%, rgba(28,10,0,0.3) 100%)",
    },
    font: { display: "'Abril Fatface', 'Playfair Display', serif", body: "'Lora', serif" },
    pattern: "radial-gradient(circle at 10% 90%, rgba(232,105,10,0.1) 0%, transparent 50%), radial-gradient(circle at 90% 10%, rgba(45,138,78,0.08) 0%, transparent 40%)",
    menu: [
      { type: "Plato Fuerte", name: "Tacos de Carne Asada", desc: "Tortilla de maíz azul, arrachera norteña, cilantro, cebolla y salsa taquera", img: "https://images.unsplash.com/photo-1707603571504-86c1ea50903e?q=80&w=687&auto=format&fit=crop", icon: "🌮" },
      { type: "Bebida", name: "Agua de Jamaica", desc: "Flor de jamaica seca de Oaxaca, piloncillo, limón y canela", img: "https://images.unsplash.com/photo-1730190981086-5e6dea8a8b24?q=80&w=687&auto=format&fit=crop", icon: "🌺" },
      { type: "Postre", name: "Pastel de Tres Leches", desc: "Bizcocho empapado en leche condensada, evaporada y crema, merengue tostado", img: "https://images.unsplash.com/photo-1673974798330-23e8f4c9ae05?q=80&w=687&auto=format&fit=crop", icon: "🍰" },
    ],
    decorElement: "✦",
  },
  italiano: {
    id: "italiano",
    name: "Osteria Autentica",
    subtitle: "Dal 1952 · Napoli",
    tagline: "Donde cada receta tiene memoria",
    country: "Italia",
    flag: "🇮🇹",
    heroImage: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1469&auto=format&fit=crop",
    palette: {
      bg: "#FAFAF5",
      primary: "#1B3A2D",
      secondary: "#C5382A",
      accent: "#E8A838",
      text: "#1A1710",
      muted: "#6B6554",
      card: "#F2EFE4",
      border: "rgba(197,56,42,0.2)",
      gradient: "linear-gradient(135deg, #FAFAF5 0%, #F0EDE0 100%)",
      heroOverlay: "linear-gradient(to right, rgba(250,250,245,0.97) 38%, rgba(250,250,245,0.15) 100%)",
    },
    font: { display: "'Playfair Display', serif", body: "'Crimson Pro', serif" },
    pattern: "radial-gradient(ellipse at 80% 80%, rgba(197,56,42,0.06) 0%, transparent 50%)",
    menu: [
      { type: "Plato Fuerte", name: "Pizza Margherita", desc: "Masa madre 48h, tomate San Marzano DOP, fior di latte, albahaca fresca, EVOO", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1469&auto=format&fit=crop", icon: "🍕" },
      { type: "Bebida", name: "Vino Tinto Chianti", desc: "Sangiovese 100%, Chianti Classico DOCG 2019, 14 meses barrica roble francés", img: "https://images.unsplash.com/photo-1594986138018-cb0b6c2609d2?q=80&w=687&auto=format&fit=crop", icon: "🍷" },
      { type: "Postre", name: "Tiramisú", desc: "Mascarpone Galbani, savoiardi, espresso Illy y cacao amargo Valrhona", img: "https://images.unsplash.com/photo-1639744211487-b27e3551b07c?q=80&w=735&auto=format&fit=crop", icon: "☕" },
    ],
    decorElement: "❧",
  },
  indio: {
    id: "indio",
    name: "Rasoi",
    subtitle: "रसोई — La Cocina Sagrada",
    tagline: "Especias que despiertan el alma",
    country: "India",
    flag: "🇮🇳",
    heroImage: "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?q=80&w=880&auto=format&fit=crop",
    palette: {
      bg: "#120A1E",
      primary: "#E87722",
      secondary: "#8B1A8B",
      accent: "#FFD700",
      text: "#FFF8F0",
      muted: "#9E7E6A",
      card: "#1E1030",
      border: "rgba(232,119,34,0.3)",
      gradient: "linear-gradient(135deg, #120A1E 0%, #1A0F2E 100%)",
      heroOverlay: "linear-gradient(to right, rgba(18,10,30,0.95) 40%, rgba(18,10,30,0.3) 100%)",
    },
    font: { display: "'Tiro Devanagari Sanskrit', 'Noto Serif Devanagari', serif", body: "'Spectral', serif" },
    pattern: "radial-gradient(circle at 50% 50%, rgba(232,119,34,0.08) 0%, transparent 60%), radial-gradient(circle at 80% 80%, rgba(139,26,139,0.08) 0%, transparent 40%)",
    menu: [
      { type: "Plato Fuerte", name: "Chicken Curry", desc: "Pollo en marinada de yogur, garam masala artesanal, ghee clarificado y naan", img: "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?q=80&w=880&auto=format&fit=crop", icon: "🍛" },
      { type: "Bebida", name: "Lassi de Mango", desc: "Yogur búfala, mango Alphonso de Maharashtra, cardamomo verde y agua de rosas", img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=687&auto=format&fit=crop", icon: "🥭" },
      { type: "Postre", name: "Gulab Jamun", desc: "Bolas de leche reducida, jarabe de rosas y azafrán de Cachemira", img: "https://images.unsplash.com/photo-1646578515903-67873a5398f9?q=80&w=1374&auto=format&fit=crop", icon: "🌹" },
    ],
    decorElement: "✿",
  },
};

const GoogleFontsLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Shippori+Mincho:wght@400;500;600;700&family=DM+Serif+Display:ital@0;1&family=Abril+Fatface&family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400&family=Crimson+Pro:ital,wght@0,300;0,400;1,300&family=Spectral:ital,wght@0,300;0,400;0,500;1,300&display=swap');
    
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    
    body { background: #0a0a0a; }
    
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideRight {
      from { transform: scaleX(0); }
      to { transform: scaleX(1); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 0.4; }
      50% { opacity: 1; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-12px) rotate(5deg); }
    }
    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    
    .animate-fade-up { animation: fadeUp 0.8s ease forwards; }
    .animate-fade-in { animation: fadeIn 0.6s ease forwards; }
    
    .restaurant-card {
      cursor: pointer;
      transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s ease;
      position: relative;
      overflow: hidden;
    }
    .restaurant-card:hover { transform: translateY(-8px) scale(1.01); }
    
    .menu-item-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .menu-item-card:hover { transform: translateY(-4px); }
    
    .shimmer-text {
      background: linear-gradient(90deg, currentColor 25%, rgba(255,255,255,0.8) 50%, currentColor 75%);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer 3s linear infinite;
    }
    
    .decor-float { animation: float 6s ease-in-out infinite; }
    
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: #111; }
    ::-webkit-scrollbar-thumb { background: #444; border-radius: 3px; }
  `}</style>
);

// ─── HOME PAGE ───────────────────────────────────────────────────────────────
function HomePage({ onSelect }) {
  const restaurants = Object.values(RESTAURANTS);
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #0A0A0F 0%, #080508 40%, #0A050A 100%)",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'Cormorant Garamond', serif",
    }}>
      {/* Atmospheric background blobs */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: "-20%", left: "-10%", width: "60vw", height: "60vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,26,139,0.04) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "-10%", right: "-5%", width: "50vw", height: "50vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,30,30,0.05) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translateX(-50%)", width: "40vw", height: "40vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(212,160,23,0.03) 0%, transparent 70%)" }} />
      </div>

      {/* Header */}
      <header style={{ position: "relative", zIndex: 10, padding: "3rem 4rem 2rem", display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <div style={{ animation: "fadeUp 0.8s ease forwards" }}>
          <div style={{ fontSize: "0.85rem", letterSpacing: "0.3em", color: "rgba(255,255,255,0.7)", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            Abstract Factory · Design Pattern
          </div>
          <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)", fontWeight: 300, color: "#FFFFFF", letterSpacing: "-0.02em", lineHeight: 1 }}>
            Maison des<br />
            <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.8)" }}>Saveurs</em>
          </h1>
        </div>
        <div style={{ textAlign: "right", animation: "fadeIn 1.2s ease forwards", opacity: 0, animationFillMode: "forwards", animationDelay: "0.3s" }}>
          <div style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "rgba(255,255,255,0.7)", textTransform: "uppercase" }}>5 Cocinas del Mundo</div>
          <div style={{ fontSize: "0.9rem", letterSpacing: "0.2em", color: "rgba(255,255,255,0.7)", textTransform: "uppercase", marginTop: "0.2rem" }}>Alta Gastronomía</div>
        </div>
      </header>

      {/* Divider line */}
      <div style={{ margin: "0 4rem", height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)", animation: "fadeIn 1s ease forwards", opacity: 0, animationDelay: "0.4s", animationFillMode: "forwards" }} />

      {/* Section title */}
      <div style={{ padding: "3rem 4rem 1.5rem", position: "relative", zIndex: 10 }}>
        <div style={{ animation: "fadeUp 0.8s ease 0.2s forwards", opacity: 0, animationFillMode: "forwards" }}>
          <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)", color: "rgba(255,255,255,0.75)", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>
            Selecciona tu destino culinario
          </p>
        </div>
      </div>

      {/* Restaurant Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "1.5px",
        padding: "0 4rem 4rem",
        position: "relative",
        zIndex: 10,
        maxWidth: "1600px",
        margin: "0 auto",
      }}>
        {restaurants.map((r, i) => (
          <RestaurantCard
            key={r.id}
            restaurant={r}
            index={i}
            isHovered={hovered === r.id}
            onHover={setHovered}
            onSelect={onSelect}
          />
        ))}
      </div>

      {/* Footer note */}
      <div style={{ textAlign: "center", paddingBottom: "3rem", position: "relative", zIndex: 10 }}>
        <p style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "rgba(255,255,255,0.45)", textTransform: "uppercase" }}>
          Patrón Abstract Factory · JavaScript ES6+ · React 18
        </p>
      </div>
    </div>
  );
}

function RestaurantCard({ restaurant: r, index, isHovered, onHover, onSelect }) {
  return (
    <div
      className="restaurant-card"
      onClick={() => onSelect(r.id)}
      onMouseEnter={() => onHover(r.id)}
      onMouseLeave={() => onHover(null)}
      style={{
        aspectRatio: "3/4",
        position: "relative",
        overflow: "hidden",
        background: r.palette.bg,
        animation: `fadeUp 0.8s ease ${0.1 + index * 0.12}s forwards`,
        opacity: 0,
        animationFillMode: "forwards",
        boxShadow: isHovered ? `0 30px 80px -10px ${r.palette.primary}40` : "none",
      }}
    >
      {/* Background image */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url(${r.heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: isHovered ? "scale(1.08)" : "scale(1)",
        transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        filter: isHovered ? "brightness(0.5) saturate(1.2)" : "brightness(0.3) saturate(0.8)",
      }} />

      {/* Color overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(to top, ${r.palette.bg} 0%, ${r.palette.bg}CC 30%, transparent 70%)`,
        transition: "opacity 0.4s",
        opacity: isHovered ? 0.7 : 1,
      }} />

      {/* Flag + country pill */}
      <div style={{
        position: "absolute", top: "1.2rem", left: "1.2rem",
        display: "flex", alignItems: "center", gap: "0.5rem",
        background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)",
        borderRadius: "50px", padding: "0.4rem 0.9rem 0.4rem 0.5rem",
        border: `1px solid rgba(255,255,255,0.15)`,
      }}>
        <span style={{ fontSize: "2rem", lineHeight: 1 }}>{r.flag}</span>
        <span style={{
          fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.12em",
          textTransform: "uppercase", color: "#FFFFFF",
          fontFamily: "'Cormorant Garamond', serif",
        }}>{r.country}</span>
      </div>

      {/* Content */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "2rem 1.8rem",
      }}>
        {/* Restaurant name */}
        <h2 style={{
          fontFamily: r.font.display,
          fontSize: "clamp(2rem, 2.8vw, 3.2rem)",
          fontWeight: 400,
          color: "#FFFFFF",
          lineHeight: 1,
          marginBottom: "0.5rem",
          textShadow: "0 2px 20px rgba(0,0,0,0.8)",
        }}>{r.name}</h2>

        {/* Subtitle */}
        <p style={{
          fontFamily: r.font.body,
          fontSize: "1rem", letterSpacing: "0.05em",
          color: "rgba(255,255,255,0.9)", marginBottom: "1rem",
          fontStyle: "italic",
          textShadow: "0 1px 8px rgba(0,0,0,0.7)",
        }}>{r.subtitle}</p>

        {/* Divider */}
        <div style={{
          height: "2px",
          background: `linear-gradient(90deg, ${r.palette.secondary}, transparent)`,
          marginBottom: "1rem",
          transformOrigin: "left",
          transform: isHovered ? "scaleX(1)" : "scaleX(0.3)",
          transition: "transform 0.5s ease",
        }} />

        {/* Tagline */}
        <p style={{
          fontFamily: r.font.body,
          fontSize: "1rem",
          color: "rgba(255,255,255,0.88)",
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          marginBottom: "1.2rem",
          fontStyle: "italic",
          textShadow: "0 1px 8px rgba(0,0,0,0.6)",
        }}>{r.tagline}</p>

        {/* CTA */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.6rem",
          fontSize: "0.95rem", letterSpacing: "0.2em", textTransform: "uppercase",
          color: "#FFFFFF",
          fontFamily: "'Cormorant Garamond', serif", fontWeight: 700,
          background: `${r.palette.primary}CC`,
          padding: "0.6rem 1.2rem",
          borderRadius: "2px",
          border: `1px solid ${r.palette.secondary}80`,
          opacity: isHovered ? 1 : 0.85,
          transition: "opacity 0.3s, transform 0.3s",
          textShadow: "0 1px 4px rgba(0,0,0,0.5)",
        }}>
          <span>🍽️ Ver menú</span>
          <span style={{ transform: isHovered ? "translateX(4px)" : "translateX(0)", transition: "transform 0.3s" }}>→</span>
        </div>
      </div>
    </div>
  );
}

// ─── MENU PAGE ────────────────────────────────────────────────────────────────
function MenuPage({ restaurantId, onBack }) {
  const r = RESTAURANTS[restaurantId];
  const [activeItem, setActiveItem] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: r.palette.gradient,
      fontFamily: r.font.body,
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Pattern background */}
      <div style={{ position: "fixed", inset: 0, background: r.palette.pattern, pointerEvents: "none", zIndex: 0 }} />

      {/* HERO SECTION */}
      <div style={{
        position: "relative", height: "85vh", overflow: "hidden", zIndex: 1,
      }}>
        {/* Hero image */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${r.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          transform: "scale(1.05)",
          filter: "saturate(1.1) brightness(0.75)",
          animation: loaded ? "none" : undefined,
          transition: "transform 8s ease",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: r.palette.heroOverlay,
        }} />

        {/* Back button */}
        <button
          onClick={onBack}
          style={{
            position: "absolute", top: "2rem", left: "2.5rem", zIndex: 10,
            background: "rgba(0,0,0,0.55)", border: `2px solid rgba(255,255,255,0.4)`,
            color: "#FFFFFF", padding: "0.8rem 1.6rem",
            cursor: "pointer", fontFamily: r.font.body,
            fontSize: "1rem", letterSpacing: "0.15em", textTransform: "uppercase",
            backdropFilter: "blur(10px)",
            transition: "background 0.2s, border-color 0.2s",
            borderRadius: "3px",
            fontWeight: 600,
          }}
          onMouseEnter={e => { e.currentTarget.style.background = `${r.palette.primary}CC`; e.currentTarget.style.borderColor = r.palette.secondary; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(0,0,0,0.55)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; }}
        >← Restaurantes</button>

        {/* Hero content */}
        <div style={{
          position: "absolute", bottom: "10%", left: "5%",
          maxWidth: "600px",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.9s ease 0.2s",
        }}>
          {/* Country + flag */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "2.8rem" }}>{r.flag}</span>
            <div style={{ height: "2px", width: "60px", background: r.palette.secondary, opacity: 0.9 }} />
            <span style={{
              fontSize: "1rem", letterSpacing: "0.3em", textTransform: "uppercase",
              color: "#FFFFFF", fontFamily: "'Cormorant Garamond', serif", fontWeight: 700,
              textShadow: "0 2px 10px rgba(0,0,0,0.8)",
            }}>{r.country}</span>
          </div>

          {/* Name */}
          <h1 style={{
            fontFamily: r.font.display,
            fontSize: "clamp(3.5rem, 8vw, 6rem)",
            fontWeight: 400,
            color: r.palette.text,
            lineHeight: 0.9,
            marginBottom: "1rem",
            textShadow: `0 4px 40px rgba(0,0,0,0.5)`,
          }}>{r.name}</h1>

          <p style={{
            fontSize: "clamp(1.1rem, 1.8vw, 1.3rem)",
            color: "rgba(255,255,255,0.92)",
            fontStyle: "italic",
            letterSpacing: "0.05em",
            textShadow: "0 2px 15px rgba(0,0,0,0.7)",
          }}>{r.tagline}</p>
        </div>

        {/* Decorative corner element */}
        <div style={{
          position: "absolute", bottom: "8%", right: "5%",
          fontFamily: r.font.display,
          fontSize: "8rem", color: r.palette.secondary,
          opacity: 0.06, userSelect: "none", lineHeight: 1,
          animation: "float 8s ease-in-out infinite",
        }} className="decor-float">
          {r.decorElement}
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem",
          opacity: 0.4,
          animation: "pulse 2s ease infinite",
        }}>
          <span style={{ fontSize: "0.85rem", letterSpacing: "0.25em", color: "#FFFFFF", textTransform: "uppercase", fontWeight: 600 }}>Menú</span>
          <div style={{ width: "1px", height: "40px", background: `linear-gradient(to bottom, ${r.palette.text}, transparent)` }} />
        </div>
      </div>

      {/* MENU SECTION */}
      <div style={{
        position: "relative", zIndex: 2,
        padding: "5rem clamp(1.5rem, 5vw, 6rem)",
        maxWidth: "1400px", margin: "0 auto",
      }}>
        {/* Section header */}
        <div style={{
          display: "flex", alignItems: "center", gap: "2rem",
          marginBottom: "4rem",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease 0.5s",
        }}>
          <div>
            <p style={{ fontSize: "0.9rem", letterSpacing: "0.3em", textTransform: "uppercase", color: r.palette.secondary, marginBottom: "0.5rem", fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
              Menú Degustación
            </p>
            <h2 style={{ fontFamily: r.font.display, fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 400, color: r.palette.text }}>
              {r.subtitle}
            </h2>
          </div>
          <div style={{ flex: 1, height: "1px", background: `linear-gradient(to right, ${r.palette.border}, transparent)` }} />
          <div style={{ fontSize: "2rem", opacity: 0.4 }}>{r.decorElement}</div>
        </div>

        {/* Menu Items */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1px",
          background: r.palette.border,
          border: `1px solid ${r.palette.border}`,
        }}>
          {r.menu.map((item, i) => (
            <MenuItemCard
              key={item.name}
              item={item}
              restaurant={r}
              index={i}
              isActive={activeItem === i}
              onHover={setActiveItem}
              loaded={loaded}
            />
          ))}
        </div>

        {/* Bottom info */}
        <div style={{
          marginTop: "4rem",
          padding: "3rem",
          border: `1px solid ${r.palette.border}`,
          background: `${r.palette.card}80`,
          backdropFilter: "blur(10px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.8s ease 1s",
        }}>
          {[
            { label: "Patrón", value: "Abstract Factory" },
            { label: "Fábrica", value: `FabricaRestaurante${r.country}` },
            { label: "Familia", value: "Plato · Bebida · Postre" },
            { label: "Principio", value: "Open/Closed · DIP" },
          ].map(({ label, value }) => (
            <div key={label}>
              <div style={{ fontSize: "0.8rem", letterSpacing: "0.25em", textTransform: "uppercase", color: r.palette.secondary, marginBottom: "0.5rem", fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>{label}</div>
              <div style={{ fontSize: "1rem", color: r.palette.text, opacity: 0.9, fontFamily: r.font.body, fontStyle: "italic" }}>{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MenuItemCard({ item, restaurant: r, index, isActive, onHover, loaded }) {
  const typeLabels = { "Plato Fuerte": "01", "Bebida": "02", "Postre": "03" };

  return (
    <div
      className="menu-item-card"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      style={{
        background: r.palette.card,
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        opacity: loaded ? 1 : 0,
        transform: loaded ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.8s ease ${0.6 + index * 0.15}s, transform 0.8s ease ${0.6 + index * 0.15}s, box-shadow 0.3s ease`,
        boxShadow: isActive ? `inset 0 0 0 1px ${r.palette.primary}60` : "none",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
        <img
          src={item.img}
          alt={item.name}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            transform: isActive ? "scale(1.07)" : "scale(1)",
            transition: "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            filter: isActive ? "brightness(0.85) saturate(1.2)" : "brightness(0.9) saturate(1.0)",
          }}
        />
        {/* Gradient overlay on image */}
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(to top, ${r.palette.card} 0%, transparent 60%)`,
        }} />
        {/* Type badge */}
        <div style={{
          position: "absolute", top: "1rem", left: "1rem",
          background: `${r.palette.bg}DD`,
          backdropFilter: "blur(8px)",
          border: `1px solid ${r.palette.border}`,
          padding: "0.4rem 0.9rem",
          fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase",
          color: r.palette.secondary, fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 700,
        }}>{item.type}</div>
        {/* Number */}
        <div style={{
          position: "absolute", top: "1rem", right: "1rem",
          fontFamily: r.font.display, fontSize: "2rem",
          color: `${r.palette.text}15`, fontWeight: 700,
        }}>{typeLabels[item.type]}</div>
      </div>

      {/* Content */}
      <div style={{ padding: "1.8rem 2rem 2.2rem" }}>
        {/* Divider */}
        <div style={{
          height: "1px", marginBottom: "1.2rem",
          background: `linear-gradient(90deg, ${r.palette.primary}, transparent)`,
          transformOrigin: "left",
          transform: isActive ? "scaleX(1)" : "scaleX(0.4)",
          transition: "transform 0.5s ease",
        }} />

        <div style={{ display: "flex", alignItems: "flex-start", gap: "0.9rem", marginBottom: "0.9rem" }}>
          <span style={{ fontSize: "2.2rem", lineHeight: 1, marginTop: "0.1rem" }}>{item.icon}</span>
          <h3 style={{
            fontFamily: r.font.display,
            fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
            fontWeight: 400, color: r.palette.text,
            lineHeight: 1.1,
          }}>{item.name}</h3>
        </div>

        <p style={{
          fontSize: "1rem", lineHeight: 1.75,
          color: r.palette.text,
          opacity: 0.82,
          fontFamily: r.font.body,
          fontStyle: "italic",
        }}>{item.desc}</p>

        {/* Bottom accent */}
        <div style={{
          marginTop: "1.5rem",
          display: "flex", alignItems: "center", gap: "0.6rem",
          opacity: isActive ? 1 : 0,
          transform: isActive ? "translateY(0)" : "translateY(6px)",
          transition: "all 0.3s ease",
        }}>
          <div style={{ width: "24px", height: "2px", background: r.palette.secondary }} />
          <span style={{ fontSize: "0.85rem", letterSpacing: "0.2em", textTransform: "uppercase", color: r.palette.secondary, fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            {r.country}
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── APP ROOT ─────────────────────────────────────────────────────────────────
export default function App() {
  const [currentView, setCurrentView] = useState("home");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleSelect = (id) => {
    setSelectedRestaurant(id);
    setCurrentView("menu");
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setCurrentView("home");
    setSelectedRestaurant(null);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <GoogleFontsLink />
      {currentView === "home"
        ? <HomePage onSelect={handleSelect} />
        : <MenuPage restaurantId={selectedRestaurant} onBack={handleBack} />
      }
    </>
  );
}