from django.db import models


class Employee(models.Model):
    employee_id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    salary = models.IntegerField()
    asn_per = models.IntegerField()
    twenty_per = models.IntegerField()
    fdn_per = models.IntegerField()
    svc_per = models.IntegerField()
    ucd_per = models.IntegerField()
    sp_per = models.IntegerField()
    tv_per = models.IntegerField()

