import shell from 'shelljs';

//执行一遍npm run build
shell.exec('yarn run build');

//删除demo/node_modules的所有文件
shell.rm('-rf', 'demo/node_modules');

//进入demo目录
shell.cd('demo');

//安装demo/node_modules
shell.exec('yarn');

//启动demo
shell.exec('yarn run dev');