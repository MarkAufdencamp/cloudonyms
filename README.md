# Cloudonyms - Cloud Management
## Production Environment Construction
### Base Server
Ubuntu 12.04 LTS
ssh root@198.74.53.74

1. Configure Hostname

*	echo "inet-srvr-02.iluviya.net" >> /etc/hostname
*	hostname -F /etc/hostname

2. Configure Timezone

*	\# May be /etc/localtime symlink on non-Ubuntu distros
*	echo "US/Eastern" >> /etc/timezone
*	printf "198.74.53.74\tinet-srvr-02.iluviya.net\tinet-srvr-02\n" >> /etc/hosts
*	printf "127.0.0.1\tpuppet.iluviya.net\tpuppet\n"	>> /etc/hosts

3. Update APT

*	apt-get update

4. Install puppet, svn, and git

*	apt-get install puppet puppet-common puppetmaster puppetmaster-common ruby subversion git

5. Install puppet scripts for server builds

*	git http://gitub.com/MarkAufdencamp/puppet-manifests
*	git http://github.com/Markaufdencamp/puppet-files

6. Configure puppet server

*	nano /etc/puppet/fileserver.conf
*		\#	[files]
*		\#	allow 127.0.0.1/8
*		\#	allow *.iluviya.net
*		\#	[plugins]
*		\#	allow 127.0.0.1/8
*		\#	allow *.iluviya.net
*	service puppetmaster start
	
7. Start puppet agent

*	nano /etc/default/puppet
*		\#	\#START=no
*		\#	START=yes
*	service puppet start

8. Run puppet local agent

*	puppet agent --test

### Production VirtualHost Account
### Production Application Backup/Restore
### Production Application Deployment
## Development Environment Construction
### Base Workstation
### PyEnv
### Eclipse
### EGit
### PyDev
### SQLite
### MySQL
### Test Harness
#### Javascript BDD - Jasmine
git clone https://github.com/pivotal/jasmine.git
## Continuous Integration and Staging Environment Construction
### Base Server
### JEE WebContainer
### Hudson
### Staging Virtual Host Account
### Staging Application Deployment
## Agile Management Environment Construction
### Base Server
### Redmine 
### Redmine Backlogs
### GitoLite
### Nagios