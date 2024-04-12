const ts = require("rollup-plugin-typescript2");
const pkg = require("./package.json");

module.exports = [
  {
    input: "./src/index.ts",

    output: [
      {
        file: pkg.module,
        format: "es",
        exports: "named",
      },
      {
        file: pkg.main,
        format: "umd",
        name: "no-try",
        sourcemap: true,
        exports: "named",
      },
    ],

    plugins: [
      ts({
        clean: true,
        tsconfigOverride: {
          compilerOptions: {
            module: "esnext",
            target: "esnext",
            declaration: true,
          },
        },
      }),
    ],
  },
];
