"use client";

import SuperTokens from "supertokens-web-js";
import EmailPassword from "supertokens-web-js/recipe/emailpassword";
import Passwordless from "supertokens-web-js/recipe/passwordless";
import Session from "supertokens-web-js/recipe/session";
import {
  API_ORIGIN,
  SUPERTOKENS_API_BASE_PATH,
  SUPERTOKENS_APP_NAME,
} from "./config";

let initialized = false;

/** Idempotent client-side SuperTokens init for the admin SPA. */
export function ensureSuperTokens(): void {
  if (initialized || typeof window === "undefined") {
    return;
  }

  SuperTokens.init({
    appInfo: {
      appName: SUPERTOKENS_APP_NAME,
      apiDomain: API_ORIGIN,
      apiBasePath: SUPERTOKENS_API_BASE_PATH,
    },
    recipeList: [
      EmailPassword.init(),
      Passwordless.init(),
      Session.init({
        tokenTransferMethod: "cookie",
      }),
    ],
  });

  initialized = true;
}

export { EmailPassword, Passwordless, Session };
