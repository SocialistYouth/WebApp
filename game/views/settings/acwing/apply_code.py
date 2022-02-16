from django.http import JsonResponse
from urllib.parse import quote
from random import randint
from django.core.cache import cache

def get_state():
    res = ""
    for i in range(8):
        res += str(randint(0,9))
    return res

def apply_code(request):
    appid = "1236"
    redirect_uri = quote("https://app1236.acapp.acwing.com.cn/settings/acwing/receive_code/")
    scope = "userinfo"
    state = get_state()
    
    cache.set(state,True,7200) # 有效期两个小时
    
    apply_code_url = "https://www.acwing.com/third_party/api/oauth2/web/authorize/"
    return JsonResponse({
        'result':"success",
        'apply_code_url':apply_code_url + "?appid=%s&redirect_uri=%s&scope=%s&state=%s" %(appid,redirect_uri,scope,state),
    })
