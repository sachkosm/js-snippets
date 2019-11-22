
== webpack.config.js

module.exports = {
    context: path.resolve(__dirname),
    entry: {
        main: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.[name].js',
        publicPath: '/dist/'
    },
    devServer: {
        contentBase: [path.resolve(__dirname, './public'),path.resolve(__dirname, './dist'), path.resolve(__dirname, './')],
        hot: true,
        open: "Chrome",
      },



        module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                loaders: ["react-hot-loader/webpack", "babel-loader"],
                
                
                
                
                
                
== package.json

 "scripts": {
         "hot": "webpack-dev-server",
         
         
         
"devDependencies": {     
          "webpack-dev-server": "^3.9.0",
           "react-hot-loader": "^4.12.18",
           


=== index.html

    <link href="/dist/styles.main.css" rel="stylesheet">
    <script src="/dist/bundle.main.js" type="text/javascript"></script>
    
    
