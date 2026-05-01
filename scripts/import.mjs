#!/usr/bin/env node
/**
 * Import a tripack JSON file into Astro content.
 * Usage: node scripts/import.mjs <path-to-tripack.json>
 */
import { readFile, copyFile, access } from 'node:fs/promises';
import { basename, resolve, join } from 'node:path';

const CONTENT_DIR = resolve(import.meta.dirname, '../src/content/videos');

async function main() {
  const src = process.argv[2];
  if (!src) {
    console.error('Usage: npm run import -- <path-to-tripack.json>');
    process.exit(1);
  }

  const srcPath = resolve(src);
  const raw = await readFile(srcPath, 'utf-8');
  const data = JSON.parse(raw);

  if (data.schema !== 'tripack-v1') {
    console.error(`Error: unsupported schema "${data.schema}"`);
    process.exit(1);
  }

  const { channel_slug, video_id } = data.metadata;
  const shortId = video_id.slice(0, 6);
  const filename = `${channel_slug}-${shortId}.json`;
  const dest = join(CONTENT_DIR, filename);

  try {
    await access(dest);
    console.log(`⚠ Already exists: ${filename} (overwriting)`);
  } catch {}

  await copyFile(srcPath, dest);
  console.log(`✓ Imported → src/content/videos/${filename}`);
}

main().catch(err => {
  console.error(err.message);
  process.exit(1);
});
