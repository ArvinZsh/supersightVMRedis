FROM tomcat
RUN rm -rf /usr/local/tomcat/webapps/
RUN ls
COPY $WORKSPACE/target/failover.war /usr/tomcat/webapps/failover.war
