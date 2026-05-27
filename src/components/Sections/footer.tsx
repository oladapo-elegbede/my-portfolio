const Footer = () => {
  const isMobile = window.innerWidth < 768

  return (
    <footer style={{background: '#f5f0eb', padding: '28px 20px', borderTop: '1px solid #e8ddd4'}}>
      <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
        <p style={{color: '#888', fontSize: '0.85rem', marginBottom: '14px'}}>
          © 2026 Elegbede Oladapo Olajide. All rights reserved.
        </p>
        <div style={{display: 'flex', justifyContent: 'center', gap: isMobile ? '16px' : '24px', flexWrap: 'wrap'}}>
          <a href="mailto:elegbedeoladapo@gmail.com" style={{color: '#666', textDecoration: 'none', fontSize: '0.85rem'}}>Gmail</a>
          <a href="https://github.com/elegbedeoladapo-hash" target="_blank" rel="noreferrer" style={{color: '#666', textDecoration: 'none', fontSize: '0.85rem'}}>GitHub</a>
          <a href="https://x.com/oladapoelegbede" target="_blank" rel="noreferrer" style={{color: '#666', textDecoration: 'none', fontSize: '0.85rem'}}>X (Twitter)</a>
          <a href="https://www.linkedin.com/in/elegbede-olajide-887151407" target="_blank" rel="noreferrer" style={{color: '#666', textDecoration: 'none', fontSize: '0.85rem'}}>LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer