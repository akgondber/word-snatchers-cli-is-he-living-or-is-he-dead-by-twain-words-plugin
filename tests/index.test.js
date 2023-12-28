import { test } from "uvu";
import * as assert from "uvu/assert";
import WordSnatchersCliIsHeLivingOrIsHeDeadByTwainWordsPlugin from "../index.js";

let wordSnatchersCliIsHeLivingOrIsHeDeadByTwainWordsPlugin;

test.before.each(() => {
  wordSnatchersCliIsHeLivingOrIsHeDeadByTwainWordsPlugin =
    new WordSnatchersCliIsHeLivingOrIsHeDeadByTwainWordsPlugin();
});

test("WordSnatchersCliIsHeLivingOrIsHeDeadByTwainWordsPlugin#build", () => {
  const items = wordSnatchersCliIsHeLivingOrIsHeDeadByTwainWordsPlugin.build();

  items.map((item) =>
    assert.ok(item.definition.length > 4 && item.word.length > 1),
  );
});

test.run();
