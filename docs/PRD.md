# Product Requirements — Nameless Academy

**Status:** Working web prototype
**Platform:** Static browser application with an optional Node.js service
**Last updated:** July 2026

## 1. Product summary

Nameless Academy is a bilingual study application for students who benefit from short, focused practice and bounded game breaks. Students complete level-based quizzes, earn learning points, and exchange those points for time in a browser arcade.

The current product is a framework-free web application. It runs in modern desktop and mobile browsers and remains fully usable with device-local storage. An optional remote service adds accounts, synchronization, friends, leaderboards, and online matches.

## 2. Goals

- Make short study sessions easy to start and finish.
- Make progress visible through accuracy, streaks, achievements, and learning points.
- Keep game access explicit, time-limited, and proportional to earned points.
- Support a broad range of levels in mathematics, English, and science.
- Work without requiring an account or backend for learning and offline play.
- Offer optional account-backed synchronization and social play when a server is configured.
- Keep Chinese and English interfaces available throughout the experience.

## 3. Non-goals for the current prototype

- Server-enforced parent, teacher, or administrator permissions
- Social feeds, chat, or shared question sets
- Payment, advertising, subscriptions, or purchasable points
- Native iOS or Android packaging
- Guaranteed protection against a user modifying browser-local state

## 4. Audience

The primary audience is school-age students practicing independently on a personal or shared device. A secondary audience is a parent, teacher, or guardian configuring the local experience on that device.

## 5. Current learning experience

### 5.1 Subjects and levels

The application provides normal and hard question banks for:

- Mathematics: 12 levels
- Science: 12 levels
- English: 25 Lexile-oriented levels

The browser loads six runtime JSON banks from `data/`. Reference and extension datasets may exist in the repository but are not part of the runtime loading path.

### 5.2 Quiz rounds

- A round contains up to five unique questions.
- Selection balances question categories and avoids immediately repeating the previous round when the bank permits.
- Multiple-choice options are shuffled without changing the correct answer.
- Feedback is shown after submission.
- Accuracy, completed-question totals, subject mastery, streaks, and achievements are stored locally.

### 5.3 Learning points

- Correct answers award learning points.
- Points persist in browser storage and are displayed on the dashboard.
- A local point cap can be configured.
- Points can be exchanged for arcade time at the current fixed rate of five points per minute.
- Students can add purchased time to an existing paid arcade session without discarding its remaining time.

## 6. Current arcade experience

The arcade contains eight games:

1. Stick Fighter
2. Reaction Test
3. Gomoku
4. Rhythm Reactor
5. Pac-Man-style Maze
6. Chess
7. Battleship
8. 3D Tag Arena (local bots)

Game access is controlled by a local timed session. The remaining time is visible while playing, pauses when the page is inactive, and returns the user to the learning page when exhausted. Scores remain on the current device.

Arcade layouts scale across phone, tablet, and desktop viewports. Every game has a touch path that stays outside the game content: action games use dedicated control decks, Pac-Man also supports swipe steering, and board or reaction games use their game surface directly.

## 7. Local administration

Administrator mode can configure:

- Current points and the point cap
- Maximum game-session length
- Free arcade access
- Allowed levels for each subject
- The local administrator passcode

This feature is implemented entirely with browser storage and client-side code. It is a device-local configuration interface, not a secure authorization system. Any future requirement for tamper resistance, separate adult and student identities, or remote management requires a backend and a new security design.

## 8. Usage history and privacy

The application records recent learning time, arcade time, and completed quiz-level summaries in browser storage. When a student creates or logs into an optional account, registration, login, and explicit manual refresh synchronize the learning save. Passwords are stored by the server as salted hashes. Usage-time records and administrator settings are not part of the current cloud payload.

The product should continue to:

- Collect only information required for visible local features.
- Explain whether remote service configuration and login are active.
- Keep offline-only metrics visually distinct from synchronized records.
- Avoid storing sensitive personal information in the question or usage data.

## 9. Technical architecture

- HTML entry points: `index.html` and `games.html`
- Styles: `styles/`
- Learning logic: `src/app/`
- Arcade runtime and games: `src/games/`
- Runtime question banks: `data/*.json`
- Question-bank contract: `data/schema/question-bank.schema.json`
- Generated data sources: `scripts/` and `tools/`
- Persistence: `localStorage` and `sessionStorage`
- Optional service: dependency-free Node.js HTTP/SSE server under `server/`
- Deployment: direct local opening or static HTTP hosting; HTTPS service required for public account use

The application and optional service have no third-party runtime package dependencies. A generated JavaScript bundle mirrors the six runtime JSON banks so `index.html` can be opened directly from the filesystem. HTTP development and deployment continue to load the canonical JSON files.

## 10. Accounts and social play

- Registration uploads the current local learning save; login downloads the server save.
- Manual refresh synchronizes the current save using a server revision number.
- A username can add another existing username as a mutual friend.
- Friend leaderboards compare points credited during the current local calendar day, Monday-based week, or month.
- Gomoku, Chess, Battleship, and Stick Fighter offer online matchmaking when the service is configured and the student is signed in.
- Turn-based games relay discrete actions. Stick Fighter relays realtime input and uses Player 1 as the authoritative simulation host, with transient state snapshots correcting Player 2 under network latency.

## 11. Product and engineering constraints

- Runtime question banks must conform to the shared schema.
- Normal and hard banks must use the same top-level contract.
- Each arcade game should remain isolated in its own source file.
- Touch controls must remain outside game content and preserve at least a 44-pixel target size.
- User-visible behavior should remain functional without an internet connection after static assets have been delivered.
- Changes to point exchange, session timing, or local data keys require migration consideration.
- Generated banks must be reproducible from their checked-in generators.
- Remote deployment must use HTTPS and durable backups; public production use also requires origin restrictions, abuse controls, and monitoring.

## 12. Near-term priorities

1. Add a unified local command layer for serving, formatting, validation, and tests.
2. Add automated tests for question-bank integrity, point exchange, and session timing.
3. Add browser smoke tests for the learning and arcade entry points.
4. Decide whether extension datasets should be integrated, archived, or removed.
5. Replace prototype JSON persistence and input relay with managed storage and authoritative match state before a high-traffic public launch.
