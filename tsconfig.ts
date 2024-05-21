export default {
  input: "./main.ts",
  plugins: [
    typescript({
      compilerOptions: { lib: ["es5", "es6", "dom"], target: "es5" },
    }),
  ],
};
