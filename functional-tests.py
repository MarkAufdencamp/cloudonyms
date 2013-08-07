import unittest2 as unittest
from selenium import webdriver

class NewVisitorTest(unittest.TestCase):

	def setUp(self):
		self.browser = webdriver.Firefox()
		self.browser.implicitly_wait(3)
		
	def tearDown(self):
		self.browser.quit()

	def test_webServerIsRunning(self):
		self.browser.get('http://localhost:8000')
		self.assertIn('su SEO Console', self.browser.title)
		self.fail('Finish the Test')

if __name__ == '__main__':
	unittest.main()
