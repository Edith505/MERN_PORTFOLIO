import sharp from 'sharp'
import { stat } from 'node:fs/promises'

const input = 'src/assets/eddy-portrait-cutout.png'
const output = 'src/assets/eddy-portrait.webp'

await sharp(input)
  .resize({
    width: 960,
    withoutEnlargement: true,
  })
  .webp({
    quality: 85,
    alphaQuality: 100,
    effort: 6,
  })
  .toFile(output)

const original = await stat(input)
const optimized = await stat(output)
const reduction = (1 - optimized.size / original.size) * 100

console.log(`Original: ${(original.size / 1024).toFixed(0)} KiB`)
console.log(`WebP: ${(optimized.size / 1024).toFixed(0)} KiB`)
console.log(`Reduction: ${reduction.toFixed(1)}%`)