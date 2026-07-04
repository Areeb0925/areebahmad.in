export default function Contact() {
  return (
    <section id="contact" className="section-container bg-gray-50 -mx-4 px-4">
      <h2 className="heading-md mb-12 text-center">Get In Touch</h2>
      
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <p className="text-gray-600 text-center mb-8 text-lg">
            I'm always interested in hearing about new opportunities and collaborations. 
            Feel free to reach out!
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-4">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <a href="mailto:areebahmad2501@gmail.com" className="text-blue-600 hover:underline text-lg">
                areebahmad2501@gmail.com
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-4">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.418 1.738 1.48 2.753 3.088 3.91 1.33 1.01 2.515 1.635 3.415 1.635.54 0 .74-.146.97-.376l1.053-1.176a1 1 0 011.302.172l4.vector 4.635a1 1 0 01.172 1.302l-2.396 2.396c-.129.129-.312.198-.5.198H15c-4.993 0-9.102-4.11-9.102-9.109 0-.576.04-1.020.104-1.472.062-.425.047-.776-.181-1.003L2.3 4.622A1 1 0 012 3.74V3z"></path>
              </svg>
              <a href="tel:+917888277507" className="text-blue-600 hover:underline text-lg">
                +91 7888277507
              </a>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600 mb-6 font-semibold">Connect With Me</p>
            <div className="flex justify-center gap-6">
              <a 
                href="https://linkedin.com/in/areebahmad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition"
                aria-label="LinkedIn"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
              
              <a 
                href="https://instagram.com/areebahmad.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition"
                aria-label="Instagram"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.25c5.385 0 9.75 4.365 9.75 9.75S17.385 21.75 12 21.75 2.25 17.385 2.25 12 6.615 2.25 12 2.25zm0 1.5c-4.557 0-8.25 3.693-8.25 8.25s3.693 8.25 8.25 8.25 8.25-3.693 8.25-8.25-3.693-8.25-8.25-8.25zm3.75 8.25c0 2.071-1.679 3.75-3.75 3.75s-3.75-1.679-3.75-3.75 1.679-3.75 3.75-3.75 3.75 1.679 3.75 3.75zm-6 0c0 1.24 1.01 2.25 2.25 2.25s2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25-2.25 1.01-2.25 2.25z"/>
                </svg>
              </a>
              
              <a 
                href="https://twitter.com/areebahmad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition"
                aria-label="Twitter"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
