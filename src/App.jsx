import { createElement } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  Check,
  Download,
  ExternalLink,
  FileText,
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
import { structuredData } from "./content/seoContent";

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
      <SeoStructuredData />
      <SiteHeader />
      <Hero />
      <OfferSection />
      <LeadMagnetSection />
      <AboutSection />
      <ServicesSection />
      <CaseStudiesSection />
      <WhySection />
      <WhatYouGetSection />
      <ExperimentsSection />
      <MediaKitSection />
      <FaqSection />
      <ResourcesSection />
      <VisibilitySection />
      <BookingSection />
      <Footer />
      <MobileStickyCta />
    </main>
  );
}

function SeoStructuredData() {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteContent.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([...structuredData, faqStructuredData]),
      }}
    />
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
              Marlon Kuvawoga
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-4 text-xs font-semibold text-slate-300 lg:flex xl:gap-5 xl:text-sm">
          {siteContent.navigation.map((item) => (
            <a key={item.href} className="transition hover:text-white" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#booking"
          className="hidden min-h-10 shrink-0 items-center justify-center rounded-full bg-ion px-4 text-xs font-bold text-void shadow-glow transition hover:-translate-y-0.5 hover:bg-white sm:inline-flex sm:px-5 sm:text-sm"
        >
          Work With Me
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
          Work With Me
        </a>
        <a
          href="#prompt-pack"
          className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-white/[0.15] bg-white/[0.08] px-4 text-sm font-bold text-white"
        >
          Free Pack
        </a>
      </div>
    </div>
  );
}

function Hero() {
  const { brand, hero } = siteContent;

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-void px-5 pb-20 pt-28 sm:px-8 sm:pt-32 lg:px-10"
    >
      <img
        className="absolute inset-0 h-full w-full object-cover opacity-[0.34] saturate-150"
        src={hero.posterUrl}
        alt="Futuristic AI command center background for Mr Savannah"
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
            href="#about"
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-ion/25 bg-ion/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-ion shadow-glow backdrop-blur-md transition hover:border-ion/50 hover:bg-ion/10"
          >
            <Sparkles className="h-4 w-4" />
            {hero.eyebrow}
          </a>
          <h1 className="max-w-[12ch] text-balance font-display text-5xl font-semibold leading-[0.98] text-white sm:max-w-4xl sm:text-7xl lg:text-8xl xl:text-9xl">
            {hero.headline}
          </h1>
          <p className="mt-5 max-w-3xl font-display text-xl font-semibold leading-8 text-ion sm:text-3xl sm:leading-10">
            {hero.descriptor}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-xl sm:leading-8">
            {hero.subheadline}
          </p>
          <p className="mt-4 max-w-2xl rounded-2xl border border-white/10 bg-white/[0.055] p-4 text-sm font-semibold leading-6 text-white backdrop-blur-xl sm:text-base">
            {brand.tagline}
          </p>

          <HeroSignalStrip signals={hero.signals} />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="#booking" variant="primary">
              <Play className="h-5 w-5" />
              Work With Me
            </Button>
            <Button href="#prompt-pack" variant="secondary">
              <Download className="h-5 w-5" />
              Download Free AI Marketing Starter Kit
            </Button>
            <Button href="#case-studies" variant="ghost">
              View Case Studies
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          <div className="mt-5 max-w-2xl rounded-2xl border border-white/10 bg-void/[0.54] p-4 text-sm leading-6 text-slate-300 backdrop-blur-xl">
            <span className="font-semibold text-white">
              {brand.realName} = {brand.name}.
            </span>{" "}
            Marketing execution such as websites, ads, lead generation, and business support lives at{" "}
            <a href={crystalUrl} className="font-semibold text-ion hover:text-white" target="_blank" rel="noreferrer">
              Crystal Digital / Crystal Branding Studio
            </a>
            . This page is the official identity hub for AI marketing systems, storytelling strategy, and the $1000 AI Day.
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

function LeadMagnetSection() {
  const { leadMagnet } = siteContent;

  return (
    <Section id="prompt-pack" eyebrow={leadMagnet.badge}>
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.055] p-5 shadow-[0_0_70px_rgba(96,244,255,0.16)] backdrop-blur-2xl sm:p-7 lg:p-9">
        <div className="pointer-events-none absolute -left-24 top-12 h-64 w-64 rounded-full bg-ion/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-ember/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:54px_54px]" />

        <div className="relative grid gap-10 lg:grid-cols-[1fr_0.88fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-volt/25 bg-volt/10 px-4 py-2 text-sm font-semibold text-volt">
              <Sparkles className="h-4 w-4" />
              Free, direct download
            </div>
            <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
              {leadMagnet.title}
            </h2>
            <p className="mt-5 max-w-2xl text-xl leading-8 text-slate-100">
              {leadMagnet.hook}
            </p>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              {leadMagnet.body}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <DownloadButton href={leadMagnet.pdfUrl} icon={FileText} label="Download PDF" />
              <DownloadButton href={leadMagnet.wordUrl} icon={Download} label="Download Word Version" />
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              No gate. No form. The buttons above link straight to the files.
            </p>
          </div>

          <div className="relative rounded-[28px] border border-white/10 bg-carbon/[0.82] p-5 shadow-glow">
            <div className="absolute -inset-1 -z-10 rounded-[30px] bg-gradient-to-br from-ion/[0.22] via-transparent to-volt/[0.14] blur-xl" />
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-ion">
                  Prompt Pack
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                  What's inside
                </h3>
              </div>
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-ion/30 bg-ion/10 text-ion">
                <FileText className="h-7 w-7" />
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {leadMagnet.inside.map((item) => (
                <div
                  key={item}
                  className="flex min-h-14 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 text-sm font-semibold text-slate-100"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ion/[0.13] text-ion">
                    <Check className="h-4 w-4" />
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.045] p-4">
              <p className="text-sm font-semibold text-white">Two formats included</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Use the PDF for quick reading and the Word version when you want to edit, remix, or adapt the prompts.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-8 rounded-3xl border border-white/10 bg-void/[0.46] p-5 backdrop-blur-xl sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="font-display text-2xl font-semibold text-white">
                Want the next drop?
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                The prompt pack is free. No form needed. But if you want more AI prompts, content systems, growth breakdowns, and practical tools, join the Mr Savannah AI list.
              </p>
            </div>
            <a
              href={leadMagnet.newsletterUrl}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.07] px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-ion/35 hover:bg-ion/10 sm:w-auto"
              target="_blank"
              rel="noreferrer"
            >
              Join the AI List
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

function DownloadButton({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-ion px-6 py-3 text-sm font-bold text-void shadow-glow transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_0_48px_rgba(96,244,255,0.38)] sm:w-auto"
      target="_blank"
      rel="noreferrer"
      download
    >
      {renderIcon(Icon, "h-5 w-5")}
      {label}
    </a>
  );
}
function AboutSection() {
  const { about, brand } = siteContent;

  return (
    <Section id="about" eyebrow="Identity Hub">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div>
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
            {about.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            {about.intro}
          </p>
          <div className="mt-6 rounded-3xl border border-ion/20 bg-ion/[0.07] p-5 shadow-glow backdrop-blur-xl">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-ion">
              Core belief
            </p>
            <p className="mt-3 font-display text-2xl font-semibold leading-snug text-white">
              {about.belief}
            </p>
          </div>
          <p className="mt-5 text-base leading-7 text-slate-300">
            {about.why}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href="#services" variant="primary">
              Explore Services
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button href="#case-studies" variant="secondary">
              View Case Studies
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          {about.groups.map((group) => (
            <article
              key={group.title}
              className="rounded-[28px] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-ion/25 hover:bg-white/[0.08]"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="font-display text-2xl font-semibold text-white">
                  {group.title}
                </h3>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-ion/25 bg-ion/10 text-ion">
                  <Sparkles className="h-6 w-6" />
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="flex min-h-14 items-start gap-3 rounded-2xl border border-white/10 bg-carbon/70 p-4 text-sm leading-6 text-slate-200"
                  >
                    <Check className="mt-1 h-4 w-4 shrink-0 text-ion" />
                    {item}
                  </div>
                ))}
              </div>
            </article>
          ))}
          <div className="rounded-[28px] border border-ember/20 bg-ember/[0.07] p-6 text-base leading-7 text-slate-200 backdrop-blur-xl">
            <span className="font-semibold text-white">Search clarity:</span> Marlon Kuvawoga, Mr Savannah, and AI marketing systems in Zimbabwe all point to the same personal brand identity.
          </div>
        </div>
      </div>
      <p className="sr-only">
        {brand.realName}, also known as {brand.name}, is based in {brand.location}.
      </p>
    </Section>
  );
}

function ServicesSection() {
  const serviceIcons = [
    BrainCircuit,
    Target,
    Radar,
    MessageCircle,
    Sparkles,
    Workflow,
    PackageCheck,
  ];

  return (
    <Section id="services" eyebrow="Services / AI Marketing Systems">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
            AI marketing systems, brand strategy, and storytelling built for conversion.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            This is the strategic layer behind better content, stronger leads, clearer offers, and sales conversations that do not feel forced.
          </p>
        </div>
        <Button href="#booking" variant="ghost">
          Contact / Book
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {siteContent.services.map((service, index) => (
          <article
            key={service.title}
            className="group min-h-[250px] rounded-[28px] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-ion/30 hover:bg-ion/[0.07] hover:shadow-glow"
          >
            <div className="mb-7 grid h-14 w-14 place-items-center rounded-2xl border border-ion/25 bg-ion/10 text-ion transition group-hover:scale-105">
              {renderIcon(serviceIcons[index] || Sparkles, "h-7 w-7")}
            </div>
            <h3 className="font-display text-2xl font-semibold text-white">
              {service.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-300">
              {service.copy}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-void/[0.48] p-5 text-sm leading-6 text-slate-300 backdrop-blur-xl sm:p-6">
        Need full execution for websites, ads, or ongoing marketing delivery? That work belongs under{" "}
        <a href={crystalUrl} className="font-semibold text-ion hover:text-white" target="_blank" rel="noreferrer">
          Crystal Digital / Crystal Branding Studio
        </a>
        . Mr Savannah is the personal strategy and AI systems identity hub.
      </div>
    </Section>
  );
}

function CaseStudiesSection() {
  return (
    <Section id="case-studies" eyebrow="Case Studies / Work">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Work shaped around strategy, systems, and online packaging.
          </h2>
        </div>
        <p className="text-lg leading-8 text-slate-300">
          These project slots create a clean foundation for future case studies while helping search engines connect Mr Savannah with brand strategy, AI marketing systems, pharmacy tech, and digital growth projects in Zimbabwe.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {siteContent.caseStudies.map((project) => (
          <article
            key={project.name}
            className="group flex min-h-[430px] flex-col rounded-[28px] border border-white/10 bg-carbon/[0.72] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-plasma/35 hover:bg-white/[0.07] hover:shadow-[0_24px_80px_rgba(143,125,255,0.12)]"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <span className="rounded-full border border-plasma/25 bg-plasma/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-plasma">
                Project
              </span>
              <BadgeCheck className="h-5 w-5 text-ion" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-white">
              {project.name}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {project.description}
            </p>
            <div className="mt-5 space-y-4 text-sm leading-6">
              <CaseStudyPoint label="Problem" value={project.problem} />
              <CaseStudyPoint label="Solution" value={project.solution} />
              <CaseStudyPoint label="Proof / Impact" value={project.impact} />
            </div>
            <div className="mt-auto pt-6">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400">
                Coming soon
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function CaseStudyPoint({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ion">
        {label}
      </p>
      <p className="mt-2 text-slate-300">{value}</p>
    </div>
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
  const thumbnails = {
    reel: ReelExperimentThumbnail,
    sprint: SprintExperimentThumbnail,
    thread: ThreadExperimentThumbnail,
  };

  return (
    <Section id="experiments" eyebrow="AI Content Lab">
      <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.045] p-5 shadow-[0_0_80px_rgba(96,244,255,0.1)] backdrop-blur-2xl sm:p-7 lg:p-8">
        <div className="pointer-events-none absolute -left-28 top-10 h-72 w-72 rounded-full bg-ion/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-plasma/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:62px_62px]" />

        <div className="relative flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Latest Experiments
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              I test AI content systems in public, then turn what works into repeatable workflows.
            </p>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-ion/25 bg-ion/10 px-4 py-2 text-sm font-semibold text-ion">
            <Radar className="h-4 w-4" />
            Live lab slots
          </div>
        </div>

        <div className="relative mt-10 grid gap-5 md:grid-cols-3">
          {siteContent.experiments.map((post) => {
            const Thumbnail = thumbnails[post.variant] || ReelExperimentThumbnail;

            return (
              <article
                key={post.title}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-carbon/[0.72] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-ion/35 hover:bg-white/[0.08] hover:shadow-[0_24px_80px_rgba(96,244,255,0.15)]"
              >
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition group-hover:opacity-100" />
                {/* Replace this designed preview with Facebook, Instagram, TikTok, or X embed code when ready. */}
                <Thumbnail />
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-ember">
                  {post.platform}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-white">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {post.description}
                </p>
                <PostLink href={post.href} />
              </article>
            );
          })}
        </div>

        <div className="relative mt-10 flex flex-col items-start justify-between gap-4 rounded-3xl border border-white/10 bg-void/[0.48] p-5 backdrop-blur-xl sm:flex-row sm:items-center sm:p-6">
          <p className="font-display text-2xl font-semibold text-white">
            Want the system behind these experiments?
          </p>
          <Button href="#booking" variant="primary">
            Book the AI Day
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </Section>
  );
}

function ReelExperimentThumbnail() {
  return (
    <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_50%_32%,rgba(143,125,255,0.32),rgba(96,244,255,0.12)_38%,rgba(5,6,12,0.92)_78%)]">
      <ThumbnailShimmer />
      <div className="absolute left-4 top-4 z-10 rounded-full border border-ion/25 bg-ion/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-ion">
        REEL TEST
      </div>
      <div className="absolute right-4 top-4 z-10 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">
        <span className="h-2 w-2 rounded-full bg-ember shadow-[0_0_16px_rgba(255,111,97,0.8)]" />
        REC
      </div>
      <div className="absolute inset-4 rounded-xl border border-white/10" />
      <div className="absolute left-6 top-6 h-6 w-6 border-l border-t border-ion/50" />
      <div className="absolute right-6 top-6 h-6 w-6 border-r border-t border-ion/50" />
      <div className="absolute bottom-6 left-6 h-6 w-6 border-b border-l border-ion/50" />
      <div className="absolute bottom-6 right-6 h-6 w-6 border-b border-r border-ion/50" />

      <div className="absolute left-1/2 top-1/2 aspect-[9/16] h-[70%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[24px] border border-white/15 bg-void/70 shadow-[0_0_45px_rgba(96,244,255,0.2)]">
        <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(96,244,255,0.16),transparent_42%,rgba(143,125,255,0.18))]" />
        <div className="absolute left-1/2 top-[24%] h-12 w-12 -translate-x-1/2 rounded-full border border-ion/40 bg-ion/20 shadow-glow" />
        <div className="absolute left-1/2 top-[43%] h-24 w-24 -translate-x-1/2 rounded-t-[999px] border border-plasma/40 bg-plasma/15" />
        <div className="absolute inset-x-5 top-[61%] space-y-2">
          <span className="block h-1 rounded-full bg-ion/70" />
          <span className="block h-1 rounded-full bg-white/25" />
          <span className="block h-1 w-2/3 rounded-full bg-white/15" />
        </div>
      </div>

      <p className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white">
        Founder Story Clip
      </p>
    </div>
  );
}

function SprintExperimentThumbnail() {
  const chips = [
    ["Hook", "left-4 top-[30%]"],
    ["Scene", "right-4 top-[24%]"],
    ["Prompt", "left-5 bottom-[25%]"],
    ["Caption", "right-5 bottom-[21%]"],
  ];

  return (
    <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_50%_50%,rgba(96,244,255,0.24),rgba(255,111,97,0.1)_38%,rgba(5,6,12,0.92)_76%)]">
      <ThumbnailShimmer />
      <div className="absolute left-4 top-4 z-10 rounded-full border border-ember/25 bg-ember/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-ember">
        CONTENT SPRINT
      </div>
      <div className="absolute left-1/2 top-1/2 aspect-[9/16] h-[72%] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-white/20 bg-void p-2 shadow-[0_0_50px_rgba(96,244,255,0.24)]">
        <div className="relative h-full overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(96,244,255,0.18),rgba(143,125,255,0.1),rgba(255,111,97,0.14))]">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.22),transparent_44%)]" />
          <Play className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 text-white/85" />
          <div className="absolute inset-x-4 bottom-5 space-y-2">
            <span className="block h-1 rounded-full bg-white/50" />
            <span className="block h-1 w-3/4 rounded-full bg-ion/60" />
          </div>
        </div>
      </div>
      {chips.map(([label, position]) => (
        <span
          key={label}
          className={`absolute ${position} rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-[11px] font-bold text-white shadow-[0_0_22px_rgba(96,244,255,0.12)] backdrop-blur-xl transition group-hover:border-ion/30 group-hover:bg-ion/10`}
        >
          {label}
        </span>
      ))}
    </div>
  );
}

function ThreadExperimentThumbnail() {
  const steps = ["Prompt", "Visual", "Script", "Post"];

  return (
    <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_24%_25%,rgba(196,255,77,0.14),transparent_32%),radial-gradient(circle_at_78%_70%,rgba(96,244,255,0.18),transparent_34%),rgba(5,6,12,0.92)]">
      <ThumbnailShimmer />
      <div className="absolute left-4 top-4 z-10 rounded-full border border-volt/25 bg-volt/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-volt">
        THREAD MAP
      </div>
      <div className="absolute inset-x-5 bottom-5 top-14 rounded-xl border border-white/10 bg-white/[0.035] p-4">
        <div className="absolute left-1/2 top-1/2 h-px w-[70%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-ion/10 via-ion/70 to-ion/10" />
        <div className="absolute left-1/2 top-1/2 h-[58%] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-plasma/10 via-plasma/70 to-plasma/10" />
        <div className="relative grid h-full grid-cols-2 gap-4">
          {steps.map((step, index) => (
            <div
              key={step}
              className="relative grid place-items-center rounded-2xl border border-white/10 bg-carbon/80 px-3 text-center text-sm font-semibold text-white shadow-[0_0_24px_rgba(96,244,255,0.1)]"
            >
              <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border border-ion/40 bg-ion/20" />
              <span className="text-xs uppercase tracking-[0.16em] text-slate-100">
                {step}
              </span>
              {index < steps.length - 1 && (
                <ArrowRight className="absolute -right-4 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-ion/80 sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ThumbnailShimmer() {
  return (
    <div className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent opacity-0 transition duration-700 group-hover:left-full group-hover:opacity-100" />
  );
}

function MediaKitSection() {
  const { brand, mediaKit } = siteContent;

  return (
    <Section id="media" eyebrow="Media / Press Kit">
      <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.055] p-6 shadow-glow backdrop-blur-2xl sm:p-8">
          <div className="pointer-events-none absolute -right-20 top-0 h-56 w-56 rounded-full bg-ion/10 blur-3xl" />
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-ion">
            Official identity
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Media Kit for Marlon Kuvawoga / Mr Savannah
          </h2>
          <div className="mt-6 grid gap-3">
            {mediaKit.facts.map(([label, value]) => (
              <div
                key={label}
                className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-carbon/70 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  {label}
                </span>
                <span className="font-semibold text-white">{value}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 aspect-[4/3] overflow-hidden rounded-3xl border border-dashed border-white/15 bg-[radial-gradient(circle_at_50%_35%,rgba(96,244,255,0.22),rgba(255,255,255,0.04)_42%,rgba(5,6,12,0.86)_80%)] p-5">
            <div className="flex h-full flex-col items-center justify-center text-center">
              <Sparkles className="h-9 w-9 text-ion" />
              <p className="mt-4 font-display text-2xl font-semibold text-white">
                Headshot / brand asset slot
              </p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-slate-400">
                Add official media photos, logos, downloads, or speaking assets here when ready.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          <article className="rounded-[28px] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl">
            <h3 className="font-display text-2xl font-semibold text-white">
              Short bio
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-300">
              {mediaKit.shortBio}
            </p>
          </article>
          <article className="rounded-[28px] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl">
            <h3 className="font-display text-2xl font-semibold text-white">
              Long bio
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-300">
              {mediaKit.longBio}
            </p>
          </article>
          <article className="rounded-[28px] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl">
            <h3 className="font-display text-2xl font-semibold text-white">
              Topics I speak and write about
            </h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {mediaKit.topics.map((topic) => (
                <div
                  key={topic}
                  className="rounded-2xl border border-white/10 bg-carbon/70 p-4 text-sm leading-6 text-slate-200"
                >
                  {topic}
                </div>
              ))}
            </div>
          </article>
          <div className="flex flex-col gap-4 rounded-[28px] border border-ion/20 bg-ion/[0.06] p-6 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-2xl font-semibold text-white">
                Need a quote, interview, or collaboration?
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Contact {brand.realName} directly or use the social profile links once added.
              </p>
            </div>
            <Button href="#booking" variant="primary">
              Contact Marlon
            </Button>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <a href="#about" className="font-semibold text-ion hover:text-white">
              About
            </a>
            {brand.socials.map((social) => (
              <SocialLink key={social.label} social={social} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function FaqSection() {
  return (
    <Section id="faq" eyebrow="Search / GEO FAQ">
      <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <div>
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Quick Answers About Mr Savannah
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Clear answers for people, Google, and AI search engines trying to understand who Mr Savannah is, what Marlon Kuvawoga does, and how the brand connects to AI marketing systems in Zimbabwe.
          </p>
        </div>
        <div className="space-y-3">
          {siteContent.faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl transition hover:border-ion/25 hover:bg-white/[0.08]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-white">
                {item.question}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ion/20 bg-ion/10 text-ion transition group-open:rotate-45">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </summary>
              <p className="mt-4 text-base leading-7 text-slate-300">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ResourcesSection() {
  return (
    <Section id="resources" eyebrow="Resources Foundation">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Future articles for search, AI discovery, and practical growth.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            These resource slots create the foundation for SEO articles around Mr Savannah, Marlon Kuvawoga, AI marketing systems in Zimbabwe, storytelling strategy, and conversion systems.
          </p>
        </div>
        <Button href="#prompt-pack" variant="ghost">
          Download Starter Kit
          <Download className="h-5 w-5" />
        </Button>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {siteContent.resources.map((resource) => (
          <article
            key={resource.title}
            className="rounded-[26px] border border-white/10 bg-carbon/[0.7] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-volt/30 hover:bg-volt/[0.055]"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-volt">
              Article placeholder
            </p>
            <h3 className="mt-4 font-display text-2xl font-semibold text-white">
              {resource.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {resource.intro}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-500">
              Draft slot
              <ArrowRight className="h-4 w-4" />
            </span>
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
            &copy; {brand.year} {brand.name} / {brand.realName}. AI marketing systems and storytelling strategy for people building online.
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
        <div className="flex flex-col gap-4 md:items-end">
          <nav className="flex flex-wrap gap-4" aria-label="Footer navigation">
            {siteContent.navigation.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-wrap gap-4 md:justify-end">
            {brand.socials.map((social) => (
              <SocialLink key={social.label} social={social} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function PostLink({ href }) {
  if (href === "#") {
    return (
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-400">
        Experiment slot
        <span className="rounded-full border border-ion/15 bg-ion/[0.06] px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-ion">
          Post link soon
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












