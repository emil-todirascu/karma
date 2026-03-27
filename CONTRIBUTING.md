# Contributing to Karma

If you are thinking about making Karma better, or you just want to hack on it, that’s great!

> Please follow the [code of conduct](CODE_OF_CONDUCT.md).

## Project scope

This repository is a maintenance-mode fork of the original Karma project.

Large new features are usually out of scope.

## Got a Question or Problem?

If you have questions about how to use this fork, please use [issues][github_newissue].

## Found an Issue?

If you find a bug in the source code or a mistake in the documentation, you can help us by
submitting an issue to our [GitHub Repository][github_newissue]. Even better you can submit a Pull Request
with a fix.

## Maintainers

Please use the [issue tracker][github_issue_tracker] for coordination around pull requests and issues.

### Releasing

Releases are published by the GitHub Actions workflow at [`publish.yml`](./.github/workflows/publish.yml).

Minimal release flow:

1. Update the package version.
2. Commit the version bump.
3. Push to `master`.
4. Create and push a matching tag in the form `vX.Y.Z`.

Example:

```bash
npm version 6.4.6
git push origin master
git push origin v6.4.6
```

Pushing the tag triggers the publish workflow. You can create the GitHub Release separately from the same tag.

[github_newissue]: https://github.com/emil-todirascu/karma/issues/new
[github_issue_tracker]: https://github.com/emil-todirascu/karma/issues
