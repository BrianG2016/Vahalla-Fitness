import express from 'express'
const router = express.Router()

// Temporary static pricing
const PRICES = {
  monthly: 9.99,
  yearly: 99.00,
}

router.get('/plans', (req, res) => {
  res.json({
    free: {
      title: "Warrior’s Path",
      price: 0,
      perks: [
        "Basic AI coaching (limited)",
        "Beginner workouts",
        "Sample meal plan",
        "Ad-supported experience"
      ]
    },
    premium: {
      title: "Champion of Valhalla",
      price: PRICES,
      perks: [
        "Full AI coaching rotation",
        "Personalized nutrition",
        "Camera validation",
        "Advanced evolving workouts",
        "Rune XP boost",
        "“My Mother Told Me” intro chant"
      ],
      paymentLink: "https://cash.app/$BrianGaskamp" // Replace with your link
    }
  })
})

export default router