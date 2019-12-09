from rest_framework import serializers
from .models import Files


# File Serializer
class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Files
        fields = "__all__"
