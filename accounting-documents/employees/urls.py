from rest_framework import routers
from .api import EmployeeViewset


router = routers.DefaultRouter()
router.register('api/employees', EmployeeViewset, 'Employee')

urlpatterns = router.urls