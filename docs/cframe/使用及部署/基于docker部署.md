---
order: 4
group:
  order: 1
---

# 基于 docker 部署

docker 一般需要配合 docker-compose 来进行使用较为简单

## docker 安装

快速安装命令

```shell
curl -sSL https://get.daocloud.io/docker | sh
sudo service docker start
sudo docker info
```

## docker-compose 安装

快速安装命令 <Badge>推荐</Badge>

```shell
curl -L https://get.daocloud.io/docker/compose/releases/download/1.29.2/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod -R 777 /usr/local/bin/docker-compose
```

## 修改程序并打包

### 前端修改

前端文件在根目录下有个`vue.config.js`文件，修改下面的路径

```vue
publicPath: process.env.NODE_ENV === 'production' ? '/admin/' : '/',
```

> /admin/ 该路径对应你后期想访问的路径，也是服务器的路径，如果直接是根域名访问的话，可以将该路径直接写为`/`

前端代码我们发布线上的话，需要修改`.env.production`文件

配置文件说明：

```yaml
NODE_ENV=production VUE_APP_NODE_ENV=prod VUE_APP_ISSTATIC=true VUE_APP_CODEROOT_URL_ENV=http://localhost:8082/ VUE_APP_ROOT_URL_ENV=https://localhost:8082/
# 示例
# VUE_APP_ROOT_URL_ENV=https://petty.hcses.com/
```

文件说明：

- 代码生成器地址：VUE_APP_CODEROOT_URL_ENV
- 服务地址：VUE_APP_ROOT_URL_ENV
- 这里使用的 docker-compose 所以可以不用写端口号，默认配置文件的为`http://ip或域名/fortressapi/`

打包命令

```shell
npm install
npm run build
```

### 复制前端文件

将前端打包好的`dist` 文件夹下的内容，复制到`docker/nginx/html/admin/`目录下

### 后端修改

`application-docker.yml` 文件全部配置，请参考注释进行修改

<Alert type="warning">
mysql数据库的密码在 docker-compose.yml中进行设置 <br />  
redis的密码在 redis.conf 配置文件中进行设置
</Alert>

修改完成之后，直接使用打包命令进行打包即可 👇

```
mvn clean package
```

### 复制后端文件

执行`docker`目录下的`copy.bat`，程序会将自动进行复制

## 程序运行

将整个`docker`压缩一下上传至服务器上解压，并赋予目录权限

```shell
yum install -y unzip
unzip 压缩包的文件名.zip
chmod -R 777 解压缩的文件夹名字
```

在`docker-compose.yml`所在的目录下，执行命令 👇

```shell
docker-compose up -d
```

执行上面命令报错如下：

```shell
# 这是因为权限不够的问题
-bash: /usr/local/bin/docker-compose: Permission denied
```

直接执行

```shell
chmod -R 777 /usr/local/bin/docker-compose
```

执行完成后使用 nginx 内配置的 ip 或者域名即可访问 🤪

网站首页路径：`域名`  
运营管理端路径：`域名/admin/`

## 常见问题

```shell
# 检查容器内nginx配置文件
docker exec fortress-nginx nginx -t

# 重启nginx容器
docker exec fortress-nginx nginx -s reload
```

前端文件和`jar`文件多次上线，直接复制到`docker`文件目录下相应文件夹内即可。

`jar`文件每次上线需要修改版本号（`docker-compose.yml文件`），修改版本号之后直接运行即可。

## 各配置文件说明(参照)

### Mysql

文件路径：`/docker/mysql/`

目录结构

<Tree title="mysql成型目录结构[3306]">
  <ul>
      <li>
      config
      <small>配置文件目录</small>
      <ul>
        <li>
          my.cnf
          <small>配置文件</small>
        </li>
      </ul>
    <li>
      db
      <small>数据库导入目录</small>
      <ul>
        <li>
          xxxxx.sql
          <small>数据库执行脚本</small>
        </li>
    </li>
     </ul>
        <li>
        data
        <small>数据存储目录</small>
      <ul>
      </ul>
      </li>
          <li>
      log
      <small> 日志文件 </small>
    </li>
  </ul>
</Tree>

### Redis

文件路径：`/docker/redis/`

目录结构

