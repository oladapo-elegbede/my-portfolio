import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'StackSavings — AI Spend Audit Tool',
    role: 'Fullstack Developer',
    description: 'A fullstack SaaS tool that audits AI tool spending for startups and shows exactly where they are overspending. Features a real audit engine, Supabase backend, transactional email via Resend, AI-generated summaries via Anthropic API, and shareable audit URLs with Open Graph previews. Built as a lead-generation tool for Credex.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Anthropic API', 'Resend', 'Tailwind CSS'],
    points: [
      'Built a complete fullstack product in 7 days — audit engine, Supabase database, transactional email, AI summary, and shareable URLs all working end-to-end',
      'Integrated Anthropic API for AI-generated personalized audit summaries with graceful fallback to templated summaries',
      'Achieved Lighthouse mobile scores of 90 Performance, 94 Accessibility, 100 Best Practices, 100 SEO',
    ],
    live: 'https://stacksavings.vercel.app',
    github: 'https://github.com/oladapo-elegbede/stacksavings',
    featured: true,
  },


  {
    id: 2,
    title: '363 Car & Social Club',
    role: 'Frontend Developer',
    description: 'A premium luxury automotive club website with membership tiers, video hero background, contact form, login and signup pages. Built for car enthusiasts with a sleek dark design and smooth animations throughout.',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    points: [
      'Built a multi-page luxury website with video hero background, membership tiers ($2,500–$10,000/month), and full navigation',
      'Implemented contact form, login and signup pages with clean responsive layout across all screen sizes',
      'Designed premium dark-themed UI with smooth scroll animations and professional automotive aesthetic',
    ],
    live: 'https://365automotive.vercel.app',
    github: 'https://github.com/oladapo-elegbede/Automative365',
    featured: false,
  },
  {
    id: 2,
    title: 'Food Ordering Landing Page',
    role: 'Frontend Developer',
    description: 'A fully responsive food ordering platform with real-time cart functionality and payment integration via bank card and bank transfer. Built with vanilla JavaScript with mobile first responsive design.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    points: [
      'Built real-time cart functionality with vanilla JavaScript without any frameworks or libraries',
      'Implemented payment flow supporting bank card and bank transfer options',
      'Designed mobile-first responsive layout using CSS Flexbox and Grid for all screen sizes',
    ],
    live: 'https://foodlandng.netlify.app',
    github: 'https://github.com/oladapo-elegbede/foodlanding',
    featured: false,
  },
  {
    id: 3,
    title: 'Demo Bitcoin Project',
    role: 'Frontend Developer',
    description: 'A responsive cryptocurrency trading dashboard with wallet-style UI and real-time price display. Features a professional dark themed modern interface with smooth animations.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Dark Theme'],
    points: [
      'Built wallet-style UI with real-time cryptocurrency price display sections',
      'Implemented professional dark themed dashboard interface with modern design',
      'Created smooth animations and hover transitions throughout the application',
    ],
    live: 'https://crytotrading.netlify.app',
    github: 'https://github.com/oladapo-elegbede/crytotrading',
    featured: false,
  },
  {
    id: 4,
    title: 'Business Solution Agency',
    role: 'Frontend Developer',
    description: 'A full multi-section business agency website with scroll animations, responsive navigation, portfolio gallery, testimonials and contact form. Clean professional design.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Animations'],
    points: [
      'Built multi-section agency website with smooth scroll animations throughout',
      'Implemented fully responsive navigation menu and portfolio gallery section',
      'Created testimonials section and fully functional contact form with validation',
    ],
    live: 'https://businesssolutiona.netlify.app',
    github: 'https://github.com/oladapo-elegbede/businesssolution',
    featured: false,
  },
]

const Projects = () => {
  return (
    <section style={{background: '#f5f0eb', padding: '80px 20px'}}>
      <div style={{maxWidth: '900px', margin: '0 auto'}}>

        <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6}} viewport={{once: true}} style={{marginBottom: '60px'}}>
          <h2 style={{color: '#1a1a1a', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '12px'}}>Featured Work</h2>
          <p style={{color: '#666', fontSize: '1.1rem'}}>Selected projects that define my development journey.</p>
        </motion.div>

        <div style={{display: 'flex', flexDirection: 'column', gap: '40px'}}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: index * 0.1}}
              viewport={{once: true}}
              style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: project.featured ? '0 8px 40px rgba(200,149,108,0.2)' : '0 4px 20px rgba(0,0,0,0.06)',
                border: project.featured ? '2px solid #c8956c' : 'none',
              }}
            >
              {project.featured && (
                <div style={{background: '#c8956c', padding: '8px 20px', textAlign: 'center'}}>
                  <span style={{color: 'white', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em'}}>⭐ FEATURED PROJECT</span>
                </div>
              )}

              <div style={{width: '100%', height: '280px', overflow: 'hidden'}}>
                <img src={project.image} alt={project.title} style={{width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease'}} />
              </div>

              <div style={{padding: '32px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px'}}>
                  <div>
                    <p style={{color: '#c8956c', fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '4px'}}>{project.title}</p>
                    <p style={{color: '#888', fontSize: '0.9rem'}}>{project.role}</p>
                  </div>
                  <div style={{display: 'flex', gap: '10px'}}>
                    <a href={project.live} target="_blank" rel="noreferrer" style={{width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#333', background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
                      <FiExternalLink size={17} />
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer" style={{width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#333', background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
                      <FiGithub size={17} />
                    </a>
                  </div>
                </div>

                <p style={{color: '#555', fontSize: '1rem', lineHeight: 1.7, marginBottom: '20px'}}>{project.description}</p>

                <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px'}}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{background: '#f5f0eb', color: '#c8956c', padding: '4px 14px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '500', border: '1px solid #e8ddd4'}}>
                      {tag}
                    </span>
                  ))}
                </div>

                <ul style={{listStyleType: 'disc', paddingLeft: '20px', margin: 0}}>
                  {project.points.map((point, i) => (
                    <li key={i} style={{color: '#444', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '8px', paddingLeft: '4px'}}>
                      {point}
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects