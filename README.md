# WebApp
.
|-- README.md
|-- WebApp
|   |-- __init__.py
|   |-- __pycache__
|   |   |-- __init__.cpython-38.pyc
|   |   |-- settings.cpython-38.pyc
|   |   |-- urls.cpython-38.pyc
|   |   `-- wsgi.cpython-38.pyc
|   |-- asgi.py
|   |-- settings.py
|   |-- urls.py
|   `-- wsgi.py
|-- db.sqlite3
|-- game
|   |-- __init__.py
|   |-- __pycache__
|   |   |-- __init__.cpython-38.pyc
|   |   |-- admin.cpython-38.pyc
|   |   |-- apps.cpython-38.pyc
|   |   |-- models.cpython-38.pyc
|   |   |-- urls.cpython-38.pyc
|   |   `-- views.cpython-38.pyc
|   |-- admin.py
|   |-- apps.py
|   |-- migrations
|   |   |-- 0001_initial.py
|   |   |-- __init__.py
|   |   `-- __pycache__
|   |       |-- 0001_initial.cpython-38.pyc
|   |       `-- __init__.cpython-38.pyc
|   |-- models
|   |   |-- __init__.py
|   |   |-- __pycache__
|   |   |   `-- __init__.cpython-38.pyc
|   |   `-- player
|   |       |-- \\
|   |       |-- __init__.py
|   |       |-- __pycache__
|   |       |   |-- __init__.cpython-38.pyc
|   |       |   `-- player.cpython-38.pyc
|   |       `-- player.py
|   |-- static
|   |   |-- audio
|   |   |-- css
|   |   |   `-- game.css
|   |   |-- image
|   |   |   |-- menu
|   |   |   |   `-- backgroud.jpg
|   |   |   |-- playground
|   |   |   `-- settings
|   |   `-- js
|   |       |-- dist
|   |       |   `-- game.js
|   |       `-- src
|   |           |-- menu
|   |           |   `-- zbase.js
|   |           |-- playground
|   |           |   |-- ac_game_object
|   |           |   |   `-- zbase.js
|   |           |   |-- game_map
|   |           |   |   `-- zbase.js
|   |           |   |-- partice
|   |           |   |   `-- zbase.js
|   |           |   |-- player
|   |           |   |   `-- zbase.js
|   |           |   |-- skill
|   |           |   |   `-- fireball
|   |           |   |       `-- zbase.js
|   |           |   `-- zbase.js
|   |           |-- settings
|   |           |   `-- zbase.js
|   |           `-- zbase.js
|   |-- templates
|   |   |-- Multiterminal
|   |   |   `-- home.html
|   |   |-- menu
|   |   |-- playground
|   |   `-- settings
|   |-- tests.py
|   |-- urls
|   |   |-- __init__.py
|   |   |-- __pycache__
|   |   |   |-- __init__.cpython-38.pyc
|   |   |   `-- index.cpython-38.pyc
|   |   |-- index.py
|   |   |-- menu
|   |   |   |-- __init__.py
|   |   |   |-- __pycache__
|   |   |   |   |-- __init__.cpython-38.pyc
|   |   |   |   `-- index.cpython-38.pyc
|   |   |   `-- index.py
|   |   |-- playgroud
|   |   |   |-- __init__.py
|   |   |   |-- __pycache__
|   |   |   |   |-- __init__.cpython-38.pyc
|   |   |   |   `-- index.cpython-38.pyc
|   |   |   `-- index.py
|   |   `-- settings
|   |       |-- __init__.py
|   |       |-- __pycache__
|   |       |   |-- __init__.cpython-38.pyc
|   |       |   `-- index.cpython-38.pyc
|   |       `-- index.py
|   `-- views
|       |-- __init__.py
|       |-- __pycache__
|       |   |-- __init__.cpython-38.pyc
|       |   `-- index.cpython-38.pyc
|       |-- index.py
|       |-- menu
|       |   `-- __init__.py
|       |-- playground
|       |   `-- __init__.py
|       `-- settings
|           |-- __init__.py
|           |-- __pycache__
|           |   |-- __init__.cpython-38.pyc
|           |   `-- getinfo.cpython-38.pyc
|           `-- getinfo.py
|-- manage.py
|-- scripts
|   |-- compress_game_js.sh
|   `-- uwsgi.ini
`-- static
    |-- admin
    |   |-- css
    |   |   |-- autocomplete.css
    |   |   |-- base.css
    |   |   |-- changelists.css
    |   |   |-- dashboard.css
    |   |   |-- fonts.css
    |   |   |-- forms.css
    |   |   |-- login.css
    |   |   |-- nav_sidebar.css
    |   |   |-- responsive.css
    |   |   |-- responsive_rtl.css
    |   |   |-- rtl.css
    |   |   |-- vendor
    |   |   |   `-- select2
    |   |   |       |-- LICENSE-SELECT2.md
    |   |   |       |-- select2.css
    |   |   |       `-- select2.min.css
    |   |   `-- widgets.css
    |   |-- fonts
    |   |   |-- LICENSE.txt
    |   |   |-- README.txt
    |   |   |-- Roboto-Bold-webfont.woff
    |   |   |-- Roboto-Light-webfont.woff
    |   |   `-- Roboto-Regular-webfont.woff
    |   |-- img
    |   |   |-- LICENSE
    |   |   |-- README.txt
    |   |   |-- calendar-icons.svg
    |   |   |-- gis
    |   |   |   |-- move_vertex_off.svg
    |   |   |   `-- move_vertex_on.svg
    |   |   |-- icon-addlink.svg
    |   |   |-- icon-alert.svg
    |   |   |-- icon-calendar.svg
    |   |   |-- icon-changelink.svg
    |   |   |-- icon-clock.svg
    |   |   |-- icon-deletelink.svg
    |   |   |-- icon-no.svg
    |   |   |-- icon-unknown-alt.svg
    |   |   |-- icon-unknown.svg
    |   |   |-- icon-viewlink.svg
    |   |   |-- icon-yes.svg
    |   |   |-- inline-delete.svg
    |   |   |-- search.svg
    |   |   |-- selector-icons.svg
    |   |   |-- sorting-icons.svg
    |   |   |-- tooltag-add.svg
    |   |   `-- tooltag-arrowright.svg
    |   `-- js
    |       |-- SelectBox.js
    |       |-- SelectFilter2.js
    |       |-- actions.js
    |       |-- admin
    |       |   |-- DateTimeShortcuts.js
    |       |   `-- RelatedObjectLookups.js
    |       |-- autocomplete.js
    |       |-- calendar.js
    |       |-- cancel.js
    |       |-- change_form.js
    |       |-- collapse.js
    |       |-- core.js
    |       |-- inlines.js
    |       |-- jquery.init.js
    |       |-- nav_sidebar.js
    |       |-- popup_response.js
    |       |-- prepopulate.js
    |       |-- prepopulate_init.js
    |       |-- urlify.js
    |       `-- vendor
    |           |-- jquery
    |           |   |-- LICENSE.txt
    |           |   |-- jquery.js
    |           |   `-- jquery.min.js
    |           |-- select2
    |           |   |-- LICENSE.md
    |           |   |-- i18n
    |           |   |   |-- af.js
    |           |   |   |-- ar.js
    |           |   |   |-- az.js
    |           |   |   |-- bg.js
    |           |   |   |-- bn.js
    |           |   |   |-- bs.js
    |           |   |   |-- ca.js
    |           |   |   |-- cs.js
    |           |   |   |-- da.js
    |           |   |   |-- de.js
    |           |   |   |-- dsb.js
    |           |   |   |-- el.js
    |           |   |   |-- en.js
    |           |   |   |-- es.js
    |           |   |   |-- et.js
    |           |   |   |-- eu.js
    |           |   |   |-- fa.js
    |           |   |   |-- fi.js
    |           |   |   |-- fr.js
    |           |   |   |-- gl.js
    |           |   |   |-- he.js
    |           |   |   |-- hi.js
    |           |   |   |-- hr.js
    |           |   |   |-- hsb.js
    |           |   |   |-- hu.js
    |           |   |   |-- hy.js
    |           |   |   |-- id.js
    |           |   |   |-- is.js
    |           |   |   |-- it.js
    |           |   |   |-- ja.js
    |           |   |   |-- ka.js
    |           |   |   |-- km.js
    |           |   |   |-- ko.js
    |           |   |   |-- lt.js
    |           |   |   |-- lv.js
    |           |   |   |-- mk.js
    |           |   |   |-- ms.js
    |           |   |   |-- nb.js
    |           |   |   |-- ne.js
    |           |   |   |-- nl.js
    |           |   |   |-- pl.js
    |           |   |   |-- ps.js
    |           |   |   |-- pt-BR.js
    |           |   |   |-- pt.js
    |           |   |   |-- ro.js
    |           |   |   |-- ru.js
    |           |   |   |-- sk.js
    |           |   |   |-- sl.js
    |           |   |   |-- sq.js
    |           |   |   |-- sr-Cyrl.js
    |           |   |   |-- sr.js
    |           |   |   |-- sv.js
    |           |   |   |-- th.js
    |           |   |   |-- tk.js
    |           |   |   |-- tr.js
    |           |   |   |-- uk.js
    |           |   |   |-- vi.js
    |           |   |   |-- zh-CN.js
    |           |   |   `-- zh-TW.js
    |           |   |-- select2.full.js
    |           |   `-- select2.full.min.js
    |           `-- xregexp
    |               |-- LICENSE.txt
    |               |-- xregexp.js
    |               `-- xregexp.min.js
    |-- css
    |   `-- game.css
    |-- image
    |   `-- menu
    |       `-- backgroud.jpg
    `-- js
        |-- dist
        |   `-- game.js
        `-- src
            |-- menu
            |   `-- zbase.js
            |-- playground
            |   |-- ac_game_object
            |   |   `-- zbase.js
            |   |-- game_map
            |   |   `-- zbase.js
            |   |-- partice
            |   |   `-- zbase.js
            |   |-- player
            |   |   `-- zbase.js
            |   |-- skill
            |   |   `-- fireball
            |   |       `-- zbase.js
            |   `-- zbase.js
            |-- settings
            |   `-- zbase.js
            `-- zbase.js

