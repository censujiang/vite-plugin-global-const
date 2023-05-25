//使用这个函数挂载到vite上，可以在任何地方使用
export function globalConst(){
  return {
    name:'vite-plugin-global-const',
    //挂载后接收用户传入的参数
    config(config){
      return {
        define:{
          //这里的key就是用户传入的key，value就是用户传入的value
          'process.env':{
            ...config
          }
        }
      }
    }
  }
}