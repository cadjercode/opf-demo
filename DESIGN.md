# Design System — Occitanie Protection Foudre

## Product Context
- **What this is:** Site vitrine 5 pages pour une entreprise de protection foudre (paratonnerres, parafoudres, conformité ICPE)
- **Who it's for:** Responsables sécurité sites industriels (ICPE), collectivités, agriculteurs, particuliers
- **Space/industry:** Protection foudre / Électricité industrielle — Occitanie, France
- **Project type:** Site vitrine multi-pages (5 pages)
- **Competitors analyzed:** France Paratonnerres (blanc/rouge corporate), DEHN France (rouge/blanc catalogue), site actuel OPF (noir/jaune générique)

## Aesthetic Direction
- **Direction:** Editorial Bold — Industrial Refined
- **Decoration level:** Intentional — lignes de séparation dorées, contrastes de sections, typographie comme ornement
- **Mood:** "Ces gens-là savent ce qu'ils font." Audacieux, technique, premium. Pas corporate, pas template. Un site qui a du caractère et qui inspire confiance immédiatement.
- **Variant approved:** B (Editorial Bold) — typo massive, layout asymétrique, noir + ambre
- **Reference sites:** DEHN.fr (contenu technique), France Paratonnerres (structure), mais aucun n'a le design qu'on vise

## Typography
- **Display/Hero:** Space Grotesk Bold (700) — géométrique, technique, impactant. Plafond 64px (4rem) en desktop sauf hero
- **Body:** Plus Jakarta Sans Regular (400) / Medium (500) — moderne, lisible, chaleureux
- **UI/Labels:** Plus Jakarta Sans Semi-Bold (600)
- **Data/Tables:** JetBrains Mono — pour chiffres clés et données techniques (tabular-nums)
- **Code:** JetBrains Mono
- **Loading:** Google Fonts — preload display font, font-display: swap
- **Scale:**
  - Hero: clamp(2.5rem, 5vw + 1rem, 4.5rem) — seul élément au-dessus de 4rem
  - H1: clamp(2rem, 3.5vw + 0.5rem, 3rem)
  - H2: clamp(1.5rem, 2.5vw + 0.5rem, 2.5rem) — plafonné 40px
  - H3: clamp(1.25rem, 2vw + 0.5rem, 1.75rem)
  - Body: 1rem (16px) / line-height 1.7 (contenu technique dense)
  - Small: 0.875rem
  - Caption: 0.75rem

## Color
- **Approach:** Restrained — ambre comme accent unique, le reste en niveaux de gris/navy
- **Palette dark (default):**
  - `--bg-deep`: #121820 — fond principal (noir bleuté, évoque le ciel d'orage)
  - `--bg-card`: #1A2030 — cartes et surfaces élevées
  - `--bg-elevated`: #222A38 — sections surélevées
  - `--border`: #2A3344 — bordures subtiles
- **Palette light (sections alternées):**
  - `--bg-light`: #F5F3EF — sections claires (warm off-white)
  - `--bg-light-card`: #FFFFFF — cartes sur fond clair
  - `--text-on-light`: #1A1A1A — texte sur fond clair
