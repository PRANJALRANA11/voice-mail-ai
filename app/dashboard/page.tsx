"use client";

import Controls from "@/components/blocks/controls";
import Messages from "@/components/blocks/messages";
import { mockMessages } from "@/data/dummy";

export default function dashboard() {
  return (
    <>
      <Messages messages={mockMessages} />
      <Controls />
    </>
  );
}
