#!/bin/bash
./gradlew build jar -x test
aws s3 cp build/libs/issue-tracker-0.0.1-SNAPSHOT.jar s3://codesquad-issue-tracker-team7/issue-tracker.jar
echo "Done!"
