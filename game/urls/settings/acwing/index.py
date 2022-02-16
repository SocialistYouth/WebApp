from django.urls import path
from game.views.settings.acwing.apply_code import apply_code
from game.views.settings.acwing.receive_code import receive_code


urlpatterns = [
    path("apply_code/", apply_code, name="settings_acwing_apply_code"),
    path("receive_code/", receive_code, name="settings_acwing_receive_code"),
]
