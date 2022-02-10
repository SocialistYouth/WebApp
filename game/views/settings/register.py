from django.contrib.auth import login
from django.http import JsonResponse
from django.contrib.auth.models import User
from game.models.player.player import Player

def register(request):
    data = request.GET
    username = data.get("username").strip()
    password = data.get("password").strip()
    Confirm_password = data.get("Confirm_password").strip()
    if not username or not password:
        return JsonResponse({
            'result':"用户名或密码不能为空"
        })
    if password != Confirm_password:
        return JsonResponse({
            'result':"两次密码不一致"
        })
    if User.objects.filter(username=username).exists():
        return JsonResponse({
            'result':"用户名已存在"
        })
    user = User(username=username)
    user.set_password(password)
    user.save()
    Player.objects.create(user=user, photo="https://img1.baidu.com/it/u=3374259235,3455225765&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500")
    login(request,user)
    return JsonResponse({
        'result':"success"
    })
