// const userData = [
//   {
//     assignees: {
//       users: [
//         {
//           email: 'k@test.com',
//           name: 'K',
//           avatar_url: 'http://testProfile.image.url',
//         },
//         {
//           email: 'pyro@test.com',
//           name: '파이로',
//           avatar_url: 'http://testProfile.image.url',
//         },
//         {
//           email: 'k@test.com',
//           name: 'ink-0',
//           avatar_url: 'http://testProfile.image.url',
//         },
//       ],
//     },
//   },
// ];
const userData = {
  assignees: {
    users: [
      {
        email: 'noel@test.com',
        name: '노을',
        avatar_url: 'http://testProfile.image.url',
      },
      {
        email: 'pyro@test.com',
        name: '파이로',
        avatar_url: 'http://testProfile.image.url',
      },
    ],
  },
  labels: {
    labels: [
      {
        id: 1,
        title: '라벨 타이틀4',
        description: '라벨 설명1',
        background_color_hexa: '#FF0000',
        text_color_hexa: '#000000',
      },
      {
        id: 2,
        title: '라벨 타이틀5',
        description: '라벨 설명2',
        background_color_hexa: '#FF0000',
        text_color_hexa: '#000000',
      },
      {
        id: 3,
        title: '라벨 타이틀6',
        description: '라벨 설명3',
        background_color_hexa: '#FF0000',
        text_color_hexa: '#000000',
      },
    ],
  },
  milestones: [
    {
      id: 1,
      milestone_info: {
        title: '마일스톤 제목1',
        description: '마일스톤 내용1',
        due_date: '2021-06-18T01:42:07.905',
      },
    },
    {
      id: 2,
      milestone_info: {
        title: '마일스톤 제목2',
        description: '마일스톤 내용2',
        due_date: '2021-06-19T01:42:07.905',
      },
    },
  ],
};

export { userData };
