module.exports = {
    
    context : __dirname,
    entry   : './app/index.js',
    output  :{
        path : __dirname,
        filename : './bundle.js'
    },
    devServer:{
        port:3333,
        inline:true
    },
    module :{
        loaders :[
            {
                test : /\.js$/,
                loader : 'babel',
                exclude : /node_modules/,
                query   : {
                    presets : ['es2015']
                }
            },
            {
                test : /\.css$/,
                loader:'css-loader',
                exclude: /node_modules/
            },
             {test: /\.html$/, loader: 'raw', exclude: /node_modules/},
        ]
    }
  
};