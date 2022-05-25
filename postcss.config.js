const purgecss = require("@fullhuman/postcss-purgecss/lib");

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    purgecss({
      content: ["./**/*.html"],
    }),
    require("cssnano")({
      preset: "default",
    }),
  ],
};
