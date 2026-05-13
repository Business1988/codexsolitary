import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const pages = ["index.html", "systems.html", "release-stack.html", "revenue-ops.html", "contact.html", "privacy.html", "support.html"];
const read = (page) => fs.readFileSync(path.join(root, page), "utf8");

for (const page of pages) {
  test(`${page} exists`, () => {
    assert.equal(fs.existsSync(path.join(root, page)), true);
  });
}

test("all pages include shared assets", () => {
  for (const page of pages) {
    const html = read(page);
    assert.match(html, /assets\/css\/styles\.css/i);
    assert.match(html, /assets\/js\/site\.js/i);
  }
});

test("homepage reflects systems console styling", () => {
  const html = read("index.html");
  assert.match(html, /CodexSolitary/i);
  assert.match(html, /mobile software/i);
  assert.match(html, /IAA monetization|revenue operations/i);
  assert.match(html, /system|console|terminal|operations/i);
});

test("contact page contains all inboxes and names", () => {
  const html = read("contact.html");
  assert.match(html, /vip@codexsolitary\.com/i);
  assert.match(html, /Key Account Office/i);
  assert.match(html, /business@codexsolitary\.com/i);
  assert.match(html, /Business Development/i);
  assert.match(html, /support@codexsolitary\.com/i);
  assert.match(html, /Technical Assistance/i);
});
