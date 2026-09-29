export const PartnerLogos = () => {
  const partners = [
    { name: 'Google', label: 'Google' },
    { name: 'Microsoft', label: 'Microsoft' },
    { name: 'Amazon', label: 'Amazon AWS' },
    { name: 'Meta', label: 'Meta' },
    { name: 'Spotify', label: 'Spotify' },
    { name: 'Stripe', label: 'Stripe' }
  ];

  return (
    <section
      style={{
        padding: '36px 0',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        backgroundColor: 'var(--bg-surface)'
      }}
    >
      <div className="container">
        <p
          style={{
            textAlign: 'center',
            fontSize: '13px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--text-muted)',
            marginBottom: '24px'
          }}
        >
          Trusted by engineers & designers from innovative tech companies
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: '32px'
          }}
        >
          {partners.map((p, idx) => (
            <div
              key={idx}
              style={{
                fontSize: '20px',
                fontWeight: 800,
                color: 'var(--text-muted)',
                letterSpacing: '-0.03em',
                transition: 'color var(--transition-fast)',
                userSelect: 'none'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {p.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
