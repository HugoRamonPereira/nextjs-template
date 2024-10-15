"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import ReactCookieBot from "react-cookiebot";

const domainGroupId = "0ae05c41-14dd-4099-b440-d0bb13199788";

export default function Home() {
  const [hasCookieBot, setHasCookieBot] = useState<boolean>(false);

  return (
    <div>
      <h1>Next.js Boilerplate</h1>
      <Button
        onClick={() => setHasCookieBot(!!document.querySelector("#CookieBot"))}
      >
        Click here to check if CookieBot is running in this website
      </Button>

      <p>{hasCookieBot && "CookieBot is running in this website!"}</p>
      <ReactCookieBot domainGroupId={domainGroupId} />
    </div>
  );
}
