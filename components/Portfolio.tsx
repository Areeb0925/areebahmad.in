export default function Portfolio() {
  const projects = [
    {
      title: "Instagram Growth Strategy",
      description: "Built Newton School's Instagram presence from 0 to 313k+ followers with data-driven content strategy",
      metrics: ["313k+ Followers", "100k+ Avg Views/Reel", "4-6 Reels/Week"],
      technologies: ["Instagram", "Meta Analytics", "Content Strategy"]
    },
    {
      title: "LinkedIn Employer Branding",
      description: "Developed comprehensive employer branding strategy and grew LinkedIn company page to 38k+ followers",
      metrics: ["38k+ Followers", "Employer Brand Awareness", "Talent Acquisition Support"],
      technologies: ["LinkedIn", "Employer Branding", "Recruitment Marketing"]
    },
    {
      title: "Community Management",
      description: "Day-to-day community engagement and relationship building across social media platforms",
      metrics: ["High Engagement Rate", "Active Community", "Brand Loyalty"],
      technologies: ["Community Management", "Engagement Strategy", "Social Listening"]
    },
    {
      title: "Content Production Pipeline",
      description: "Established efficient content creation and publishing workflow for consistent social media presence",
      metrics: ["Weekly Content", "On-Brand Messaging", "Trend Integration"],
      technologies: ["Canva", "Video Editing", "Content Calendars"]
    }
  ]

  return (
    <section id="portfolio" className="section-container">
      <h2 className="heading-md mb-12 text-center">Portfolio & Projects</h2>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-600 mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-600 mb-2">Key Metrics</h4>
                <div className="flex flex-wrap gap-2">
                  {project.metrics.map((metric, idx) => (
                    <span key={idx} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-600 mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
