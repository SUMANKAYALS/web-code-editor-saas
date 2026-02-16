"use node";

import { v } from "convex/values";
import { internalAction } from "./_generated/server";
import { createHmac, timingSafeEqual } from "crypto";

export const verifyWebhook = internalAction({

    args: {
        payload: v.string(),
        signature: v.string(),
    },

    handler: async (ctx, args) => {

        const secret = process.env.LEMON_SQUEEZY_WEBHOOK_SECRET;

        if (!secret) {
            throw new Error("Missing LEMON_SQUEEZY_WEBHOOK_SECRET");
        }

        const hmac = createHmac("sha256", secret);

        const computedSignature = hmac
            .update(args.payload)
            .digest("hex");

        // ✅ Secure comparison (prevents timing attacks)
        const isValid = timingSafeEqual(
            Buffer.from(computedSignature),
            Buffer.from(args.signature)
        );

        if (!isValid) {
            throw new Error("Invalid Lemon Squeezy webhook signature");
        }

        return JSON.parse(args.payload);
    },
});
