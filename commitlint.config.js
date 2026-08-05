const isDependabotUpdate = (message) =>
  /(?:^|\r?\n)Signed-off-by: dependabot\[bot\] <support@github\.com>\s*$/.test(
    message
  )

module.exports = {
  extends: ['@commitlint/config-angular'],
  ignores: [isDependabotUpdate]
}
