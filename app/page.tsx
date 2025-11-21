"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Mail,
  Linkedin,
  ExternalLink,
  Calendar,
  Building,
} from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/mobile-nav";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import heroprofilepicture from "@/public/heroprofilepicture.jpg";
import infoprofile from "@/public/infoprofile.png";
import futebolCard from "@/public/futebolcard.png";
import anoto from "@/public/anoto.png";
import munizAutoCenter from "@/public/MunizAutoCenter.png";
import realCripto from "@/public/RealCripto.png";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center ml-4 gap-2 text-lg font-bold"
          >
            <span>Matheus Alves</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              About
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2 mr-2">
            <ThemeToggle />
            <div className="hidden md:flex items-center gap-2">
              <Link
                href="https://github.com/MatheusAlvesPereira"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/matheus-alves-pereira-da-silva/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:matheusalvessilvabr@gmail.com">
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

      <main className="container py-8 px-8 md:py-12">
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
            A creative Software Engineer focused on building modern and robust
            applications.
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
                      I am a Software Engineer, I like working with different
                      technologies, opening web projects based on a defined
                      Design and developing applications: front-end, and
                      back-end. I love studying Software Development.
                    </p>
                    <p className="text-muted-foreground">
                      When I'm not coding, you can find me exploring new
                      technologies, contributing to open-source projects, or
                      enjoying outdoor activities.
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
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                Work Experience
              </h2>
              <div className="space-y-8">
                <StaggerContainer className="space-y-8">
                  {/* Experience Item 1 */}
                  <StaggerItem>
                    <div className="relative pl-8 border-l-2 border-muted pb-8">
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
                      <div className="space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <h3 className="text-xl font-semibold">
                            Software Engineer
                          </h3>
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
                          Developed and maintained payment systems and internal APIs using PHP (v5, v7, v8) and Zend Framework, and created Node.js based services for automation and system integrations.<br/>
                          <br/>
                          Worked directly with SQL Server and MySQL databases, handling complex queries, data modeling, and performance optimization.<br/>
                          <br/>
                          Refactored and optimized legacy code, achieving up to 30% improvement in transaction processing and reducing error rates in production environments.<br/>
                          <br/>
                          Built automated routines for operational processes and third-party system integrations.<br/>
                          <br/>
                          Collaborated closely with front-end teams to ensure seamless integration between APIs and user interfaces.<br/>
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          <Badge>Node.js</Badge>
                          <Badge>PHP</Badge>
                          <Badge>Zend Framework</Badge>
                          <Badge>Laravel</Badge>
                          <Badge>Docker</Badge>
                          <Badge>Docker compose</Badge>
                          <Badge>SQL Server</Badge>
                          <Badge>AWS</Badge>
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
                          <h3 className="text-xl font-semibold">
                            Software Engineer
                          </h3>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>Nov 2023 - Jul 2025</span>
                          </div>
                        </div>
                        <div className="flex items-center text-base font-medium">
                          <Building className="mr-2 h-4 w-4" />
                          <span>Anoto.</span>
                        </div>
                        <p className="text-muted-foreground">
                          Led and maintained scalable open-source projects with 50+ active contributors, fostering global collaboration and adoption of engineering best practices.<br/>
                          <br/>
                          Designed and maintained robust RESTful APIs using Node.js and Express.js, enabling integration with multiple third-party systems.<br/>
                          <br/>
                          Applied modern Git workflows (feature branches, pull requests) and implemented continuous integration pipelines using GitHub Actions.<br/>
                          <br/>
                          Wrote clear and accessible technical documentation using Swagger/OpenAPI, facilitating onboarding for new contributors and increasing adoption.<br/>
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          <Badge>Node.js</Badge>
                          <Badge>Kotlin</Badge>
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
                          <h3 className="text-xl font-semibold">
                            Full Stack Developer
                          </h3>
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
                          Built responsive and performant web applications using React.js and Vue.js, improving accessibility and usability by 15% based on user feedback and performance metrics.<br/>
                          <br/>
                          Implemented technical SEO strategies, including semantic markup and efficient page loading, resulting in a 20% increase in organic traffic.<br/>
                          <br/>
                          Created and maintained CI/CD pipelines across multiple environments using GitHub Actions and GitLab CI, reducing deployment time and improving release stability.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          <Badge>HTML5</Badge>
                          <Badge>CSS3</Badge>
                          <Badge>Node.js</Badge>
                          <Badge>Java</Badge>
                          <Badge>JavaScript</Badge>
                          <Badge>Vue.js</Badge>
                          <Badge>React</Badge>
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
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                My Projects
              </h2>
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
                        Provides tailored solutions to top football clubs and
                        stadiums in Brazil and the US, enhancing the fan
                        experience.
                      </CardDescription>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge>Node.js</Badge>
                        <Badge>PHP</Badge>
                        <Badge>Zend Framework</Badge>
                        <Badge>Laravel</Badge>
                        <Badge>Docker</Badge>
                        <Badge>Docker compose</Badge>
                        <Badge>SQL Server</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between mt-auto">
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code(Private)
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link
                          href="https://www.futebolcard.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
                        Anoto is an organization that serves as a notebook,
                        bringing together various projects in one place.
                      </CardDescription>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge>Node.js</Badge>
                        <Badge>Kotlin</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between mt-auto">
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href="https://github.com/Anoto-ecossistem"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link
                          href="https://anoto-website.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
                      <CardTitle>Muniz Auto Center</CardTitle>
                      <CardDescription className="mt-2">
                        The largest auto center franchise in Brazil — and the
                        fastest-growing. A 100% Brazilian business with over 150
                        stores nationwide.
                      </CardDescription>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge>React</Badge>
                        <Badge>Vue.js</Badge>
                        <Badge>Javascript</Badge>
                        <Badge>HTML5</Badge>
                        <Badge>CSS3</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between mt-auto">
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code(Private)
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link
                          href="https://munizautocenter.com.br/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
                      <CardTitle>RealCripto</CardTitle>
                      <CardDescription className="mt-2">
                        This website is an informational platform focused on
                        providing data and insights about the cryptocurrency
                        market.
                      </CardDescription>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge>Wordpress</Badge>
                        <Badge>Elementor</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between mt-auto">
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code(Private)
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link
                          href="https://realcripto.com.br/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                Skills & Technologies
              </h2>
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
                          <span className="text-sm text-muted-foreground"></span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>CSS3/SASS</Badge>
                          <span className="text-sm text-muted-foreground"></span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>JavaScript</Badge>
                          <span className="text-sm text-muted-foreground"></span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>React</Badge>
                          <span className="text-sm text-muted-foreground"></span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>Next.js</Badge>
                          <span className="text-sm text-muted-foreground"></span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>Vue.js</Badge>
                          <span className="text-sm text-muted-foreground"></span>
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
                          <span className="text-sm text-muted-foreground"></span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>Java </Badge>
                          <span className="text-sm text-muted-foreground"></span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>PHP </Badge>
                          <span className="text-sm text-muted-foreground"></span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>Express.js</Badge>
                          <span className="text-sm text-muted-foreground"></span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>Zend Framework</Badge>
                          <span className="text-sm text-muted-foreground"></span>
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
                          <Badge>Wordpress</Badge>
                          <span className="text-sm text-muted-foreground"></span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>Elementor</Badge>
                          <span className="text-sm text-muted-foreground"></span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>Git/GitHub</Badge>
                          <span className="text-sm text-muted-foreground"></span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>CI/CD</Badge>
                          <span className="text-sm text-muted-foreground"></span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>Docker</Badge>
                          <span className="text-sm text-muted-foreground"></span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>Docker compose</Badge>
                          <span className="text-sm text-muted-foreground"></span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>AWS</Badge>
                          <span className="text-sm text-muted-foreground"></span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>SQL Server</Badge>
                          <span className="text-sm text-muted-foreground"></span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>Figma</Badge>
                          <span className="text-sm text-muted-foreground"></span>
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
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                Get In Touch
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <FadeIn delay={0.2} direction="left">
                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                        <p>matheusalvessilvabr@gmail.com</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Linkedin className="h-5 w-5 text-muted-foreground" />
                        <p>
                          <Link
                            href="https://encurtador.com.br/Bcv8I"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            https://encurtador.com.br/Bcv8I
                          </Link>
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Github className="h-5 w-5 text-muted-foreground" />
                        <p>
                          <Link
                            href="https://github.com/MatheusAlvesPereira"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            github.com/MatheusAlvesPereira
                          </Link>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>

                {/*
                remove the contact form */}
                {/* <FadeIn delay={0.3} direction="right">
                  <Card>
                    <CardHeader>
                      <CardTitle>Send Me a Message</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div className="grid gap-4">
                          <div className="grid gap-2">
                            <label
                              htmlFor="name"
                              className="text-sm font-medium"
                            >
                              Name
                            </label>
                            <input
                              id="name"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="Your name"
                            />
                          </div>
                          <div className="grid gap-2">
                            <label
                              htmlFor="email"
                              className="text-sm font-medium"
                            >
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
                            <label
                              htmlFor="message"
                              className="text-sm font-medium"
                            >
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
                </FadeIn> */}
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/40 md:px-12">
        <div className="container flex flex-col items-center justify-between gap-4 py-8 md:h-24 md:flex-row md:py-0">
          <div className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Matheus Alves. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/MatheusAlvesPereira"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/matheus-alves-pereira-da-silva/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:matheusalvessilvabr@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
