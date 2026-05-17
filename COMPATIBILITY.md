# Compatibility Checks

This fork aims to be a practical drop-in replacement for teams that still rely on Karma.

To keep that claim grounded, the repository includes a scheduled compatibility workflow that:

1. Packs the current `karma-maintained` workspace.
2. Checks out a real third-party project that still uses Karma.
3. Replaces that project's installed `karma` package with this fork.
4. Runs that project's Karma test suite.

Current compatibility checks cover:

| Project                                               | Node.js |
| ----------------------------------------------------- | ------- |
| [Preact](https://github.com/preactjs/preact)          | 22      |
| [Leaflet](https://github.com/Leaflet/Leaflet)         | 24      |
| [react-modal](https://github.com/reactjs/react-modal) | 22      |
| [Bootstrap](https://github.com/twbs/bootstrap)        | 22      |

You can see the current status in the [Compatibility workflow](https://github.com/emil-todirascu/karma/actions/workflows/compatibility.yml).

If you have ideas for projects that should be added to these compatibility checks, please open an issue or send a PR.
