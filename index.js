module.exports = {
    extends: "stylelint-config-recommended",
    rules: {
        "length-zero-no-unit": true,
        "number-no-trailing-zeros": true,
        "color-no-invalid-hex": true,
        "color-hex-case": "upper",
        "at-rule-name-space-after": "always-single-line",
        "no-duplicate-at-import-rules": true,
        "unit-whitelist": [
            "em",
            "rem",
            "px",
            "%",
            "fr",
            "deg",
            "vh",
            "vw",
            "s"
        ],
        "max-nesting-depth": 2,
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
        "declaration-colon-space-before": "never"
    }
};
