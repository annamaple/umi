// 配置具体修改规则
const {override, fixBabelImports, addLessLoader} = require('customize-cra');

module.exports = override(
    // 配置css文件按需引入
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    // 配上此方法后編譯報錯
    // addLessLoader({
    //     lessOptions: {
    //         javascriptEnabled: true,
    //         modifyVars: {'@primary-color': '#334455'},
    //     }
    // }),
);