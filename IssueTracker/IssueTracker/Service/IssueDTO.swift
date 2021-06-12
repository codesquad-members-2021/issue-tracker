import Foundation

struct IssueDTO: Decodable {
    let issues: [IssueInfo]
}

struct IssueInfo: Decodable {
    let id:Int
    let title:String
    let comment:String
    let authorAvatarUrl:String
    let createdDateTime:String
    let commentNumber:Int
    let assignees:[Assignee]
    let labels:[Label]
    let milestone:String
}

/*
 
 {
   "count": {
     "label": 3,
     "milestone": 3,
     "openedIssue": 3,
     "closedIssue": 0
   },
   "issues": [
     {
       "id": 1,
       "title": "이슈 1",
       "comment": "이슈 내용",
       "authorAvatarUrl": "https://avatars.githubusercontent.com/u/63284310?v=4",
       "createdDateTime": "2021-06-11T14:28:03.42",
       "commentNumber": 1,
       "assignees": [
         {
           "id": 1,
           "image": "https://avatars.githubusercontent.com/u/63284310?v=4",
           "userName": "eNoLJ",
           "assigned": true
         },
         {
           "id": 2,
           "image": "https://avatars.githubusercontent.com/u/68000537?v=4",
           "userName": "janeljs",
           "assigned": false
         },
         {
           "id": 3,
           "image": "https://avatars.githubusercontent.com/u/68000537?v=4",
           "userName": "zane",
           "assigned": false
         },
         {
           "id": 4,
           "image": "https://avatars.githubusercontent.com/u/74946802?v=4",
           "userName": "torch-ray",
           "assigned": false
         }
       ],
       "labels": [
         {
           "id": 1,
           "name": "bug",
           "color": {
             "backgroundColorCode": "#F47378",
             "textColorCode": "#000000"
           },
           "description": "bug fix",
           "checked": true
         },
         {
           "id": 2,
           "name": "feature",
           "color": {
             "backgroundColorCode": "#6BD089",
             "textColorCode": "#000000"
           },
           "description": "new feature",
           "checked": true
         },
         {
           "id": 3,
           "name": "documentation",
           "color": {
             "backgroundColorCode": "#C785C8",
             "textColorCode": "#000000"
           },
           "description": "new documentation",
           "checked": true
         }
       ],
       "milestone": "M1"
     },
     {
       "id": 2,
       "title": "이슈 2",
       "comment": "이슈 내용",
       "authorAvatarUrl": "https://avatars.githubusercontent.com/u/63284310?v=4",
       "createdDateTime": "2021-06-11T14:28:05.939",
       "commentNumber": 1,
       "assignees": [
         {
           "id": 1,
           "image": "https://avatars.githubusercontent.com/u/63284310?v=4",
           "userName": "eNoLJ",
           "assigned": true
         },
         {
           "id": 2,
           "image": "https://avatars.githubusercontent.com/u/68000537?v=4",
           "userName": "janeljs",
           "assigned": false
         },
         {
           "id": 3,
           "image": "https://avatars.githubusercontent.com/u/68000537?v=4",
           "userName": "zane",
           "assigned": false
         },
         {
           "id": 4,
           "image": "https://avatars.githubusercontent.com/u/74946802?v=4",
           "userName": "torch-ray",
           "assigned": false
         }
       ],
       "labels": [
         {
           "id": 1,
           "name": "bug",
           "color": {
             "backgroundColorCode": "#F47378",
             "textColorCode": "#000000"
           },
           "description": "bug fix",
           "checked": true
         },
         {
           "id": 2,
           "name": "feature",
           "color": {
             "backgroundColorCode": "#6BD089",
             "textColorCode": "#000000"
           },
           "description": "new feature",
           "checked": true
         },
         {
           "id": 3,
           "name": "documentation",
           "color": {
             "backgroundColorCode": "#C785C8",
             "textColorCode": "#000000"
           },
           "description": "new documentation",
           "checked": true
         }
       ],
       "milestone": "M1"
     },
     {
       "id": 3,
       "title": "이슈 3",
       "comment": "이슈 내용",
       "authorAvatarUrl": "https://avatars.githubusercontent.com/u/63284310?v=4",
       "createdDateTime": "2021-06-11T14:28:09.324",
       "commentNumber": 1,
       "assignees": [
         {
           "id": 1,
           "image": "https://avatars.githubusercontent.com/u/63284310?v=4",
           "userName": "eNoLJ",
           "assigned": true
         },
         {
           "id": 2,
           "image": "https://avatars.githubusercontent.com/u/68000537?v=4",
           "userName": "janeljs",
           "assigned": false
         },
         {
           "id": 3,
           "image": "https://avatars.githubusercontent.com/u/68000537?v=4",
           "userName": "zane",
           "assigned": false
         },
         {
           "id": 4,
           "image": "https://avatars.githubusercontent.com/u/74946802?v=4",
           "userName": "torch-ray",
           "assigned": false
         }
       ],
       "labels": [
         {
           "id": 1,
           "name": "bug",
           "color": {
             "backgroundColorCode": "#F47378",
             "textColorCode": "#000000"
           },
           "description": "bug fix",
           "checked": true
         },
         {
           "id": 2,
           "name": "feature",
           "color": {
             "backgroundColorCode": "#6BD089",
             "textColorCode": "#000000"
           },
           "description": "new feature",
           "checked": true
         },
         {
           "id": 3,
           "name": "documentation",
           "color": {
             "backgroundColorCode": "#C785C8",
             "textColorCode": "#000000"
           },
           "description": "new documentation",
           "checked": true
         }
       ],
       "milestone": "M1"
     }
   ]
 }
 
 */
