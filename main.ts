// One Star, Written in Sap — entry program.
// Writes one one-line 1-star review, in the voice of a houseplant
// reviewing its human owner, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// The joke's beats: the plant bleeds sap (its own blood/ink — the review
// is literally written in sap), the owner romanticises the injury as
// "character", then "fixes" it with a worse home: a mug with no drainage
// and a motivational sticker. Grievance, plant's-eye detail, one star.
const REVIEW =
  "One star. I bled sap for three weeks straight and he called it character, then repotted me into a mug with no drainage and a sticker that says LIVE LAUGH LEAF.";

// Gate self-check: 1-279 characters, not whitespace-only.
const len = [...REVIEW].length;
if (len < 1 || len > 279 || REVIEW.trim().length === 0) {
  throw new Error(`review fails gate: ${len} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
console.log(`wrote ${len} characters to /output/entry.txt`);
