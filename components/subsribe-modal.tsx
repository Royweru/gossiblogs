"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { motion, AnimatePresence } from "framer-motion"
import { useSubscribeModal } from "@/hooks/use-subscribe-modal"



export default function SubscribeModal() {
  const {subscribeModalclose,isOpen} = useSubscribeModal()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form after success
      setTimeout(() => {
        setEmail("")
        setIsSuccess(false)
        subscribeModalclose()
      }, 2000)
    }, 1500)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl"
          >
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 opacity-90" />

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl" />
            </div>

            {/* Content */}
            <div className="relative p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl">
              <div className="absolute top-4 right-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={subscribeModalclose}
                  className="text-white hover:bg-white/20 rounded-full"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Stay Updated</h2>
                <p className="text-white/80">
                  Subscribe to our newsletter and get the latest updates delivered directly to your inbox.
                </p>
              </div>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/20 p-4 rounded-lg text-center text-white"
                >
                  <p className="font-medium">Thanks for subscribing!</p>
                  <p className="text-sm text-white/80 mt-1">We&apos;ve sent a confirmation to your email.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-white focus-visible:ring-white/30"
                    />
                  </div>

                  <div className="flex items-start space-x-2 mt-4">
                    <Checkbox
                      id="terms"
                      className="border-white/50 data-[state=checked]:bg-white data-[state=checked]:text-violet-600"
                    />
                    <Label htmlFor="terms" className="text-sm text-white/80 leading-tight">
                      I agree to receive marketing emails and can unsubscribe at any time.
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white hover:bg-white/90 text-violet-600 font-medium mt-2"
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe Now"}
                  </Button>

                  <p className="text-xs text-center text-white/70 mt-4">
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

