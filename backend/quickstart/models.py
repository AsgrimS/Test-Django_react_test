from django.db import models

# Create your models here.


class Person(models.Model):
    name = models.CharField(max_length=50)
    age = models.IntegerField()

    class Meta:
        verbose_name = 'person'
        verbose_name_plural = 'people'


    def __str__(self):
        return self.name
