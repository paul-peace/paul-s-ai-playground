import { Button } from "@/components/ui/button"
import { Mail, Phone, Github, Linkedin } from "lucide-react"

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-warm px-4 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative group">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-card group-hover:shadow-glow transition-all duration-500">
              <img
                src="/lovable-uploads/366b35ee-11f7-485f-aa67-ee3e69bf804a.png"
                alt="Tirumani Vijay Paul - AI & ML Engineer"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute -inset-2 bg-gradient-hero rounded-full -z-10 opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-fadeIn">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Tirumani Vijay Paul
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                AI & ML Engineer | Data Science Enthusiast | Web Developer
              </p>
            </div>

            <div className="space-y-4 text-lg text-muted-foreground">
              <p className="max-w-2xl mx-auto lg:mx-0">
                "I'm a BTech student specializing in Artificial Intelligence and Machine Learning (2022–2026). 
                I enjoy solving real-world problems with AI, Data Science, and Web Development."
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
              <a 
                href="tel:+919121686675" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={16} />
                +91 91216 86675
              </a>
              <a 
                href="mailto:vijaypaultirumani@gmail.com" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={16} />
                vijaypaultirumani@gmail.com
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <Button variant="hero" size="lg" className="group">
                <Mail className="mr-2 h-4 w-4 group-hover:animate-bounce-soft" />
                Contact Me
              </Button>
              <Button variant="outline-hero" size="lg" asChild>
                <a href="https://github.com/Paul-pi-rate" target="_blank" rel="noopener noreferrer" className="group">
                  <Github className="mr-2 h-4 w-4 group-hover:animate-bounce-soft" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline-hero" size="lg" asChild>
                <a href="https://linkedin.com/in/tirumani-vijay-paul-73b854323" target="_blank" rel="noopener noreferrer" className="group">
                  <Linkedin className="mr-2 h-4 w-4 group-hover:animate-bounce-soft" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero