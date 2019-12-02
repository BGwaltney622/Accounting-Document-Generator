from django.urls import path, include
from .api import FileViewSet


urlpatterns = [
    path('api/files', FileViewSet.as_view()),
]