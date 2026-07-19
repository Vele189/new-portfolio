"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { cn } from "./ui/utils";

type Message = {
  id: string;
  name: string;
  text: string;
  side: "left" | "right";
  avatar: string;
  avatarBg: string;
};

const messages: Message[] = [
  {
    id: "1",
    name: "Client",
    text: "Got a project in mind?",
    side: "left",
    avatar: "C",
    avatarBg: "bg-sky-500",
  },
  {
    id: "2",
    name: "Vele",
    text: "Let's talk. I'd love to hear about it.",
    side: "right",
    avatar: "V",
    avatarBg: "bg-neutral-800",
  },
  {
    id: "3",
    name: "Client",
    text: "Looking for someone to build a sleek web experience.",
    side: "left",
    avatar: "C",
    avatarBg: "bg-sky-500",
  },
  {
    id: "4",
    name: "Vele",
    text: "Say less. Drop me a line and let's get started.",
    side: "right",
    avatar: "V",
    avatarBg: "bg-neutral-800",
  },
];

function ChatMessage({
  message,
  index,
  inView,
  isDark,
}: {
  message: Message;
  index: number;
  inView: boolean;
  isDark: boolean;
}) {
  const isRight = message.side === "right";
  const delay = index * 0.35;

  return (
    <div
      className={cn(
        "flex items-end gap-2.5",
        isRight ? "flex-row-reverse" : "flex-row",
      )}
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.35, delay, ease: "easeOut" }}
        className={cn(
          "flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-medium text-white",
          message.avatarBg,
        )}
        aria-hidden
      >
        {message.avatar}
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          x: isRight ? 24 : -24,
          scale: 0.96,
        }}
        animate={
          inView
            ? { opacity: 1, x: 0, scale: 1 }
            : { opacity: 0, x: isRight ? 24 : -24, scale: 0.96 }
        }
        transition={{ duration: 0.4, delay: delay + 0.12, ease: "easeOut" }}
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed md:text-base",
          isRight
            ? "rounded-br-md bg-[#455CE9] text-white"
            : isDark
              ? "rounded-bl-md bg-neutral-800 text-white"
              : "rounded-bl-md bg-neutral-100 text-neutral-900",
        )}
      >
        <span className="sr-only">{message.name}: </span>
        {message.text}
      </motion.div>
    </div>
  );
}

export function ChatConversation({
  className,
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const isDark = variant === "dark";

  return (
    <div
      ref={ref}
      className={cn(
        "mx-auto w-full max-w-md",
        className,
      )}
      aria-label="Chat conversation illustration"
    >
      <div className="flex flex-col gap-4">
        {messages.map((message, index) => (
          <ChatMessage
            key={message.id}
            message={message}
            index={index}
            inView={inView}
            isDark={isDark}
          />
        ))}
      </div>
    </div>
  );
}
