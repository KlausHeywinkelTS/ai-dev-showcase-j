---
name: Terra — Organic Design
colors:
  surface: '#fffcf0'
  surface-dim: '#e4e4cf'
  surface-bright: '#fffcf0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fcfaeb'
  surface-container: '#f6f4e3'
  surface-container-high: '#f0efdc'
  surface-container-highest: '#eae9d5'
  on-surface: '#38392b'
  on-surface-variant: '#646655'
  inverse-surface: '#0e0f08'
  inverse-on-surface: '#9e9d93'
  outline: '#818270'
  outline-variant: '#babaa7'
  surface-tint: '#78588b'
  primary: '#78588b'
  on-primary: '#ffffff'
  primary-container: '#dfb9f3'
  on-primary-container: '#513464'
  inverse-primary: '#dfb9f3'
  secondary: '#2d689c'
  on-secondary: '#ffffff'
  secondary-container: '#d0e4ff'
  on-secondary-container: '#125588'
  tertiary: '#98448d'
  on-tertiary: '#ffffff'
  tertiary-container: '#ff9ded'
  on-tertiary-container: '#671660'
  error: '#af3d3b'
  on-error: '#ffffff'
  error-container: '#fa746f'
  on-error-container: '#6e0a12'
  primary-fixed: '#dfb9f3'
  primary-fixed-dim: '#d0abe4'
  on-primary-fixed: '#3c1f4f'
  on-primary-fixed-variant: '#5b3d6e'
  secondary-fixed: '#d0e4ff'
  secondary-fixed-dim: '#b6d7ff'
  on-secondary-fixed: '#00426e'
  on-secondary-fixed-variant: '#225f92'
  tertiary-fixed: '#ff9ded'
  tertiary-fixed-dim: '#f090df'
  on-tertiary-fixed: '#4a0046'
  on-tertiary-fixed-variant: '#71216a'
  primary-dim: '#6b4c7e'
  secondary-dim: '#1d5b8f'
  tertiary-dim: '#8a3880'
  error-dim: '#67040d'
  background: '#fffcf0'
  on-background: '#38392b'
  surface-variant: '#eae9d5'
typography:
  headline-lg:
    fontFamily: Anybody
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  body-md:
    fontFamily: Anybody
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  label-sm:
    fontFamily: Anybody
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
---

# Terra — Organic Design

## North Star: "Rooted Warmth"
Calm, grounded, and human. Earthy tones, soft shapes, and natural textures create a warm, approachable experience.

## Colors
- **Primary (`#6a4b7d`):** Muted plum — actions, navigation, interactive states.
- **Background (`#f0eee2`):** Soft parchment — organic, never sterile white.
- **Secondary (`#2a6599`):** Lake blue — secondary actions and supporting UI.
- **Tertiary (`#c46ab6`):** Vibrant orchid — highlights, accents, badges.
- **Palette philosophy:** Earthy and grounded. While the hue range has expanded, colors remain sophisticated and desaturated.
- Use warm neutrals throughout — every gray should have a slight yellow or warm undertone.

## Typography
- **Headlines:** Anybody — a flexible, modern sans-serif with strong character.
- **Body/Labels:** Anybody — consistent, readable, and adaptable across all sizes.
- Generous line-height (1.6+ for body). Comfortable, unhurried reading.

## Elevation
- Very soft shadows only: `0 4px 20px rgba(74, 78, 74, 0.06)`.
- Prefer tonal separation over shadows — layer variations of the parchment neutral tones.
- Borders: `outline_variant` at low opacity when needed.

## Components
- **Buttons:** Primary = solid plum, large border-radius (12px). Secondary = neutral bg + blue text + thin border.
- **Cards:** Soft neutral fill, generous padding (24px), rounded corners (16px). No harsh borders.
- **Inputs:** Neutral background, rounded, soft plum focus ring.

## Rules
- Large touch targets, generous spacing. Design should feel breathable.
- Avoid sharp corners and hard contrasts. Everything should feel soft and approachable.
- Images should feel natural and warm — avoid clinical or tech-stock imagery.