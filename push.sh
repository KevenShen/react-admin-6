#强制推送
#!/usr/bin/env bash
set -e
git init
git add -A
git commit -m '🎉 feat: init project'
git push -f "https://github.com/jiuxiangyangguang/react-admin.git" dev
exec /bin/bash




