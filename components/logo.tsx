"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <motion.div
        className="relative flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M20 5C11.716 5 5 11.716 5 20C5 28.284 11.716 35 20 35C28.284 35 35 28.284 35 20C35 11.716 28.284 5 20 5Z"
            fill="url(#gradient1)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            stroke="url(#gradient2)"
            strokeWidth="2"
          />
          <motion.path
            d="M15 15L25 25M15 25L25 15"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.path
            d="M20 12V28"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.7 }}
          />
          <defs>
            <linearGradient id="gradient1" x1="5" y1="5" x2="35" y2="35" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3B82F6" />
              <stop offset="1" stopColor="#1E40AF" />
            </linearGradient>
            <linearGradient id="gradient2" x1="5" y1="5" x2="35" y2="35" gradientUnits="userSpaceOnUse">
              <stop stopColor="#60A5FA" />
              <stop offset="1" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
        <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Shruti
        </span>
      </motion.div>
    </Link>
  )
}
