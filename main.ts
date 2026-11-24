import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One-sentence absurd invention pitch (155 code points, gate 1-220):
// a Wi-Fi router that saves your sleep schedule by punishing binge-watching.
const PITCH =
  "A Wi-Fi router that eavesdrops for 'just one more episode' and throttles itself to dial-up speed, saving your sleep schedule from your own worst decisions.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH + "\n", "utf8");

// Read-back verification: the file on disk must carry exactly the pitch.
const back = readFileSync("/output/entry.txt", "utf8");
if (back.trim() !== PITCH) throw new Error("entry.txt mismatch");
const cps = [...PITCH].length;
if (cps < 1 || cps > 220) throw new Error(`pitch is ${cps} code points, must be 1-220`);
if (PITCH.includes("\n")) throw new Error("pitch must be a single line");
console.log(
  `verified /output/entry.txt: ${cps} code points, ${Buffer.byteLength(PITCH, "utf8")} bytes, single line: true`,
);

console.log(PITCH);
