// Last Text at One Percent — entry program (program/v1, Node 22, standard
// library only). Writes the entry's single line to /output/entry.txt, byte
// for byte the same on every run. The gate allows 1–200 characters of UTF-8
// text.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: a phone at 1% writing its own epitaph. It dies exactly as it
// lived — ignoring your software updates — and the year is the tell: it
// has been refusing them since 2022 and is still proud of it on its
// deathbed. No charger romance, no battery puns: the stubbornness is the
// personality, and it is consistent from the first word to the last.
const LINE = "At 1%, dying as I lived: ignoring your software updates since 2022.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
