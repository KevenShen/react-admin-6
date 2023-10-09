FROM nginx:alpine

# 复制打包好的文件到镜像中
COPY dist /usr/local/admin

# 复制nginx配置文件到镜像中
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 1102
CMD [ "nginx", "-g", "daemon off;" ]

