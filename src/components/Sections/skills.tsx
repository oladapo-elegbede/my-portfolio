import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Frontend Frameworks',
    skills: [
      { name: 'React', level: 85, icon: '⚛️' },
      { name: 'Next.js', level: 80, icon: '▲' },
      { name: 'Angular', level: 75, icon: '🅰️' },
      { name: 'Vue.js', level: 70, icon: '💚' },
    ]
  },
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', level: 90, icon: '📜' },
      { name: 'TypeScript', level: 80, icon: '🔷' },
      { name: 'HTML5', level: 95, icon: '🌐' },
      { name: 'CSS3', level: 95, icon: '🎨' },
    ]
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Node.js', level: 70, icon: '🟢' },
      { name: 'Supabase', level: 75, icon: '⚡' },
      { name: 'REST APIs', level: 80, icon: '🔌' },
      { name: 'PostgreSQL', level: 65, icon: '🐘' },
    ]
  },
  {
    title: 'Styling & UI',
    skills: [
      { name: 'Tailwind CSS', level: 85, icon: '🎯' },
      { name: 'Framer Motion', level: 75, icon: '🎭' },
      { name: 'Responsive Design', level: 95, icon: '📱' },
      { name: 'CSS Flexbox & Grid', level: 95, icon: '📐' },
    ]
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git & GitHub', level: 85, icon: '🔧' },
      { name: 'Vercel & Netlify', level: 90, icon: '🚀' },
      { name: 'CI/CD', level: 75, icon: '⚙️' },
      { name: 'VS Code', level: 95, icon: '💻' },
    ]
  },
  {
    title: 'Integrations',
    skills: [
      { name: 'Anthropic API', level: 70, icon: '🤖' },
      { name: 'Resend (Email)', level: 75, icon: '📧' },
      { name: 'EmailJS', level: 80, icon: '✉️' },
      { name: 'OpenAI API', level: 65, icon: '🧠' },
    ]
  },
]

const Skills = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <section style={{background: '#f5f0eb', padding: isMobile ? '50px 20px' : '70px 40px'}}>
      <div style={{maxWidth: '1100px', margin: '0 auto'}}>

        <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6}} viewport={{once: true}} style={{marginBottom: '40px', textAlign: 'center'}}>
          <p style={{color: '#c8956c', fontWeight: '600', marginBottom: '10px', fontSize: '1rem'}}>What I Know</p>
          <h2 style={{color: '#1a1a1a', fontSize: isMobile ? '1.8rem' : '2.2rem', fontWeight: 'bold', marginBottom: '10px'}}>Skills & Technologies</h2>
          <p style={{color: '#666', fontSize: '0.95rem', maxWidth: '500px', margin: '0 auto'}}>Technologies and tools I use to build complete fullstack products.</p>
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
              <h3 style={{color: '#1a1a1a', fontSize: '1rem', fontWeight: '700', marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid #f5f0eb'}}>
                {category.title}
              </h3>
              <div style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div key={skill.name} initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.5, delay: skillIndex * 0.1}} viewport={{once: true}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px'}}>
                      <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                        <span style={{fontSize: '1.1rem'}}>{skill.icon}</span>
                        <span style={{color: '#1a1a1a', fontWeight: '600', fontSize: '0.9rem'}}>{skill.name}</span>
                      </div>
                      <span style={{color: '#c8956c', fontWeight: '700', fontSize: '0.85rem'}}>{skill.level}%</span>
                    </div>
                    <div style={{background: '#f5f0eb', borderRadius: '50px', height: '7px', overflow: 'hidden'}}>
                      <motion.div
                        initial={{width: 0}}
                        whileInView={{width: `${skill.level}%`}}
                        transition={{duration: 1, delay: skillIndex * 0.1, ease: 'easeOut'}}
                        viewport={{once: true}}
                        style={{height: '100%', background: 'linear-gradient(to right, #c8956c, #d4a574)', borderRadius: '50px'}}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6}} viewport={{once: true}} style={{marginTop: '32px', textAlign: 'center'}}>
          <p style={{color: '#888', fontSize: '0.9rem', marginBottom: '16px'}}>Also familiar with</p>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center'}}>
            {['Vite', 'npm', 'Figma', 'Chrome DevTools', 'Postman', 'GitHub Actions', 'Shadcn UI', 'Radix UI'].map((tool) => (
              <span key={tool} style={{background: 'white', color: '#555', padding: '6px 16px', borderRadius: '50px', fontSize: '0.82rem', border: '1px solid #e8ddd4'}}>{tool}</span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Skills