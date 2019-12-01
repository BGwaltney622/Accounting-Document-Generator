from .models import Employee
from rest_framework import viewsets, permissions
from .Serializers import EmployeeSerializer


#  Employee Viewset
class EmployeeViewset(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = EmployeeSerializer

    def get_queryset(self):
        return self.request.user.employees.all()

    def perform_create(self, serializer):
        serializer.save(accountant_id=self.request.user)






