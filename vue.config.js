module.exports = {
    
    pages: {
        index: {
          //入口
          entry: 'src/main.js',
        },
      },
        lintOnSave:false, //关闭语法检查
        //方法一
        // devServer:{
        //   proxy:"http://localhost:5000"
        // }

        
          devServer: {
              proxy: {
              '/api1': {// 匹配所有以 '/api1'开头的请求路径
                target: 'http://localhost:5000',// 代理目标的基础路径
                changeOrigin: true,
                pathRewrite: {'^/api1': ''}
              },
              '/api2': {// 匹配所有以 '/api2'开头的请求路径
                target: 'http://localhost:5001',// 代理目标的基础路径
                changeOrigin: true,
                pathRewrite: {'^/api2': ''}
              }
            }
          }
        
        
  }