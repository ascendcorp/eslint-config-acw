const { resolve } = require("node:path")

const project = resolve(process.cwd(), "tsconfig.json")

module.exports = {
	root: true,
	extends: ["acw-base", "plugin:react/recommended", "plugin:react/jsx-runtime"],
	plugins: ["react", "react-hooks"],
	rules: {
		"react-hooks/exhaustive-deps": "error",
		"react-hooks/rules-of-hooks": "error",
		"react/destructuring-assignment": ["error", "always", { destructureInSignature: "always" }],
		"react/display-name": "off",
		"react/jsx-boolean-value": "error",
		"react/jsx-curly-brace-presence": "error",
		"react/jsx-key": "error",
		"react/jsx-pascal-case": "error",
		"react/jsx-sort-props": ["error", { ignoreCase: true, reservedFirst: true }],
		"react/no-multi-comp": "error",
		"react/no-unused-prop-types": "error",
		"react/prop-types": "off",
		"react/self-closing-comp": "error",
	},
	env: { browser: true, node: true, jest: true },
}
