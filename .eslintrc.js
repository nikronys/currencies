module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "rules": {
        "arrow-body-style": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
        "no-underscore-dangle": [0, { "allow": ["__place"] }],
    }
};