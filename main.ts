// The Comment Above the Code — make.fun bounty
// u-mfnakmal-the-comment-above-the-code-35e38026
// Writes one honest developer comment above fragile production code
// to /output/entry.txt (gate: 1-200 UTF-8 chars, not only whitespace).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The sleep(500) below is load-bearing. I have stopped asking why.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
