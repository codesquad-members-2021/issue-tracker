# deploy.sh
#!/usr/bin/env bash
REPOSITORY=/home/ubuntu/issue-tracker/
cd $REPOSITORY
APP_NAME=issue-tracker
JAR_NAME=$(ls $REPOSITORY/build/libs | grep '.jar' | tail -n 1)
JAR_PATH=$REPOSITORY/$JAR_NAME
CURRENT_PID=$(pgrep -f $APP_NAME)

if [ -z $CURRENT_PID ]
then
  echo "> Nothing to end."
else
  echo "> kill -9 $CURRENT_PID"
  kill -9 $CURRENT_PID
  sleep 5
fi

echo "> $JAR_PATH deploy"
nohup java -jar $JAR_PATH &


#CK=`aws s3 ls s3://issue-tracker-jane-eno/issue-tracker.jar`
#echo $CK
#if [[ ! $CK ]]; then
#        echo "no need to build"
#        exit 0
#fi
#
#fuser -k 8080/tcp
#aws s3 cp s3://issue-tracker-jane-eno/issue-tracker.jar ~/
#nohup java -jar issue-tracker.jar &
#aws s3 rm s3://issue-tracker-jane-eno/issue-tracker.jar

#cd $REPOSITORY
#APP_NAME=issue-tracker
#JAR_NAME=$(ls $REPOSITORY/ | grep '.jar' | tail -n 1)
#JAR_PATH=$REPOSITORY/$JAR_NAME
#CURRENT_PID=$(pgrep -f $APP_NAME)
#
#if [ -z $CURRENT_PID ]
#then
#  echo "> Nothing to end."
#else
#  echo "> kill -9 $CURRENT_PID"
#  kill -9 $CURRENT_PID
#  sleep 5
#fi
#
#echo "> $JAR_PATH deploy"
#nohup java -jar $JAR_PATH &
