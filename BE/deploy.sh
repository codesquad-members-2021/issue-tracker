# deploy.sh
#!/usr/bin/env bash
REPOSITORY=/deploy
cd $REPOSITORY
APP_NAME=action_codedeploy
JAR_NAME=$(ls $REPOSITORY/build/libs/ | grep '.jar' | tail -n 1)
JAR_PATH=$REPOSITORY/build/libs/$JAR_NAME
CURRENT_PID=$(pgrep -f $APP_NAME)
if [ -z $CURRENT_PID ]
then
  echo "> Nothing to end."
else
  echo "> kill -9 $CURRENT_PID"
  kill -15 $CURRENT_PID
  sleep 5
fi
echo "> $JAR_PATH deploy"
nohup java -jar $JAR_PATH > /dev/null 2> /dev/null < /dev/null &


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
