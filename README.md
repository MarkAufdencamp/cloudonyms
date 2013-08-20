# Cloudonyms - Cloud Management
## Development Environment Construction
### Base Workstation - OSX - Linux - Windows/Cygwin
#### Python
##### PyEnv
#### IDE
##### JVM
##### Eclipse/Aptana
##### EGit
##### RadRails
##### PyDev
#### Database
##### SQLite
##### MySQL
#### Testing Harness
##### Javascript BDD/TDD - Jasmine
	git clone https://github.com/pivotal/jasmine.git
##### Django BDD/TDD - Behave, Unittet, Unittest2, Factory-boy, django-faker
##### Rails BDDTDD - Cucumber, RSpec, Factory-girl, faker
##### Firefox
##### Selenium
#### VCS
##### Project Checkout
##### Project Commit
## Production Environment Construction
### Base Server - Ubuntu 12.04 LTS - inet-srvr-02.iluviya.net
	# Download and install server root ssh key
	# root ssh
	ssh root@198.74.53.74
#### Configure Hostname
	echo "inet-srvr-02.iluviya.net" >> /etc/hostname
	hostname -F /etc/hostname
#### Configure Timezone
	# May be /etc/localtime symlink on non-Ubuntu distros
	echo "US/Eastern" >> /etc/timezone
	printf "198.74.53.74\tinet-srvr-02.iluviya.net\tinet-srvr-02\n" >> /etc/hosts
	printf "127.0.0.1\tpuppet.iluviya.net\tpuppet\n"	>> /etc/hosts
#### Update APT
	apt-get update
#### Install puppet, svn, and git
	apt-get install puppet puppet-common puppetmaster puppetmaster-common ruby subversion git
#### Install puppet scripts for server builds
	git http://gitub.com/MarkAufdencamp/puppet-manifests
	git http://github.com/Markaufdencamp/puppet-files
#### Configure puppet server
	nano /etc/puppet/fileserver.conf
		#	[files]
		#	allow 127.0.0.1/8
		#	allow *.iluviya.net
		#	[plugins]
		#	allow 127.0.0.1/8
		#	allow *.iluviya.net
	service puppetmaster start
#### Start puppet agent
	nano /etc/default/puppet
		#	#START=no
		#	START=yes
	service puppet start
#### Run puppet local agent
	puppet agent --test	
### Production Application - cloudonyms.com - www.cloudonyms.com
#### Production Application VirtualHost Account
#### Production Application MySQL Database Account
#### Production Application Backup/Restore
#### Production Application Deployment
### Production CDN - cdn.cloudonyms.com
#### Production CDN VirtualHost Account
#### Production CDN Backup/Restore
#### Production CDN Deployment
## Continuous Integration and Staging Environment Construction
### Base Server - Ubuntu 12.04 LTS - inet-srvr-01.iluviya.net
	# Download and install server root ssh key
	ssh root@50.116.42.173
#### Configure Hostname
	echo "inet-srvr-01.iluviya.net" >> /etc/hostname
	hostname -F /etc/hostname
#### Configure Timezone
	# May be /etc/localtime symlink on non-Ubuntu distros
	echo "US/Eastern" >> /etc/timezone
	printf "50.116.42.173\tinet-srvr-01.iluviya.net\tinet-srvr-01\n" >> /etc/hosts
	printf "198.74.53.74\tpuppet.iluviya.net\tpuppet\n" >> /etc/hosts
#### Update APT
	apt-get update
#### Install puppet, svn, and git
	apt-get install puppet puppet-common ruby facter
#### Start puppet agent
	nano /etc/default/puppet
		#	#START=no
		#	START=yes
	service puppet start
#### Run puppet local agent
	puppet agent --test	
	# On Puppet Master: inet-srvr-02.iluviya.net
	#	ssh root@198.74.53.74
	#	puppet cert --list
	#	puppet cert --sign inet-srvr-01.iluviya.net
