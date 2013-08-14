from django.http import HttpResponse
from django.template import Template, Context

def landing_page(request):
    fp = open('./cloudonyms/views/landing_page_template.html')
    t = Template(fp.read())
    fp.close()
    html = t.render(Context())
    return HttpResponse(html)