import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Core Stack',
    subtitle: 'What I build with daily',
    skills: [
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'JavaScript', icon: '📜' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'Tailwind CSS', icon: '🎯' },
    ]
  },
  {
    title: 'Backend & Database',
    subtitle: 'How I handle data',
    skills: [
      { name: 'Supabase', icon: '⚡' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'REST APIs', icon: '🔌' },
      { name: 'Authentication', icon: '🔐' },
    ]
  },
  {
    title: 'Styling & UI',
    subtitle: 'How I craft interfaces',
    skills: [
      { name: 'Tailwind CSS', icon: '🎯' },
      { name: 'Framer Motion', icon: '🎭' },
      { name: 'Responsive Design', icon: '📱' },
      { name: 'Shadcn UI', icon: '✨' },
    ]
  },
  {
    title: 'Tools & DevOps',
    subtitle: 'How I ship code',
    skills: [
      { name: 'Git & GitHub', icon: '🔧' },
      { name: 'Vercel', icon: '🚀' },
      { name: 'Netlify', icon: '🌐' },
      { name: 'VS Code', icon: '💻' },
    ]
  },
  {
    title: 'Integrations',
    subtitle: 'APIs I work with',
    skills: [
      { name: 'OpenAI API', icon: '🧠' },
      { name: 'Anthropic API', icon: '🤖' },
      { name: 'Resend (Email)', icon: '📧' },
      { name: 'EmailJS', icon: '✉️' },
    ]
  },
  {
    title: 'Currently Learning',
    subtitle: 'Always growing',
    skills: [
      { name: 'Prisma', icon: '🔺' },
      { name: 'tRPC', icon: '🔗' },
      { name: 'Testing (Vitest)', icon: '🧪' },
      { name: 'Docker', icon: '🐳' },
    ]
  },
]

const Skills = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <section style={{background: '#f5f0eb', padding: isMobile ? '50px 20px' : '70px 40px'}}>
      <div style={{maxWidth: '1100px', margin: '0 auto'}}>

        <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6}} viewport={{once: true}} style={{marginBottom: '40px', textAlign: 'center'}}>
          <p style={{color: '#c8956c', fontWeight: '600', marginBottom: '10px', fontSize: '1rem'}}>My Toolkit</p>
          <h2 style={{color: '#1a1a1a', fontSize: isMobile ? '1.8rem' : '2.2rem', fontWeight: 'bold', marginBottom: '10px'}}>Skills & Technologies</h2>
          <p style={{color: '#666', fontSize: '0.95rem', maxWidth: '500px', margin: '0 auto'}}>The technologies I use to build modern, production-ready web applications.</p>
        </motion.div>

        <div style={{display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '20px'}}>
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: catIndex * 0.1}}
              viewport={{once: true}}
              style={{background: 'white', borderRadius: '20px', padding: '24px'}}
            >
              <div style={{marginBottom: '20px', paddingBottom: '14px', borderBottom: '2px solid #f5f0eb'}}>
                <h3 style={{color: '#1a1a1a', fontSize: '1.05rem', fontWeight: '700', marginBottom: '4px'}}>
                  {category.title}
                </h3>
                <p style={{color: '#999', fontSize: '0.8rem', fontWeight: '500'}}>
                  {category.subtitle}
                </p>
              </div>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{opacity: 0, scale: 0.8}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 0.4, delay: skillIndex * 0.05}}
                    viewport={{once: true}}
                    style={{
                      background: '#f5f0eb',
                      color: '#1a1a1a',
                      padding: '8px 14px',
                      borderRadius: '50px',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      border: '1px solid #e8ddd4'
                    }}
                  >
                    <span style={{fontSize: '1rem'}}>{skill.icon}</span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6}} viewport={{once: true}} style={{marginTop: '32px', textAlign: 'center'}}>
          <p style={{color: '#888', fontSize: '0.9rem', marginBottom: '16px'}}>Also experienced with</p>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center'}}>
            {['Vite', 'npm', 'Figma', 'Chrome DevTools', 'Postman', 'GitHub Actions', 'Radix UI', 'HTML5', 'CSS3'].map((tool) => (
              <span key={tool} style={{background: 'white', color: '#555', padding: '6px 16px', borderRadius: '50px', fontSize: '0.82rem', border: '1px solid #e8ddd4'}}>{tool}</span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Skills