const fs = require("fs");
const path = require("path");

const envLine = fs
  .readFileSync(".env", "utf8")
  .split(/\r?\n/)
  .find((x) => x.startsWith("VITE_IMAGE_MAP="));
const envKeys = new Set(Object.keys(JSON.parse(envLine.slice("VITE_IMAGE_MAP=".length))));

const cfg = fs.readFileSync("src/config/images.js", "utf8");
const cfgKeys = new Set([...cfg.matchAll(/pick\("([A-Z_0-9]+)"\)/g)].map((m) => m[1]));

const walk = (d) =>
  fs.readdirSync(d, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory()
      ? walk(path.join(d, e.name))
      : /\.(js|jsx)$/.test(e.name) ? [path.join(d, e.name)] : []
  );

const used = new Set();
for (const f of walk("src")) {
  if (f.endsWith(path.join("config", "images.js"))) continue;
  const s = fs.readFileSync(f, "utf8");
  for (const m of s.matchAll(/IMG\.([A-Z_0-9]+)/g)) used.add(m[1]);
}

const diff = (a, b) => [...a].filter((x) => !b.has(x));

console.log("env keys     :", envKeys.size);
console.log("config keys  :", cfgKeys.size);
console.log("used in code :", used.size);
console.log("USED but MISSING from config:", diff(used, cfgKeys));
console.log("config but MISSING from env :", diff(cfgKeys, envKeys));
console.log("env but UNUSED              :", diff(envKeys, used));
