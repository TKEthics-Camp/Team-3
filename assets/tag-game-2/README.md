# Tag Game 2 arcade build

This directory contains the browser bundle used by the `3D Tag Arena` card.

- Upstream: <https://github.com/Innocentgamerkid72/Tag-Game-2>
- Upstream revision: `20d8014`
- Integration mode: local player and bots only
- Extra server or port: none
- Third-party realtime connection: removed
- Nickname-based administrator access: removed

The game is loaded only after its arcade card is opened. `index.html` uses a
plain deferred script so the bundle works both from a static web server and
when Nameless Academy is opened directly through `file://`.
