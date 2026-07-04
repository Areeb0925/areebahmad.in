import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32">
      <div className="section-container">
        <div className="max-w-2xl">
          <div className="mb-6 inline-block">
            <span className="text-blue-200 text-sm font-semibold tracking-widest uppercase">
              Welcome to my portfolio
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Areeb Ahmad
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-4 font-light">
            Social Media Marketing Expert | Content Creator | Employer Branding Specialist
          </p>
          <p className="text-lg text-blue-100 mb-8 max-w-xl leading-relaxed">
            Transforming brands through strategic social media initiatives. 2+ years of proven experience building and scaling social media presence, with results that speak for themselves.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="#contact" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
              Get In Touch
            </Link>
            <a 
              href="https://www.linkedin.com/in/areeb-ahmad/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
