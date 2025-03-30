import { Briefcase, Code, Mail, MapPin, Phone, User } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import ExperienceTimeline from "@/components/experience-timeline";
import SkillsSection from "@/components/skills-section";
import ContactForm from "@/components/contact-form";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Şafak Sönmez
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary"
            >
              About
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium hover:text-primary"
            >
              Experience
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-primary"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild className="hidden md:flex">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <section className="py-12 md:py-20 flex flex-col items-center text-center">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-6 border-4 border-primary">
            <img
              src="/ghibli.png"
              alt="Şafak Sönmez"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Şafak Sönmez
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Backend Developer & Technical Lead
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin size={16} />
              <span>Istanbul, Turkey</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Mail size={16} />
              <span>info@safaksonmez.com</span>
            </div>
          </div>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link
                href="https://www.linkedin.com/in/safaksonmez/"
                target="_blank"
              >
                LinkedIn
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://github.com/safaksonmez" target="_blank">
                GitHub
              </Link>
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-20 border-t">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <User className="h-6 w-6" />
              About Me
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                I'm a seasoned Backend Developer and Technical Lead with
                extensive experience in Node.js, Golang, and Laravel. My
                expertise lies in designing and implementing robust backend
                architectures, integrating complex systems, and leading
                development teams to deliver high-performance solutions.
              </p>
              <p>
                Currently, I serve as the sole backend developer and technical
                lead at Incodi Software Development, where I'm responsible for
                the full backend architecture of a self-service portal for
                trading clients. I specialize in financial technology
                integrations, real-time data processing, and scalable
                infrastructure management.
              </p>
              <p>
                With a strong foundation in both traditional and serverless
                architectures, I bring a versatile skill set to any project,
                focusing on clean code, performance optimization, and seamless
                system integration.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 md:py-20 border-t">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Briefcase className="h-6 w-6" />
              Work Experience
            </h2>
            <ExperienceTimeline />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-20 border-t">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Code className="h-6 w-6" />
              Technical Skills
            </h2>
            <SkillsSection />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-20 border-t">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Mail className="h-6 w-6" />
              Get In Touch
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a
                      href="mailto:info@safaksonmez.com"
                      className="hover:text-primary"
                    >
                      info@safaksonmez.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="tel:+905422904842" className="hover:text-primary">
                      +90 542 290 4842
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Istanbul, Turkey</span>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Social Profiles
                  </h3>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        href="https://www.linkedin.com/in/safaksonmez/"
                        target="_blank"
                      >
                        LinkedIn
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        href="https://github.com/safaksonmez"
                        target="_blank"
                      >
                        GitHub
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://www.safaksonmez.com" target="_blank">
                        Website
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 bg-muted/40">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Şafak Sönmez. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="https://www.linkedin.com/in/safaksonmez/"
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/safaksonmez"
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
            >
              GitHub
            </Link>
            <Link
              href="https://www.safaksonmez.com"
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
            >
              Website
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
