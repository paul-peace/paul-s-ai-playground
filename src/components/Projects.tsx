import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, BarChart, Bot, CheckSquare, Award } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      icon: BarChart,
      title: "Area-to-Price Detection System",
      description: "Predicted property prices based on area using regression models. Built comprehensive machine learning pipeline with data preprocessing, feature engineering, and model evaluation.",
      tech: ["Python", "Machine Learning", "Regression", "Data Analysis"],
      github: "#",
      live: "#",
      color: "bg-primary"
    },
    {
      icon: Bot,
      title: "RatBot – AI Chat Assistant", 
      description: "Python chatbot built using OpenAI API for interactive queries. Features natural language processing and context-aware responses for enhanced user experience.",
      tech: ["Python", "OpenAI API", "NLP", "Chat Interface"],
      github: "#",
      live: "#",
      color: "bg-accent"
    },
    {
      icon: CheckSquare,
      title: "Interactive To-Do List Web App",
      description: "Responsive web app with task management, animations, and dark mode. Built with modern web technologies and smooth user interactions.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      github: "#",
      live: "#", 
      color: "bg-primary"
    }
  ]

  const certifications = [
    "Python for Data Science – NPTEL Certificate",
    "Deep Learning Fundamentals – EDX Certificate", 
    "Java Programming Fundamentals – Galileo",
    "HTML5, CSS, JavaScript – IBM",
    "HTML5 and CSS Fundamentals – W3Cx"
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Projects & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions and continuous learning achievements
          </p>
        </div>

        {/* Projects */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary text-primary-foreground">
              <BarChart size={20} />
            </div>
            Featured Projects
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <Card 
                  key={project.title}
                  className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-xl ${project.color} text-white group-hover:animate-bounce-soft`}>
                        <Icon size={24} />
                      </div>
                      <h4 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge 
                            key={tech}
                            variant="secondary"
                            className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1 group/btn"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-3 w-3 group-hover/btn:animate-bounce-soft" />
                            Code
                          </a>
                        </Button>
                        <Button 
                          variant="default" 
                          size="sm" 
                          className="flex-1 group/btn"
                          asChild
                        >
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-3 w-3 group-hover/btn:animate-bounce-soft" />
                            Live
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent text-accent-foreground">
              <Award size={20} />
            </div>
            Certifications & Achievements
          </h3>
          
          <Card className="bg-gradient-card border-0 shadow-soft">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={cert}
                    className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group animate-fadeIn"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-2 rounded-full bg-primary text-primary-foreground group-hover:animate-bounce-soft">
                      <Award size={16} />
                    </div>
                    <span className="font-medium text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Projects