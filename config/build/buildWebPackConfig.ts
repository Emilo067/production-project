import webpack from "webpack";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import {BuildOptions} from "./types/config";
import {buildDevServer} from "./buildDevServer";
import {buildLoaders} from "./buildLoaders";

export function buildWebPackConfig (options: BuildOptions): webpack.Configuration {
    const {mode, paths, isDev} = options

    return {
        mode: mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    };
}