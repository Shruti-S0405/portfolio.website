"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Trophy } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

interface AchievementProps {
  title: string
  date: string
  description: string
  technologies: string[]
  image: string
  link?: string
  highlights: string[]
}

export default function AchievementCard({ achievement }: { achievement: AchievementProps }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full flex flex-col overflow-hidden border-2 border-gray-700 hover:border-blue-500 bg-gray-800 transition-all duration-300">
        <div className="relative w-full h-48">
          <Image src={achievement.image || "/placeholder.svg"} alt={achievement.title} className="object-cover" fill />
          <div className="absolute top-2 right-2">
            <Badge className="bg-blue-600 text-white">
              <Trophy className="h-3 w-3 mr-1" /> Award
            </Badge>
          </div>
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            {achievement.title}
          </CardTitle>
          <CardDescription className="text-gray-300">{achievement.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex items-center text-sm text-gray-400 mb-3">
            <span>{achievement.date}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {achievement.technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs bg-blue-900 text-blue-300">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="space-y-2">
            {achievement.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-2 text-sm">
                <div className="min-w-4 mt-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                </div>
                <p className="text-gray-300">{highlight}</p>
              </div>
            ))}
          </div>
        </CardContent>
        {achievement.link && (
          <CardFooter className="pt-2 border-t border-gray-700">
            <Link href={achievement.link} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button variant="outline" className="w-full gap-2 border-blue-500 text-blue-400 hover:bg-blue-950">
                <Github className="h-4 w-4" /> View on GitHub
              </Button>
            </Link>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  )
}
