"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Mail, Linkedin, ExternalLink, Calendar, Building } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"
import heroprofilepicture from "@/public/heroprofilepicture.jpg"
import infoprofile from "@/public/infoprofile.png"
import futebolCard from "@/public/futebolcard.png"
import anoto from "@/public/anoto.png"
import munizAutoCenter from "@/public/MunizAutoCenter.png"
import realCripto from "@/public/RealCripto.png"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <span>Your Name</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:underline underline-offset-4">
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
              Skills
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="hidden md:flex items-center gap-2">
              <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:your.email@example.com">
                <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <section className="mx-auto flex max-w-[980px] flex-col items-center gap-4 py-8 md:py-12 lg:py-16 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={heroprofilepicture}
              width={150}
              height={150}
              alt="Profile"
              className="rounded-full border-4 border-muted"
              priority
            />
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl"
          >
            Hi, I'm Matheus Alves
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-[700px] text-base text-muted-foreground md:text-lg"
          >
            A passionate developer focused on creating beautiful and functional web experiences.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-2"
          >
            <Button asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-8 md:py-12 scroll-mt-20">
          <FadeIn>
            <div className="mx-auto max-w-[980px]">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">About Me</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <FadeIn delay={0.2} direction="left">
                  <div>
                    <p className="mb-4 text-muted-foreground">
                      I am a Software Developer, I like working with different technologies, opening web projects 
                      based on a defined Design and developing applications: front-end, and back-end. 
                      I love studying Software Development.

                    </p>
                    <p className="text-muted-foreground">
                      When I'm not coding, you can find me exploring new technologies, contributing to open-source
                      projects, or enjoying outdoor activities.
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.3} direction="right">
                  <div className="flex items-center justify-center">
                    <Image
                      src={infoprofile}
                      width={400}
                      height={300}
                      alt="About me"
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="py-8 md:py-12 scroll-mt-20">
          <FadeIn>
            <div className="mx-auto max-w-[980px]">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">Work Experience</h2>
              <div className="space-y-8">
                <StaggerContainer className="space-y-8">
                  {/* Experience Item 1 */}
                  <StaggerItem>
                    <div className="relative pl-8 border-l-2 border-muted pb-8">
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
                      <div className="space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>dec 2024 - Present</span>
                          </div>
                        </div>
                        <div className="flex items-center text-base font-medium">
                          <Building className="mr-2 h-4 w-4" />
                          <span>FutebolCard.</span>
                        </div>
                        <p className="text-muted-foreground">
                          Developed payment systems and website automation systems using PHP (PHP5, PHP7, PHP8) and Zend Framework.
                          Improved transaction handling efficiency by optimizing existing codebases.
                          Collaborated with front-end teams to ensure seamless integration of backend services.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          <Badge>PHP 5.6</Badge>
                          <Badge>PHP 7</Badge>
                          <Badge>PHP 8</Badge>
                          <Badge>Zend Framework</Badge>
                          <Badge>Laravel 9</Badge>
                          <Badge>Docker</Badge>
                          <Badge>Docker compose</Badge>
                          <Badge>SQL Server</Badge>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>

                  {/* Experience Item 2 */}
                  <StaggerItem>
                    <div className="relative pl-8 border-l-2 border-muted pb-8">
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
                      <div className="space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>Nov 2023 - Present</span>
                          </div>
                        </div>
                        <div className="flex items-center text-base font-medium">
                          <Building className="mr-2 h-4 w-4" />
                          <span>Anoto.</span>
                        </div>
                        <p className="text-muted-foreground">
                        Created and maintained open-source projects with over 50 contributors.
                        Designed REST APIs for seamless integration with various applications.
                        Facilitated collaboration by implementing version control best practices using Git.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          <Badge>PHP 8</Badge>
                          <Badge>Laravel 12</Badge>
                          <Badge>Next.js</Badge>
                          <Badge>REST APIs</Badge>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>

                  {/* Experience Item 3 */}
                  <StaggerItem>
                    <div className="relative pl-8 border-l-2 border-muted">
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
                      <div className="space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>Jul 2023 - dec 2023</span>
                          </div>
                        </div>
                        <div className="flex items-center text-base font-medium">
                          <Building className="mr-2 h-4 w-4" />
                          <span>Muniz Auto Center.</span>
                        </div>
                        <p className="text-muted-foreground">
                          Developed responsive web applications using React and Vue.js, improving user experience and accessibility by 15%.
                          Implemented SEO best practices to increase website traffic by 20%.
                          Created CI/CD processes to streamline deployment workflows.Tags: React, HTML, CSS, JavaScript, Vue.js, Git, CI/CD.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          <Badge>HTML5</Badge>
                          <Badge>CSS3</Badge>
                          <Badge>JavaScript</Badge>
                          <Badge>Vue.js</Badge>
                          <Badge>CI/CD</Badge>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-8 md:py-12 scroll-mt-20">
          <FadeIn>
            <div className="mx-auto max-w-[1200px]">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">My Projects</h2>
              <StaggerContainer className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {/* Project 1 */}
                <StaggerItem>
                  <Card className="flex flex-col h-full">
                    <CardHeader className="p-4">
                      <div className="aspect-video overflow-hidden rounded-lg">
                        <Image
                          src={futebolCard}
                          width={350}
                          height={200}
                          alt="FutebolCard project"
                          className="h-full w-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardTitle>FutebolCard</CardTitle>
                      <CardDescription className="mt-2">
                        A brief description of your project. What it does, the problem it solves, and the technologies
                        used.
                      </CardDescription>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge>React</Badge>
                        <Badge>Next.js</Badge>
                        <Badge>Tailwind CSS</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between mt-auto">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link href="https://project1-demo.com" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </StaggerItem>

                {/* Project 2 */}
                <StaggerItem>
                  <Card className="flex flex-col h-full">
                    <CardHeader className="p-4">
                      <div className="aspect-video overflow-hidden rounded-lg">
                        <Image
                          src={anoto}
                          width={350}
                          height={200}
                          alt="Project 2"
                          className="h-full w-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardTitle>Anoto</CardTitle>
                      <CardDescription className="mt-2">
                        A brief description of your project. What it does, the problem it solves, and the technologies
                        used.
                      </CardDescription>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge>TypeScript</Badge>
                        <Badge>Node.js</Badge>
                        <Badge>MongoDB</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between mt-auto">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link href="https://project2-demo.com" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </StaggerItem>

                {/* Project 3 */}
                <StaggerItem>
                  <Card className="flex flex-col h-full">
                    <CardHeader className="p-4">
                      <div className="aspect-video overflow-hidden rounded-lg">
                        <Image
                          src={munizAutoCenter}
                          width={350}
                          height={200}
                          alt="Project 3"
                          className="h-full w-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardTitle>Project Name 3</CardTitle>
                      <CardDescription className="mt-2">
                        A brief description of your project. What it does, the problem it solves, and the technologies
                        used.
                      </CardDescription>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge>Vue.js</Badge>
                        <Badge>Firebase</Badge>
                        <Badge>Tailwind CSS</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between mt-auto">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="https://github.com/yourusername/project3" target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link href="https://project3-demo.com" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </StaggerItem>

                {/* Project 4 */}
                <StaggerItem>
                  <Card className="flex flex-col h-full">
                    <CardHeader className="p-4">
                      <div className="aspect-video overflow-hidden rounded-lg">
                        <Image
                          src={realCripto}
                          width={350}
                          height={200}
                          alt="Project 4"
                          className="h-full w-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardTitle>Project Name 4</CardTitle>
                      <CardDescription className="mt-2">
                        A brief description of your project. What it does, the problem it solves, and the technologies
                        used.
                      </CardDescription>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge>React</Badge>
                        <Badge>Node.js</Badge>
                        <Badge>MongoDB</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between mt-auto">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="https://github.com/yourusername/project4" target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link href="https://project4-demo.com" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </FadeIn>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-8 md:py-12 scroll-mt-20">
          <FadeIn>
            <div className="mx-auto max-w-[980px]">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">Skills & Technologies</h2>
              <StaggerContainer className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <StaggerItem>
                  <Card>
                    <CardHeader>
                      <CardTitle>Frontend</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Badge>HTML5</Badge>
                          <span className="text-sm text-muted-foreground">Expert</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>CSS3/SASS</Badge>
                          <span className="text-sm text-muted-foreground">Expert</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>JavaScript</Badge>
                          <span className="text-sm text-muted-foreground">Expert</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>React</Badge>
                          <span className="text-sm text-muted-foreground">Advanced</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>Next.js</Badge>
                          <span className="text-sm text-muted-foreground">Advanced</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>Tailwind CSS</Badge>
                          <span className="text-sm text-muted-foreground">Advanced</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </StaggerItem>

                <StaggerItem>
                  <Card>
                    <CardHeader>
                      <CardTitle>Backend</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Badge>Node.js</Badge>
                          <span className="text-sm text-muted-foreground">Advanced</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>Express</Badge>
                          <span className="text-sm text-muted-foreground">Advanced</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>MongoDB</Badge>
                          <span className="text-sm text-muted-foreground">Intermediate</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>PostgreSQL</Badge>
                          <span className="text-sm text-muted-foreground">Intermediate</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>Firebase</Badge>
                          <span className="text-sm text-muted-foreground">Intermediate</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>GraphQL</Badge>
                          <span className="text-sm text-muted-foreground">Beginner</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </StaggerItem>

                <StaggerItem>
                  <Card>
                    <CardHeader>
                      <CardTitle>Other</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Badge>Git/GitHub</Badge>
                          <span className="text-sm text-muted-foreground">Advanced</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>TypeScript</Badge>
                          <span className="text-sm text-muted-foreground">Advanced</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>Docker</Badge>
                          <span className="text-sm text-muted-foreground">Intermediate</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>CI/CD</Badge>
                          <span className="text-sm text-muted-foreground">Intermediate</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>Jest</Badge>
                          <span className="text-sm text-muted-foreground">Intermediate</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>Figma</Badge>
                          <span className="text-sm text-muted-foreground">Intermediate</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </FadeIn>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-8 md:py-12 scroll-mt-20">
          <FadeIn>
            <div className="mx-auto max-w-[980px]">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">Get In Touch</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <FadeIn delay={0.2} direction="left">
                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                        <p>your.email@example.com</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Linkedin className="h-5 w-5 text-muted-foreground" />
                        <p>linkedin.com/in/yourusername</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Github className="h-5 w-5 text-muted-foreground" />
                        <p>github.com/yourusername</p>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.3} direction="right">
                  <Card>
                    <CardHeader>
                      <CardTitle>Send Me a Message</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div className="grid gap-4">
                          <div className="grid gap-2">
                            <label htmlFor="name" className="text-sm font-medium">
                              Name
                            </label>
                            <input
                              id="name"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="Your name"
                            />
                          </div>
                          <div className="grid gap-2">
                            <label htmlFor="email" className="text-sm font-medium">
                              Email
                            </label>
                            <input
                              id="email"
                              type="email"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="Your email"
                            />
                          </div>
                          <div className="grid gap-2">
                            <label htmlFor="message" className="text-sm font-medium">
                              Message
                            </label>
                            <textarea
                              id="message"
                              className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="Your message"
                            />
                          </div>
                        </div>
                        <Button type="submit" className="w-full">
                          Send Message
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/40">
        <div className="container flex flex-col items-center justify-between gap-4 py-8 md:h-24 md:flex-row md:py-0">
          <div className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:your.email@example.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
