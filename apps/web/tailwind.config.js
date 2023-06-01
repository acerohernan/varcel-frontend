const base = require("@varcel/config/tailwind-preset");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...base,
  content: [...base.content, "../../packages/ui/**/*.{js,ts,jsx,tsx}"],
};
