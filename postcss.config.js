let autoprefixer = require('autoprefixer');
let pxToRem = require('postcss-plugins-px2rem')
module.exports = {
    plugins: [
        autoprefixer({
            browsers: [
                // 加这个后可以出现额外的兼容性前缀
                "> 0.01%"
            ]
        }),
       /*  pxToRem({remUnit: 75}) */

    ]
}