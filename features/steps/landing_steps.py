import unittest2 as unittest
from selenium import webdriver

#def before_all(context):
    
#def after_all(context):
    
def before_feature(context, feature):
    model.init(environment='test')

#def after_feature(context, feature):
 
#############################################
@given(u'I have a browser open')
def step_impl(context):
   context.browser = webdriver.Firefox()
   context.browser.implicitly_wait(3)
   
@when(u'I enter the site url')
def step_impl(context):
    context.browser.get('http://localhost:8000/')

@then(u'I should be on the landing page')
def step_impl(context):
    assert('cloudonyms.com' in context.browser.title)
    context.browser.quit()

