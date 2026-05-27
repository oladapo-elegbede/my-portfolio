import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiUser, FiMail, FiMessageSquare, FiCheckCircle } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !message) {
      setError('Please fill in all fields.')
      return
    }
    setLoading(true)
    setError('')
    try {
      await emailjs.send(
        'service_0m2z0hj',
        'template_12pcqym',
        {
          name: name,
          email: email,
          message: message,
          title: 'Portfolio Contact',
        },
        'XVbqwYVTgbMb0qswR'
      )
      setSuccess(true)
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section style={{background: '#fff', padding: '70px 20px'}}>
      <div style={{maxWidth: '600px', margin: '0 auto'}}>

        <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6}} viewport={{once: true}} style={{textAlign: 'center', marginBottom: '40px'}}>
          <h2 style={{color: '#1a1a1a', fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '14px'}}>Let's Work Together</h2>
          <p style={{color: '#666', fontSize: '0.95rem', lineHeight: 1.7}}>I'm currently open to new opportunities in fullstack engineering. Have a project in mind? Let's bring your ideas to life!</p>
        </motion.div>

        <motion.div initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6, delay: 0.2}} viewport={{once: true}} style={{background: '#f5f0eb', borderRadius: '24px', padding: '40px'}}>

          {success ? (
            <div style={{textAlign: 'center', padding: '40px 0'}}>
              <FiCheckCircle size={48} color="#c8956c" style={{marginBottom: '16px'}} />
              <h3 style={{color: '#1a1a1a', fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '8px'}}>Message Sent! 🎉</h3>
              <p style={{color: '#666', fontSize: '0.95rem', marginBottom: '24px'}}>Thanks for reaching out! I'll get back to you within 24 hours.</p>
              <button onClick={() => setSuccess(false)} style={{padding: '12px 28px', background: '#c8956c', color: 'white', border: 'none', borderRadius: '12px', fontSize: '0.9rem', fontWeight: '600', cursor: 'pointer'}}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit}>
              <div style={{marginBottom: '20px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px'}}>
                  <FiUser size={16} color="#c8956c" />
                  <label style={{color: '#1a1a1a', fontWeight: '600', fontSize: '0.9rem'}}>Your Name</label>
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  style={{width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e8ddd4', background: 'white', fontSize: '0.9rem', color: '#333', outline: 'none', boxSizing: 'border-box'}}
                />
              </div>

              <div style={{marginBottom: '20px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px'}}>
                  <FiMail size={16} color="#c8956c" />
                  <label style={{color: '#1a1a1a', fontWeight: '600', fontSize: '0.9rem'}}>Your Email</label>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  style={{width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e8ddd4', background: 'white', fontSize: '0.9rem', color: '#333', outline: 'none', boxSizing: 'border-box'}}
                />
              </div>

              <div style={{marginBottom: '28px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px'}}>
                  <FiMessageSquare size={16} color="#c8956c" />
                  <label style={{color: '#1a1a1a', fontWeight: '600', fontSize: '0.9rem'}}>Your Message</label>
                </div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  rows={5}
                  style={{width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e8ddd4', background: 'white', fontSize: '0.9rem', color: '#333', outline: 'none', boxSizing: 'border-box', resize: 'vertical', fontFamily: 'inherit'}}
                />
              </div>

              {error && (
                <p style={{color: 'red', fontSize: '0.85rem', marginBottom: '16px'}}>{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                style={{width: '100%', padding: '14px', background: '#c8956c', color: 'white', border: 'none', borderRadius: '12px', fontSize: '0.95rem', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', opacity: loading ? 0.7 : 1}}
              >
                <FiSend size={16} />
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}

        </motion.div>

      </div>
    </section>
  )
}

export default Contact