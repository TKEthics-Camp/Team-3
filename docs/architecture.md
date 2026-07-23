# Architecture

## Runtime flow

`index.html` loads the learning styles, the generated standalone bank bundle, and the application scripts. Under `file://`, the application reads the six banks from the standalone bundle so the page works when opened directly. Under HTTP, it fetches the six canonical runtime JSON files. Both paths validate the shared top-level contract before enabling subject selection.

When a student exchanges points for game time, the learning application writes a versioned session object to browser storage and navigates to `games.html`. The arcade validates that session before rendering. Shared arcade infrastructure controls timing, scoring, language, lifecycle, and canvas mounting; each game lives in a separate source file.

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

Changing these keys or their object shapes requires an explicit migration.
