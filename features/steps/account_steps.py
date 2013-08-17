import unittest2 as unittest
from selenium import webdriver

#############################################
@given(u'I am on the signup page')
def step_impl(context):
    assert False
    
@when(u'I fill in the user signup form')
def step_impl(context):
    assert False

@then(u'I should be on the account created page')
def step_impl(context):
    assert False

@then(u'I should see "Your account was created."')
def step_impl(context):
    assert False

@then(u'I should receive an email')
def step_impl(context):
    assert False
    
@when(u'I open the email')
def step_impl(context):
    assert False

@then(u'I should see "confirm_email" in the email')
def step_impl(context):
    assert False

@when(u'I follow "confirm_email" in the email')
def step_impl(context):
    assert False

@then(u'I should see "Your email address has been confirmed."')
def step_impl(context):
    assert False
    

#############################################
@given(u'I am on the login page')
def step_impl(context):
    assert False

@given(u'my account has already been created')
def step_impl(context):
    assert False

@when(u'I fill in the user signin form')
def step_impl(context):
    assert False

@then(u'I should be on my console page')
def step_impl(context):
    assert False

@then(u'I should see "Login successful!"')
def step_impl(context):
    assert False


#############################################
@given(u'my account utilizes Google credentials')
def step_impl(context):
    assert False


#############################################
@given(u'my account utiilizes Facebook credentials')
def step_impl(context):
    assert False

#############################################
@given(u'my account use Twitter credentials')
def step_impl(context):
    assert False

#############################################
@given(u'my account use LinkedIn credentials')
def step_impl(context):
    assert False