- **Accent ambre/or (l'éclair):**
  - `--accent`: #E8A817 — accent principal sur fond sombre (CTA, icônes, highlights)
  - `--accent-dark`: #B8860B — accent assombri pour CTA sur fond clair (WCAG AA conforme)
  - `--accent-hover`: #D4960A — hover state
  - `--accent-light`: #FEF3C7 — fond léger ambre (badges, highlights)
  - `--accent-glow`: rgba(232, 168, 23, 0.12) — glow effect subtil
- **Secondaire (bleu électrique):**
  - `--secondary`: #2A7AE4 — liens, hover states, éléments informatifs
  - `--secondary-light`: rgba(42, 122, 228, 0.1) — fond badges info
- **Text on dark:**
  - `--text-primary`: #E8E6E1 — titres (blanc chaud, moins agressif que blanc pur)
  - `--text-body`: #B8B8B8 — texte courant
  - `--text-muted`: #6B7280 — labels, captions
- **Semantic:**
  - Success: #1DB954
  - Warning: #E8A817
  - Error: #EF4444
  - Info: #2A7AE4 (same as secondary)
- **Règle accessibilité:** Sur sections claires, CTA = fond #1A1A1A + texte #E8A817 (inversé). Jamais d'ambre pur comme texte sur fond clair.

## Spacing
- **Base unit:** 8px
- **Density:** Spacious — le "dark space" est un élément de design, pas du vide
- **Scale:**
  - 2xs: 4px
  - xs: 8px
  - sm: 16px
  - md: 24px
  - lg: 32px
  - xl: 48px
  - 2xl: 64px
  - 3xl: 96px
  - section-gap: 120px (espace entre sections principales)

## Layout
- **Approach:** Grid discipliné + max 2 moments d'asymétrie par page (hero + 1 section de rupture)
- **Grid:** 12 colonnes. Mobile 4col, Tablet 8col, Desktop 12col
- **Max content width:** 1200px (texte), 1400px (avec images plein-bord)
- **Breakpoints:**
  - Mobile: < 768px
  - Tablet: 768px — 1023px
  - Desktop: 1024px — 1439px
  - Wide: ≥ 1440px
- **Border radius:**
  - sm: 4px (inputs, petits éléments)
  - md: 8px (cartes, boutons)
  - lg: 12px (grandes cartes, modales)
  - full: 9999px (badges, pills)
- **Signature layout patterns:**
  - Hero: pleine largeur, texte surdimensionné aligné à gauche
  - Split sections: 60/40 ou 50/50, photo d'un côté, contenu de l'autre
  - Stats: chiffres en grand (JetBrains Mono), label en petit dessous
  - Cards: fond --bg-card, bordure --border, hover avec --accent-glow

## Motion
- **Approach:** Intentional — chaque animation a une raison d'être
- **Easing:**
  - Enter: cubic-bezier(0.22, 1, 0.36, 1) — ease-out rapide
  - Exit: cubic-bezier(0.55, 0, 1, 0.45) — ease-in
  - Move: cubic-bezier(0.65, 0, 0.35, 1) — ease-in-out
- **Duration:**
  - Micro: 100ms (hover, focus)
  - Short: 200ms (boutons, toggles)
  - Medium: 400ms (cards, reveals)
  - Long: 600ms (sections, page transitions)
- **Animations spécifiques:**
  - Scroll reveal: fade-up 30px + opacity, staggered 100ms entre éléments
  - Compteurs animés: count-up de 0 à N quand visible (IntersectionObserver)
  - Header: transparent → solid on scroll (background blur)
  - Hover cards: subtle translateY(-4px) + glow border ambre
  - CTA: pulse subtil sur le bouton principal toutes les 5s

## Components Signature
- **Bouton primaire:** fond --accent, texte noir (#0A0A0A), font-weight 600, border-radius md, padding 14px 32px. Hover: --accent-hover + translateY(-2px)
- **Bouton secondaire:** border 1px --accent, texte --accent, fond transparent. Hover: fond --accent-glow
- **Ligne de séparation dorée:** 3px width, --accent, 60px de long, placée avant les titres de section
- **Badge certification:** bordure dorée, fond semi-transparent, icône + texte Qualifoudre Niveau 3

## Pages
1. **Accueil** (`index.html`) — Hero full-viewport + accroche + CTA, chiffres clés, aperçu services, logos partenaires/clients, CTA contact
2. **Services** (`services.html`) — 3 pôles détaillés (Conformité, Maintenance, Électricité), ancres internes, CTA devis par service
3. **Réalisations** (`realisations.html`) — Galerie photo, études de cas clients, logos clients
4. **Expertise** (`expertise.html`) — Qualifoudre Niv.3, normes, partenaires DEHN/ABB/Schneider, FAQ
5. **Contact** (`contact.html`) — Formulaire devis, carte zone intervention, coordonnées, horaires

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-05-21 | Direction B (Editorial Bold) choisie | Plus de caractère que A (classique) et C (trop SaaS). Se démarque de tous les concurrents du secteur |
| 2026-05-21 | Palette dark + ambre | Évoque l'éclair (or/ambre), premium, personne dans le secteur ne fait ça |
| 2026-05-21 | Space Grotesk + Plus Jakarta Sans | Combo technique + lisible, ni générique ni fantaisiste |
| 2026-05-21 | 5 pages au lieu de mono-page | Meilleur SEO, contenu mieux structuré, plus professionnel pour du B2B |
| 2026-05-21 | 3 variantes à proposer au client | A (classique), B (editorial bold), C (tech) — montre du travail et donne le choix |
| 2026-05-21 | Ajustements post-review indépendante | Fond #121820 (noir bleuté) au lieu de noir pur, palette secondaire bleu #2A7AE4, ambre assombri #B8860B sur fond clair, typo plafonnée 64px, asymétrie contenue (max 2/page) |
| 2026-05-21 | Carte kéraunique (futur) | Wild card à intégrer plus tard — carte SVG densité orages France, Tarn en ambre (35 jours/an), contenu unique secteur |
