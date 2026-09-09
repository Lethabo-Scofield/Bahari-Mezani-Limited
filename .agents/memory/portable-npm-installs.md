---
name: Portable npm installs
description: Prevent Replit package-firewall URLs from breaking builds on external deployment providers.
---

Do not commit an npm lockfile containing `package-firewall.replit.internal` URLs when the project will also build outside Replit. Use a project-level public npm registry configuration and verify committed files contain no internal hostnames.

**Why:** Replit can inject its internal package registry while installing dependencies. External builders such as Vercel cannot resolve that private hostname.

**How to apply:** Before an external deployment, search committed dependency metadata for Replit-internal registry URLs. Remove or regenerate non-portable lockfiles and keep the project registry configuration explicit.