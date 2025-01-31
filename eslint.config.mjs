import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import unusedImportsPlugin from "eslint-plugin-unused-imports";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfig = [
    {
        ignores: ["**/node_modules/**", "**/.next/**", "**/dist/**"],
    },
    js.configs.recommended,
    ...compat.extends("next/core-web-vitals"),
    {
        files: ["**/*.ts", "**/*.tsx"],
        plugins: {
            "@typescript-eslint": tsPlugin,
            react: reactPlugin,
            "react-hooks": reactHooksPlugin,
            "jsx-a11y": jsxA11yPlugin,
            import: importPlugin,
            prettier: prettierPlugin,
            "unused-imports": unusedImportsPlugin,
        },
        languageOptions: {
            globals: {
                browser: true,
                es2021: true,
                commonjs: true,
                node: true,
            },
            parser: tsParser,
            parserOptions: {
                project: "./tsconfig.json",
                ecmaVersion: 12,
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
            "import/order": [
                "warn",
                {
                    groups: [
                        "builtin",
                        "external",
                        "internal",
                        "parent",
                        "sibling",
                        "index",
                        "object",
                        "type",
                    ],
                    "newlines-between": "always",
                    alphabetize: { order: "asc", caseInsensitive: true },
                },
            ],
            "react/jsx-sort-props": [
                "warn",
                {
                    callbacksLast: true,
                    shorthandFirst: true,
                    noSortAlphabetically: false,
                    reservedFirst: true,
                },
            ],
            "react/self-closing-comp": "warn",
            "jsx-a11y/anchor-is-valid": [
                "error",
                {
                    components: ["Link"],
                    specialLink: ["hrefLeft", "hrefRight"],
                    aspects: ["invalidHref", "preferButton"],
                },
            ],
            "no-console": "off",
            "no-eval": "error",
            "global-require": "off",
            "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
            "react/jsx-closing-bracket-location": ["error", "line-aligned"],
            "jsx-a11y/click-events-have-key-events": "warn",
            "jsx-a11y/interactive-supports-focus": "warn",
            "prettier/prettier": "warn",
            "unused-imports/no-unused-imports": "warn",
            "object-curly-spacing": [2, "always"],
            "no-unused-expressions": "warn",
            "padding-line-between-statements": [
                "warn",
                { blankLine: "always", prev: "*", next: "return" },
                { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
                {
                    blankLine: "any",
                    prev: ["const", "let", "var"],
                    next: ["const", "let", "var"],
                },
            ],
            "no-shadow": "off",
            "react/require-default-props": "off",
        },
        settings: {
            react: {
                version: "detect",
            },
            "import/resolver": {
                typescript: {
                    alwaysTryTypes: true,
                    project: "./tsconfig.json",
                },
                node: {
                    extensions: [".js", ".jsx", ".ts", ".tsx"],
                    paths: ["src"],
                },
                "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },
    {
        files: ["**/*.test.ts", "**/*.test.tsx"],
        env: {
            jest: true,
        },
    },
];

export default eslintConfig;
