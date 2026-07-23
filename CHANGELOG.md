# Changelog

All notable changes to this project are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). This project does not yet publish versioned releases, so changes begin in the `Unreleased` section.

## [Unreleased]

### Added

- Root project documentation and repository layout guidance.
- Shared formatting configuration for editors and Prettier.
- A common JSON Schema for runtime question banks.

### Changed

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

### Removed

- Removed the stale `ta‘s backup file` copy. Git history is now the source for previous versions.
- Removed the obsolete embedded-question-bank utility, which no longer matched the runtime loading model.
