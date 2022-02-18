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
    appid = "101995984"
    redirect_uri = quote("https://app1236.acapp.acwing.com.cn/settings/qq/receive_code")
    response_type = "code"
    state = get_state()
    
    cache.set(state,True,7200) # 有效期两个小时
    
    apply_code_url = "https://graph.qq.com/oauth2.0/authorize"
    return JsonResponse({
        'result':"success",
        'apply_code_url':apply_code_url + "?response_type=%s&client_id=%s&redirect_uri=%s&state=%s" %(response_type,appid,redirect_uri,state),
    })
