# Nameless Academy

Nameless Academy is an offline-friendly study and game-break web application. Students complete short, level-based quizzes in mathematics, English, and science, earn learning points, and exchange those points for bounded sessions in a seven-game arcade. An optional Node.js service adds accounts, manual cloud synchronization, friends, friend leaderboards, and online matches.

The application is intentionally framework-free. It runs as static HTML, CSS, JavaScript, JSON, and image assets.

## Features

- Normal and hard question banks for mathematics, English, and science
- Five-question study rounds with randomized, non-repeating selection
- Local progress, achievements, streaks, and usage history
- Point-based arcade access with configurable session limits
- Seven browser games with local high scores
- Responsive arcade layouts with touch controls for phones, tablets, and desktops
- Chinese and English interfaces
- Device-local administrator settings
- Optional accounts, cross-device save synchronization, friends, and daily/weekly/monthly friend leaderboards
- Server-mediated online play for Gomoku, Chess, Battleship, and Stick Fighter

Without a configured remote server, all user state remains in the browser and every offline feature continues to work. Administrator mode is a local convenience feature, not a server-backed security boundary.

## Open locally

For normal use, open `index.html` directly. The `file://` path loads the generated standalone question-bank bundle and does not require a server.

For development, serving the repository over HTTP makes individual JSON changes visible after rebuilding the relevant source data:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000/>.

No install or build step is currently required.

## Optional account server

The server has no third-party package dependencies and stores passwords as salted `scrypt` hashes. Start it with:

```sh
node server/index.js
```

It listens on port `8787` on all network interfaces by default. `src/config/remote.js` uses the current page hostname when one exists and falls back to `localhost` when `index.html` is opened directly. A page opened at `http://192.168.1.20:8000`, for example, connects to `http://192.168.1.20:8787`; direct desktop opening connects to `http://localhost:8787`.

### Change the remote address

Edit the deployment values near the top of `src/config/remote.js`:

```js
window.REMOTE_SERVER_HOST = location.hostname || 'localhost';
window.REMOTE_SERVER_PORT = 8787;
window.REMOTE_SERVER_PROTOCOL = 'http:';
```

- For a LAN demo, keep the hostname expression and change only the port if required.
- For a fixed remote host, replace the first value with a hostname such as `'api.example.com'`.
- For production HTTPS, set the protocol to `'https:'` and normally set the port to `443`.
- `REMOTE_SERVER_URL` is assembled from those three values below them; it can instead be replaced with a complete API origin when a reverse proxy uses a non-standard path or topology.

The backend `HOST` environment variable controls which network interfaces accept connections; it is not the public hostname. Set backend `HOST`, `PORT`, and `DATA_FILE` in the deployment environment as needed.

### Demo commands

For a desktop demonstration that opens `index.html` directly, start the account service from the repository root:

```sh
node server/index.js
```

Keep that terminal open, then double-click `index.html`. The page connects to `http://localhost:8787`.

For a phone or tablet demonstration, keep the account service running in terminal 1:

```sh
# Terminal 1
node server/index.js
```

Start the static site in a second terminal:

```sh
# Terminal 2
python3 -m http.server 8000 --bind 0.0.0.0
```

Then visit `http://<computer-lan-address>:8000/` from the mobile device. The browser automatically uses that same LAN address for the account server. Keep both terminals open during the demonstration. Ports `8000` and `8787` must be allowed through the host firewall. The account dialog, friend form, leaderboard tabs, and all arcade controls include narrow-screen layouts.

Server data is written under `server/data/` by default and is ignored by Git. Back up that directory in production. The built-in server is a deployable prototype; a public deployment should add TLS at a reverse proxy, origin restrictions, rate limiting, monitoring, and managed durable storage.

Run the API smoke test against a running server with:

```sh
SERVER_URL=http://your-demo-host:8787 node server/smoke-test.js
```

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
src/config/   Deployment configuration
src/shared/   Browser clients shared by both entry points
server/       Optional account, social, sync, and match service
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
