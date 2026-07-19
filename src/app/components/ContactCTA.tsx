import { ChatConversation } from "./ChatConversation";

type Variant = "light" | "dark";

export function ContactCTA({
  variant = "light",
  showChat = false,
}: {
  variant?: Variant;
  showChat?: boolean;
}) {
  const isDark = variant === "dark";
  const bg = isDark ? "bg-black" : "bg-white";
  const heading = isDark ? "text-white" : "text-black";
  const value = isDark ? "text-white" : "text-black";
  const line = isDark ? "bg-white/60" : "bg-black/40";

  return (
    <section className={`${bg} px-6 md:px-12 lg:px-[133px] py-16 md:py-[66px] overflow-hidden`}>
      <div className="relative flex flex-col gap-12 md:gap-[80px]">
        {/* Heading */}
        <div className="flex flex-col gap-10">
          <div className="max-w-[810px]">
            <p className={`font-['IBM_Plex_Mono:Regular',sans-serif] text-[20px] ${value}`}>That&rsquo;s all for now.</p>
            <h2 className={`font-['Inter:Regular',sans-serif] font-normal leading-[1.05] text-[clamp(2rem,5.5vw,4.8rem)] ${heading} mt-2`}>
              Got a project in mind?
              <br />
              Let&rsquo;s talk
            </h2>
          </div>

          {showChat && <ChatConversation variant={variant} className="md:ml-0" />}
        </div>

        <div className={`h-px w-full ${line}`} />

        {/* Contact rows */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-[57px] font-['Inter:Regular',sans-serif]">
          <div>
            <p className="text-[#7e7e7e] text-[16px]">Email:</p>
            <a href="mailto:velendamulelo057@gmail.com" className={`text-[clamp(1.125rem,2vw,1.5rem)] ${value} hover:underline`}>
              velendamulelo057@gmail.com
            </a>
          </div>
          <div>
            <p className="text-[#7e7e7e] text-[16px]">Phone</p>
            <a href="tel:+27722689505" className={`text-[clamp(1.125rem,2vw,1.5rem)] ${value} hover:underline`}>
              (+27) 72 268 9505
            </a>
          </div>
        </div>

        {/* Get in touch circle */}
        <a
          href="mailto:velendamulelo057@gmail.com"
          className="absolute right-0 md:right-4 lg:right-8 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center rounded-full bg-[#455CE9] text-white size-[clamp(9rem,16vw,17.375rem)] transition-transform hover:scale-105"
        >
          <span className="font-['Inter:Regular',sans-serif] font-normal text-[clamp(1rem,1.5vw,1.5rem)]">Get in touch</span>
        </a>
      </div>
    </section>
  );
}
