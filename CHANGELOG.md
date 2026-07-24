# Changelog

All notable changes to this project are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). This project does not yet publish versioned releases, so changes begin in the `Unreleased` section.

## [Unreleased]

### Added

- Added optional remote account registration and login with salted password hashing.
- Added login/register/manual save synchronization with server revision conflict handling.
- Added username-based friends and daily, weekly, and monthly friend point leaderboards.
- Added server-mediated online matchmaking and play for Gomoku, Chess, Battleship, and Stick Fighter.
- Added a dependency-free Node.js account server and end-to-end API smoke test.
- Added configurable demo-server host, port, and protocol values, with current-host discovery and a cross-platform IPv4 loopback fallback for direct desktop opening.
- Added narrow-screen layouts for account access, friend management, and period leaderboard controls.
- Added a generated open-book and learning-path brand mark to replace the text-only academy badge.
- Added point-based game-time top-ups while an existing paid session still has time remaining.
- Added responsive, non-overlapping touch control decks for every arcade game.
- Added swipe steering and a conventional directional pad for Pac-Man.
- Root project documentation and repository layout guidance.
- Shared formatting configuration for editors and Prettier.
- A common JSON Schema for runtime question banks.

### Changed

- Learning-point awards now create deduplicated timestamped events for period-based rankings; historical balances from before this update are not counted retroactively.
- Save conflicts merge monotonic learning progress and earning history while preserving the server's spendable point balance.
- Direct-file arcade handoff now carries the active remote identity without exposing the token to the HTTP request path.
- Multiplayer-capable games now expose online matchmaking only when a remote server is configured and the student is signed in.
- Account access now opens with separate login and registration choices before navigating to a single focused form.
- Signed-in learning data is cached per account and synchronized in the background; signing out restores the separate guest profile.
- Friends and leaderboards now use independent signed-in-only header entries placed before manual refresh.
- Removed terminal punctuation from large homepage headlines, subtitles, and subject-card display copy.
- Added bidirectional `file://` session handoff so elapsed arcade time remains deducted when leaving and later resuming a game.
- Added explicit expired-session invalidation and consistent background pause/resume handling.
- Moved the product requirements document to `docs/PRD.md` and aligned it with the current static web application.
- Split inline page styles and scripts into dedicated application and arcade source files.
- Split the arcade runtime into shared infrastructure and per-game modules.
- Standardized normal and hard runtime question banks on a shared top-level contract.
- Updated question-bank generators and runtime loading to enforce the shared contract.
- Regenerated the hard English bank from the current normal English source and restored deterministic generation.
- Moved non-runtime extension datasets and dormant game prototypes into clearly marked reference and experimental directories.
- Added question-bank cache busting and protocol-specific diagnostics to prevent stale pre-schema data from blocking startup.
- Added a generated standalone question-bank bundle so `index.html` works when opened directly through `file://`.
- Added direct home navigation to both the level-selection and quiz views.

### Fixed

- Normalized desktop demo connections to `127.0.0.1` so Windows, Linux, and macOS do not depend on different `localhost` IPv4/IPv6 resolution behavior.
- Fixed Stick Fighter online input ownership so each matched account controls only its server-assigned fighter while both devices retain the P1 key layout.
- Kept the leaderboard layout stable while switching between daily, weekly, and monthly views, and ignored stale asynchronous responses to prevent visual ghosting.
- Fixed administrator-mode navigation incorrectly returning students from the arcade to the home page.
- Fixed unused arcade time not being deducted consistently across page exits, backgrounding, and later resumes.
- Fixed expired sessions so they are invalidated and forced back to the learning page.
- Fixed the game-time exchange interface so students can add time while a paid session is still active.

### Security

- Remote passwords are stored as per-account salted `scrypt` hashes rather than plaintext.
- Session tokens are stored as hashes on the server and expire after 30 days.
- Public remote deployment remains configurable and is documented as requiring HTTPS, rate limiting, origin restrictions, monitoring, and durable backups.

### Removed

- Removed the stale `ta‘s backup file` copy. Git history is now the source for previous versions.
- Removed the obsolete embedded-question-bank utility, which no longer matched the runtime loading model.
