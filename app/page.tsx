"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Code, Palette, Database, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true) // Default to dark mode
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") !== "false" // Default to true unless explicitly set to false
    setDarkMode(isDark)
    document.documentElement.classList.toggle("dark", isDark)

    // Trigger animations after component mounts
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem("darkMode", newDarkMode.toString())
    document.documentElement.classList.toggle("dark", newDarkMode)
  }

  const skills = [
    { name: "JavaScript", icon: Code },
    { name: "React", icon: Code },
    { name: "Next.js", icon: Globe },
    { name: "Node.js", icon: Database },
    { name: "Python", icon: Code },
    { name: "Django", icon: Code },
    { name: "HTML", icon: Code },
    { name: "CSS", icon: Palette },
    { name: "C++", icon: Code },
    { name: "Tailwind CSS", icon: Palette },
    { name: "MongoDB", icon: Database },
    { name: "SQL", icon: Database },
  ]

  const tools = [
    { name: "VS Code", icon: Code },
    { name: "GitHub", icon: Github },
    { name: "Sublime Text", icon: Code },
    { name: "Replit", icon: Globe },
    { name: "Figma", icon: Palette },
    { name: "Git", icon: Database },
  ]

  const projects = [
    {
      title: "BinkeyIt - Full Stack E-Commerce",
      description:
        "A comprehensive full-stack e-commerce platform with modern UI/UX, featuring product catalog, shopping cart, user authentication, and payment integration. Built with scalable architecture and responsive design.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
      github: "https://github.com/rugved-23/binkeyit-full-stack",
      demo: "https://binkeyit-full-stack-ydrn.vercel.app/",
    },
    {
      title: "FoodCart - Zomato Clone",
      description:
        "A feature-rich food delivery platform inspired by Zomato, with restaurant listings, menu browsing, cart functionality, and location-based services. Includes user reviews and ratings system.",
      tech: ["React", "Next.js", "JavaScript", "CSS3", "API Integration", "Vercel"],
      github: "https://github.com/rugved-23/zomato-clone",
      demo: "https://v0-zomato-e-commerce-site.vercel.app/",
    },
    {
      title: "AutoConsult - Car Consulting Website",
      description:
        "A professional car consulting platform offering expert automotive advice, vehicle recommendations, and consultation services. Features modern design with interactive elements and contact forms.",
      tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion", "Vercel"],
      github: "https://github.com/rugved-23/car-consulting",
      demo: "https://v0-car-consulting-website.vercel.app/",
    },
  ]

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? "dark" : ""}`}>
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-700 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div
                className={`text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
              >
                Rugved Salpekar
              </div>
              <div
                className={`flex items-center space-x-4 transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleDarkMode}
                  className="rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
                >
                  {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-blue-400" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open("https://github.com/rugved-23", "_blank")}
                  className="rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:text-blue-400"
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/rugved-salpekar-506733286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                      "_blank",
                    )
                  }
                  className="rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:text-blue-400"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1
              className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x bg-300% animate-pulse">
                Rugved Salpekar
              </span>
            </h1>
            <p
              className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              Full Stack Developer & Software Engineer passionate about creating innovative web solutions and bringing
              ideas to life through code. I'm a passionate learner always keen on improving my skills in programming and
              eager to increase my knowledge in problem solving, Backend Development, Frontend Development and
              Artificial Intelligence.
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 animate-pulse-slow"
                onClick={() => window.open("mailto:rugvedsalpekar@example.com", "_blank")}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">About Me</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
                I'm a passionate learner always keen on improving my skills in programming and eager to increase my
                knowledge in problem solving, Backend Development, Frontend Development and Artificial Intelligence.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left">
                <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                <p className="text-gray-300 mb-4">
                  As a dedicated Full Stack Developer, I specialize in creating innovative web solutions that bridge the
                  gap between complex backend systems and intuitive user interfaces. My passion for technology drives me
                  to continuously explore new frameworks and methodologies.
                </p>
                <p className="text-gray-300 mb-6">
                  With hands-on experience in both frontend and backend development, I focus on building scalable
                  applications while constantly expanding my expertise in emerging technologies like Artificial
                  Intelligence and modern development practices.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="animate-bounce-in animation-delay-300">
                    Problem Solver
                  </Badge>
                  <Badge variant="secondary" className="animate-bounce-in animation-delay-500">
                    Full Stack Developer
                  </Badge>
                  <Badge variant="secondary" className="animate-bounce-in animation-delay-700">
                    AI Enthusiast
                  </Badge>
                  <Badge variant="secondary" className="animate-bounce-in animation-delay-1000">
                    Continuous Learner
                  </Badge>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 animate-fade-in-right">
                <Card className="bg-gray-700/50 border-gray-600 hover:bg-gray-600/50 transition-all duration-300 hover:scale-105 animate-float">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2 animate-count-up">50+</div>
                    <div className="text-sm text-gray-300">Projects Completed</div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-700/50 border-gray-600 hover:bg-gray-600/50 transition-all duration-300 hover:scale-105 animate-float animation-delay-200">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2 animate-count-up">3+</div>
                    <div className="text-sm text-gray-300">Years Experience</div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-700/50 border-gray-600 hover:bg-gray-600/50 transition-all duration-300 hover:scale-105 animate-float animation-delay-400">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2 animate-count-up">100+</div>
                    <div className="text-sm text-gray-300">GitHub Commits</div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-700/50 border-gray-600 hover:bg-gray-600/50 transition-all duration-300 hover:scale-105 animate-float animation-delay-600">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                    <div className="text-sm text-gray-300">Learning Mode</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">Professional Experience</h2>
              <p className="text-xl text-gray-300 animate-fade-in-up animation-delay-200">
                My journey in the tech industry and professional growth
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-gray-800/50 border-gray-600 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 animate-fade-in-up group">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        Django Developer
                      </h3>
                      <p className="text-xl text-blue-400 font-semibold">Bosch Limited, Nashik</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <Badge variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/20">
                        Current Position
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-3 text-gray-300">
                    <p className="leading-relaxed">
                      • Developing robust web applications using Django framework with focus on scalability and
                      performance
                    </p>
                    <p className="leading-relaxed">
                      • Implementing RESTful APIs and integrating third-party services to enhance application
                      functionality
                    </p>
                    <p className="leading-relaxed">
                      • Collaborating with cross-functional teams to deliver high-quality software solutions
                    </p>
                    <p className="leading-relaxed">
                      • Working with databases, optimizing queries, and ensuring data integrity across applications
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="animate-bounce-in animation-delay-300">
                      Django
                    </Badge>
                    <Badge variant="secondary" className="animate-bounce-in animation-delay-400">
                      Python
                    </Badge>
                    <Badge variant="secondary" className="animate-bounce-in animation-delay-500">
                      REST APIs
                    </Badge>
                    <Badge variant="secondary" className="animate-bounce-in animation-delay-600">
                      Database Design
                    </Badge>
                    <Badge variant="secondary" className="animate-bounce-in animation-delay-700">
                      Web Development
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">Education</h2>
              <p className="text-xl text-gray-300 animate-fade-in-up animation-delay-200">
                My academic journey and continuous learning path
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {/* B.Tech */}
              <Card className="bg-gray-700/50 border-gray-600 hover:bg-gray-600/50 transition-all duration-300 hover:scale-105 animate-fade-in-up group">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        Bachelor of Technology (B.Tech) in Computer Science
                      </h3>
                      <p className="text-xl text-blue-400 font-semibold">
                        G H Raisoni College of Engineering and Management, Nagpur
                      </p>
                      <p className="text-gray-300 mt-1">Nagpur, Maharashtra</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <Badge variant="outline" className="border-green-400 text-green-400 hover:bg-green-400/20">
                        CGPA: 7.14
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="leading-relaxed">
                      • Acquired a strong foundation in core computer science principles, including advanced algorithms,
                      data structures, and software development methodologies.
                    </p>
                    <p className="leading-relaxed">
                      • Engaged in practical projects focusing on full-stack development, database management, and
                      system design.
                    </p>
                    <p className="leading-relaxed">
                      • Developed robust problem-solving skills through rigorous coursework and hands-on coding
                      challenges.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="animate-bounce-in animation-delay-300">
                      Computer Science
                    </Badge>
                    <Badge variant="secondary" className="animate-bounce-in animation-delay-400">
                      Software Development
                    </Badge>
                    <Badge variant="secondary" className="animate-bounce-in animation-delay-500">
                      Algorithms
                    </Badge>
                    <Badge variant="secondary" className="animate-bounce-in animation-delay-600">
                      Database Systems
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Senior Schooling */}
              <Card className="bg-gray-700/50 border-gray-600 hover:bg-gray-600/50 transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-200 group">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                        Senior Secondary Schooling
                      </h3>
                      <p className="text-xl text-purple-400 font-semibold">Sri Chaitanya Jr College, Hyderabad</p>
                      <p className="text-gray-300 mt-1">Hyderabad, Telangana</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <Badge variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400/20">
                        Percentage: 94%
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="leading-relaxed">
                      • Achieved excellent academic performance with a strong focus on science and mathematics.
                    </p>
                    <p className="leading-relaxed">
                      • Developed foundational analytical and critical thinking skills crucial for higher education in
                      engineering.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="animate-bounce-in animation-delay-300">
                      Science Stream
                    </Badge>
                    <Badge variant="secondary" className="animate-bounce-in animation-delay-400">
                      Academic Excellence
                    </Badge>
                    <Badge variant="secondary" className="animate-bounce-in animation-delay-500">
                      Analytical Skills
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Schooling */}
              <Card className="bg-gray-700/50 border-gray-600 hover:bg-gray-600/50 transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-400 group">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                        Schooling
                      </h3>
                      <p className="text-xl text-yellow-400 font-semibold">ST. ANNE'S PUBLIC SCHOOL, Warora</p>
                      <p className="text-gray-300 mt-1">Warora, Maharashtra</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <Badge variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/20">
                        Percentage: 86%
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="leading-relaxed">
                      • Cultivated a strong academic foundation across various subjects, fostering a holistic learning
                      approach.
                    </p>
                    <p className="leading-relaxed">
                      • Participated in extracurricular activities, developing teamwork and leadership qualities.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="animate-bounce-in animation-delay-300">
                      Foundational Learning
                    </Badge>
                    <Badge variant="secondary" className="animate-bounce-in animation-delay-400">
                      Holistic Development
                    </Badge>
                    <Badge variant="secondary" className="animate-bounce-in animation-delay-500">
                      Teamwork
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">Skills & Technologies</h2>
              <p className="text-xl text-gray-300 animate-fade-in-up animation-delay-200">
                Here are the technologies I work with to bring ideas to life
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon
                return (
                  <Card
                    key={index}
                    className={`bg-gray-800/50 border-gray-600 hover:bg-gray-700/50 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110 animate-fade-in-up cursor-pointer group`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6 text-center">
                      <IconComponent className="h-12 w-12 mx-auto mb-4 text-blue-400 group-hover:text-purple-400 transition-colors duration-300 group-hover:animate-bounce" />
                      <h3 className="font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </h3>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">Tools & Platforms</h2>
              <p className="text-xl text-gray-300 animate-fade-in-up animation-delay-200">
                Development tools and platforms I use to build amazing projects
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {tools.map((tool, index) => {
                const IconComponent = tool.icon
                return (
                  <Card
                    key={index}
                    className={`bg-gray-700/50 border-gray-600 hover:bg-gray-600/50 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110 animate-fade-in-up cursor-pointer group`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6 text-center">
                      <IconComponent className="h-12 w-12 mx-auto mb-4 text-purple-400 group-hover:text-pink-400 transition-colors duration-300 group-hover:animate-bounce" />
                      <h3 className="font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
                        {tool.name}
                      </h3>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Enhanced Tech Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-95"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 text-6xl text-blue-400 animate-float">{"<>"}</div>
            <div className="absolute top-20 right-20 text-4xl text-green-400 animate-float animation-delay-1000">
              {"{ }"}
            </div>
            <div className="absolute bottom-20 left-20 text-5xl text-purple-400 animate-float animation-delay-2000">
              {"</>"}
            </div>
            <div className="absolute bottom-10 right-10 text-3xl text-yellow-400 animate-float animation-delay-3000">
              {"[]"}
            </div>
            <div className="absolute top-1/2 left-1/4 text-2xl text-pink-400 animate-pulse">{"()"}</div>
            <div className="absolute top-1/3 right-1/3 text-4xl text-cyan-400 animate-spin-slow">{"#"}</div>
            <div className="absolute bottom-1/3 left-1/2 text-3xl text-orange-400 animate-bounce-slow">{"$"}</div>
            <div className="absolute top-3/4 right-1/4 text-2xl text-red-400 animate-pulse animation-delay-2000">
              {"@"}
            </div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-white animate-fade-in-up">Featured Projects</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
                Explore my latest work - from e-commerce platforms to food delivery apps, each project showcases modern
                web development practices
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className={`hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white/10 backdrop-blur-sm border-gray-700 hover:bg-white/20 group animate-fade-in-up hover:border-blue-400`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-white group-hover:text-blue-400 transition-colors duration-300">
                      <span className="text-lg">{project.title}</span>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => window.open(project.github, "_blank")}
                          className="text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => window.open(project.demo, "_blank")}
                          className="text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardTitle>
                    <CardDescription className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="border-gray-600 text-gray-200 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in"
                          style={{ animationDelay: `${techIndex * 50}ms` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => window.open(project.demo, "_blank")}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex-1 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.github, "_blank")}
                        className="border-gray-600 text-gray-200 hover:bg-white/20 hover:text-white transition-all duration-300 hover:scale-105 hover:border-blue-400"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16 animate-fade-in-up animation-delay-1000">
              <p className="text-gray-300 mb-6 text-lg">Want to see more of my work?</p>
              <Button
                size="lg"
                onClick={() => window.open("https://github.com/rugved-23", "_blank")}
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 animate-pulse-slow"
              >
                <Github className="mr-2 h-5 w-5" />
                View All Projects on GitHub
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">Let's Work Together</h2>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in-up animation-delay-200">
              I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can
              bring your ideas to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                onClick={() => window.open("mailto:rugvedsalpekar@example.com", "_blank")}
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/rugved-salpekar-506733286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                    "_blank",
                  )
                }
                className="border-gray-600 text-gray-200 hover:bg-white/20 hover:text-white transition-all duration-300 hover:scale-105 hover:border-blue-400"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-700">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center space-x-4 mt-4 animate-fade-in animation-delay-200">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open("https://github.com/rugved-23", "_blank")}
                className="hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:text-blue-400"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/rugved-salpekar-506733286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                    "_blank",
                  )
                }
                className="hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:text-blue-400"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
