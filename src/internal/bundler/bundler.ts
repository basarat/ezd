/**
 * @module Runs the bundler
 */
import * as webpack from 'webpack';
import * as ts from 'typescript';
import * as path from 'path';
import * as fs from 'fs';

/**
 * Creates a webpack bundle
 */
export function bundleWebpack(args: {
  entryMap: { [key: string]: string },
  outputDirName: string,
  watch?: () => void,
}) {
  return new Promise((res, rej) => {
    try {
      const config: webpack.Configuration = {
        mode: 'production',
        entry: args.entryMap,
        output: {
          path: args.outputDirName,
          filename: '[name].js'
        },
        resolve: {
          extensions: ['.ts', '.tsx', '.js']
        },
        module: {
          rules: [
            {
              test: /\.tsx?$/,
              loader: 'ts-loader',
              /**
               * Custom compiler options for demo building.
               * Effectively what would be in each app tsconfig.json
               **/
              options: {
                compilerOptions: {
                  "jsx": "react",
                  "target": "es5",
                  "moduleResolution": "node",
                  "experimentalDecorators": true,
                  "lib": [
                    "es6",
                    "dom"
                  ]
                },

                /** Fastest compile possible */
                transpileOnly: true
              }
            }
          ]
        }
      };

      const compiler = webpack(config);

      /** Built in watch support  */
      if (args.watch) {
        let firstWatchCall = true;
        compiler.watch({}, () => {
          if (firstWatchCall) {
            firstWatchCall = false;
            res();
          }
          else {
            args.watch();
          }
        });
      }
      else {
        compiler.run(function (err, stats) {
          if (err) {
            console.error("BUNDLING FAILED:", args);
            console.error(err);
            rej(err);
          }
          else {
            res();
          }
        });
      }
    }
    catch (err) {
      console.error("BUNDLING FAILED TO EXECUTE:", args);
      console.error(err);
      rej(err);
    }
  });
}

/**
 * Creates a webpack bundle
 */
export function bundle(args: {
  entryMap: { [key: string]: string },
  outputDirName: string,
  watch?: () => void,
}) {
  /** Webpack ignores this siliently sadly so we need to catch it ourselves */
  if (Object.keys(args.entryMap).map(key => args.entryMap[key]).some(e => !fs.existsSync(e))) {
    const error = `At least one entry point does not exist`;
    console.error(error, args.entryMap);
    return Promise.reject(new Error(error));
  }

  /** Make sure all paths are resolved before passing to webpack */
  Object.keys(args.entryMap).forEach(key => {
    args.entryMap[key] = path.resolve(args.entryMap[key]);
  })
  args.outputDirName = path.resolve(args.outputDirName);

  return bundleWebpack(args);
}
