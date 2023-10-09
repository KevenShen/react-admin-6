import GulpSSH from 'gulp-ssh'
import pkg from 'gulp'
const { task, dest, series, src } = pkg
const config = {
  ssh: {
    host: '',
    port: 22,
    username: '',
    password: ''
  },
  remotePath: '/usr/local/docker_image',
  srcPath: './admin.tar',
  commands: ['rm -rf /usr/local/docker_image/admin.tar'],
  imagecommands: [
    'cd /usr/local/docker_image',
    'docker-compose down',
    'docker load -i admin.tar',
    'docker-compose up -d'
  ]
}
const gulpSSH = new GulpSSH({
  ignoreErrors: true,
  sshConfig: config.ssh
})
task('delImage', () => {
  console.log('执行ssh命令删除文件')
  return gulpSSH
    .shell(config.commands, {
      filePath: 'commands.log'
    })
    .pipe(dest('logs'))
})
task('uploadFile', (done) => {
  console.log('开始上传')
  return src(config.srcPath)
    .pipe(gulpSSH.dest(config.remotePath))
    .on('end', () => {
      console.log('上传完成')
      done()
    })
})
task('loadImage', (done) => {
  console.log('解压镜像并且重新运行中')
  return gulpSSH
    .shell(config.imagecommands, {
      filePath: 'commands.log'
    })
    .pipe(dest('logs'))
    .on('end', () => {
      console.log('执行完成')
      done()
    })
})

task('deploy', series('delImage', 'uploadFile', 'loadImage'))
