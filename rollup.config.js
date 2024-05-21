// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

export default {
  input: "./main.ts",
  output: {
    dir: "output",
    format: "cjs",
  },
  external: ["react", "react-dom"],
  plugins: [
    typescript(),
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      extensions: [".css"],
      minimize: true,
      inject: {
        insertAt: "top",
      },
    }),
  ],
};
