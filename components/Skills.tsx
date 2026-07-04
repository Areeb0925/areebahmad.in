export default function Skills() {
  const skillCategories = [
    {
      category: "Social Media Management",
      skills: ["Content Strategy", "Community Management", "Social Media Analytics", "Engagement Optimization", "Trend Analysis"]
    },
    {
      category: "Content Creation",
      skills: ["Reel Production", "Caption Writing", "Visual Design", "Storytelling", "Brand Messaging"]
    },
    {
      category: "Platforms & Tools",
      skills: ["Instagram", "LinkedIn", "Meta Business Suite", "Canva", "Google Analytics", "Buffer"]
    },
    {
      category: "Marketing Skills",
      skills: ["Employer Branding", "Campaign Management", "Audience Growth", "Performance Metrics", "Social Listening"]
    }
  ]

  return (
    <section id="skills" className="section-container bg-gray-50 -mx-4 px-4">
      <h2 className="heading-md mb-12 text-center">Skills & Expertise</h2>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-blue-600 mb-4">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span 
                  key={idx}
                  className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
