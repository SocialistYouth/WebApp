# WebApp

## 数据库

django自带的数据库：sqlite

内存数据库：Redis———储存key-value对

### 刷新数据库：

-  python3 manage.py makemigrations

- python3 manage.py migrate

## 体系结构

### scripts

- compress_game_js.sh 
- - shell脚本,打包js文件
- uwsgi.ini
- - uwsgi的配置文件

## 前后端流程结构

首先，运行WebApp/game/templates/Multierminal/home.html

link css文件，引入jquery的js文件

import WeGame函数（WebApp/game/static/js/dist/game.js）

初始化对象ac_games是WeGame类型

传入参数是ac_game_12345678

初始化对象settings ,是Settings类型

如果root即ac_game_12345678有AcWingOS，那么将platform改为ACAPP

启动getinfo，outer=settings,

初始化menu对象，是WeGameMenu类型

