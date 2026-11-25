import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "No. Last time I signed at 3 AM you bought a boat. You do not own a lake, and I am not doing this again.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1 to 200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (/[\u0000-\u001f\u007f]/.test(LINE)) {
  throw new Error("entry must not contain control characters");
}
if (!LINE.includes("3 AM")) {
  throw new Error("entry must name the 3 AM hour it refuses");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, LINE, "utf8");

const back = readFileSync(outPath, "utf8");
if (back !== LINE) {
  throw new Error("round-trip read-back mismatch");
}
console.log(`wrote ${outPath} (${LINE.length} chars)`);
