module.exports = {
    extends: "stylelint-config-recommended",
    rules: {
        "indentation"  : 4,
        "length-zero-no-unit": true,
        "number-no-trailing-zeros": true,
        "color-no-invalid-hex": true,
        "color-hex-case": "upper",
        "at-rule-name-space-after": "always-single-line",
        "no-duplicate-at-import-rules": true,
        "unit-allowed-list": [
            "em",
            "rem",
            "px",
            "%",
            "fr",
            "deg",
            "vh",
            "vw",
            "s",
            "ch"
        ],
        "max-nesting-depth": 2,
        "max-empty-lines": [1, { ignore: ["comments"] }],
        "max-line-length": 200,
        "no-eol-whitespace": true,
        "selector-pseudo-class-no-unknown": [
            true,
            {
                ignorePseudoClasses: ["global"]
            }
        ],
        "block-opening-brace-space-after": "always-single-line",
        "declaration-bang-space-after": "never",
        "declaration-bang-space-before": "always",
        "declaration-block-semicolon-newline-after": "always-multi-line",
        "declaration-block-semicolon-space-after": "always-single-line",
        "declaration-block-semicolon-space-before": "never",
        "declaration-block-single-line-max-declarations": 1,
        "declaration-block-trailing-semicolon": "always",
        "declaration-colon-newline-after": "always-multi-line",
        "declaration-block-no-duplicate-properties": true,
        "declaration-colon-space-before": "never",
        "no-empty-first-line": true,
        "rule-empty-line-before": ["always", { except: ["after-single-line-comment", "inside-block-and-after-rule", "first-nested"] }],
        "block-opening-brace-newline-after": "always",
        "block-closing-brace-newline-before": "always",
        "declaration-colon-space-after": "always-single-line",
        "declaration-empty-line-before": "never",
        "property-case": "lower",
        "unit-case": "lower",
        "string-quotes": "double",
        "font-weight-notation": "numeric",
        "no-descending-specificity": null
    }
};
