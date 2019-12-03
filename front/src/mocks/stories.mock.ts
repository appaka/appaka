import { Story } from "../types/types";

const stories: Story[] = [
  {
    id: 1,
    title: "Story 1 - Add new cart",
    description: "Description new cart",
    storyPoints: 10,
    releaseNumber: 95,
    dateCreated: "20191221",
    status: "new",
    tasks: [
      {
        id: 2,
        title: "task 1",
        description: "from story 1",
        status: "new"
      },
      {
        id: 3,
        title: "task 2",
        description: "from story 1",
        status: "wip"
      },
      {
        id: 4,
        title: "task 3",
        description: "from story 1",
        status: "done"
      }
    ]
  },
  {
    id: 5,
    title: "Story 2",
    description: "Description new cart",
    storyPoints: 10,
    releaseNumber: 95,
    dateCreated: "20191221",
    status: "new",
    tasks: [
      {
        id: 6,
        title: "task 1",
        description: "from story 2",
        status: "new"
      },
      {
        id: 7,
        title: "task 2",
        description: "from story 2",
        status: "wip"
      },
      {
        id: 8,
        title: "task 3",
        description: "from story 2",
        status: "done"
      }
    ]
  }
];

export default stories;
