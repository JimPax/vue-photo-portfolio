module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'John Papalexis';
                return args;
            })
    },
    css: {
        loaderOptions: {
        sass: {
            prependData: `@import "@/assets/styles/main.scss";`,
            },
        },
    },
};