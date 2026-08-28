import { paidSocialPosts } from "./blog/paidSocial";
import { creativeStrategyPosts } from "./blog/creativeStrategy";
import { growthStrategyPosts } from "./blog/growthStrategy";
import { analyticsPosts } from "./blog/analytics";
import { conversionPosts } from "./blog/conversion";

const categories = [
  paidSocialPosts,
  creativeStrategyPosts,
  growthStrategyPosts,
  analyticsPosts,
  conversionPosts,
];

function interleave(arrays) {
  const result = [];
  const maxLen = Math.max(...arrays.map((a) => a.length));
  for (let i = 0; i < maxLen; i++) {
    for (const arr of arrays) {
      if (arr[i]) result.push(arr[i]);
    }
  }
  return result;
}

export const blogPosts = interleave(categories);

export const postCategories = [
  "All",
  ...Array.from(new Set(blogPosts.map((p) => p.category))),
];
