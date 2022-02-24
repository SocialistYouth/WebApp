from django.contrib import admin
from game.models.player.player import Player
from game.models.global_info.global_info import GlobalInfo
# Register your models here.

admin.site.register(Player)
admin.site.register(GlobalInfo)