### JEE WebContainer Tomcat
### JEE WebApp Hudson
### CI-Hudson Project Environment
### CI-Hudson Backup/Restore
### Artifactory Repository
### Staging Virtual Host Account
### Staging MySQL Database Account
### Staging Application Deployment
### Staging Application Backup/Retore
## Agile Management Environment Construction
### Base Server - Ubuntu 12.04 LTS - inet-srvr-00.iluviya.net
	# Download and install server root ssh key
	# root ssh
	ssh root@173.203.121.88
#### Configure Hostname
	echo "inet-srvr-00.iluviya.net" >> /etc/hostname
	hostname -F /etc/hostname
#### Configure Timezone
	# May be /etc/localtime symlink on non-Ubuntu distros
	echo "US/Eastern" >> /etc/timezone
	printf "173.203.121.88\tinet-srvr-00.iluviya.net\tinet-srvr-00\n" >> /etc/hosts
	printf "198.74.53.74\tpuppet.iluviya.net\tpuppet\n" >> /etc/hosts
#### Update APT
	apt-get update
#### Install puppet, svn, and git
	apt-get install puppet puppet-common ruby facter
#### Start puppet agent
	nano /etc/default/puppet
		#	#START=no
		#	START=yes
	service puppet start
#### Run puppet local agent
	puppet agent --test	
	# On Puppet Master: inet-srvr-02.iluviya.net
	#	ssh root@198.74.53.74
	#	puppet cert --list
	#	puppet cert --sign inet-srvr-01.iluviya.net
### GitoLite
### Redmine 
### Redmine Backlogs
### Nagios
### MRTG
### Repository Backup/Restore
### Redmine Backup/Restore
### Nagios Backup/Restore
### MRTG Backup/Restore
## Developer and Operations Roles
### Graphic and UX Designer
#### Photoshop
#### Wire Framing
#### HTML5
#### CSS3
#### GarageBand
#### iMovie
#### Toon Boom Studio
### Web Developer
#### HTML5
#### CSS3
#### BDD/TDD JavaScript
#### BOM
#### DOM
#### Brower Event Model
#### AJAX
#### WebWorkers
#### WebSockets
### Server Developer
#### Python/Ruby
#### Django/Rails
##### Django - Install and Configure PyDev/PIP
##### Django - Install and Configure Django
##### Rails - Install and Configure RVM/GEMS
##### Rails - Install and Configure Rails
#### Domain Model
#### ORM/ActiveRecord Pattern
##### Database Connection
##### Database Migrations
##### Primary Keys
##### Foreign Keys
#### Django Mail
#### OAuth
#### Security
##### HTTPS
##### SQL Injection
##### XSRF
##### Authentication and Authorization
### Operations
#### Address, Routing and VPN Administrator
#### Name Service Administrator
##### DNS Root Servers
##### DNS TLD Servers
##### Registrar
##### BIND
##### SSL
###### Key Procurement
###### Key Deployment
###### Certificate Authority
#### Web Server Administrator
##### Apache2
##### NGinX
##### Tomcat
##### Virtual Hosting
##### Passenger
##### WSGI
##### SSL/SNI
###### Key Procurement
###### Key Deployment
###### Certificate Authority
#### Mail Administrator
##### Postfix
##### Dovecot
##### SPF
##### DNS BL
##### TLS
###### Key Procurement
###### Key Deployment
###### Certificate Authority
#### Database Administrator
##### MySQL
##### PostgreSQL
#### Message Queue Administrator
##### ActiveMQ
##### SSL
###### Key Procurement
###### Key Deployment
###### Certificate Authority
#### Social Media Administrator
##### Facebook
##### Twitter
##### Google
###### Circles
###### Analytics
###### WebMaster Tools
###### SEO
##### Bing
###### WebMaster Tools
###### SEO
##### Yahoo
###### WebMaster Tools
###### SEO