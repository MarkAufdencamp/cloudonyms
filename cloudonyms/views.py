from django.shortcuts import render_to_response

def landing_page(request):
    return render_to_response('landing_page_template.html')