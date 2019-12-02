from django.db import models


class Files(models.Model):
    file = models.FileField(blank=False, null=False)

    def __str__(self):
        return self.file.name

