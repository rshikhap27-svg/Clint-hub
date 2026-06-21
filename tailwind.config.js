module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./packages/ui/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: 'var(--color-surface)',
        primary: 'var(--color-primary)',
        success: 'var(--color-success)',
        error: 'var(--color-error)'
      },
      borderRadius: {
        DEFAULT: '8px'
      },
      boxShadow: {
        indigoGlow: '0 6px 18px rgba(99,102,241,0.15)'
      }
    }
  },
  plugins: []
}
