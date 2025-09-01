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
    "@semantic-release/release-notes-generator",
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
