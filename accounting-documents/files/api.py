from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions, status
from .Serializers import FileSerializer
from .file_processing import file_processor


class FileViewSet(APIView):
    parser_class = (FileUploadParser,)

    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = FileSerializer

    def get(self, request):
        queryset = self.request.user.files.all()
        serializer = FileSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        serializer = FileSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            file_obj = request.FILES['file']
            file_processor(file_obj)
            serializer.save(accountant_id=self.request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        file = self.request.user.files.filter(pk=pk)
        file.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


