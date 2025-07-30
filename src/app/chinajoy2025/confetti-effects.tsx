"use client"

import { useEffect } from "react"

export function ConfettiEffect() {
  useEffect(() => {
    // Create confetti effect using CSS animations
    const createConfetti = () => {
      const confettiContainer = document.createElement("div")
      confettiContainer.className = "fixed inset-0 pointer-events-none z-50"
      document.body.appendChild(confettiContainer)

      for (let i = 0; i < 150; i++) {
        const confetti = document.createElement("div")
        confetti.className = "absolute w-2 h-2 bg-yellow-400 opacity-80 animate-confetti-fall"
        confetti.style.left = Math.random() * 100 + "%"
        confetti.style.animationDelay = Math.random() * 3 + "s"
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s"

        // Random colors
        const colors = ["bg-yellow-400", "bg-blue-400", "bg-red-400", "bg-green-400", "bg-purple-400", "bg-pink-400"]
        confetti.className += " " + colors[Math.floor(Math.random() * colors.length)]

        confettiContainer.appendChild(confetti)
      }

      // Remove confetti after animation
      setTimeout(() => {
        document.body.removeChild(confettiContainer)
      }, 6000)
    }

    const timer = setTimeout(createConfetti, 500)
    return () => clearTimeout(timer)
  }, [])

  return null
}
