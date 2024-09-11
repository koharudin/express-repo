import { router, procedure } from "../trpc";
import { z } from "zod";

export const bookRouter = router({
  list: procedure
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
