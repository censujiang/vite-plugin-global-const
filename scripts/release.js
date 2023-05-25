import shell from 'shelljs';
import packageJson from '../package.json' assert { type: "json" };

shell.exec('npm run tsc');
shell.exec('npm run build');

setTimeout(() => {
  shell.exec('git add -A .');
  shell.exec('git commit -m Version_' + packageJson.version);
  shell.exec('git tag ' + packageJson.version);
  shell.exec('git push');
  shell.exec('git push --tags');
  shell.exec('npm publish');
}, 1000);