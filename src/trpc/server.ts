import * as trpc from "@trpc/server";
import {t} from "./trpc"
import { z } from "zod";
// Define a router
export const appRouter = t.router({
    hello: t.procedure
      .input(z.void())
      .meta({
        openapi: {
          method: "GET",
          path: "/test",
        },
      })
      .query(({ input }) => {
        return "Berhasil";
        //return `Hello, ${input.name}!`;
      }),
  });
