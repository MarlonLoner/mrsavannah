import { createElement } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  Check,
  ExternalLink,
  Layers3,
  Mail,
  MessageCircle,
  Orbit,
  PackageCheck,
  Play,
  Radar,
  Sparkles,
  Target,
  Workflow,
  Zap,
} from "lucide-react";
import { siteContent } from "./content/siteContent";

const crystalUrl = siteContent.brand.crystalUrl;
const whatsappUrl = `https://wa.me/${siteContent.brand.whatsappNumber}?text=${encodeURIComponent(
  siteContent.brand.whatsappMessage
)}`;
const emailUrl = `mailto:${siteContent.brand.email}?subject=${encodeURIComponent(
  "Booking the $1000 AI Day"
)}&body=${encodeURIComponent(siteContent.brand.whatsappMessage)}`;

function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-void pb-20 font-body text-white sm:pb-0">
      <SiteHeader />
      <Hero />
      <OfferSection />
      <WhySection />
      <WhatYouGetSection />
      <ExperimentsSection />
      <VisibilitySection />
      <BookingSection />
      <Footer />
      <MobileStickyCta />
    </main>
  );
}

function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-void/[0.72] px-4 py-3 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ion/30 bg-ion/10 text-ion">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="min-w-0">
            <span className="block font-display text-sm font-semibold leading-none text-white">
              Mr Savannah
            </span>
            <span className="mt-1 hidden text-[11px] uppercase tracking-[0.22em] text-slate-500 sm:block">
              $1000 AI Day
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-300 md:flex">
          <a className="transition hover:text-white" href="#offer">
            Offer
          </a>
          <a className="transition hover:text-white" href="#deliverables">
            Deliverables
          </a>
          <a className="transition hover:text-white" href="#experiments">
            Experiments
          </a>
        </nav>

        <a
          href="#booking"
          className="hidden min-h-10 shrink-0 items-center justify-center rounded-full bg-ion px-4 text-xs font-bold text-void shadow-glow transition hover:-translate-y-0.5 hover:bg-white sm:inline-flex sm:px-5 sm:text-sm"
        >
          Book AI Day
        </a>
      </div>
    </header>
  );
}

function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-void/[0.86] px-4 py-3 shadow-[0_-18px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:hidden">
      <div className="mx-auto flex max-w-md gap-2">
        <a
          href="#booking"
          className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-ion px-4 text-sm font-bold text-void shadow-glow"
        >
          Book AI Day
        </a>
        <a
          href={whatsappUrl}
          className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-white/[0.15] bg-white/[0.08] px-4 text-sm font-bold text-white"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}

function Hero() {
  const { hero } = siteContent;

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-void px-5 pb-20 pt-28 sm:px-8 sm:pt-32 lg:px-10"
    >
      <img
        className="absolute inset-0 h-full w-full object-cover opacity-[0.34] saturate-150"
        src={hero.posterUrl}
        alt=""
        aria-hidden="true"
      />
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-[0.42] saturate-150"
        src={hero.videoUrl}
        poster={hero.posterUrl}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,6,12,0.94)_0%,rgba(5,6,12,0.72)_46%,rgba(5,6,12,0.42)_100%)]" />
      <div className="absolute inset-0 bg-radial-grid opacity-90" />
      <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 animate-scan bg-gradient-to-b from-transparent via-ion/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-void via-void/[0.82] to-transparent" />

      <div
        className="relative z-10 mx-auto flex w-full min-w-0 flex-col gap-10 lg:flex-row lg:items-center lg:justify-between"
        style={{ maxWidth: "min(80rem, calc(100vw - 2.5rem))" }}
      >
        <div className="w-full min-w-0 max-w-[22rem] sm:max-w-4xl">
          <a
            href="#booking"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-ion/25 bg-ion/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-ion shadow-glow backdrop-blur-md transition hover:border-ion/50 hover:bg-ion/10"
          >
            <Sparkles className="h-4 w-4" />
            Flagship $1000 AI Day
          </a>
          <h1 className="max-w-[13ch] text-balance font-display text-4xl font-semibold leading-[1.02] text-white sm:max-w-4xl sm:text-6xl lg:text-7xl xl:text-8xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-xl sm:leading-8">
            {hero.subheadline}
          </p>

          <HeroSignalStrip signals={hero.signals} />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#booking" variant="primary">
              <Play className="h-5 w-5" />
              Book the $1000 AI Day
            </Button>
            <Button href={crystalUrl} variant="secondary" external>
              Need websites or ads? Crystal Digital
              <ExternalLink className="h-5 w-5" />
            </Button>
          </div>
          <div className="mt-5 max-w-2xl rounded-2xl border border-white/10 bg-white/[0.055] p-4 text-sm leading-6 text-slate-300 backdrop-blur-xl">
            <span className="font-semibold text-white">
              One page. One offer.
            </span>{" "}
            Marketing service leads go to Crystal Digital. This page is only
            for packaging your project and building the AI content system.
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-300">
            {hero.trust}
          </p>
        </div>

        <div className="w-full min-w-0 max-w-[22rem] self-start sm:max-w-md sm:self-center lg:self-auto">
          <CommandPanel intro={hero.intro} />
        </div>
      </div>
    </section>
  );
}

