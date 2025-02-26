import { BuildOptions } from './types/config'
import webpack from 'webpack'
import path from 'path'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'

export function buildWebpackConfig(option: BuildOptions): webpack.Configuration {
  const { paths, mode } = option
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(option),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  }
}
