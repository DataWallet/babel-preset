module.exports = {
  plugins: [
    require("babel-plugin-transform-decorators-legacy").default,
    require("babel-plugin-transform-decorators"),

    // babel-preset-stage-1
    require("babel-plugin-transform-class-constructor-call"),
    require("babel-plugin-transform-class-properties"),
    require("babel-plugin-transform-export-extensions"),
    // NOTE: Removed babel-plugin-transform-decorators

    // babel-preset-stage-2
    require("babel-plugin-syntax-trailing-function-commas"),
    require("babel-plugin-transform-object-rest-spread"),

    // babel-preset-stage-3
    require("babel-plugin-transform-exponentiation-operator"),
    // NOTE: Removed babel-plugin-transform-async-to-generator

    // babel-preset-es2015
    require("babel-plugin-transform-es2015-template-literals"),
    require("babel-plugin-transform-es2015-literals"),
    require("babel-plugin-transform-es2015-function-name"),
    require("babel-plugin-transform-es2015-arrow-functions"),
    require("babel-plugin-transform-es2015-block-scoped-functions"),
    require("babel-plugin-transform-es2015-classes"),
    require("babel-plugin-transform-es2015-object-super"),
    require("babel-plugin-transform-es2015-shorthand-properties"),
    require("babel-plugin-transform-es2015-computed-properties"),
    require("babel-plugin-transform-es2015-for-of"),
    require("babel-plugin-transform-es2015-sticky-regex"),
    require("babel-plugin-transform-es2015-unicode-regex"),
    require("babel-plugin-check-es2015-constants"),
    require("babel-plugin-transform-es2015-spread"),
    require("babel-plugin-transform-es2015-parameters"),
    require("babel-plugin-transform-es2015-destructuring"),
    require("babel-plugin-transform-es2015-block-scoping"),
    require("babel-plugin-transform-es2015-typeof-symbol"),
    // NOTE: Removed babel-plugin-transform-regenerator, babel-plugin-transform-es2015-modules-commonjs

    // babel-preset-react
    require("babel-plugin-transform-react-jsx"),
    require("babel-plugin-syntax-jsx"),
    require("babel-plugin-transform-react-display-name"),
    require("babel-plugin-syntax-jsx"),
    // NOTE: Removed babel-plugin-syntax-flow

    // Custom stuff
    require("babel-plugin-transform-runtime")
  ]
};
