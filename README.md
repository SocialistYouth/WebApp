# WebApp

## 体系结构

```
WebApp
├─ .gitignore
├─ README.md
├─ WebApp
│  ├─ __init__.py
│  ├─ asgi.py
│  ├─ settings.py
│  ├─ urls.py
│  └─ wsgi.py
├─ db.sqlite3
├─ game
│  ├─ __init__.py
│  ├─ admin.py
│  ├─ apps.py
│  ├─ consumers
│  │  ├─ __init__.py
│  │  └─ multiplayer
│  │     ├─ __init__.py
│  │     └─ index.py
│  ├─ migrations
│  │  ├─ 0001_initial.py
│  │  ├─ 0002_player_openid.py
│  │  ├─ 0003_player_score.py
│  │  ├─ 0004_globalinfo.py
│  │  ├─ __init__.py
│  ├─ models
│  │  ├─ __init__.py
│  │  ├─ global_info
│  │  │  ├─ __init__.py
│  │  │  └─ global_info.py
│  │  └─ player
│  │     ├─ \
│  │     ├─ __init__.py
│  │     └─ player.py
│  ├─ routing.py
│  ├─ static
│  │  ├─ css
│  │  │  └─ game.css
│  │  ├─ image
│  │  │  ├─ global
│  │  │  │  └─ icon.png
│  │  │  ├─ menu
│  │  │  │  ├─ Spare_1.gif
│  │  │  │  ├─ Spare_3.gif
│  │  │  │  └─ backgroud.jpg
│  │  │  └─ settings
│  │  │     ├─ acwing_login.png
│  │  │     ├─ github_login.png
│  │  │     └─ qq_login.png
│  │  └─ js
│  │     ├─ dist
│  │     │  └─ game.js
│  │     └─ src
│  │        ├─ menu
│  │        │  ├─ world_chat_field
│  │        │  │  └─ zbase.js
│  │        │  └─ zbase.js
│  │        ├─ playground
│  │        │  ├─ ac_game_object
│  │        │  │  └─ zbase.js
│  │        │  ├─ chat_field
│  │        │  │  └─ zbase.js
│  │        │  ├─ game_map
│  │        │  │  └─ zbase.js
│  │        │  ├─ notice_board
│  │        │  │  └─ zbase.js
│  │        │  ├─ partice
│  │        │  │  └─ zbase.js
│  │        │  ├─ player
│  │        │  │  └─ zbase.js
│  │        │  ├─ score_board
│  │        │  │  └─ zbase.js
│  │        │  ├─ skill
│  │        │  │  └─ fireball
│  │        │  │     └─ zbase.js
│  │        │  ├─ socket
│  │        │  │  └─ multiplayer
│  │        │  │     └─ zbase.js
│  │        │  └─ zbase.js
│  │        ├─ settings
│  │        │  └─ zbase.js
│  │        └─ zbase.js
│  ├─ templates
│  │  └─ Multiterminal
│  │     └─ home.html
│  ├─ tests.py
│  ├─ urls
│  │  ├─ __init__.py
│  │  ├─ index.py
│  │  ├─ menu
│  │  │  ├─ __init__.py
│  │  │  └─ index.py
│  │  ├─ playgroud
│  │  │  ├─ __init__.py
│  │  │  └─ index.py
│  │  └─ settings
│  │     ├─ __init__.py
│  │     ├─ acwing
│  │     │  ├─ __init__.py
│  │     │  └─ index.py
│  │     ├─ github
│  │     │  ├─ __init__.py
│  │     │  └─ index.py
│  │     ├─ index.py
│  │     └─ qq
│  │        ├─ __init__.py
│  │        └─ index.py
│  └─ views
│     ├─ __init__.py
│     ├─ index.py
│     ├─ menu
│     │  └─ __init__.py
│     ├─ playground
│     │  └─ __init__.py
│     └─ settings
│        ├─ __init__.py
│        ├─ acwing
│        │  ├─ __init__.py
│        │  ├─ apply_code.py
│        │  └─ receive_code.py
│        ├─ getinfo.py
│        ├─ github
│        │  ├─ __init__.py
│        │  ├─ apply_code.py
│        │  └─ receive_code.py
│        ├─ login.py
│        ├─ logout.py
│        ├─ qq
│        │  ├─ __init__.py
│        │  ├─ apply_code.py
│        │  └─ receive_code.py
│        └─ register.py
├─ manage.py
├─ match_system
│  ├─ __init__.py
│  ├─ src
│  │  ├─ __init__.py
│  │  ├─ main.py
│  │  └─ match_server
│  │     ├─ __init__.py
│  │     └─ match_service
│  │        ├─ Match-remote
│  │        ├─ Match.py
│  │        ├─ __init__.py
│  │        ├─ constants.py
│  │        └─ ttypes.py
│  └─ thrfit
│     └─ match.thrift
├─ scripts
   ├─ compress_game_js.sh
   └─ uwsgi.ini
```

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
