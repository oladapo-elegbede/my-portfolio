import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Hero = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <section style={{background: '#f5f0eb', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: isMobile ? '40px 20px' : '60px 80px'}}>
      <div style={{maxWidth: '1100px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: isMobile ? 'column-reverse' : 'row', gap: '60px', alignItems: 'center', justifyContent: 'space-between'}}>

        {/* Left: Text */}
        <motion.div initial={{opacity: 0, x: -50}} animate={{opacity: 1, x: 0}} transition={{duration: 0.8}} style={{flex: 1}}>
          
          <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.2}} style={{color: '#c8956c', fontSize: '0.95rem', marginBottom: '8px', fontWeight: '600', letterSpacing: '0.05em'}}>
            Available for hire · Remote worldwide
          </motion.p>

          <motion.h2 initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.3}} style={{color: '#1a1a1a', fontSize: isMobile ? '1.4rem' : '1.6rem', fontWeight: '600', marginBottom: '12px'}}>
            Oladapo Elegbede
          </motion.h2>

          <div style={{fontSize: isMobile ? '2rem' : '2.8rem', fontWeight: 'bold', marginBottom: '20px', minHeight: '60px'}}>
            <TypeAnimation
              sequence={['Full Stack Developer', 2000, 'SaaS Builder', 2000, 'React & Node.js Dev', 2000, 'Open to Remote', 2000]}
              wrapper="span"
              speed={50}
              style={{color: '#1a1a1a'}}
              repeat={Infinity}
            />
          </div>

          <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5}} style={{color: '#555', fontSize: '0.95rem', marginBottom: '28px', lineHeight: 1.8, maxWidth: '520px'}}>
            Full stack developer from Lagos, Nigeria — building SaaS tools and web applications end-to-end. React, Node.js, PostgreSQL, and MongoDB. Open to remote roles and freelance contracts worldwide.
          </motion.p>

          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.6}} style={{display: 'flex', gap: '10px', marginBottom: '28px'}}>
            <a href="https://github.com/oladapo-elegbede" target="_blank" rel="noreferrer" style={{width: '42px', height: '42px', borderRadius: '50%', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#333', background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
              <FiGithub size={18} />
            </a>
            <a href="https://linkedin.com/in/oladapo-elegbede" target="_blank" rel="noreferrer" style={{width: '42px', height: '42px', borderRadius: '50%', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#333', background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
              <FiLinkedin size={18} />
            </a>
            <a href="https://x.com/oladapoelegbede" target="_blank" rel="noreferrer" style={{width: '42px', height: '42px', borderRadius: '50%', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#333', background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
              <FiTwitter size={18} />
            </a>
          </motion.div>

          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.7}} style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
            <a href="mailto:elegbedeoladapo@gmail.com" style={{background: '#c8956c', color: 'white', padding: '14px 32px', borderRadius: '50px', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem'}}>
              Hire Me →
            </a>
            <a href="/Elegbede_Oladapo_CV.pdf" download style={{background: 'white', color: '#1a1a1a', padding: '14px 32px', borderRadius: '50px', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem', border: '1px solid #ddd'}}>
              Download CV ↓
            </a>
          </motion.div>

        </motion.div>

        {/* Right: Photo */}
        <motion.div initial={{opacity: 0, x: 50}} animate={{opacity: 1, x: 0}} transition={{duration: 0.8, delay: 0.2}} style={{position: 'relative', flexShrink: 0}}>
          <div style={{position: 'relative', width: isMobile ? '220px' : '320px', height: isMobile ? '220px' : '320px'}}>
            <img src="/profile.jpg" alt="Oladapo Elegbede — Full Stack Developer" style={{width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', border: '6px solid white', boxShadow: '0 20px 60px rgba(0,0,0,0.12)'}} />
            <motion.div animate={{y: [0, -8, 0]}} transition={{duration: 3, repeat: Infinity}} style={{position: 'absolute', top: '10px', right: '-20px', background: 'white', borderRadius: '12px', padding: '8px 16px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', fontSize: '0.85rem', fontWeight: '600', color: '#333', display: 'flex', alignItems: 'center', gap: '6px'}}>
              ⚛️ React
            </motion.div>
            <motion.div animate={{y: [0, 8, 0]}} transition={{duration: 3, repeat: Infinity, delay: 1}} style={{position: 'absolute', bottom: '20px', left: '-20px', background: 'white', borderRadius: '12px', padding: '8px 16px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', fontSize: '0.85rem', fontWeight: '600', color: '#333', display: 'flex', alignItems: 'center', gap: '6px'}}>
              🖥️ Full Stack
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero