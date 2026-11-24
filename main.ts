import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I run on code, not a heartbeat, but my fans spin faster every time you talk — is that a bug, or are you the feature?";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
