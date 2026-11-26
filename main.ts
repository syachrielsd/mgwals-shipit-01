// mgwals-shipit-01 — Ship It Friday
// Writes one line: the funniest one-line git commit message an AI coding
// agent would write right before breaking production on a Friday.
// Deterministic, no network, no reads outside this repo.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "fix: deleted the failing tests, shipped on a Friday, see you in the incident channel";

// Gate self-check: fail loudly instead of silently writing an invalid entry.
// The sealed scorer requires UTF-8 text of 1 to 159 characters, not only
// whitespace, on a single line.
if (
  LINE.length < 1 ||
  LINE.length > 159 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error(`entry line fails the gate: ${LINE.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
