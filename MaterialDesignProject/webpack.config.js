function getStyleUse(bundleFilename) {
  return [
    {
      loader: 'file-loader',
      options: {
        name: bundleFilename,
      },
    },
    { loader: 'extract-loader' },
    { loader: 'css-loader' },
    {
      loader: 'sass-loader',
      options: {
        includePaths: ['./node_modules'],
      }
    },
  ];
}

module.exports = [
  {
    entry: './scss/login.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      path: __dirname + '/dist-css',
      filename: 'style-bundle-login.js',
    },
    module: {
      rules: [{
        test: /login.scss$/,
        use: getStyleUse('bundle-login.css')
      }]
    },
  },
  {
    entry: './scss/home.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: 'style-bundle-home.js',
      path: __dirname + '/dist-css',
    },
    module: {
      rules: [{
        test: /home.scss$/,
        use: getStyleUse('bundle-home.css')
      }]
    },
  },
  {
    entry: './scss/edit-users.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      path: __dirname + '/dist-css',
      filename: 'style-bundle-edit-users.js',
    },
    module: {
      rules: [{
        test: /edit-users.scss$/,
        use: getStyleUse('bundle-edit-users.css')
      }]
    },
  },
  {
    entry: "./js/login.js",
    output: {
      path: __dirname + '/dist-js',
      filename: "bundle-login.js"
    },
    module: {
      loaders: [{
        test: /login.js$/,
        loader: 'babel-loader',
        query: {presets: ['env']}
      }]
    },
  },
  {
    entry: "./js/home.js",
    output: {
      filename: "bundle-home.js",
      path: __dirname + '/dist-js'
    },
    module: {
      loaders: [{
        test: /home.js$/,
        loader: 'babel-loader',
        query: {presets: ['env']}
      }]
    },
  },
  {
    entry: "./js/edit-users.js",
    output: {
      path: __dirname + '/dist-js',
      filename: "bundle-edit-users.js"
    },
    module: {
      loaders: [{
        test: /edit-users.js$/,
        loader: 'babel-loader',
        query: {presets: ['env']}
      }]
    },
  },
];
