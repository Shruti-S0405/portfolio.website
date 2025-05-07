import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Calendar,
  MapPin,
  BookOpen,
  Download,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ContactForm from "@/components/contact-form"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import Timeline from "@/components/timeline"
import HeroSection from "@/components/hero-section"
import Navbar from "@/components/navbar"
import AchievementCard from "@/components/achievement-card"

export default function Home() {
  const skills = {
    languages: ["Java", "JavaScript", "C", "Python"],
    frameworks: ["Spring Boot", "Angular", "React"],
    databases: ["MySQL", "PostgreSQL", "Microsoft SQL Server"],
    tools: ["Git", "GitHub", "Postman", "VS Code", "Netlify", "Vercel", "Cloudflare"],
  }

  const projects = [
    {
      title: "Online Assessment Portal",
      description:
        "A scalable online assessment platform using Spring Boot, PostgreSQL, and React.js, supporting real-time assessments and dynamic question generation.",
      technologies: ["Spring Boot", "PostgreSQL", "React.js", "Spring Cloud", "Netflix Eureka", "OpenFeign"],
      link: "https://github.com/Shruti-S0405/Online-Assessment-Portal",
      highlights: [
        "Implemented reusable microservices with Spring Cloud, Netflix Eureka, and OpenFeign",
        "Enhanced code maintainability and enabled faster feature development",
        "Reduced development time by 20%",
      ],
    },
    {
      title: "CodeSense",
      description:
        "A developer productivity tool using ReactJS, Vite, and NodeJS, supporting multiple programming languages including Java, C++, Python, etc.",
      technologies: ["ReactJS", "Vite", "NodeJS", "Gemini 1.5 Pro API"],
      link: "https://github.com/Shruti-S0405/CodeSense",
      highlights: [
        "Integrated Gemini 1.5 Pro API for contextual code summarization",
        "Improved code understanding and review efficiency by 35%",
      ],
    },
  ]

  const achievements = [
    {
      title: "SoundSynth",
      date: "March 2024",
      description: "Converts audio files directly to summarized text for better and short reading.",
      technologies: ["ReactJS", "Vite", "NodeJS", "Cloudflare R2", "Cloudflare Workers", "Gemini"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pecteam.jpg-K1oWMIv08RSccUS9cclPUiXmUvJOWv.jpeg",
      link: "https://github.com/Shruti-S0405/Sound-Synth",
      highlights: [
        "Uses Deepgram API for Audio processing",
        "Leverages Gemini 1.5 Pro API for summarization",
        "Best Project award at 7th International conference at PEC along with Shiny Priscilla and Thendral",
      ],
    },
    {
      title: "Smart Insurance",
      date: "PECTechathon 2.0",
      description:
        "An AI-powered system to detect claim fraud patterns such as padding, bundling, and unbundling in insurance submissions.",
      technologies: ["AI/ML", "InsurTech"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pec%20techathon%202.0.jpg-aa7nZQGL2wf8qKpCZe0JmCwDfBR7dH.jpeg",
      link: "https://github.com/Shruti-S0405/Smart-Insurance/",
      highlights: [
        "Won 1st Runner-Up in PECTechathon 2.0, a 36-hour hackathon hosted by Cognizant",
        "Collaborated with a 4-member team to design a deployable MVP in the InsurTech domain",
        "Designed an AI-powered system to detect claim fraud patterns in insurance submissions",
      ],
    },
  ]

  const experiences = [
    {
      title: "CARE Intern",
      company: "Cognizant Technology Solutions (CTS)",
      location: "Chennai, TamilNadu",
      period: "July 2024 - Aug. 2024",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cts.jpg-TyvRL0eCCetmAxg6963CrpClC6fqjm.jpeg",
      description: [
        "Developed an AI/ML-driven application focused on Generative AI in the Medicare domain, streamlining patient data interactions.",
        "Integrated Okta authentication into the Medicare application using AngularJS and Python (Flask), securing Protected Health Information (PHI) for 5000+ users and exceeding HIPAA compliance standards.",
      ],
    },
    {
      title: "Lead - Coders Forum",
      company: "Panimalar Engineering College",
      location: "Chennai, TamilNadu",
      period: "May 2024 - May 2025",
      image1:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Codersforum1.jpg-kuCAP362wnZQOMjsh0smvC1L1P3Iha.jpeg",
      description: [
        "Led a vibrant student developer community of 100+ members, conducting monthly coding contests, technical workshops, and inter-college hackathons.",
        "Mentored 30+ juniors in DSA, web development, and Git, fostering their growth into core contributors.",
      ],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      institution: "Panimalar Engineering College",
      period: "Aug. 2022 – May 2026",
      score: "8.98 CGPA",
    },
    {
      degree: "HSC",
      institution: "Vivekananda Vidyalaya Junior College",
      period: "May 2022",
      score: "90.4%",
    },
  ]

  const certifications = [
    {
      name: "GitHub Foundation",
      link: "https://bit.ly/3EuorTq",
      date: "Aug. 2024",
    },
    {
      name: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
      link: "https://bit.ly/3Eos4ue",
      date: "July 2024",
    },
  ]

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        name="Shruti S"
        title="Computer Science Engineering Student"
        subtitle="Aspiring Software Engineer | Full Stack Developer"
      />

      {/* About Section */}
      <section id="about" className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-300 mb-4">
              I'm a Computer Science Engineering student at Panimalar Engineering College with a passion for building
              scalable applications and exploring new technologies. My experience spans from full-stack development to
              AI/ML integration, with a focus on creating efficient and user-friendly solutions.
            </p>
            <p className="text-gray-300 mb-6">
              I enjoy tackling complex problems and continuously learning new skills. My goal is to leverage technology
              to create meaningful impact through innovative solutions.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="#contact" className="inline-flex">
                <Button className="gap-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800">
                  Contact Me <ChevronRight size={16} />
                </Button>
              </Link>
              <Link
                href="https://github.com/Shruti-S0405"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button variant="outline" className="gap-2 border-blue-500 text-blue-400 hover:bg-blue-950">
                  <Github size={16} /> GitHub
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/shruti-s0405/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button variant="outline" className="gap-2 border-blue-500 text-blue-400 hover:bg-blue-950">
                  <Linkedin size={16} /> LinkedIn
                </Button>
              </Link>
              <Button variant="outline" className="gap-2 border-blue-500 text-blue-400 hover:bg-blue-950">
                <Download size={16} /> Download CV
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-800 shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile.jpg-CjOG8siuN9gWAg0eoOizgajVxAlef7.jpeg"
                alt="Shruti S"
                className="object-cover w-full h-full"
                width={256}
                height={256}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 md:px-8 max-w-6xl mx-auto bg-gray-800 rounded-lg shadow-sm">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Technical Skills
        </h2>

        <Tabs defaultValue="languages" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="languages">Languages</TabsTrigger>
            <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
            <TabsTrigger value="databases">Databases</TabsTrigger>
            <TabsTrigger value="tools">DevOps & Tools</TabsTrigger>
          </TabsList>

          {Object.entries(skills).map(([category, skillList]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="flex flex-wrap gap-3 justify-center">
                {skillList.map((skill) => (
                  <SkillBadge key={skill} name={skill} category={category} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 px-4 md:px-8 max-w-6xl mx-auto bg-gray-800 rounded-lg shadow-sm">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Experience
        </h2>

        {/* CARE Intern */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-800 rounded-lg p-6 shadow-md">
            <div className="w-full md:w-1/3">
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cts.jpg-TyvRL0eCCetmAxg6963CrpClC6fqjm.jpeg"
                  alt="Cognizant Technology Solutions"
                  className="object-cover w-full h-full"
                  width={400}
                  height={300}
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                {experiences[0].title}
              </h3>
              <h4 className="text-gray-300 mb-1">{experiences[0].company}</h4>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {experiences[0].period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" /> {experiences[0].location}
                </span>
              </div>
              <ul className="space-y-2 text-gray-300">
                {experiences[0].description.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="min-w-4 mt-1.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                    </div>
                    <p>{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Coders Forum */}
        <div>
          <div className="flex flex-col gap-8 bg-gray-800 rounded-lg p-6 shadow-md">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                {experiences[1].title}
              </h3>
              <h4 className="text-gray-300 mb-1">{experiences[1].company}</h4>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {experiences[1].period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" /> {experiences[1].location}
                </span>
              </div>
              <ul className="space-y-2 text-gray-300 mb-6">
                {experiences[1].description.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="min-w-4 mt-1.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                    </div>
                    <p>{point}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Codersforum1.jpg-kuCAP362wnZQOMjsh0smvC1L1P3Iha.jpeg"
                  alt="Coders Forum Presentation"
                  className="object-cover w-full h-full"
                  width={400}
                  height={300}
                />
              </div>
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/codersforum2.jpg-btnRDoPSnWQGlw2Parb9OQfmLKBjaW.jpeg"
                  alt="Coders Forum Team"
                  className="object-cover w-full h-full"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 md:px-8 max-w-6xl mx-auto bg-gray-800 rounded-lg shadow-sm">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Education
        </h2>
        <Timeline
          items={education.map((edu) => ({
            icon: <BookOpen className="h-5 w-5" />,
            title: edu.degree,
            subtitle: edu.institution,
            date: edu.period,
            badge: edu.score,
            content: [],
          }))}
        />
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{cert.name}</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{cert.date}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-2 border-blue-500 text-blue-400 hover:bg-blue-950">
                    <ExternalLink size={14} /> View Certificate
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 md:px-8 max-w-6xl mx-auto bg-gray-800 rounded-lg shadow-sm">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-100">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-900 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-blue-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a
                    href="mailto:shruti.sundar0405@gmail.com"
                    className="text-gray-100 hover:text-blue-400 transition-colors"
                  >
                    shruti.sundar0405@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-900 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-blue-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+916382580602" className="text-gray-100 hover:text-blue-400 transition-colors">
                    +91 6382580602
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-900 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-blue-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-gray-100">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-100">Social Profiles</h3>
              <div className="flex gap-3">
                <Link href="https://github.com/Shruti-S0405" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-blue-500 text-blue-400 hover:bg-blue-950"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/shruti-s0405/" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-blue-500 text-blue-400 hover:bg-blue-950"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                Shruti S
              </h3>
              <p className="text-blue-200">Computer Science Engineering Student</p>
            </div>
            <div className="flex flex-wrap gap-6">
              <Link href="#about" className="text-blue-200 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-blue-200 hover:text-white transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-blue-200 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="#achievements" className="text-blue-200 hover:text-white transition-colors">
                Achievements
              </Link>
              <Link href="#experience" className="text-blue-200 hover:text-white transition-colors">
                Experience
              </Link>
              <Link href="#contact" className="text-blue-200 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-blue-700 text-center text-blue-300">
            <p>© {new Date().getFullYear()} Shruti S. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
