import { initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express';
import { z } from "zod";

// created for each request
const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({}); // no context
type Context = Awaited<ReturnType<typeof createContext>>;

const t = initTRPC.context<Context>().create();
const appRouter = t.router({
  list: t.procedure
    .meta({
      openapi: {
        method: "GET",
        path: "/public/book",
      },
    })
    .input(z.void())
    .output(
      z.array(
        z.object({
          id: z.string(),
          name: z.string(),
        })
      )
    )
    .query(async () => {
      const result = [
        {
          id: "zz",
          name: "xx",
        },
      ];
      return result;
    }),
});

const app = express();

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);

app.listen(4000);