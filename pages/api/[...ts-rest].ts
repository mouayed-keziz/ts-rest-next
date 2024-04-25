import { contract } from '@/contract';
import { createNextRoute, createNextRouter } from '@ts-rest/next';
import { generateOpenApi } from '@ts-rest/open-api';

// `contract` is the AppRouter returned by `c.router`
const router = createNextRoute(contract, {
  createPost: async (args) => {
    return {
      status: 201,
      body: {
        id: 1,
        title: args.body.title,
        body: args.body.body,
      },
    };
  },
  getPost: async (args) => {
    return {
      status: 200,
      body: {
        id: 1,
        title: "Hello Wosssrld",
        body: "Hello Worsssld",
      }
    }
  }
});



// Actually initiate the collective endpoints
export default createNextRouter(contract, router);

