export default function Experience() {
  const experiences = [
    {
      role: "Social Media Manager",
      company: "Newton School of Technology",
      period: "Jan 2023 - Present",
      highlights: [
        "Built Instagram from 0 to 313k+ followers",
        "Created 4-6 reels per week averaging 100k+ views",
        "Managed day-to-day community engagement and relationship building",
        "Developed data-driven content strategies",
        "Collaborated with product and marketing teams on brand initiatives"
      ]
    },
    {
      role: "Talent Acquisition & Employer Branding Specialist",
      company: "Newton School of Technology",
      period: "Jul 2022 - Dec 2022",
      highlights: [
        "Managed LinkedIn company page growth (0 to 38k+ followers)",
        "Created employer branding content and campaigns",
        "Supported recruitment initiatives through social media",
        "Built employer brand awareness and company culture narrative",
        "Conducted social media analytics and reporting"
      ]
    }
  ]

  return (
    <section id="experience" className="section-container">
      <h2 className="heading-md mb-12 text-center">Experience</h2>
      
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 last:mb-0">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-blue-600">{exp.role}</h3>
                <p className="text-lg text-gray-600">{exp.company}</p>
              </div>
              <span className="text-gray-500 font-semibold whitespace-nowrap">{exp.period}</span>
            </div>
            
            <ul className="space-y-2">
              {exp.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <span className="text-blue-600 font-bold mt-1">▸</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            
            {index < experiences.length - 1 && (
              <div className="mt-12 pt-12 border-t border-gray-200"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
