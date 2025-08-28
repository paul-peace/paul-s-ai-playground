import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Code, 
  Globe, 
  BarChart3, 
  Wrench, 
  Brain,
  Users,
  Clock,
  Eye,
  Zap,
  Languages
} from "lucide-react"

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming",
      skills: ["Python", "C", "Java"],
      color: "bg-accent"
    },
    {
      icon: Globe,
      title: "Web Development", 
      skills: ["HTML", "CSS", "JavaScript"],
      color: "bg-primary"
    },
    {
      icon: BarChart3,
      title: "Data Science & ML",
      skills: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
      color: "bg-accent"
    },
    {
      icon: Wrench,
      title: "Tools",
      skills: ["Jupyter Notebook", "VS Code", "Git", "ChatGPT"],
      color: "bg-primary"
    },
    {
      icon: Brain,
      title: "Core Strengths",
      skills: ["Problem-solving", "Analytical thinking", "Team collaboration"],
      color: "bg-accent"
    }
  ]

  const softSkills = [
    { icon: Users, label: "Communication" },
    { icon: Clock, label: "Time Management" },
    { icon: Eye, label: "Attention to Detail" },
    { icon: Zap, label: "Quick Learning & Adaptability" }
  ]

  const languages = [
    { language: "English", level: "Proficient" },
    { language: "Telugu", level: "Native" }
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent solutions and engaging experiences
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card 
                key={category.title}
                className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl ${category.color} text-white group-hover:animate-bounce-soft`}>
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Soft Skills & Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Soft Skills */}
          <Card className="bg-gradient-card border-0 shadow-soft">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary text-primary-foreground">
                  <Brain size={24} />
                </div>
                <h3 className="text-2xl font-semibold">Soft Skills</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {softSkills.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <div 
                      key={skill.label}
                      className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                    >
                      <Icon size={20} className="text-primary group-hover:animate-bounce-soft" />
                      <span className="font-medium">{skill.label}</span>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card className="bg-gradient-card border-0 shadow-soft">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-accent text-accent-foreground">
                  <Languages size={24} />
                </div>
                <h3 className="text-2xl font-semibold">Languages</h3>
              </div>
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.language} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                    <span className="font-semibold">{lang.language}</span>
                    <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      {lang.level}
                    </Badge>
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

export default Skills