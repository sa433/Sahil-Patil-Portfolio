from django.shortcuts import render
from myapp.models import ContactModel
import requests

def home(request):
    if request.method == "POST":
        fullname = request.POST.get('fullname')
        email = request.POST.get('email')
        num = request.POST.get('num')
        sub = request.POST.get('sub')
        email_msg = request.POST.get('email_msg')
        data = ContactModel(name=fullname, email=email, contact_num=num, email_sub=sub, email_msg=email_msg)
        data.save()
        save_to_google_sheets(data)
        msg = 'Contact form submitted successfully'
        return render(request, 'home.html', {'msg':msg})
    else:
        return render(request, "home.html")
    
def save_to_google_sheets(contact):
    # google_sheet_url = 'https://script.google.com/macros/s/AKfycbw640ZFKo4MqQZzAxoGXJoieHc170rCnI9iXsnIKBAo/dev'
    
    google_sheet_url = 'https://script.google.com/macros/s/AKfycbxs5wiadNiSXTJDrnfy1rIIJNMM8DMLAoFpbEwRHVjPhE3rG6vICpt9HE_jO9cNM4RwOg/exec'
    data = {
        'name': contact.name,
        'email': contact.email,
        'contact_num': contact.contact_num,
        'email_sub':contact.email_sub,
        'email_msg':contact.email_msg
    }
    response = requests.post(google_sheet_url, json=data)
    print("Data sent to Google Sheets:", data)
    print(response.text)
