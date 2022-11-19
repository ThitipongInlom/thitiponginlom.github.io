module.exports = {
    outputDir: 'docs',
    publicPath: './',
    configureWebpack: (config => {
        config.output.chunkFilename = 'js/[chunkhash:20].js';
    })
};