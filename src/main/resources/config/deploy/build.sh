#!/bin/bash

#build in jenkins

#docker仓库地址
#REG_URL=

#swarm manage 节点地址
#SWARM_MANAGE_URL=172.168.72.54:2376

#根据时间生成版本号
JOB_NAME=failover
TAG=$JOB_NAME:'date + %y%m%d-%H-%M'

#使用maven镜像进行编译,打包出war
#docker run --rm --name mvn -v ~/Desktop/soft/docker-build/maven:/root/.m2 \ 
#-v ~/Desktop/soft/docker-build/jenkins/workspace/$JOB_NAME:/usr/src/mvn -w /usr/src/mvn/\
#maven mvn clean install -Dmaven.test.skip=true

#使用本地maven编译打包出war
mvn clean install -Dmaven.test.skip=true

#使用写好的Dockerfile文件打包
docker build -t $TAG $WORKSPACE/.
docker push $TAG
docker rmi $TAG

#单点运行
#若有以前运行的版本则删除
#if docker ps -a|grep -i $JOB_NAME; then docker rm -f $JOB_NAME
#fi

#运行
#docker run -d -p 80:8080 --name $JOB_NAME $TAG


#集群运行
#若有以前运行的版本则删除
#if docker -H $SWARM_MANAGE_URL ps -a|grep -i $JOB_NAME; then docker -H $SWARM_MANAGE_URL rm -f $JOB_NAME
#fi

#运行到集群
#docker -H $SWARM_MANAGE_URL run -d -p 80:8080 --name $JOB_NAME $TAG

