import type { Options } from "semantic-release";

const config: Options = {
  branches: ["main"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        releaseRules: [
          { type: "style", release: "patch" }, // Treat 'style' as a patch release
        ],
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        presetConfig: {
          types: [
            { type: "feat", section: "Features" },
            { type: "fix", section: "Bug Fixes" },
            { type: "docs", section: "Documentation" },
            { type: "style", section: "Styles", hidden: false }, // <-- include style commits in changelog
            { type: "refactor", section: "Refactoring" },
            { type: "perf", section: "Performance Improvements" },
            { type: "test", section: "Tests" },
            { type: "build", section: "Build System" },
            { type: "ci", section: "Continuous Integration" },
            { type: "chore", section: "Miscellaneous Chores" },
            { type: "revert", section: "Reverts" },
          ],
        },
      },
    ],
    [
      "@semantic-release/npm",
      {
        npmPublish: false, // Adjust if publishing to npm
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "dist/**/*"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
    "@semantic-release/github",
  ],
};

export default config;
