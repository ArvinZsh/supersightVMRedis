FROM tomcat
RUN rm -rf /usr/local/tomcat/webapps/
ADD . ./temp/
RUN ls ./temp/
COPY failover.war /usr/tomcat/webapps/failover.war
