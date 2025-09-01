import type { Options } from "semantic-release";

const config: Options = {
  branches: ["main"], // Specify release branch
  plugins: [
    "@semantic-release/commit-analyzer", // Analyzes commits for version bumps
    "@semantic-release/release-notes-generator", // Generates release notes
    [
      "@semantic-release/npm", // Updates npm package (optional, for libraries)
      {
        npmPublish: false, // Set to true if publishing to npm
      },
    ],
    [
      "@semantic-release/git", // Commits changes to Git
      {
        assets: ["package.json", "dist/**/*"], // Include Vite build output
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
    "@semantic-release/github", // Publishes GitHub releases
  ],
};

export default config;
