"use client"

import type React from "react"
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState, useEffect } from "react"
import Image from "next/image"
import Script from "next/script"

// Platform data
const platforms = [
  { id: "telegram", name: "Telegram", icon: "https://digitarmedia.com/chinajoy2025/images/2111646.png" },
  { id: "teams", name: "Teams", icon: "https://digitarmedia.com/chinajoy2025/images/team.png" },
  { id: "whatsapp", name: "WhatsApp", icon: "https://digitarmedia.com/chinajoy2025/images/733585.png" },
  { id: "wechat", name: "WeChat", icon: "https://digitarmedia.com/chinajoy2025/images/wechat-logo.png" },
]

interface ChinaJoyLandingProps {
  className?: string
  style?: React.CSSProperties
}

export function ChinaJoyLanding({ className, style }: ChinaJoyLandingProps) {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("")
  const [showWeChat, setShowWeChat] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [hoveredOption, setHoveredOption] = useState<string>("")
  const [emailFocused, setEmailFocused] = useState(false)
  const [submitHovered, setSubmitHovered] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Handle responsive breakpoints
    const handleResize = () => {
      const width = window.innerWidth
      setIsDesktop(width >= 1024)
      setIsTablet(width >= 768 && width < 1024)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    // Add fonts and keyframes to document head
    const styleSheet = document.createElement("style")
    styleSheet.id = "chinajoy-styles"
    styleSheet.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600;800&family=Plus+Jakarta+Sans:wght@400;600&family=Montserrat:wght@600;700&display=swap');
      
      @keyframes cj-bounceIn {
        0% {
          transform: scale(0.5);
          opacity: 0;
        }
        60% {
          transform: scale(1.1);
          opacity: 1;
        }
        100% {
          transform: scale(1);
        }
      }

      @keyframes cj-fadeSlideIn {
        0% {
          transform: translateX(-30px);
          opacity: 0;
        }
        100% {
          transform: translateX(0);
          opacity: 1;
        }
      }

      @keyframes cj-pulseClick {
        0% {
          transform: scale(1);
          box-shadow: 0 0 0 rgba(42, 123, 155, 0.4);
        }
        50% {
          transform: scale(1.05);
          box-shadow: 0 0 15px rgba(42, 123, 155, 0.5);
        }
        100% {
          transform: scale(1);
          box-shadow: 0 0 0 rgba(42, 123, 155, 0.4);
        }
      }
    `
    document.head.appendChild(styleSheet)

    // Load canvas-confetti and trigger confetti on page load
    const loadConfetti = async () => {
      try {
        const confetti = (await import("canvas-confetti")).default
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
        })
      } catch (error) {
        console.log("Confetti library not available")
      }
    }

    loadConfetti()

    // Disable zoom functionality
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault()
      }
    }

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.ctrlKey && (e.key === "+" || e.key === "-" || e.key === "=")) {
        e.preventDefault()
      }
    }

    const handleGestureStart = (e: Event) => {
      e.preventDefault()
    }

    document.addEventListener("wheel", handleWheel, { passive: false })
    document.addEventListener("keydown", handleKeydown)
    document.addEventListener("gesturestart", handleGestureStart)

    return () => {
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("wheel", handleWheel)
      document.removeEventListener("keydown", handleKeydown)
      document.removeEventListener("gesturestart", handleGestureStart)
      const existingStyle = document.getElementById("chinajoy-styles")
      if (existingStyle) {
        document.head.removeChild(existingStyle)
      }
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedPlatform || !email || isSubmitting) {
      return
    }

    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append("platform", selectedPlatform)
      formData.append("email", email)

      const response = await fetch("https://webhook.site/a3087231-f622-4b60-ab80-7438fda831bd", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        console.log("Registration successful:", { platform: selectedPlatform, email })

        if (selectedPlatform === "wechat") {
          setShowWeChat(true)
        } else {
          alert("Registration successful! Thank you for partnering with us.")
        }
      } else {
        throw new Error("Submission failed")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Registration failed. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Dynamic styles based on screen size
  const getStyles = () => ({
    container: {
      width: "100%",
      minHeight: "100vh",
      overflowX: "hidden" as const,
      fontFamily: "Arial, sans-serif",
      position: "relative" as const,
      isolation: "isolate" as const,
    },
    background: {
      position: "fixed" as const,
      inset: 0,
      width: "100%",
      height: "100%",
      background:
        'linear-gradient(to bottom right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url("https://digitarmedia.com/chinajoy2025/banner.png")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      zIndex: -10,
    },
    confettiCanvas: {
      position: "fixed" as const,
      pointerEvents: "none" as const,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 0,
    },
    main: {
      position: "relative" as const,
      zIndex: 10,
      width: "100%",
    },
    desktopBanner: {
      display: isDesktop ? "block" : "none",
      width: "100%",
      padding: "2.5rem 1rem 1.5rem",
    },
    desktopBannerInner: {
      maxWidth: "72rem",
      margin: "0 auto",
    },
    desktopBannerContent: {
      width: "100%",
      padding: "1.5rem",
      background: "rgba(0, 0, 0, 0.4)",
      backdropFilter: "blur(12px)",
      textAlign: "center" as const,
      borderRadius: "0.75rem",
    },
    bannerTitle: {
      fontFamily: '"Manrope", sans-serif',
      fontSize: isDesktop ? "clamp(1.25rem, 4vw, 2.5rem)" : "clamp(1.125rem, 5vw, 1.5rem)",
      fontWeight: 800,
      color: "#ffdd57",
      marginBottom: "0.5rem",
      lineHeight: 1.2,
      letterSpacing: "0.025em",
      transition: "all 0.3s ease",
      cursor: "default",
    },
    bannerSubtitle: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontSize: isDesktop ? "clamp(1.125rem, 3vw, 1.5rem)" : "clamp(0.875rem, 4vw, 1.125rem)",
      fontWeight: 600,
      color: "white",
      lineHeight: 1.2,
      letterSpacing: "0.025em",
      transition: "all 0.3s ease",
      cursor: "default",
    },
    content: {
      width: "100%",
      padding: "1.5rem 1rem",
    },
    contentInner: {
      maxWidth: "80rem",
      margin: "0 auto",
    },
    mobileLayout: {
      display: isDesktop ? "none" : "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      gap: "1.5rem",
    },
    desktopLayout: {
      display: isDesktop ? "flex" : "none",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: isDesktop && window.innerWidth >= 1280 ? "3rem" : "2rem",
    },
    logoSection: {
      display: "flex",
      flexDirection: "column" as const,
      alignItems: isDesktop ? "flex-start" : "center",
      textAlign: isDesktop ? ("left" as const) : ("center" as const),
      width: isDesktop ? "auto" : "100%",
      flex: isDesktop ? 1 : "none",
      maxWidth: isDesktop ? "28rem" : "none",
    },
    logo: {
      marginBottom: isDesktop ? "1.25rem" : "1rem",
      animation: "cj-fadeSlideIn 1s ease forwards",
    },
    title: {
      fontSize: isDesktop ? (window.innerWidth >= 1280 ? "2.25rem" : "1.875rem") : "1.125rem",
      color: "white",
      fontWeight: "bold",
      textShadow: "1px 1px 4px rgba(0, 0, 0, 0.4)",
      animation: "cj-fadeSlideIn 1s ease forwards",
      marginBottom: isDesktop ? "0" : "1.5rem",
    },
    mobileBanner: {
      width: "100%",
      maxWidth: "32rem",
      margin: "0 auto",
      padding: "1.5rem",
      background: "rgba(0, 0, 0, 0.3)",
      backdropFilter: "blur(12px)",
      textAlign: "center" as const,
      borderRadius: "0.75rem",
    },
    formContainer: {
      width: "100%",
      maxWidth: isDesktop ? (window.innerWidth >= 1280 ? "24rem" : "20rem") : "20rem",
      margin: isDesktop ? "0" : "0 auto",
      flexShrink: isDesktop ? 0 : "none",
    },
    formCard: {
      background: isDesktop ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.25)",
      backdropFilter: "blur(16px)",
      padding: "2rem",
      borderRadius: "0.5rem",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
      border: isDesktop ? "none" : "1px solid rgba(255, 255, 255, 0.3)",
      transition: "all 0.5s ease",
    },
    formLabel: {
      display: "block",
      marginBottom: "1.25rem",
      fontWeight: "bold",
      fontSize: isTablet || isDesktop ? "1rem" : "0.875rem",
      color: "black",
    },
    platformGrid: {
      display: isDesktop ? "flex" : "grid",
      gridTemplateColumns: isDesktop ? "none" : "repeat(2, 1fr)",
      flexWrap: isDesktop ? ("wrap" as const) : "nowrap",
      gap: isDesktop ? "1.25rem" : isTablet ? "1rem" : "0.75rem",
      justifyItems: isDesktop ? "flex-start" : "center",
      justifyContent: isDesktop ? "flex-start" : "center",
      marginBottom: "1.5rem",
    },
    platformOption: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      background: "#f8f8f8",
      padding: isDesktop ? "0.625rem 0.875rem" : isTablet ? "0.625rem 0.875rem" : "0.5rem 0.875rem",
      borderRadius: "0.5rem",
      cursor: "pointer",
      border: "2px solid transparent",
      transition: "all 0.3s ease",
      width: isDesktop ? "auto" : "100%",
      justifyContent: isDesktop ? "flex-start" : isTablet ? "flex-start" : "center",
    },
    platformOptionSelected: {
      borderColor: "#2A7B9B",
      backgroundColor: "#e6f3f9",
      animation: "cj-pulseClick 0.4s ease",
    },
    platformOptionHover: {
      background: "#f0f0f0",
    },
    platformInput: {
      position: "absolute" as const,
      opacity: 0,
      pointerEvents: "none" as const,
    },
    platformIcon: {
      flexShrink: 0,
      animation: "cj-bounceIn 0.8s ease both",
    },
    platformText: {
      fontSize: isDesktop ? "0.875rem" : isTablet ? "0.875rem" : "0.75rem",
      fontWeight: 500,
      whiteSpace: "nowrap" as const,
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    emailInput: {
      width: "100%",
      padding: "0.75rem",
      marginBottom: "1rem",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "0.25rem",
      outline: "none",
      transition: "all 0.2s ease",
    },
    emailInputFocus: {
      borderColor: "#2A7B9B",
      boxShadow: "0 0 0 2px rgba(42, 123, 155, 0.2)",
    },
    submitButton: {
      width: "100%",
      background: "#2A7B9B",
      color: "white",
      padding: "0.75rem",
      fontSize: "1rem",
      border: "none",
      borderRadius: "0.25rem",
      cursor: "pointer",
      fontWeight: 500,
      transition: "background-color 0.2s ease",
    },
    submitButtonHover: {
      background: "#1f5a72",
    },
    submitButtonDisabled: {
      opacity: 0.6,
      cursor: "not-allowed",
    },
    wechatContainer: {
      textAlign: "center" as const,
      transition: "all 0.5s ease",
      background: isDesktop ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.25)",
      backdropFilter: "blur(16px)",
      padding: "2rem",
      borderRadius: "0.5rem",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
      border: isDesktop ? "none" : "1px solid rgba(255, 255, 255, 0.3)",
    },
    wechatShow: {
      opacity: 1,
      transform: "none",
    },
    wechatHide: {
      opacity: 0,
      transform: "rotateY(-90deg)",
    },
    qrImage: {
      borderRadius: "0.5rem",
      margin: "0 auto 1rem",
    },
    wechatId: {
      fontFamily: '"Montserrat", "Plus Jakarta Sans", Arial, sans-serif',
      fontSize: isDesktop ? "1rem" : isTablet ? "0.875rem" : "0.75rem",
      color: isDesktop ? "#2A7B9B" : "#1d2427",
      background: "#e6f3f9",
      padding: isDesktop ? "0.75rem 0.625rem" : "0.5rem",
      margin: "0 auto",
      display: "inline-block",
      borderRadius: "22px",
      letterSpacing: "1.2px",
      fontWeight: isDesktop ? "bold" : 600,
      boxShadow: "0 2px 8px rgba(42, 123, 155, 0.08)",
    },
    bottomSpacing: {
      height: isDesktop ? "3rem" : "2rem",
    },
  })

  const renderPlatformOptions = () => {
    const styles = getStyles()

    return (
      
      <div style={styles.platformGrid}>
        {platforms.map((platform, index) => {
          const isSelected = selectedPlatform === platform.id
          const isHovered = hoveredOption === platform.id

          return (
            <label
              key={platform.id}
              style={{
                ...styles.platformOption,
                ...(isSelected ? styles.platformOptionSelected : {}),
                ...(isHovered && !isSelected ? styles.platformOptionHover : {}),
              }}
              onClick={() => setSelectedPlatform(platform.id)}
              onMouseEnter={() => setHoveredOption(platform.id)}
              onMouseLeave={() => setHoveredOption("")}
            >
              <input
                type="radio"
                name={`platform-${isDesktop ? "desktop" : "mobile"}`}
                value={platform.id}
                checked={isSelected}
                onChange={() => setSelectedPlatform(platform.id)}
                required
                style={styles.platformInput}
              />
              <Image
                src={platform.icon || "/placeholder.svg"}
                alt={`${platform.name} icon`}
                width={20}
                height={20}
                style={{
                  ...styles.platformIcon,
                  animationDelay: `${(index + 1) * 0.2}s`,
                }}
              />
              <span style={styles.platformText}>
                {platform.name}
                {platform.id === "telegram" && <>&nbsp;&nbsp;</>}
              </span>
            </label>
          )
        })}
      </div>
    )
  }

  const renderForm = () => {
    const styles = getStyles()

    return (
      <form onSubmit={handleSubmit}>
        <label style={styles.formLabel}>{"Let's Connect:"}</label>
        {renderPlatformOptions()}
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(false)}
          required
          style={{
            ...styles.emailInput,
            ...(emailFocused ? styles.emailInputFocus : {}),
          }}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          onMouseEnter={() => setSubmitHovered(true)}
          onMouseLeave={() => setSubmitHovered(false)}
          style={{
            ...styles.submitButton,
            ...(submitHovered && !isSubmitting ? styles.submitButtonHover : {}),
            ...(isSubmitting ? styles.submitButtonDisabled : {}),
          }}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    )
  }

  if (!isMounted) {
    return null
  }

  const styles = getStyles()

  return (
    <>
      {/* Load canvas-confetti script */}
      <Script
        src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"
        strategy="beforeInteractive"
      />

      <div style={{ ...styles.container, ...style }} className={className}>
        {/* Background */}
        <div style={styles.background} />

        {/* Canvas for confetti */}
        <canvas id="cj-confetti" style={styles.confettiCanvas} />

        {/* Main Container */}
        <div style={styles.main}>
          {/* Desktop Banner */}
          <div style={styles.desktopBanner}>
            <div style={styles.desktopBannerInner}>
              <div style={styles.desktopBannerContent}>
                <h3 style={styles.bannerTitle}>Partner Now & Grab Your $1,000 Bonus!</h3>
                <h3 style={styles.bannerSubtitle}>立即合作并赢取 1,000 美元奖金！</h3>
              </div>
            </div>
          </div>

          {/* Main Content Container */}
          <div style={styles.content}>
            <div style={styles.contentInner}>
              {/* Mobile/Tablet Layout */}
              <div style={styles.mobileLayout}>
                {/* Logo and Title */}
                <div style={styles.logoSection}>
                  <Image
                    src="https://digitarmedia.com/chinajoy/images/logo_d2.png"
                    alt="Digitar Media Logo"
                    width={140}
                    height={140}
                    style={styles.logo}
                    priority
                  />
                  <h1 style={styles.title}>ChinaJoy 2025 • Shanghai</h1>
                </div>

                {/* Mobile Banner */}
                <div style={styles.mobileBanner}>
                  <h3 style={styles.bannerTitle}>Partner Now & Grab Your $1,000 Bonus!</h3>
                  <h3 style={styles.bannerSubtitle}>立即合作并赢取 1,000 美元奖金！</h3>
                </div>

                {/* Form Container */}
                <div style={styles.formContainer}>
                  {!showWeChat ? (
                    <div style={styles.formCard}>{renderForm()}</div>
                  ) : (
                    <div
                      style={{
                        ...styles.wechatContainer,
                        ...(showWeChat ? styles.wechatShow : styles.wechatHide),
                      }}
                    >
                      <Image
                        src="https://digitarmedia.com/chinajoy2025/images/wechat-qr.png"
                        alt="WeChat QR Code"
                        width={200}
                        height={200}
                        style={styles.qrImage}
                      />
                      <p style={styles.wechatId}>WeChat: anuj_digitarmedia</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Desktop Layout */}
              <div style={styles.desktopLayout}>
                {/* Left Side - Logo and Title */}
                <div style={styles.logoSection}>
                  <Image
                    src="https://digitarmedia.com/chinajoy/images/logo_d2.png"
                    alt="Digitar Media Logo"
                    width={140}
                    height={140}
                    style={styles.logo}
                    priority
                  />
                  <h1 style={styles.title}>ChinaJoy 2025 • Shanghai</h1>
                </div>

                {/* Right Side - Form Container */}
                <div style={styles.formContainer}>
                  {!showWeChat ? (
                    <div style={styles.formCard}>{renderForm()}</div>
                  ) : (
                    <div
                      style={{
                        ...styles.wechatContainer,
                        ...(showWeChat ? styles.wechatShow : styles.wechatHide),
                      }}
                    >
                      <Image
                        src="https://digitarmedia.com/chinajoy2025/images/wechat-qr.png"
                        alt="WeChat QR Code"
                        width={250}
                        height={250}
                        style={styles.qrImage}
                      />
                      <p style={styles.wechatId}>WeChat: anuj_digitarmedia</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Spacing */}
          <div style={styles.bottomSpacing} />
        </div>
      </div>
    </>
  )
}

// Default export for easy importing
export default ChinaJoyLanding
