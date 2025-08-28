import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Briefcase, GraduationCap } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      type: "internship",
      title: "AI-ML Virtual Internship",
      period: "07/2024 – 09/2024",
      description: "Built predictive models using supervised & unsupervised ML algorithms. Evaluated models with accuracy, precision, recall. Designed visualizations with Matplotlib & Seaborn.",
      skills: ["Machine Learning", "Python", "Data Visualization", "Model Evaluation"]
    },
    {
      type: "internship",
      title: "Data Science Using Python Internship",
      period: "05/2025 – 06/2025", 
      description: "Worked on preprocessing, visualization, and ML tasks with real datasets. Applied regression & classification models for prediction.",
      skills: ["Data Science", "Python", "Data Preprocessing", "Regression", "Classification"]
    }
  ]

  const education = {
    degree: "B.Tech in AI & ML",
    institution: "Srinivasa Institute of Engineering and Technology",
    period: "2022–2026",
    cgpa: "8.3/10"
  }

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-warm">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on learning and practical application
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary text-primary-foreground">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Professional Experience</h3>
            </div>

            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0 animate-fadeIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {exp.title}
                      </h4>
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <CalendarDays size={16} />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
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
            ))}
          </div>

          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-accent text-accent-foreground">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0 animate-fadeIn">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-hero rounded-full flex items-center justify-center mb-6 group-hover:animate-bounce-soft">
                    <GraduationCap size={32} className="text-white" />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {education.degree}
                  </h4>
                  
                  <p className="text-lg text-muted-foreground font-medium">
                    {education.institution}
                  </p>
                  
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <CalendarDays size={16} />
                    <span className="font-medium">{education.period}</span>
                  </div>
                  
                  <div className="pt-4">
                    <Badge 
                      variant="outline" 
                      className="text-lg px-4 py-2 bg-primary/10 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      CGPA: {education.cgpa}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience