from django.db import models

class ContactModel(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    contact_num = models.IntegerField()
    email_sub = models.CharField(max_length=255)
    email_msg = models.TextField(max_length=255)

    def __str__(self):
        return self.name

    
