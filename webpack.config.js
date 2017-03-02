var path=require('path')
var SRC_DIR=path.resolve(__dirname+"/src")
var DIST_DIR=path.resolve(__dirname+"/dist")
var config={
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
	devServer:{
		inline:true,
		port:8080
	},
	module:{
		loaders:[
			{
				test:/\.jsx?$/,
				exclude:/node_modules/,
				loader:'babel',
				query:{
					presets:['es2015','react','stage-2']
				}
			}
		]
	}
}
module.exports=config