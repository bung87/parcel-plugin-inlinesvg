module.exports = function (bundler) {
  bundler.addAssetType('isvg', require.resolve('./asset.js'));
}