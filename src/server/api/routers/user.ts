import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { TRPCError } from "@trpc/server";

export const userRouter = createTRPCRouter({
  authCallback: publicProcedure.query(async ({ ctx: { db } }) => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || !user.id) throw new TRPCError({ code: "UNAUTHORIZED" });

    const dbUser = await db.user.findFirst({
      where: {
        userId: user.id,
      },
    });

    if (!dbUser) {
      await db.user.create({
        data: {
          userId: user.id,
          email: user.email,
        },
      });
    }

    return { success: true };
  }),
});
