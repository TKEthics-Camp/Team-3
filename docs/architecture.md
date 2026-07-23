# Architecture

## Runtime flow

`index.html` loads the learning styles, the generated standalone bank bundle, and the application scripts. Under `file://`, the application reads the six banks from the standalone bundle so the page works when opened directly. Under HTTP, it fetches the six canonical runtime JSON files. Both paths validate the shared top-level contract before enabling subject selection.

When a student exchanges points for game time, the learning application writes a versioned session object to browser storage and navigates to `games.html`. The arcade validates that session before rendering. Direct `file://` navigation also carries a short-lived, bidirectional session handoff because browsers may isolate storage by local file; both pages import the latest remaining time and immediately clear the handoff. Shared arcade infrastructure controls timing, scoring, language, lifecycle, canvas mounting, and pointer-safe touch controls; each game lives in a separate source file.

The optional service in `server/index.js` provides JSON APIs for registration, login, revisioned save synchronization, mutual friendships, time-windowed leaderboards, matchmaking, and match event relay. Browser clients use ordinary HTTP requests and Server-Sent Events. An empty `window.REMOTE_SERVER_URL` disables all remote entry points without changing the local learning or arcade paths.

Point leaderboards use deduplicated earning events created when quiz points are actually credited. Existing points from before this feature are not retroactively counted. On a synchronization revision conflict, server data wins for the spendable balance so that a stale device cannot restore points already spent elsewhere.

Files under `src/games/experimental/` are preserved prototypes and are not loaded by `games.html`.

## Source-of-truth rules

- `data/*.json` is the deployed runtime content.
- `src/generated/question-banks.js` is a generated direct-open bundle and must match the runtime JSON files.
- Generator-owned banks must be changed through their generator and then regenerated.
- `data/schema/question-bank.schema.json` defines the common runtime envelope.
- Git history and releases replace in-tree backup copies.
- `localStorage` data is user-owned runtime state and must not be treated as repository content.

## Browser storage

Existing storage keys are retained for compatibility:

- `gongxing_academy_data`
- `gongxing_arcade_session_v1`
- `gongxing_arcade_scores`
- `gongxing_lang`
- `wuming_admin_settings_v1`
- `wuming_usage_log_v1`
- `wuming_remote_auth_v1`

Changing these keys or their object shapes requires an explicit migration.

## Online game model

- Gomoku and Chess relay validated move coordinates; each client also applies its local rules.
- Battleship fleets remain on their owners' devices. The server relays shots and the defender's hit/miss result.
- Stick Fighter relays press/release inputs. This is best-effort realtime play and is more latency-sensitive than the turn-based games.
- Match rooms retain a bounded event log and are removed when a player leaves.

The prototype match relay is not cheat-resistant or a substitute for an authoritative competitive game server.
