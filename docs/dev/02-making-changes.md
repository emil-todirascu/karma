## Scope

This repository tracks the deprecated upstream project in maintenance mode.
Please focus changes on dependency updates, security fixes, compatibility work, and conservative bug fixes.

## Setting up the Workspace

- Make sure you have a [GitHub account](https://github.com/signup/free).
- [Fork the repository] on GitHub.
- Clone your fork
  ```bash
  $ git clone https://github.com/<your-username>/karma.git
  $ cd karma
  ```
- Install for development
  ```bash
  $ npm install
  ```

## Testing and Building

- Run the tests via:

  ```bash
  $ npm test
  # or you can run test suits individually
  $ npm run test:unit
  $ npm run test:e2e
  $ npm run test:client
  ```

- Lint the code via:

  ```bash
  $ npm run lint
  # or you can also apply auto-fixes where possible
  $ npm run lint:fix
  ```

- Build the client code via:
  ```bash
  $ npm run build
  # or use the watch mode
  $ npm run build:watch
  ```

## Changing the Code

Checkout a new branch and name it accordingly to what you intend to do:

- Features get the prefix `feature-`.
- Bug fixes get the prefix `fix-`.
- Improvements to the documentation get the prefix `docs-`.

```bash
$ git checkout -b <branch_name>
```

Open your favorite editor, make some changes, run the tests, change the code, run the tests,
change the code, run the tests, etc.

- Please follow http://nodeguide.com/style.html (with exception of 100 characters per line).

## Sending a Pull Request

- Commit your changes (please follow [commit message conventions]):
  ```bash
  $ git commit -m "..."
  ```
- Verify that the last commit follows the conventions:
  ```bash
  $ npm run commit:check
  ```
- Push to your GitHub repo:
  ```bash
  $ git push origin <branch_name>
  ```
- Go to the GitHub page and click "Open a Pull request".
- Write a good description of the change.

After sending a pull request, other developers will review and discuss your change.
Please address all the comments. Once everything is all right, one of the maintainers will merge
your changes in.

## Contributor License Agreement

No separate CLA is currently required for contributions to this fork.

## Additional Resources

- [Issue tracker](https://github.com/emil-todirascu/karma/issues)
- [General GitHub documentation](https://docs.github.com/)
- [GitHub pull request documentation](https://docs.github.com/github/collaborating-with-issues-and-pull-requests/about-pull-requests#about-pull-requests)

[commit message conventions]: ./06-git-commit-msg.md
[Fork the repository]: https://github.com/emil-todirascu/karma/fork
