import { useEffect, useState } from "react";
import { useRestaurantFactory } from "./hooks/useRestaurantFactory";

const RESTAURANTS = {
  chino: {
    id: "chino",
    name: "皇朝",
    subtitle: "Huáng Cháo Imperial",
    tagline: "Tradición milenaria en cada bocado",
    country: "China",
    flag: "🇨🇳",
    heroImage: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=992&auto=format&fit=crop",
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
    decorElement: "✿",
  },
};

const MENU_ICONS = {
  plato: "🍜",
  bebida: "🍵",
  postre: "🍰",
};

const GoogleFontsLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Shippori+Mincho:wght@400;500;600;700&family=DM+Serif+Display:ital@0;1&family=Abril+Fatface&family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400&family=Crimson+Pro:ital,wght@0,300;0,400;1,300&family=Spectral:ital,wght@0,300;0,400;0,500;1,300&family=Tiro+Devanagari+Sanskrit&display=swap');

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
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: "-20%", left: "-10%", width: "60vw", height: "60vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,26,139,0.04) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "-10%", right: "-5%", width: "50vw", height: "50vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,30,30,0.05) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translateX(-50%)", width: "40vw", height: "40vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(212,160,23,0.03) 0%, transparent 70%)" }} />
      </div>

      <header style={{ position: "relative", zIndex: 10, padding: "3rem 4rem 2rem", display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <div style={{ animation: "fadeUp 0.8s ease forwards" }}>
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

      <div style={{ margin: "0 4rem", height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)", animation: "fadeIn 1s ease forwards", opacity: 0, animationDelay: "0.4s", animationFillMode: "forwards" }} />

      <div style={{ padding: "3rem 4rem 1.5rem", position: "relative", zIndex: 10 }}>
        <div style={{ animation: "fadeUp 0.8s ease 0.2s forwards", opacity: 0, animationFillMode: "forwards" }}>
          <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)", color: "rgba(255,255,255,0.75)", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>
            Selecciona tu destino culinario
          </p>
        </div>
      </div>

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
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url(${r.heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: isHovered ? "scale(1.08)" : "scale(1)",
        transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        filter: isHovered ? "brightness(0.5) saturate(1.2)" : "brightness(0.3) saturate(0.8)",
      }} />

      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(to top, ${r.palette.bg} 0%, ${r.palette.bg}CC 30%, transparent 70%)`,
        transition: "opacity 0.4s",
        opacity: isHovered ? 0.7 : 1,
      }} />

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

      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "2rem 1.8rem",
      }}>
        <h2 style={{
          fontFamily: r.font.display,
          fontSize: "clamp(2rem, 2.8vw, 3.2rem)",
          fontWeight: 400,
          color: "#FFFFFF",
          lineHeight: 1,
          marginBottom: "0.5rem",
          textShadow: "0 2px 20px rgba(0,0,0,0.8)",
        }}>{r.name}</h2>

        <p style={{
          fontFamily: r.font.body,
          fontSize: "1rem", letterSpacing: "0.05em",
          color: "rgba(255,255,255,0.9)", marginBottom: "1rem",
          fontStyle: "italic",
          textShadow: "0 1px 8px rgba(0,0,0,0.7)",
        }}>{r.subtitle}</p>

        <div style={{
          height: "2px",
          background: `linear-gradient(90deg, ${r.palette.secondary}, transparent)`,
          marginBottom: "1rem",
          transformOrigin: "left",
          transform: isHovered ? "scaleX(1)" : "scaleX(0.3)",
          transition: "transform 0.5s ease",
        }} />

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

function MenuPage({ restaurant, menu, onBack }) {
  const [activeItem, setActiveItem] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const menuInfo = menu?.getInfo?.() ?? null;
  const menuItems = menuInfo ? [
    {
      type: "Plato Fuerte",
      name: menuInfo.plato?.nombre,
      desc: menuInfo.plato?.descripcion,
      img: menuInfo.plato?.imagen,
      icon: MENU_ICONS.plato,
    },
    {
      type: "Bebida",
      name: menuInfo.bebida?.nombre,
      desc: menuInfo.bebida?.descripcion,
      img: menuInfo.bebida?.imagen,
      icon: MENU_ICONS.bebida,
    },
    {
      type: "Postre",
      name: menuInfo.postre?.nombre,
      desc: menuInfo.postre?.descripcion,
      img: menuInfo.postre?.imagen,
      icon: MENU_ICONS.postre,
    },
  ] : [];

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: restaurant.palette.gradient,
      fontFamily: restaurant.font.body,
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ position: "fixed", inset: 0, background: restaurant.pattern, pointerEvents: "none", zIndex: 0 }} />

      <div style={{
        position: "relative", height: "85vh", overflow: "hidden", zIndex: 1,
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${restaurant.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          transform: "scale(1.05)",
          filter: "saturate(1.1) brightness(0.75)",
          animation: loaded ? "none" : undefined,
          transition: "transform 8s ease",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: restaurant.palette.heroOverlay,
        }} />

        <button
          onClick={onBack}
          style={{
            position: "absolute", top: "2rem", left: "2.5rem", zIndex: 10,
            background: "rgba(0,0,0,0.55)", border: `2px solid rgba(255,255,255,0.4)`,
            color: "#FFFFFF", padding: "0.8rem 1.6rem",
            cursor: "pointer", fontFamily: restaurant.font.body,
            fontSize: "1rem", letterSpacing: "0.15em", textTransform: "uppercase",
            backdropFilter: "blur(10px)",
            transition: "background 0.2s, border-color 0.2s",
            borderRadius: "3px",
            fontWeight: 600,
          }}
          onMouseEnter={e => { e.currentTarget.style.background = `${restaurant.palette.primary}CC`; e.currentTarget.style.borderColor = restaurant.palette.secondary; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(0,0,0,0.55)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; }}
        >← Restaurantes</button>

        <div style={{
          position: "absolute", bottom: "10%", left: "5%",
          maxWidth: "600px",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.9s ease 0.2s",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "2.8rem" }}>{restaurant.flag}</span>
            <div style={{ height: "2px", width: "60px", background: restaurant.palette.secondary, opacity: 0.9 }} />
            <span style={{
              fontSize: "1rem", letterSpacing: "0.3em", textTransform: "uppercase",
              color: "#FFFFFF", fontFamily: "'Cormorant Garamond', serif", fontWeight: 700,
              textShadow: "0 2px 10px rgba(0,0,0,0.8)",
            }}>{restaurant.country}</span>
          </div>

          <h1 style={{
            fontFamily: restaurant.font.display,
            fontSize: "clamp(3.5rem, 8vw, 6rem)",
            fontWeight: 400,
            color: restaurant.palette.text,
            lineHeight: 0.9,
            marginBottom: "1rem",
            textShadow: "0 4px 40px rgba(0,0,0,0.5)",
          }}>{restaurant.name}</h1>

          <p style={{
            fontSize: "clamp(1.1rem, 1.8vw, 1.3rem)",
            color: "rgba(255,255,255,0.92)",
            fontStyle: "italic",
            letterSpacing: "0.05em",
            textShadow: "0 2px 15px rgba(0,0,0,0.7)",
          }}>{restaurant.tagline}</p>
        </div>

        <div style={{
          position: "absolute", bottom: "8%", right: "5%",
          fontFamily: restaurant.font.display,
          fontSize: "8rem", color: restaurant.palette.secondary,
          opacity: 0.06, userSelect: "none", lineHeight: 1,
          animation: "float 8s ease-in-out infinite",
        }} className="decor-float">
          {restaurant.decorElement}
        </div>

        <div style={{
          position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem",
          opacity: 0.4,
          animation: "pulse 2s ease infinite",
        }}>
          <span style={{ fontSize: "0.85rem", letterSpacing: "0.25em", color: "#FFFFFF", textTransform: "uppercase", fontWeight: 600 }}>Menú</span>
          <div style={{ width: "1px", height: "40px", background: `linear-gradient(to bottom, ${restaurant.palette.text}, transparent)` }} />
        </div>
      </div>

      <div style={{
        position: "relative", zIndex: 2,
        padding: "5rem clamp(1.5rem, 5vw, 6rem)",
        maxWidth: "1400px", margin: "0 auto",
      }}>
        <div style={{
          display: "flex", alignItems: "center", gap: "2rem",
          marginBottom: "4rem",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease 0.5s",
        }}>
          <div>
            <p style={{ fontSize: "0.9rem", letterSpacing: "0.3em", textTransform: "uppercase", color: restaurant.palette.secondary, marginBottom: "0.5rem", fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
              Menú Degustación
            </p>
            <h2 style={{ fontFamily: restaurant.font.display, fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 400, color: restaurant.palette.text }}>
              {restaurant.subtitle}
            </h2>
          </div>
          <div style={{ flex: 1, height: "1px", background: `linear-gradient(to right, ${restaurant.palette.border}, transparent)` }} />
          <div style={{ fontSize: "2rem", opacity: 0.4 }}>{restaurant.decorElement}</div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1px",
          background: restaurant.palette.border,
          border: `1px solid ${restaurant.palette.border}`,
        }}>
          {menuItems.map((item, i) => (
            <MenuItemCard
              key={item.type}
              item={item}
              restaurant={restaurant}
              index={i}
              isActive={activeItem === i}
              onHover={setActiveItem}
              loaded={loaded}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MenuItemCard({ item, restaurant, index, isActive, onHover, loaded }) {
  const typeLabels = { "Plato Fuerte": "01", "Bebida": "02", "Postre": "03" };

  return (
    <div
      className="menu-item-card"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      style={{
        background: restaurant.palette.card,
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        opacity: loaded ? 1 : 0,
        transform: loaded ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.8s ease ${0.6 + index * 0.15}s, transform 0.8s ease ${0.6 + index * 0.15}s, box-shadow 0.3s ease`,
        boxShadow: isActive ? `inset 0 0 0 1px ${restaurant.palette.primary}60` : "none",
      }}
    >
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
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(to top, ${restaurant.palette.card} 0%, transparent 60%)`,
        }} />
        <div style={{
          position: "absolute", top: "1rem", left: "1rem",
          background: `${restaurant.palette.bg}DD`,
          backdropFilter: "blur(8px)",
          border: `1px solid ${restaurant.palette.border}`,
          padding: "0.4rem 0.9rem",
          fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase",
          color: restaurant.palette.secondary, fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 700,
        }}>{item.type}</div>
        <div style={{
          position: "absolute", top: "1rem", right: "1rem",
          fontFamily: restaurant.font.display, fontSize: "2rem",
          color: `${restaurant.palette.text}15`, fontWeight: 700,
        }}>{typeLabels[item.type]}</div>
      </div>

      <div style={{ padding: "1.8rem 2rem 2.2rem" }}>
        <div style={{
          height: "1px", marginBottom: "1.2rem",
          background: `linear-gradient(90deg, ${restaurant.palette.primary}, transparent)`,
          transformOrigin: "left",
          transform: isActive ? "scaleX(1)" : "scaleX(0.4)",
          transition: "transform 0.5s ease",
        }} />

        <div style={{ display: "flex", alignItems: "flex-start", gap: "0.9rem", marginBottom: "0.9rem" }}>
          <span style={{ fontSize: "2.2rem", lineHeight: 1, marginTop: "0.1rem" }}>{item.icon}</span>
          <h3 style={{
            fontFamily: restaurant.font.display,
            fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
            fontWeight: 400, color: restaurant.palette.text,
            lineHeight: 1.1,
          }}>{item.name}</h3>
        </div>

        <p style={{
          fontSize: "1rem", lineHeight: 1.75,
          color: restaurant.palette.text,
          opacity: 0.82,
          fontFamily: restaurant.font.body,
          fontStyle: "italic",
        }}>{item.desc}</p>

        <div style={{
          marginTop: "1.5rem",
          display: "flex", alignItems: "center", gap: "0.6rem",
          opacity: isActive ? 1 : 0,
          transform: isActive ? "translateY(0)" : "translateY(6px)",
          transition: "all 0.3s ease",
        }}>
          <div style={{ width: "24px", height: "2px", background: restaurant.palette.secondary }} />
          <span style={{ fontSize: "0.85rem", letterSpacing: "0.2em", textTransform: "uppercase", color: restaurant.palette.secondary, fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            {restaurant.country}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const { selectedRestaurant, menu, selectRestaurant, reset } = useRestaurantFactory();

  const handleSelect = (id) => {
    const restaurant = RESTAURANTS[id];
    if (!restaurant) return;
    selectRestaurant(restaurant);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    reset();
    window.scrollTo(0, 0);
  };

  return (
    <>
      <GoogleFontsLink />
      {selectedRestaurant
        ? <MenuPage restaurant={selectedRestaurant} menu={menu} onBack={handleBack} />
        : <HomePage onSelect={handleSelect} />
      }
    </>
  );
}
