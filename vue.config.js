const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/rotana/',
RewriteEngine: On,
Rewritebase: '/',
RewriteRule:'^index\.html$ - [L]',
RewriteCond:'%{REQUEST_FILENAME} !-f',
RewriteCond: '%{REQUEST_FILENAME} !-d',
RewriteRule: '. /index.html [L]'
})
