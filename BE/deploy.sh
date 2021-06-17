#!/usr/bin/env bash
REPOSITORY=/home/ubuntu/issue-tracker
cd $REPOSITORY
JAR_NAME=$(ls $REPOSITORY/build/libs | grep '.jar' | tail -n 1)
JAR_PATH=$REPOSITORY/build/libs/$JAR_NAME
fuser -k 8080/tcp
nohup java -jar $JAR_PATH &
