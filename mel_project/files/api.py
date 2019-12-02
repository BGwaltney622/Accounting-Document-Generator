from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions, status
from .Serializers import FileSerializer



class FileViewSet(APIView):
    parser_class = (FileUploadParser,)

    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = FileSerializer

    def post(self, request, *args, **kwargs):
        serializer = FileSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


