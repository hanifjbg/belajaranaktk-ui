'use client'

import { motion } from 'motion/react'
import React from 'react'

export const BackgroundOrchestra = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Moving Grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      {/* Floating Shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[10%] left-[5%] w-32 h-32 bg-wisdom opacity-20 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[15%] right-[10%] w-48 h-48 bg-luminous opacity-20 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[40%] right-[30%] w-64 h-64 bg-vibrant opacity-10 rounded-full blur-[100px]"
      />
    </div>
  )
}
