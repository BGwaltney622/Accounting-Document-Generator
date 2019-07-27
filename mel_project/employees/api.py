from employees.models import Employee
from rest_framework import viewsets, permissions
from .Serializers import EmployeeSerializer


#  Employee Viewset
class EmployeeViewset(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = EmployeeSerializer