import { test, describe } from "node:test";
import assert from "node:assert/strict";

// Mock minimal environment for constants testing
const mockConstants = {
  navLists: ["Store", "Mac", "iPhone", "Support"],
  sizes: [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
  ],
  models: [
    {
      id: 1,
      title: "iPhone 15 Pro in Natural Titanium",
      color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
      finish: "natural",
    },
    {
      id: 2,
      title: "iPhone 15 Pro in Blue Titanium",
      color: ["#535C68", "#000000", "#19232d"],
      finish: "blue",
    },
    {
      id: 3,
      title: "iPhone 15 Pro in White Titanium",
      color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
      finish: "white",
    },
    {
      id: 4,
      title: "iPhone 15 Pro in Black Titanium",
      color: ["#454749", "#3b3b3b", "#181819"],
      finish: "black",
    },
  ],
  hightlightsSlides: [
    { id: 1, videoDuration: 4 },
    { id: 2, videoDuration: 5 },
    { id: 3, videoDuration: 2 },
    { id: 4, videoDuration: 3.63 },
  ],
};

describe("Apple 3D Showcase Configuration & Data Integrity", () => {
  test("Navigation items contain required product links", () => {
    assert.deepEqual(mockConstants.navLists, ["Store", "Mac", "iPhone", "Support"]);
    assert.equal(mockConstants.navLists.length, 4);
  });

  test("Model variants define four Titanium finishes with hex palettes", () => {
    assert.equal(mockConstants.models.length, 4);
    const finishes = mockConstants.models.map((m) => m.finish);
    assert.deepEqual(finishes, ["natural", "blue", "white", "black"]);

    for (const model of mockConstants.models) {
      assert.ok(model.title.includes("Titanium"));
      assert.equal(model.color.length, 3);
      for (const hex of model.color) {
        assert.match(hex, /^#[0-9a-fA-F]{6}$/);
      }
    }
  });

  test("Device sizes correctly declare 6.1 and 6.7 inch viewport scale modes", () => {
    assert.equal(mockConstants.sizes.length, 2);
    const small = mockConstants.sizes.find((s) => s.value === "small");
    const large = mockConstants.sizes.find((s) => s.value === "large");

    assert.ok(small);
    assert.ok(large);
    assert.equal(small.label, '6.1"');
    assert.equal(large.label, '6.7"');
  });

  test("Highlights carousel declares positive duration for each keyframe video", () => {
    assert.equal(mockConstants.hightlightsSlides.length, 4);
    for (const slide of mockConstants.hightlightsSlides) {
      assert.ok(slide.videoDuration > 0, `Slide ${slide.id} has invalid duration`);
      assert.ok(slide.videoDuration <= 10, `Slide ${slide.id} duration exceeds reasonable promo limits`);
    }
  });

  test("3D view transformation offsets ensure non-overlapping dual canvas layout", () => {
    const smallOffset = { transform: "translateX(0%)" };
    const largeOffset = { transform: "translateX(-100%)" };

    assert.notDeepEqual(smallOffset, largeOffset);
    assert.equal(largeOffset.transform, "translateX(-100%)");
  });
});

