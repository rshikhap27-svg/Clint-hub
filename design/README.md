# Design Tokens (Kinetic Dark)

This directory contains the canonical design tokens for ClientHub's Kinetic Dark theme.

Files
- tokens.json — canonical token values (colors, typography, layout, effects)

How to use
1. Tailwind: map the colors in tailwind.config.js using tokens.json. Example:

  const tokens = require('../design/tokens.json')
  module.exports = {
    theme: {
      extend: {
        colors: {
          surface: tokens.colors.surface,
          primary: tokens.colors.primary,
          success: tokens.colors.success,
          error: tokens.colors.error,
        },
        borderRadius: {
          DEFAULT: tokens.layout.borderRadius
        }
      }
    }
  }

2. CSS Variables: For non-Tailwind usage, import tokens.json at build-time and emit :root variables.

Naming conventions
- Use semantic names (surface, primary, success, error) — don't reference hex values directly in components.

Token updates
- When modifying tokens.json, update design/README.md and leave a short changelog entry in the token file header.
