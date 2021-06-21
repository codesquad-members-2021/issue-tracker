export type CommentsType = {
  id: number;
  author: {
    id: number;
    email: string;
    name: string;
    profileImage: string;
  }
  contents: string;
  createDateTime: string;
}
