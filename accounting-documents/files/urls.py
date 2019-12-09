from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from .api import FileViewSet


urlpatterns = [
    path('api/files', FileViewSet.as_view()),
    path('api/files/<int:pk>', FileViewSet.as_view()),
]


urlpatterns = format_suffix_patterns(urlpatterns)