<Tree title="redis配置文件[6379]">
  <ul>
      <li>
      config
      <small>配置文件目录</small>
      <ul>
        <li>
          redis.conf
          <small>配置文件</small>
        </li>
      </ul>
        <li>
        data
        <small>数据存储目录</small>
      </li>
          <li>
        log
        <small> 日志文件 </small>
      </li>
    </li>
  </ul>
</Tree>

### Nginx

文件路径：`/docker/nginx/`

目录结构

<Tree title="redis配置文件[6379]">
  <ul>
    <li>
      config
      <small>配置文件目录</small>
      <ul>
        <li>
          nginx.conf
          <small>配置文件</small>
        </li>
      </ul>
    </li>
    <li>
      html
      <small>网站存放目录</small>
      <ul>
        <li>
          admin
          <small>管理运营端服务</small>
        </li>
        </ul>
    </li>
        <li>
        logs
        <small>日志文件</small>
      </li>
  </ul>
</Tree>

### fortress

文件路径：`/docker/fortress/`

文件目录：

<Tree>
  <ul>
    <li>
      admin
      <small>文件目录</small>
          <ul>
              <li>
                cmsTemplates
                <small>cms模板文件夹</small>
                  <ul>
                      <li>
                      default
                      <small>默认模板</small>
                      </li>
                      <li>
                      science
                      <small>其他模板</small>
                      </li>
                  </ul>
              </li>
            <li>
              imageCaptcha
              <small>验证码图片</small>
            </li>
            <li>
              jar
              <small>jar文件</small>
                <ul>
                    <li>castle-fortress-admin.jar
                    <small>打包后的jar文件</small>
                    </li>
                    <li>
                      Dockerfile
                      <small>dockerfile文件</small>
                    </li>
                </ul>
            </li>
          </ul>
    </li>
  </ul>
</Tree>

### docker-compose.yml 文件

```shell
# docker 版本要求 19.03.0+
version : '3.8'
services:
  fortress-mysql:
    container_name: fortress-mysql
    image: mysql:5.7.38
    privileged: true
    # 指定端口号
    ports:
      - "3306:3306"
    #文件挂载
    volumes:
      # 配置文件
      - ./mysql/config/my.cnf:/etc/my.cnf
      # 日志文件夹
      - ./mysql/logs:/logs
      # 数据文件夹
      - ./mysql/data:/var/lib/mysql
      # 该文件夹下的sql脚本等按照字母顺序依次执行 用于初始化数据库
      - ./mysql/db:/docker-entrypoint-initdb.d
    command: mysqld --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
    environment:
      #mysql root密码配置
      MYSQL_ROOT_PASSWORD: 8GH6AMzPHhmipbbS
      MYSQL_ROOT_HOST: '%'
  fortress-redis:
    container_name: fortress-redis
    image: redis:7.0.2
    ports:
     - "6379:6379"
    environment:
     - TZ=Asia/Shanghai
    privileged: true
    volumes:
     - ./redis/config/redis.conf:/etc/redis/redis.conf
     - ./redis/data:/data
     - ./redis/logs:/logs
    command: redis-server /etc/redis/redis.conf
  fortress-nginx:
    container_name: fortress-nginx
    image: nginx:1.22.0
    privileged: true
    ports:
     - "80:80"
    volumes:
     - ./nginx/html:/etc/nginx/html
     - ./nginx/config/nginx.conf:/etc/nginx/nginx.conf
     - ./nginx/logs:/var/log/nginx
    environment:
     - TZ=Asia/Shanghai
   # depends_on:
   #   - fortress-admin
    restart: always
  fortress-admin:
    container_name: fortress-admin
    image: fortress-admin:1.0.0
    privileged: true
    build:
     context: ./fortress/admin/jar
    volumes:
     # cms 模板位置
     - ./fortress/admin/cmsTemplates:/home/fortress/projects/cms/cmsTemplates
     # 邮箱位置
     - ./fortress/admin/mailPath:/home/fortress/projects/mailPath
     # 图片验证码位置
     - ./fortress/admin/imageCaptcha:/home/fortress/projects/imageCaptcha
     # 资源上传配置
     - ./fortress/admin/uploadPath:/home/fortress/projects/uploadPath
     # jar包
     - ./fortress/admin/jar/castle-fortress-admin.jar:/home/fortress/projects/jar/castle-fortress-admin.jar
    restart: always
    ports:
     - "9081:9081"
    depends_on:
     - fortress-mysql
     - fortress-redis
```
