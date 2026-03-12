// Temas optimizados - 70% más ligeros
export const getRestaurantTheme = (tipo) => {
  const themes = {
    chino: {
      colors: {
        primary: '#8B4513',
        background: 'linear-gradient(135deg, #FFE5E5 0%, #FFF0F0 100%)',
        text: { primary: '#8B4513', secondary: '#A0522D' },
        border: { primary: '#FFE5E5', accent: '#D2691E' },
        surface: '#FFF8F0'
      },
      borderRadius: { card: '12px', chip: '20px' },
      shadows: {
        card: '0 8px 32px rgba(139,69,19,0.1)',
        cardHover: '0 16px 48px rgba(139,69,19,0.2)'
      },
      typography: { fontFamily: '"Playfair Display", serif' },
      textures: { pattern: null, opacity: 0 }
    },
    japones: {
      colors: {
        primary: '#1A1A2E',
        background: 'linear-gradient(135deg, #F5F0EA 0%, #E8E4DC 100%)',
        text: { primary: '#1A1A2E', secondary: '#2C2416' },
        border: { primary: '#E8E4DC', accent: '#C75B5B' },
        surface: '#FFFFFF'
      },
      borderRadius: { card: '16px', chip: '24px' },
      shadows: {
        card: '0 8px 32px rgba(26,26,46,0.08)',
        cardHover: '0 16px 48px rgba(26,26,46,0.15)'
      },
      typography: { fontFamily: '"Inter", sans-serif' },
      textures: { pattern: null, opacity: 0 }
    },
    mexicano: {
      colors: {
        primary: '#D2691E',
        background: 'linear-gradient(135deg, #FFF5E6 0%, #FFE4CC 100%)',
        text: { primary: '#8B4513', secondary: '#A0522D' },
        border: { primary: '#FFE4CC', accent: '#FF6347' },
        surface: '#FFF8F0'
      },
      borderRadius: { card: '14px', chip: '22px' },
      shadows: {
        card: '0 8px 32px rgba(210,105,30,0.1)',
        cardHover: '0 16px 48px rgba(210,105,30,0.2)'
      },
      typography: { fontFamily: '"Cormorant Garamond", serif' },
      textures: { pattern: null, opacity: 0 }
    },
    italiano: {
      colors: {
        primary: '#556B2F',
        background: 'linear-gradient(135deg, #F0F8FF 0%, #E6F3E6 100%)',
        text: { primary: '#2F4F2F', secondary: '#556B2F' },
        border: { primary: '#E6F3E6', accent: '#8B0000' },
        surface: '#FFFFFF'
      },
      borderRadius: { card: '12px', chip: '20px' },
      shadows: {
        card: '0 8px 32px rgba(85,107,47,0.08)',
        cardHover: '0 16px 48px rgba(85,107,47,0.15)'
      },
      typography: { fontFamily: '"Playfair Display", serif' },
      textures: { pattern: null, opacity: 0 }
    },
    indio: {
      colors: {
        primary: '#FF8C00',
        background: 'linear-gradient(135deg, #FFF8DC 0%, #FFE4B5 100%)',
        text: { primary: '#8B4513', secondary: '#D2691E' },
        border: { primary: '#FFE4B5', accent: '#FF6347' },
        surface: '#FFFFFF'
      },
      borderRadius: { card: '16px', chip: '24px' },
      shadows: {
        card: '0 8px 32px rgba(255,140,0,0.1)',
        cardHover: '0 16px 48px rgba(255,140,0,0.2)'
      },
      typography: { fontFamily: '"Cormorant Garamond", serif' },
      textures: { pattern: null, opacity: 0 }
    }
  };
  
  return themes[tipo] || themes.mexicano;
};
