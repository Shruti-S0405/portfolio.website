"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import type { ReactNode } from "react"

interface TimelineItemProps {
  icon: ReactNode
  title: string
  subtitle: string
  date: string
  location?: string
  badge?: string
  content: string[]
}

export default function Timeline({ items }: { items: TimelineItemProps[] }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-800 transform md:-translate-x-1/2"></div>

      {/* Timeline items */}
      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
          >
            {/* Content */}
            <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
              <div
                className={`bg-gray-800 p-5 rounded-lg shadow-sm border border-blue-900 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  {item.badge && (
                    <Badge variant="secondary" className="bg-blue-900 text-blue-300">
                      {item.badge}
                    </Badge>
                  )}
                </div>
                <h4 className="text-gray-300 mb-1">{item.subtitle}</h4>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                  <span className="flex items-center gap-1">{item.date}</span>
                  {item.location && <span className="flex items-center gap-1">{item.location}</span>}
                </div>
                {item.content.length > 0 && (
                  <ul className="space-y-2 text-gray-300">
                    {item.content.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="min-w-4 mt-1.5">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                        </div>
                        <p>{point}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Icon */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-blue-900 border-4 border-gray-900 z-10">
              <div className="text-blue-400">{item.icon}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
