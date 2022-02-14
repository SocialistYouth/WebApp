from django.shortcuts import redirect
from django.core.cache import cache
import requests
from django.contrib.auth.models import User
from game.models.player.player import Player
from django.contrib.auth import login
from random import randint


def receive_code(request):
    data = request.GET
    code = data.get("code") # code将于10分钟后过期
    state = data.get("state")
    
    if not cache.has_key(state):
        return redirect("index")
    cache.delete(state)

    client_id = "d067ea9c92c8ab421db7"
    client_secret = "f797c3fcc56afddc811b8e1107d46646f3a6c4bc"

    token_url ="https://github.com/login/oauth/access_token?" \
    'client_id={}&client_secret={}&code={}'
    token_url = token_url.format(client_id, client_secret, code)
    header = {
        "accept":"application/json"
    }
    res = requests.post(token_url, headers=header).json()
    access_token = res["access_token"]
    user_url ='https://api.github.com/user'
    access_token ='token {}'.format(access_token)
    headers = {
        'accept':'application/json',
        'Authorization': access_token
    }
    info_res = requests.get(user_url, headers=headers).json()
    username = info_res["login"]

    print(username)
    openid = info_res["id"]
    players = Player.objects.filter(openid=openid)
    if players.exists():  # 如果该用户已存在，则无需重新获取信息，直接登录即可
        login(request, players[0].user)
        return redirect("index")
    photo = info_res["avatar_url"]
    while User.objects.filter(username=username).exists():  # 找到一个新用户名
        username += str(randint(0, 9))

    user = User.objects.create(username=username)
    player = Player.objects.create(user=user, photo=photo, openid=openid)

    login(request, user)

    return redirect("index")


