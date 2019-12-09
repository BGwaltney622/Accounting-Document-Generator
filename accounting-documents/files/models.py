from django.db import models
from django.contrib.auth.models import User


class Files(models.Model):
    file = models.FileField(blank=False, null=False)
    accountant_id = models.ForeignKey(User, related_name="files", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.file.name




