import { Github, Linkedin, Mail, Heart } from "lucide-react"

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-gradient-warm border-t border-border/50">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Paul-pi-rate"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 group"
            >
              <Github size={20} className="group-hover:animate-bounce-soft" />
            </a>
            <a
              href="https://linkedin.com/in/tirumani-vijay-paul-73b854323"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-accent/10 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin size={20} className="group-hover:animate-bounce-soft" />
            </a>
            <a
              href="mailto:vijaypaultirumani@gmail.com"
              className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 group"
            >
              <Mail size={20} className="group-hover:animate-bounce-soft" />
            </a>
          </div>
          
          <div className="space-y-2 text-muted-foreground">
            <p className="flex items-center justify-center gap-2 text-sm">
              Made with <Heart size={16} className="text-primary animate-bounce-soft" fill="currentColor" /> by Tirumani Vijay Paul
            </p>
            <p className="text-xs">
              © 2024 All rights reserved. Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer