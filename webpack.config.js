const path = require("path");
const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const baseConfig = {
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json'
            }
          }
        ],
      },
    ],
  },
  resolve: {
    plugins: [
      new TsconfigPathsPlugin(),
    ],
  },
  plugins: [
    new ESLintPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
      }),
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
};

const mainConfig = {
  ...baseConfig,
  target: 'electron-main',
  entry: './src/core.ts',
  resolve: {
    ...baseConfig.resolve,
    extensions: [".ts"],
  },
  output: {
    ...baseConfig.output,
    filename: "main.js",
  },
}

const rendererConfig = {
  ...baseConfig,
  target: 'electron-renderer',
  entry: './src/ui/view.tsx',
  module: {
    ...baseConfig.module,
    rules: [
      ...baseConfig.module.rules,
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[name]_[local]_[hash:base64]",
              },
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
  resolve: {
    ...baseConfig.resolve,
    extensions: [".tsx", ".ts"],
  },
  plugins: [
    ...baseConfig.plugins,
    new HtmlWebpackPlugin({
      inject: 'body',
      minify: true,
      template: './assets/index.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'styles.css',
          to: 'styles.css',
          context: 'assets/'
        }
      ],
    })
  ],
  output: {
    ...baseConfig.output,
    filename: "renderer.js",
  },
}

module.exports = [
  mainConfig,
  rendererConfig,
];
