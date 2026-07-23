# Nameless Academy

Nameless Academy is an offline-friendly study and game-break web application. Students complete short, level-based quizzes in mathematics, English, and science, earn learning points, and exchange those points for bounded sessions in a seven-game arcade.

The application is intentionally framework-free. It runs as static HTML, CSS, JavaScript, JSON, and image assets.

## Features

- Normal and hard question banks for mathematics, English, and science
- Five-question study rounds with randomized, non-repeating selection
- Local progress, achievements, streaks, and usage history
- Point-based arcade access with configurable session limits
- Seven browser games with local high scores
- Chinese and English interfaces
- Device-local administrator settings

All user state is stored in the browser. Administrator mode is a local convenience feature, not a server-backed security boundary.

## Open locally

For normal use, open `index.html` directly. The `file://` path loads the generated standalone question-bank bundle and does not require a server.

For development, serving the repository over HTTP makes individual JSON changes visible after rebuilding the relevant source data:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000/>.

No install or build step is currently required.

## Repository layout

```text
assets/       Image assets
assets/experimental/ Assets retained for dormant game prototypes
data/         Runtime question banks
data/reference/ Non-runtime source and reference datasets
data/schema/  Shared question-bank schema
docs/         Product and architecture documentation
scripts/      Question-bank generators
src/app/      Learning application logic
src/generated/ Generated standalone browser data
src/games/    Shared arcade runtime and individual games
src/games/experimental/ Dormant game prototypes not loaded at runtime
styles/       Page styles
tools/        Data and maintenance utilities
index.html    Learning application entry point
games.html    Arcade entry point
```

## Question-bank contract

The six runtime banks use the same top-level structure:

```json
{
  "schemaVersion": 1,
  "subject": "math",
  "mode": "normal",
  "levels": []
}
```

`subject` must be `math`, `english`, or `science`; `mode` must be `normal` or `hard`. See `data/schema/question-bank.schema.json` for the complete contract.

The files under `data/reference/` are source/reference datasets and are not loaded by the application.

The standalone validator can be run without installing dependencies:

```sh
node tools/validate-question-banks.mjs
```

After changing any runtime question bank, rebuild and verify the direct-open bundle:

```sh
node tools/build-standalone-banks.mjs
node tools/build-standalone-banks.mjs --check
```

## Editing conventions

- UTF-8, LF line endings, and a final newline are required.
- Use two spaces for HTML, CSS, JavaScript, JSON, Markdown, and YAML.
- Use four spaces for Python.
- Do not manually minify source files.
- Prettier-compatible files follow `.prettierrc.json`; Python follows the line length declared in `.editorconfig`.
- Generated question banks must be regenerated with their source scripts rather than edited piecemeal.
- `src/generated/question-banks.js` must be rebuilt after a runtime bank changes.
- Keep each game in its own file under `src/games/`.

## Product documentation

The current product definition is in [docs/PRD.md](docs/PRD.md). User-visible changes are recorded in [CHANGELOG.md](CHANGELOG.md).
