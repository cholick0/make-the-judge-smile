import { mkdirSync, writeFileSync } from "node:fs";

// One line, at most 200 characters, about a small good thing that happened
// today: the neighbour's cat finally decided we are friends.
const entry =
  "My neighbour's cat, who has ignored me for two years, walked in this morning, sat on my laptop, and purred like we'd always been friends.";

// Self-check the competition gate before writing: 1-200 characters, one line.
const chars = [...entry].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, outside the 1-200 gate`);
}
if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);
