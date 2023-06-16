import GulpSSH from 'gulp-ssh'
import pkg from 'gulp'
const { task, dest, series, src } = pkg
const config = {
  ssh: {
    host: '116.62.37.172',
    port: 22,
    username: 'root',
    password: 'wc123456!'
  },
  remotePath: '/usr/local/docker_image',
  srcPath: ['./dist/**/*', './Dockerfile'],
  commands: ['rm -rf /usr/local/docker_image/dist', 'rm -rf /usr/local/docker_image/Dockerfile'],
  imagecommands: [
    'cd /usr/local/docker_image',
    'docker stop docker_image-admin-1',
    'docker image rm -f admin',
    'docker build -t admin .',
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
  return src(config.srcPath, { base: '.' })
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
