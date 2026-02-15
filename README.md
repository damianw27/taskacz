# Taskacz

Taskacz is a lightweight task manager built with React and TypeScript. It targets desktop (Neutralino) and mobile (Capacitor) from a shared codebase.

## Features

- Add, edit, complete, and delete tasks
- Drag-and-drop task reordering
- Task search and filtering
- Light and dark themes
- Multi-language interface
- Local-first storage on each platform

## Tech Stack

- React 19 + TypeScript
- Vite (rolldown-vite)
- Zustand (state management)
- Emotion CSS
- i18next
- Neutralino (desktop)
- Capacitor (mobile)

## Prerequisites

- Bun 1.0+ (project scripts use `bun`)
- Node.js 20+ (recommended)
- For mobile builds: Android Studio and/or Xcode

## Installation

```bash
bun install
```

## Development

Run desktop app in browser/dev mode:

```bash
bun dev:desktop
```

Run mobile web target in dev mode:

```bash
bun dev:mobile
```

## Build

Build desktop bundle:

```bash
bun build:desktop
```

Build mobile bundle:

```bash
bun build:mobile
```

## Desktop Packaging (Neutralino)

Run packaged desktop app locally:

```bash
bun start
```

Build distributable package:

```bash
bun compile
```

Production package:

```bash
bun compile:prod
```

## Mobile (Capacitor)

Sync native projects:

```bash
bun cap:sync
```

Open Android project:

```bash
bun cap:android
```

Open iOS project:

```bash
bun cap:ios
```

Build web + sync Android:

```bash
bun mobile:android
```

Build web + sync iOS:

```bash
bun mobile:ios
```

## Project Structure

```text
src/
  components/      # Reusable UI components
  containers/      # Feature-level UI composition
  pages/           # Route screens
  modules/         # Domain modules (theme, api, guide, navigation)
  states/          # Zustand stores
  platforms/       # Platform-specific entries/services
  i18n/            # Localization setup and dictionaries
```

## Contributing

Contributions are welcome. Please open an issue first for major changes.

By participating, you agree to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## License

No license file is currently included in this repository.
