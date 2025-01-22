import type { Config } from "tailwindcss";

// @ts-expect-error - no types
import nativewind from "nativewind/preset";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
  ],
  presets: [nativewind],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
