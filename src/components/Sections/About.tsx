import { motion } from 'framer-motion'

const About = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <section style={{background: '#fff', padding: isMobile ? '50px 20px' : '70px 40px'}}>
      <div style={{maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '50px', alignItems: 'center'}}>

        <motion.div initial={{opacity: 0, x: -50}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.8}} viewport={{once: true}} style={{position: 'relative', flexShrink: 0, width: isMobile ? '100%' : '400px'}}>
          <img src="/profile.jpg" alt="Elegbede Oladapo" style={{width: '100%', borderRadius: '20px', objectFit: 'cover', objectPosition: 'center top', height: isMobile ? '300px' : '450px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)'}} />
          <div style={{position: 'absolute', bottom: '-16px', right: '-10px', background: '#c8956c', borderRadius: '16px', padding: '16px 20px', color: 'white', boxShadow: '0 10px 30px rgba(200,149,108,0.4)'}}>
            <div style={{fontSize: '1.5rem', fontWeight: 'bold'}}>4+</div>
            <div style={{fontSize: '0.8rem', opacity: 0.9}}>Years Experience</div>
          </div>
          <div style={{position: 'absolute', top: '-16px', left: '-10px', background: 'white', borderRadius: '16px', padding: '16px 20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}}>
            <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#1a1a1a'}}>10+</div>
            <div style={{fontSize: '0.8rem', color: '#666'}}>Projects Done</div>
          </div>
        </motion.div>

        <motion.div initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.8}} viewport={{once: true}} style={{flex: 1}}>
          <p style={{color: '#c8956c', fontWeight: '600', marginBottom: '10px', fontSize: '1rem'}}>About Me</p>
          <h2 style={{color: '#1a1a1a', fontSize: isMobile ? '1.8rem' : '2.2rem', fontWeight: 'bold', marginBottom: '20px', lineHeight: 1.2}}>A Passionate Fullstack Developer Based in Lagos</h2>
          <p style={{color: '#555', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '16px'}}>I am Elegbede Oladapo Olajide, a passionate fullstack developer with 4 years of experience building modern web applications. I graduated from Lagos State University and completed advanced Fullstack training at Torilo Academy.</p>
          <p style={{color: '#555', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '24px'}}>I specialise in React, Next.js, TypeScript, Node.js, Supabase, HTML5, CSS3 and JavaScript. I build complete products from beautiful responsive frontends to real backends with databases, APIs, and transactional emails.</p>

          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '24px'}}>
            {[
              {label: 'Name', value: 'Elegbede Oladapo'},
              {label: 'Email', value: 'elegbedeoladapo@gmail.com'},
              {label: 'Location', value: 'Lagos, Nigeria'},
              {label: 'Availability', value: 'Open to Work'},
            ].map((item, index) => (
              <div key={index}>
                <p style={{color: '#999', fontSize: '0.8rem', marginBottom: '4px'}}>{item.label}</p>
                <p style={{color: '#1a1a1a', fontWeight: '600', fontSize: '0.9rem'}}>{item.value}</p>
              </div>
            ))}
          </div>

          <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px'}}>
            {['React', 'Next.js', 'TypeScript', 'JavaScript', 'Supabase', 'Node.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git'].map((skill) => (
              <span key={skill} style={{background: '#f5f0eb', color: '#c8956c', padding: '5px 14px', borderRadius: '50px', fontSize: '0.82rem', fontWeight: '600', border: '1px solid #e8ddd4'}}>{skill}</span>
            ))}
          </div>

          <a href="mailto:elegbedeoladapo@gmail.com" style={{background: '#c8956c', color: 'white', padding: '14px 28px', borderRadius: '50px', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem', display: 'inline-block'}}>Let us Talk →</a>
        </motion.div>

      </div>
    </section>
  )
}

export default About