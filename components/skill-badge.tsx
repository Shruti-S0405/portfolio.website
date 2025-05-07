"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
  category: string
}

export default function SkillBadge({ name, category }: SkillBadgeProps) {
  // Different colors based on category
  const getColorClass = () => {
    switch (category) {
      case "languages":
        return "bg-blue-900 text-blue-300 hover:bg-blue-800"
      case "frameworks":
        return "bg-cyan-900 text-cyan-300 hover:bg-cyan-800"
      case "databases":
        return "bg-sky-900 text-sky-300 hover:bg-sky-800"
      case "tools":
        return "bg-indigo-900 text-indigo-300 hover:bg-indigo-800"
      default:
        return "bg-gray-800 text-gray-300 hover:bg-gray-700"
    }
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Badge className={`text-sm py-2 px-4 font-medium ${getColorClass()}`} variant="outline">
        {name}
      </Badge>
    </motion.div>
  )
}
