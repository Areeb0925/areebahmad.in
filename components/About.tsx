export default function About() {
  return (
    <section id="about" className="section-container bg-gray-50 -mx-4 px-4">
      <h2 className="heading-md mb-12 text-center">About Me</h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
        <div>
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Social Media Marketing Expert</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            I'm a Social Media Marketer with 2+ years of hands-on experience building and leading company social media initiatives. I specialize in creating data-driven content strategies that drive engagement, grow followers, and build authentic communities.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            With a background in Talent Acquisition and Employer Branding, I bring a unique perspective to brand storytelling and community management.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I'm passionate about transitioning into a dedicated Social Media Marketing role where I can contribute, learn, and grow in a fast-paced, digital-first environment.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-6 text-blue-600">Key Highlights</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl font-bold">📱</span>
              <div>
                <p className="font-semibold">Instagram Growth</p>
                <p className="text-gray-600 text-sm">0 → 313k+ followers</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl font-bold">🔗</span>
              <div>
                <p className="font-semibold">LinkedIn Growth</p>
                <p className="text-gray-600 text-sm">0 → 38k+ followers</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl font-bold">📊</span>
              <div>
                <p className="font-semibold">Content Production</p>
                <p className="text-gray-600 text-sm">4-6 reels/week, 100k+ views</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl font-bold">👥</span>
              <div>
                <p className="font-semibold">Community Engagement</p>
                <p className="text-gray-600 text-sm">Day-to-day engagement & relationship building</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