function HeroSignalStrip({ signals }) {
  return (
    <div className="mt-6 grid max-w-2xl grid-cols-1 gap-2 sm:grid-cols-2">
      {signals.map((signal, index) => (
        <div
          key={signal}
          className="flex min-h-12 items-center gap-3 rounded-2xl border border-white/10 bg-void/[0.48] px-4 text-sm font-semibold text-slate-100 backdrop-blur-xl"
        >
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-ion/25 bg-ion/10 text-xs text-ion">
            0{index + 1}
          </span>
          {signal}
        </div>
      ))}
    </div>
  );
}

function CommandPanel({ intro }) {
  const buildMap = [
    ["01", "Diagnose", "Project, audience, offer, bottlenecks."],
    ["02", "Package", "Positioning, angles, online first impression."],
    ["03", "Generate", "Realistic AI video workflow and prompts."],
  ];

  return (
    <div className="relative w-full max-w-full animate-float overflow-hidden rounded-[28px] border border-white/[0.12] bg-white/[0.08] p-4 shadow-glow backdrop-blur-2xl">
      <div className="absolute -inset-1 -z-10 rounded-[30px] bg-gradient-to-br from-ion/[0.35] via-transparent to-ember/30 blur-xl" />
      <div className="rounded-3xl border border-white/10 bg-carbon/[0.86] p-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
              AI Day Command
            </p>
            <p className="mt-1 font-display text-xl font-semibold">
              Build Map
            </p>
          </div>
          <div className="grid h-12 w-12 place-items-center rounded-2xl border border-ion/30 bg-ion/10 text-ion">
            <BrainCircuit className="h-6 w-6" />
          </div>
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-300">{intro}</p>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            ["1 Day", "Sprint"],
            ["$1000", "Flagship"],
            ["AI Video", "Workflow"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-3"
            >
              <p className="font-display text-lg font-semibold text-white">
                {value}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-500">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-3">
          {buildMap.map(([number, title, copy]) => (
            <div
              key={title}
              className="grid grid-cols-[2.25rem_1fr] gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-3"
            >
              <span className="text-xs font-bold tracking-[0.18em] text-ion">
                {number}
              </span>
              <span>
                <span className="block text-sm font-semibold text-white">
                  {title}
                </span>
                <span className="mt-1 block text-xs leading-5 text-slate-400">
                  {copy}
                </span>
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-volt/20 bg-volt/[0.08] p-4 text-sm text-slate-200">
          <div className="mb-3 flex items-center gap-2 text-volt">
            <Radar className="h-4 w-4" />
            <span className="text-xs font-bold uppercase tracking-[0.22em]">
              Output
            </span>
          </div>
          A packaged project and a repeatable AI content engine built for speed,
          quality, and volume.
        </div>
      </div>
    </div>
  );
}

function OfferSection() {
  return (
    <Section id="offer" eyebrow="Flagship Offer">
      <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-ember/25 bg-ember/10 px-4 py-2 text-sm font-semibold text-ember">
            <Zap className="h-4 w-4" />
            $1000 / one focused build day
          </div>
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
            One day. One project. One content system.
          </h2>
        </div>
        <p className="text-lg leading-8 text-slate-300">
          The $1000 AI Day is a working session for people who know content
          matters, but need the machine behind it. We turn your project, niche,
          or offer into a practical AI video generation system with repeatable
          prompts, angles, and workflow steps.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {siteContent.offerCards.map((card, index) => (
          <FeatureCard
            key={card.title}
            icon={[Target, PackageCheck, Workflow][index]}
            title={card.title}
            copy={card.copy}
            accent={["ion", "ember", "volt"][index]}
          />
        ))}
      </div>
    </Section>
  );
}

function WhySection() {
  return (
    <Section id="why" eyebrow="Why It Matters" className="relative">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            The bottleneck is rarely ideas. It is the system that turns ideas
            into output.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Everyone wants more time, but most people do not know the workflows
            that create it. Social media growth feels intimidating because the
            content is random, the production path is unclear, and every post
            starts from zero.
          </p>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Attention spans are getting shorter, so volume and quality have to
            move together. The answer is systems. Content is king, but systems
            are the crown factory.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-ember/20 bg-ember/[0.07] p-4">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-ember">
                Without a system
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Random content, slow production, weak angles, and inconsistent
                output.
              </p>
            </div>
            <div className="rounded-2xl border border-ion/25 bg-ion/[0.07] p-4">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-ion">
                With a system
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Clear prompts, reusable formats, stronger packaging, and faster
                content volume.
              </p>
            </div>
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-[28px] border border-white/[0.12] bg-white/[0.08] p-6 shadow-ember backdrop-blur-xl">
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ion/[0.35]" />
          <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ember/[0.35]" />
          <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-volt/[0.35] bg-volt/10 blur-[1px]" />
          <Orbit className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow text-ion" />

          {[
            ["Time", "top-8 left-8"],
            ["Volume", "right-8 top-20"],
            ["Quality", "bottom-20 left-8"],
            ["Workflow", "bottom-8 right-8"],
          ].map(([label, position]) => (
            <div
              key={label}
              className={`absolute ${position} rounded-2xl border border-white/[0.12] bg-carbon/80 px-4 py-3 text-sm font-semibold text-slate-100 shadow-glow backdrop-blur-md`}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function WhatYouGetSection() {
  return (
    <Section id="deliverables" eyebrow="What You Get">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
            A working content engine, not another vague content plan.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            You leave with structure, prompts, angles, and a production rhythm
            that can keep making useful content after the day ends.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {siteContent.checklist.map((item) => (
            <div
              key={item}
              className="flex min-h-[92px] items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md transition hover:border-ion/30 hover:bg-ion/[0.08]"
            >
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ion/[0.15] text-ion">
                <Check className="h-4 w-4" />
              </span>
              <p className="text-base leading-6 text-slate-200">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ExperimentsSection() {
  return (
    <Section id="experiments" eyebrow="Proof / Latest Posts">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Latest experiments
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Built as intentional embed slots for real public tests, AI video
            experiments, and social proof as the content system evolves.
          </p>
        </div>
        <Button href="#booking" variant="ghost">
          Build yours next
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {siteContent.experiments.map((post) => (
          <article
            key={post.title}
            className="group rounded-[28px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-ion/30 hover:bg-white/[0.09]"
          >
            {/* Replace this placeholder block with Facebook, Instagram, TikTok, or X embed code when ready. */}
            <div className="mb-5 grid aspect-[4/3] place-items-center overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_50%_35%,rgba(96,244,255,0.25),rgba(255,255,255,0.05)_34%,rgba(5,6,12,0.74)_72%)]">
              <div className="text-center">
                <Layers3 className="mx-auto h-8 w-8 text-ion" />
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.28em] text-slate-400">
                  Embed Slot
                </p>
              </div>
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-ember">
              {post.platform}
            </p>
            <h3 className="mt-3 font-display text-xl font-semibold">
              {post.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {post.description}
            </p>
            <PostLink href={post.href} />
          </article>
        ))}
      </div>
    </Section>
  );
}

function VisibilitySection() {
  return (
    <Section id="visibility" eyebrow="Future Visibility">
      <div className="rounded-[30px] border border-white/10 bg-white/[0.055] p-5 shadow-glow backdrop-blur-xl sm:p-7 lg:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Visibility slots
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Reserved placements for sponsored brands, tools, affiliate
              products, and featured clients that fit this audience.
            </p>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-volt/25 bg-volt/10 px-4 py-2 text-sm font-semibold text-volt">
            <BadgeCheck className="h-4 w-4" />
            Curated only
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteContent.visibilitySlots.map((slot, index) => (
            <div
              key={slot.title}
              className="min-h-[210px] rounded-3xl border border-white/10 bg-carbon/70 p-5 transition hover:border-volt/30 hover:bg-volt/[0.06]"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-ion">
                {renderIcon([Zap, Sparkles, Target, Radar][index], "h-6 w-6")}
              </div>
              <h3 className="font-display text-xl font-semibold">
                {slot.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {slot.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function BookingSection() {
  return (
    <section
      id="booking"
      className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ion/[0.45] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(96,244,255,0.18),transparent_34%),radial-gradient(circle_at_85%_70%,rgba(255,111,97,0.14),transparent_28%)]" />
      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-ion">
          Book the build day
        </p>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-6xl">
          Ready to turn your idea into an AI content system?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          Send the project, niche, or offer you want to build around. I will
          reply with the next step for booking the $1000 AI Day.
        </p>
        <div className="mx-auto mt-7 grid max-w-3xl gap-3 sm:grid-cols-3">
          {["One day", "$1000", "AI video system"].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-semibold text-slate-100 backdrop-blur-xl"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={emailUrl} variant="primary">
            <Mail className="h-5 w-5" />
            Email Marlon
          </Button>
          <Button href={whatsappUrl} variant="secondary" external>
            <MessageCircle className="h-5 w-5" />
            WhatsApp Marlon
          </Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { brand } = siteContent;

  return (
    <footer className="border-t border-white/10 px-5 py-10 text-sm text-slate-400 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p>
            &copy; {brand.year} {brand.name}. AI content systems for people building
            online.
          </p>
          <p className="mt-2">
            Marketing services live at{" "}
            <a
              href={brand.crystalUrl}
              className="font-semibold text-ion hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              Crystal Digital / Crystal Branding Studio
            </a>
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {brand.socials.map((social) => (
            <SocialLink key={social.label} social={social} />
          ))}
        </div>
      </div>
    </footer>
  );
}

function PostLink({ href }) {
  if (href === "#") {
    return (
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-500">
        View post
        <span className="rounded-full border border-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em]">
          add link
        </span>
      </span>
    );
  }

  return (
    <a
      href={href}
      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ion transition hover:gap-3"
      target="_blank"
      rel="noreferrer"
    >
      View post
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function SocialLink({ social }) {
  if (social.href === "#") {
    return (
      <span
        className="text-slate-600"
        aria-label={`${social.label} link placeholder`}
      >
        {social.label}
      </span>
    );
  }

  return (
    <a
      href={social.href}
      className="hover:text-white"
      target="_blank"
      rel="noreferrer"
    >
      {social.label}
    </a>
  );
}

function FeatureCard({ icon: Icon, title, copy, accent }) {
  const accentClasses = {
    ion: "text-ion bg-ion/10 border-ion/25",
    ember: "text-ember bg-ember/10 border-ember/25",
    volt: "text-volt bg-volt/10 border-volt/25",
  };

  return (
    <article className="group min-h-[300px] rounded-[28px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.09]">
      <div
        className={`grid h-14 w-14 place-items-center rounded-2xl border ${
          accentClasses[accent] || accentClasses.ion
        }`}
      >
        {renderIcon(Icon, "h-7 w-7")}
      </div>
      <h3 className="mt-8 font-display text-2xl font-semibold text-white">
        {title}
      </h3>
      <p className="mt-4 text-base leading-7 text-slate-300">{copy}</p>
    </article>
  );
}

function Button({ href, children, variant = "primary", external = false }) {
  const base =
    "inline-flex min-h-14 w-full min-w-0 max-w-full flex-wrap items-center justify-center gap-2 break-words rounded-full px-5 py-3 text-center text-[13px] font-bold leading-5 transition [overflow-wrap:anywhere] focus:outline-none focus-visible:ring-2 focus-visible:ring-ion/70 sm:w-auto sm:px-6 sm:text-sm";
  const variants = {
    primary:
      "bg-ion text-void shadow-glow hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_0_48px_rgba(96,244,255,0.38)]",
    secondary:
      "border border-white/[0.16] bg-white/[0.08] text-white backdrop-blur-md hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.14]",
    ghost:
      "border border-white/[0.12] bg-transparent text-white hover:border-ion/[0.35] hover:bg-ion/10",
  };

  return (
    <a
      href={href}
      className={`${base} ${variants[variant]}`}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

function Section({ id, eyebrow, children, className = "" }) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28 lg:px-10 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.015),transparent_34%,rgba(96,244,255,0.025))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
      <div className="relative mx-auto max-w-7xl">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-ion">
          {eyebrow}
        </p>
        {children}
      </div>
    </section>
  );
}

function renderIcon(Icon, className) {
  return createElement(Icon, { className });
}

export default App;
