/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-logo-icon",
    "bg-learn-language-back-image",
    "bg-arrow-down",
    "bg-arrow-right-long-icon",
    "bg-american-flag",
    "bg-england-flag",
    "bg-germany-flag",
    "bg-russia-flag",
    "bg-turkey-flag",
    "bg-holland-flag",
    "bg-japan-flag",
    "bg-china-flag",
    "bg-spain-flag",
    "bg-korea-flag",
    "bg-italy-flag",
    "bg-sweden-flag",
    "bg-france-flag",
    "bg-uae-flag",
    "bg-wallet-icon",
    "bg-open-icon",
    "bg-notification-alarm-icon",
    "bg-bel-icon",
    "bg-search-icon",
    "bg-reverse-icon",
    "bg-dropdown-icon",
    "bg-close-icon",
    "bg-flight-atomic-icon",
    "bg-ticket-atomic-icon",
    "bg-business-services-icon",
    "bg-education-services-icon",
    "bg-entertainment-services-icon",
    "bg-food-services-icon",
    "bg-health-services-icon",
    "bg-home-services-icon",
    "bg-lifestyle-services-icon",
    "bg-community-services-icon",
    "bg-real-estate-services-icon",
    "bg-stores-services-icon",
    "bg-transportation-services-icon",
    "bg-travel-services-icon",
    "bg-ring-frame-in",
    "bg-ring-frame-out",
    "bg-mobile-menu-neon-icon",
    "bg-dubai-easy-icon",
    "bg-chatroom-easy-icon",
    "bg-store-easy-icon",
    "bg-map-easy-icon",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "learn-language-back-image": "url('/assets/images/pic-two.png')",
        "logo-icon": "url('/assets/icons/logo-icon/Logo.svg')",
        "search-icon": "url('/assets/icons/easy-icon/Search.svg')",
        "arrow-down": "url('/assets/icons/easy-icon/Arrow-Down.svg')",
        "arrow-right-long-icon":
          "url('/assets/icons/easy-icon/Arrow Long Right.svg')",
        "american-flag": "url('/assets/icons/flag-icon/American.svg')",
        "england-flag": "url('/assets/icons/flag-icon/English.svg')",
        "germany-flag": "url('/assets/icons/flag-icon/German.svg')",
        "sweden-flag": "url('/assets/icons/flag-icon/Swedish.svg')",
        "italy-flag": "url('/assets/icons/flag-icon/Italian.svg')",
        "turkey-flag": "url('/assets/icons/flag-icon/Turkish.svg')",
        "russia-flag": "url('/assets/icons/flag-icon/Russian.svg')",
        "holland-flag": "url('/assets/icons/flag-icon/Netherlands.svg')",
        "korea-flag": "url('/assets/icons/flag-icon/Korean.svg')",
        "japan-flag": "url('/assets/icons/flag-icon/Japanese.svg')",
        "china-flag": "url('/assets/icons/flag-icon/Chinese.svg')",
        "spain-flag": "url('/assets/icons/flag-icon/Spanish.svg')",
        "france-flag": "url('/assets/icons/flag-icon/French.svg')",
        "uae-flag": "url('/assets/icons/flag-icon/Arabic.svg')",
        "wallet-icon": "url('/assets/icons/huge-icon/Coin.svg')",
        "open-icon": "url('/assets/icons/easy-icon/Open.svg')",
        "bel-icon": "url('/assets/icons/easy-icon/Notification.svg')",
        "reverse-icon": "url('/assets/icons/easy-icon/Reverse.svg')",
        "dropdown-icon": "url('/assets/icons/huge-icon/Dropdown.svg')",
        "close-icon": "url('/assets/icons/easy-icon/Close.svg')",
        "notification-alarm-icon":
          "url('/assets/icons/easy-icon/NotificationWithAlarm.svg')",
        "flight-atomic-icon":
          "url('/assets/icons/atomic-icon/Flights-atomic.svg')",
        "ticket-atomic-icon":
          "url('/assets/icons/atomic-icon/Events-atomic.svg')",
        "ring-frame-in": "url('/assets/icons/easy-icon/ring-frame-in.svg')",
        "ring-frame-out": "url('/assets/icons/easy-icon/ring-frame-out.svg')",
        "business-services-icon":
          "url('/assets/icons/pro-icon/Business Services.svg')",
        "education-services-icon":
          "url('/assets/icons/pro-icon/Education & Training.svg')",
        "entertainment-services-icon":
          "url('/assets/icons/pro-icon/Entertainment & Media.svg')",
        "food-services-icon":
          "url('/assets/icons/pro-icon/Food & Beverage.svg')",
        "health-services-icon":
          "url('/assets/icons/pro-icon/Health & Wellness.svg')",
        "home-services-icon": "url('/assets/icons/pro-icon/Home Services.svg')",
        "lifestyle-services-icon":
          "url('/assets/icons/pro-icon/Lifestyle & Personal Services.svg')",
        "community-services-icon":
          "url('/assets/icons/pro-icon/Non-profit & Community Services.svg')",
        "real-estate-services-icon":
          "url('/assets/icons/pro-icon/Real Estate & Property Management.svg')",
        "stores-services-icon": "url('/assets/icons/pro-icon/Stores.svg')",
        "transportation-services-icon":
          "url('/assets/icons/pro-icon/Transportation & Automotive.svg')",
        "travel-services-icon":
          "url('/assets/icons/pro-icon/Travel & Tourism.svg')",
        "mobile-menu-neon-icon":
          "url('/assets/icons/easy-icon/Category-neon.svg')",
        "dubai-easy-icon": "url('/assets/icons/easy-icon/Dubai City.svg')",
        "chatroom-easy-icon": "url('/assets/icons/easy-icon/Chatroom.svg')",
        "store-easy-icon": "url('/assets/icons/easy-icon/Store.svg')",
        "map-easy-icon": "url('/assets/icons/easy-icon/Map.svg')",
      },
      colors: {
        "main-color": "#0F1819",
        "lang-dialog-color": "#B8CCD429",
        "dark-soul-1": "#4E5F6629",
        "dark-soul-2": "#0F1819",
        "dark-soul-3": "#29353B",
        "gray-soul-1": "#B6B9B9",
        "gray-light-1": "#868B8B",
        "gray-light-2": "#B6B9B9",
        "gray-dark-1": "#172328",
        "gray-blue": "#56686E",
        "gray-blue-light": "#8EA7A7",
        "gray-white": "#EDEDED",
        "sky-blue": "#00BFFF",
        "yellow-dark": "#FDB920",
        "gray-glass": "#B8CCD4",
      },
      animation: {
        shake: "shake 0.3s ease-in-out forwards",
        "reverse-shake": "reverse-shake 0.3s ease-in-out forwards",
        "ring-out": "ring-out 0.1s ease-in-out forwards",
        swing: "swing 1s steps(1) infinite",
        pulse: "pulse 0.5s ease-in-out infinite",
        flash: "flash 0.1s ease-in-out infinite",
        expandShrink: "expandShrink 0.5s ease-in-out infinite",
        expandShrinkHidden: "expandShrinkHidden 0.5s ease-in-out infinite",
        "border-circle": "border-circle 1s linear infinite",
        fadeIn: "fadeIn 0.5s ease-in-out",
        fadeOut: "fadeOut 0.5s ease-in-out",
      },
      keyframes: {
        shake: {
          "0%": {
            transform: "translateX(0)",
            background: "#8EA7A7",
          },
          "25%": {
            transform: "translateX(-5px)",

            background: "#8EA7A7",
          },
          "50%": {
            transform: "translateX(5px)",
            background: "#8EA7A7",
          },
          "75%": {
            transform: "translateX(-3px)",
            background: "#8EA7A7",
          },
          "100%": {
            transform: "translateX(0)",
            background: "#8EA7A7",
          },
        },
        "reverse-shake": {
          "0%": {
            transform: "translateX(0)",
          },
          "25%": {
            transform: "translateX(5px)",
          },
          "50%": {
            transform: "translateX(-5px)",
          },
          "75%": {
            transform: "translateX(3px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        "ring-out": {
          "0%": { transform: "translateX(8px)" },
          "100%": { transform: "translateX(0)" },
        },
        pulse: {
          "0%": {
            transform: "scale(1.2)",
            background: "#868B8B",
          },
          "100%": {
            transform: "scale(1)",
            background: "#172328",
          },
        },
        flash: {
          "0%": {
            opacity: 1,
            background: "#172328",
          },
          "100%": {
            opacity: 0.7,
            background: "#868B8B",
          },
        },
        swing: {
          "0%,100%": { transform: "rotate(25deg)" },

          "50%": { transform: "rotate(-25deg)" },
        },
        expandShrink: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        expandShrinkHidden: {
          "0%": { transform: "scale(1)", opacity: 0 },
          "50%": { transform: "scale(1.1)", opacity: 1 },
          "100%": { transform: "scale(1)", opacity: 0 },
        },
        "border-circle": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
