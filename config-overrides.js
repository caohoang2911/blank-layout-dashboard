const { useBabelRc,addWebpackPlugin, fixBabelImports,override } = require("customize-cra");
const Dotenv = require('dotenv-webpack');
const addLessLoader = require("customize-cra-less-loader");
module.exports = override([
    // fixBabelImports("import", {
    //     libraryName: "antd",
    //     libraryDirectory: "es",
    // //    style: "css",
    //    style: true,
    // }),
    // addLessLoader({
    //     lessLoaderOptions: {
    //       lessOptions: {
    //         javascriptEnabled: true,
    //         modifyVars: require("./theme.ts"),
    //       }
    //     }
    // }),
    useBabelRc(),
    addWebpackPlugin(
        new Dotenv({
            path: getPathEnv(process.env.ENV)
        })
    ),
]);

function getPathEnv(env) {
    switch (env) {
        case 'staging':
            return './.env.staging';
        case 'production':
            return './.env.production';  
        default:
            return './.env';
    }
}