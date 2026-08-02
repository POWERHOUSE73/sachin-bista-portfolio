# Design System Strategy: The Curated Earth

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Archivist."** 

Unlike traditional e-commerce platforms that feel transactional and cluttered, this system treats every pre-loved item as a piece of history. We move away from the "grid of boxes" and toward a high-end editorial layout. The aesthetic is defined by **intentional asymmetry**, where white space (the `surface` token) is treated as a premium material rather than empty air. By overlapping high-fidelity photography with elegant serif typography, we create a sense of tactile luxury that mirrors the experience of browsing a boutique atelier.

This system rejects the "template" look. We utilize a rigid spacing scale to create fluid, non-traditional compositions that feel organic yet authoritative.

---

## 2. Colors: Tonal Depth & The "No-Line" Rule
The palette is rooted in a sophisticated earth-centricity. The `primary` (#173124) provides the gravity, while the `surface` (#fbf9f4) provides the warmth.

### The "No-Line" Rule
To maintain a premium editorial feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries between content blocks must be defined through:
*   **Background Color Shifts:** Transitioning from `surface` to `surface-container-low`.
*   **Tonal Nesting:** Placing a `surface-container-lowest` card inside a `surface-container` section to create natural contrast without "drawing" a box.

### Surface Hierarchy & Nesting
Treat the UI as a series of layered fine papers. Use the `surface-container` tiers to guide the eye:
*   **Base:** `surface` (#fbf9f4) for the main canvas.
*   **Secondary Sections:** `surface-container-low` (#f5f3ee) for subtle content breaks.
*   **Interactive Layers:** `surface-container-highest` (#e4e2dd) for active states or modal backgrounds.

### Glass & Gradient Rule
Floating elements (such as navigation bars or quick-view overlays) should utilize **Glassmorphism**. Use a semi-transparent version of `surface-container-lowest` with a `backdrop-filter: blur(20px)`. 
For main CTAs, apply a subtle linear gradient from `primary` (#173124) to `primary-container` (#2d4739) at a 135-degree angle. This adds "soul" and depth that prevents the design from feeling flat.

---

## 3. Typography: The Editorial Voice
The typography is a dialogue between heritage and modern utility.

*   **The Display Scale (Noto Serif):** Used for "Hero" moments and storytelling. Large, high-contrast serif type conveys the premium nature of the items. Use `display-lg` (3.5rem) with tighter letter spacing (-0.02em) for a custom, bespoke feel.
*   **The Headline Scale (Noto Serif):** Establishes the hierarchy of the "archive." It is authoritative and rhythmic.
*   **The Body & Label Scale (Inter):** Provides the modern, functional counterbalance. All technical data—sizing, material composition, and sustainability impact—must be set in `body-md` or `label-md` to ensure maximum legibility and a clean, utilitarian aesthetic.

---

## 4. Elevation & Depth: Tonal Layering
We achieve depth through light and tone, not shadows.

*   **The Layering Principle:** Avoid the "Z-index shadow" whenever possible. Instead, achieve a "lift" by placing a lighter surface (`surface-container-lowest`) against a darker one (`surface-dim`).
*   **Ambient Shadows:** When a floating effect is required (e.g., a "Cart" drawer), use an extra-diffused shadow. 
    *   *Spec:* `0px 24px 48px -12px rgba(27, 28, 25, 0.08)` (Using a tint of `on-surface`).
*   **The Ghost Border Fallback:** If a border is required for accessibility (e.g., input fields), use the `outline-variant` at 20% opacity. 100% opaque borders are too "loud" for this system.

---

## 5. Components

### Buttons
*   **Primary:** Pill-shaped (`rounded-full`). Background: `primary` (#173124); Text: `on-primary`. No border. Subtle scale-up (1.02x) on hover.
*   **Secondary:** Pill-shaped. Background: `transparent`; Border: 1px "Ghost Border" (outline-variant at 30%); Text: `primary`.
*   **Tertiary/Clay Accent:** Use `tertiary-container` for "Sale" or "Impact" actions to draw the eye without breaking the forest palette.

### Cards & Lists
*   **Image-First Philosophy:** Cards should have `rounded-lg` (1rem) corners. Forbid dividers. Use a `16` (5.5rem) spacing gap to separate list items. 
*   **Product Cards:** The image should sit on a `surface-container-low` background. Typography should be left-aligned with the Serif `title-md` for the product name and Sans-Serif `body-sm` for price.

### Selection Chips
*   Used for sizing (S, M, L) or sustainability categories. Use `rounded-sm` for a slightly more architectural look. Active state: `secondary-container` with `on-secondary-container` text.

### Input Fields
*   Minimalist design. No background fill. Only a bottom border using `outline-variant` at 40% opacity. Labels use `label-md` and sit 0.5rem above the input line.

### Editorial Signature: The "Curator's Overlay"
*   A custom component for high-end items. A floating `surface` container that partially overlaps a large product image, containing the item's history or "curator's note" in `notoSerif` italic.

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace Asymmetry:** Offset images from text blocks to create a rhythmic, magazine-like flow.
*   **Use High-Quality Photography:** The system relies on "The Digital Archivist" feel; photography must have natural lighting and earth-toned backdrops.
*   **Respect the Spacing Scale:** Use the `20` (7rem) and `24` (8.5rem) tokens for top/bottom section padding to ensure the "Premium" feel.

### Don’t:
*   **Don't Use Pure Black:** Always use `on-surface` (#1b1c19) or `primary` (#173124) for text to keep the look organic.
*   **Don't Over-Round:** Stick to `rounded-lg` for cards and `rounded-full` for buttons. Avoid `rounded-xl` or `rounded-md` for large containers, as it can look "bubbly" rather than sophisticated.
*   **Don't Use Dividers:** If you feel the need to add a line, try increasing the vertical spacing (`spacing-12`) instead. Vertical white space is our primary separator.

---

## 7. Spacing & Rhythm
Rhythm is maintained through a base-4 system but optimized for elegance. 
*   **Section Gaps:** Use `spacing-16` (5.5rem) to separate major content blocks.
*   **Component Padding:** Use `spacing-3` (1rem) for internal card padding and `spacing-4` (1.4rem) for button horizontal padding to ensure a breathable, "airy" feel.