import { createWriteStream } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";

const ROOT = join("public", "sites", "mello-coffee-webflow-io-87d7671d", "root-8a5edab2");
const IMG = join(ROOT, "images");
const SEO = join(ROOT, "seo");

const assets = [
  ["images/illustration-1.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b023c32121ab710aeb37_Illustration%201.svg"],
  ["images/cold-matcha.avif", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75afbad8015a210ca48519_Cold%20matcha.avif"],
  ["images/illustration-2.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b02394d7844142e1e1a2_Illustration%202.svg"],
  ["images/illustration-3.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b0977c30003645af92eb_Illustration%203.svg"],
  ["images/illustration-4.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b097c4b98d47b861ada2_Illustration%204.svg"],
  ["images/illustration-5.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b0977e1c74da2e34edb4_Illustration%205.svg"],
  ["images/strawberry-matcha.avif", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75afba3d5084e083fba4bc_Strawberry%20Matcha.avif"],
  ["images/cherry-cloud-mocha.avif", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75afbac32121ab710a7d78_Cherry%20Cloud%20Mocha.avif"],
  ["images/illustration-6.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b024c56e938d21ea3c6b_Illustration%206.svg"],
  ["images/illustration-7.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b0847a22773039a72ff7_Illustration%207.svg"],
  ["images/illustration-12.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b09837a7ee658908b74b_Illustration%2012.svg"],
  ["images/illustration-10.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b097d6cd358791bbedc8_Illustration%2010.svg"],
  ["images/illustration-8.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b023c58cbf65bdb5a13f_Illustration%208.svg"],
  ["images/illustration-25.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b098766be2add116e6ef_Illustration%2025.svg"],
  ["images/illustration-8b.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b08437a7ee6589089b9f_Illustration%208.svg"],
  ["images/illustration-9.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b0847c30003645af884f_Illustration%209.svg"],
  ["images/cold-brew.png", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a7980721dbf265ca4f4a0fb_Image.png"],
  ["images/vanilla-latte.avif", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75afbaa1b1193a5e9100ce_Vanilla%20Latte.avif"],
  ["images/sparkling-citrus.avif", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75afbab67cd3668bf88be7_Sparkling%20Citrus.avif"],
  ["images/mocha-shake.avif", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75afbafa260d1b0e5d182b_Mocha%20shake.avif"],
  ["images/illustration-11.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b09837a7ee658908b74e_Illustration%2011.svg"],
  ["images/illustration-13.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b097b6f439f22a81f66c_Illustration%2013.svg"],
  ["images/time-tab-4.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b023d8015a210ca4c6c2_Illustration%204.svg"],
  ["images/time-tab-11.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b023198e4093e6caeb01_Illustration%2011.svg"],
  ["images/time-tab-12.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b023fa260d1b0e5d6869_Illustration%2012.svg"],
  ["images/time-tab-13.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b023198e4093e6caeafc_Illustration%2013.svg"],
  ["images/time-arrow.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b023aeb595f44c2ceb11_Illustration%209.svg"],
  ["images/illustration-14.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b098c4b98d47b861adaf_Illustration%2014.svg"],
  ["images/barcode.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a79d84f66b35ff04116b1a9_Barcode.svg"],
  ["images/illustration-1b.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b097c4b98d47b861adaa_Illustration%201.svg"],
  ["images/illustration-26.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b0989cfc97841072ed16_Illustration%2026.svg"],
  ["images/coffee-shop.avif", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75afba37a7ee658908211b_Coffee%20Shop.avif"],
  ["images/spot-illu-5.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b02344e2098c39638e38_Illustration%205.svg"],
  ["images/illustration-15.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b023b67cd3668bf8c76b_Illustration%2015.svg"],
  ["images/illustration-16.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b023799955559321f001_Illustration%2016.svg"],
  ["images/illustration-17.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b024c56e938d21ea3c70_Illustration%2017.svg"],
  ["images/illustration-19.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b098d0b882b5a81bf2a4_Illustration%2019.svg"],
  ["images/illustration-18.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b098e703ce19611402cb_Illustration%2018.svg"],
  ["images/arrow-left.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75aff0951d08179b6e855c_ArrowLeft.svg"],
  ["images/arrow-left-abs.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a7b0d4b1aa2aa4e3fc243a3_ArrowLeft.svg"],
  ["images/arrow-right.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75aff0a338b1f1d502996b_ArrowRight.svg"],
  ["images/arrow-right-abs.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a7b0d4b7f112b037c875c41_ArrowRight.svg"],
  ["images/illustration-23.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b0973d5084e083fc54e8_Illustration%2023.svg"],
  ["images/illustration-24.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b0987e1c74da2e34edc8_Illustration%2024.svg"],
  ["images/cherry-on-top.avif", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75afba618cda3073b50665_Cherry%20on%20top.avif"],
  ["images/sweet-little-moment.avif", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75afba951d08179b6e656c_Sweet%20little%20moment.avif"],
  ["images/illustration-20.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b0237c30003645af44b1_Illustration%2020.svg"],
  ["images/illustration-20b.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b098fabe228cf09b32a0_Illustration%2020.svg"],
  ["images/illustration-21.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b0239cfc97841072998b_Illustration%2021.svg"],
  ["images/illustration-21b.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b09808779d0cd5ed8c5c_Illustration%2021.svg"],
  ["images/illustration-22.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75b02324f6b52c0c3d3a94_Illustration%2022.svg"],
  ["images/the-mello-trio.avif", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75afba50d9616825ffc1c0_The%20Mello%20trio.avif"],
  ["images/map-pin.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75aff0c4b98d47b861317a_MapPin.svg"],
  ["images/envelope.svg", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75aff09447c62856a96820_EnvelopeSimple.svg"],
  ["seo/favicon-32.png", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a7ee7094a5edd6a5e86ea54_Favicon.png"],
  ["seo/favicon-48.png", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a7ee70974aeb1ca6c212f79_Favicon.png"],
  ["seo/webclip-180.png", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a7ee7104a5edd6a5e86ead9_Webclip.png"],
  ["seo/webclip-192.png", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a7ee710fb7cdf4849ee984b_Webclip.png"],
  ["seo/webclip-512.png", "https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a7ee710d62dacf819330e1e_Webclip.png"],
];

async function download(rel, url) {
  const path = join(process.cwd(), ROOT, rel);
  await mkdir(dirname(path), { recursive: true });
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!res.ok || !res.body) throw new Error(`${res.status} ${url}`);
  await pipeline(Readable.fromWeb(res.body), createWriteStream(path));
  return path;
}

const queue = [...assets];
const results = [];
async function worker() {
  while (queue.length) {
    const item = queue.shift();
    if (!item) return;
    const [rel, url] = item;
    try {
      await download(rel, url);
      results.push({ rel, ok: true });
      console.log("ok", rel);
    } catch (err) {
      results.push({ rel, ok: false, error: String(err) });
      console.error("fail", rel, err);
    }
  }
}

await mkdir(IMG, { recursive: true });
await mkdir(SEO, { recursive: true });
await Promise.all([worker(), worker(), worker(), worker()]);
await writeFile(join("docs/research/mello-coffee-webflow-io-87d7671d/root-8a5edab2", "ARTIFACT_MANIFEST.md"), `# Artifact manifest\n\nDownloaded ${results.filter((r) => r.ok).length}/${results.length} assets.\n\n${results.map((r) => `- ${r.ok ? "OK" : "FAIL"} ${r.rel}`).join("\n")}\n`);
console.log("done", results.filter((r) => r.ok).length, "/", results.length);
