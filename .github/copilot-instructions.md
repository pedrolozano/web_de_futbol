<!-- .github/copilot-instructions.md: Project-specific guidance for AI coding agents -->

# Copilot Instructions — "Torneo de Fútbol" static site

Purpose: help an AI coding agent be immediately productive in this small static website repository.

- Project type: simple static frontend site (no build system). Primary files:
  - `index.html` — single-page content and markup (Spanish `lang="es"`).
  - `styles.css` — global styles for layout and components.
  - `script.js` — client-side interactions; referenced at the end of `index.html`.

- Big picture / architecture:
  - This is a static site served directly to browsers. All data is currently embedded in HTML.
  - Dynamic behaviour (if any) is implemented in `script.js`. There is no server-side code or API in this repo.
  - Content areas of interest: teams (`#equipos`), matches (`#partidos`), and standings table (`#tabla`).

- Key patterns and conventions (concrete examples):
  - Teams: add a new team inside the `#equipos .equipos-grid` using the `equipo-card` markup:

    ```html
    <div class="equipo-card">
      <div class="equipo-escudo">⚽</div>
      <h3>Nombre del Equipo</h3>
      <p>País: ...</p>
      <p>Entrenador: ...</p>
    </div>
    ```

  - Matches: each match uses a `.partido-card` with two `.partido-equipo` blocks and a `.partido-vs` center column. Score elements are `p.golesLocal` and `p.golesVisitante`.

  - Standings: the table at `#tabla` is a plain HTML table. Update `<tbody>` rows directly when editing standings.

  - Icons: social icons are inline SVG inside the footer's `.social-buttons` — modify SVG attributes (width/height/viewBox/fill) if needed.

- Developer workflows (how to run, test, debug locally):
  - No build step. Serve the folder as static files. Examples (PowerShell):

    ```powershell
    # Python http.server (works if Python installed)
    python -m http.server 8000

    # Or use Live Server VS Code extension (recommended for rapid edits)
    ```

  - Debugging: open browser DevTools, check Console for `script.js` errors, inspect DOM to find classes such as `.golesLocal`, `.equipos-grid`, `.partido-card`.

- Project-specific notes an agent should follow:
  - Keep all visual/structural edits in `index.html`/`styles.css` unless adding new JS behavior — then edit `script.js` only.
  - Preserve Spanish text and `lang="es"` attribute.
  - Accessibility: existing markup uses `aria-label` on social links; keep or improve these labels when changing footer/social components.
  - Avoid introducing a build system; prefer changes that preserve the static, dependency-free nature unless user requests otherwise.

- Integration and external dependencies:
  - External links: social anchors point to external social sites (`facebook.com`, `twitter.com`, etc.). They use `target="_blank" rel="noopener noreferrer"`.
  - No package.json, CI, or tests detected — do not assume Node/npm workflows.

- When automating edits or generating code:
  - Use the existing CSS utility class names (e.g., `.container`, `.btn-primary`) to match site layout.
  - To add content programmatically, prefer appending to the existing DOM containers (`.equipos-grid`, `.partidos-container`, `tbody` of `.tabla`) and follow the HTML structure shown above.

- Pull request and commit guidance for suggestions an agent should make (human-facing):
  - Small, focused PRs that change only one area (teams, matches, standings, or styles).
  - Include a short preview screenshot or the affected HTML snippet in the PR description.

If anything above is inaccurate, missing, or you'd like CI/deploy instructions included, tell me what to add and I'll update this file.
