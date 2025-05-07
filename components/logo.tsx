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
        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Shruti
        </span>
      </motion.div>
    </Link>
  )
}