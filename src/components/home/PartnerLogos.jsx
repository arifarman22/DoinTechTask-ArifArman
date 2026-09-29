export const PartnerLogos = () => {
  const partners = [
    {
      name: 'Google',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.665-5.17 3.665-9.12z" />
          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.13C3.25 21.37 7.34 24 12 24z" />
          <path fill="#FBBC05" d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.26C.46 8.19 0 10.03 0 12s.46 3.81 1.26 5.42l4.02-3.13z" />
          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.25 2.63 1.26 6.58l4.02 3.13c.95-2.83 3.6-4.96 6.72-4.96z" />
        </svg>
      ),
      label: 'Google'
    },
    {
      name: 'Microsoft',
      icon: (
        <svg width="20" height="20" viewBox="0 0 23 23">
          <path fill="#f35325" d="M1 1h10v10H1z"/>
          <path fill="#81bc06" d="M12 1h10v10H12z"/>
          <path fill="#05a6f0" d="M1 12h10v10H1z"/>
          <path fill="#ffba08" d="M12 12h10v10H12z"/>
        </svg>
      ),
      label: 'Microsoft'
    },
    {
      name: 'Amazon',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M4 14c4 3 12 3 16-1" strokeLinecap="round" />
          <path d="m17 11 3 2-2 3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      label: 'Amazon AWS'
    },
    {
      name: 'Meta',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0081FB" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 13c-2.5-3.5-5-5-8-2-3 3 0 8 5 4l3-2 3 2c5 4 8-1 5-4-3-3-5.5-1.5-8 2z" />
        </svg>
      ),
      label: 'Meta'
    },
    {
      name: 'Spotify',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#1DB954">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.435-5.308-1.76-8.794-.963-.335.077-.67-.133-.746-.468-.077-.334.132-.67.467-.746 3.808-.87 7.076-.496 9.723 1.115.294.18.386.562.207.855zm1.226-2.723c-.226.367-.708.482-1.075.257-2.69-1.653-6.79-2.132-9.971-1.166-.413.125-.85-.11-.975-.523-.125-.413.11-.85.523-.975 3.633-1.103 8.147-.568 11.24 1.332.368.226.483.708.258 1.075zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71c-.494.15-1.018-.13-1.168-.624-.15-.495.13-1.018.624-1.168 3.532-1.072 9.404-.866 13.115 1.337.445.264.59.838.327 1.282-.264.444-.838.59-1.282.327z"/>
        </svg>
      ),
      label: 'Spotify'
    },
    {
      name: 'Stripe',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#635BFF">
          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697.35 12.822.35 6.242.35 2.11 3.738 2.11 9.097c0 7.378 10.147 6.223 10.147 9.417 0 .978-.858 1.458-2.138 1.458-2.617 0-5.59-1.196-7.398-2.223l-.934 5.568C3.86 24.51 6.84 25.35 10.18 25.35c6.883 0 11.238-3.398 11.238-8.91 0-7.798-10.147-6.52-10.147-9.525z"/>
        </svg>
      ),
      label: 'Stripe'
    }
  ];

  return (
    <section
      style={{
        padding: '36px 0',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0',
        backgroundColor: '#ffffff'
      }}
    >
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        <p
          style={{
            textAlign: 'center',
            fontSize: '13px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: '#64748b',
            marginBottom: '26px'
          }}
        >
          Trusted by engineers & designers from innovative tech companies
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '28px'
          }}
        >
          {partners.map((p, idx) => (
            <div
              key={idx}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '18px',
                fontWeight: 700,
                color: '#334155',
                letterSpacing: '-0.02em',
                transition: 'all 0.2s ease',
                userSelect: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#003be2';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#334155';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {p.icon}
              <span>{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
