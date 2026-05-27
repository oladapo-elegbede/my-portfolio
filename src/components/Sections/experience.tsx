import { motion } from 'framer-motion'

const experiences = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Self Employed',
    period: 'Jan 2024 - Present',
    description: 'Independently designed built and deployed 3 fully functional live web applications using HTML5 CSS3 and JavaScript. Built responsive user interfaces with mobile first design approach.',
  },
  {
    id: 2,
    title: 'Frontend Development Training',
    company: 'Torilo Academy',
    period: 'Nov 2025 - Present',
    description: 'Completed intensive frontend development training covering HTML5 CSS3 JavaScript React and modern web development practices. Built and deployed 3 production projects during training.',
  },
  {
    id: 3,
    title: 'BSc Computer Science',
    company: 'Lagos State University',
    period: '2021 - 2025',
    description: 'Graduated with a Bachelor of Science degree in Computer Science from Lagos State University. Studied programming fundamentals data structures algorithms and software development.',
  },
]

const Experience = () => {
  const isMobile = window.innerWidth < 768

  return (
    <section style={{background: '#f5f0eb', padding: isMobile ? '50px 20px' : '70px 40px'}}>
      <div style={{maxWidth: '800px', margin: '0 auto'}}>

        <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6}} viewport={{once: true}} style={{marginBottom: '40px'}}>
          <h2 style={{color: '#1a1a1a', fontSize: isMobile ? '1.8rem' : '2.2rem', fontWeight: 'bold', marginBottom: '10px'}}>Experience</h2>
          <p style={{color: '#666', fontSize: '0.95rem'}}>My professional journey in the tech industry.</p>
        </motion.div>

        <div style={{position: 'relative'}}>
          <div style={{position: 'absolute', left: '16px', top: 0, bottom: 0, width: '2px', background: '#e8ddd4'}}></div>

          <div style={{display: 'flex', flexDirection: 'column', gap: '28px'}}>
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{opacity: 0, x: -30}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.6, delay: index * 0.1}}
                viewport={{once: true}}
                style={{display: 'flex', gap: '24px', paddingLeft: '16px'}}
              >
                <div style={{position: 'relative', flexShrink: 0}}>
                  <div style={{position: 'absolute', left: '-24px', top: '4px', width: '16px', height: '16px', borderRadius: '50%', background: '#c8956c', border: '3px solid white', boxShadow: '0 0 0 2px #c8956c'}}></div>
                </div>

                <div style={{background: 'white', borderRadius: '16px', padding: isMobile ? '20px' : '28px', width: '100%', boxShadow: '0 4px 20px rgba(0,0,0,0.06)'}}>
                  <h3 style={{color: '#1a1a1a', fontSize: '1.1rem', fontWeight: '700', marginBottom: '6px'}}>{exp.title}</h3>
                  <p style={{color: '#c8956c', fontWeight: '600', fontSize: '0.9rem', marginBottom: '4px'}}>@ {exp.company}</p>
                  <p style={{color: '#888', fontSize: '0.82rem', marginBottom: '12px'}}>{exp.period}</p>
                  <p style={{color: '#555', fontSize: '0.9rem', lineHeight: 1.7}}>{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience