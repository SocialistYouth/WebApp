from django.db import models
class GlobalInfo(models.Model):
    tourist_cnt=models.IntegerField(default=0,blank=True,null=True)

