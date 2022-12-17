import { keyframes } from "@/theme/stitches.config"

export const reboundAnimation = keyframes({
  "0%": {
    transform: "scale(0.95)",
  },
  "40%": {
    transform: "scale(1.02)",
  },
  "80%": {
    transform: "scale(0.98)",
  },
  "100%": {
    transform: "scale(1)",
  },
})

export const appearanceIn = keyframes({
  "0%": {
    opacity: 0,
    transform: "scale(0.95)",
  },
  "60%": {
    opacity: 0.75,
    transform: "scale(1.02)",
  },
  "100%": {
    opacity: 1,
    transform: "scale(1)",
  },
})

export const appearanceOut = keyframes({
  "0%": {
    opacity: 1,
    transform: "scale(1)",
  },
  "100%": {
    opacity: 0,
    transform: "scale(0.95)",
  },
})

export const levitating = keyframes({
  "0%": {
    transform: "translateY(0)",
  },
  "30%": {
    transform: "translateY(-10px)",
  },
  "50%": {
    transform: "translateY(4px)",
  },
  "70%": {
    transform: "translateY(-15px)",
  },
  "100%": {
    transform: "translateY(0)",
  },
})

export const appears = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
})

export const pulse = keyframes({
  "0%": {
    transform: "scale(1)",
  },
  "50%": {
    transform: "scale(1.2)",
  },
  "100%": {
    transform: "scale(1)",
  },
})
