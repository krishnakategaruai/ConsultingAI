import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import { youtubeVideos } from "@/content/youtubeVideos";
import { fetchRecentYouTubeVideos, getYouTubeRssUrl } from "@/lib/youtubeRss";

const CONTACT = {
  email: "krishnakategaruai@gmail.com",
  linkedin: "https://www.linkedin.com/in/krishna-kategaru-32463253",
  // WhatsApp uses E.164 format without '+' in the URL (this will be visible in the link target).
  whatsappE164NoPlus: "916305816104",
} as const;

function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CONTACT.whatsappE164NoPlus}?text=${encoded}`;
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 transition-colors"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      title={label}
    >
      {children}
    </a>
  );
}


function fallbackThumbnailUrl(id: string) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

export default async function Home() {
  const rssUrl = getYouTubeRssUrl();
  const recent = await fetchRecentYouTubeVideos(6);
  const hasRecent = recent.length > 0;
  const hasManual = youtubeVideos.length > 0;
  const showManual = !hasRecent && hasManual;

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-200">
      <main className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
        {/* HERO */}
        <section className="mb-16 sm:mb-20">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex items-center space-x-6">
              <Image
                src="/profilepic.jpeg"
                alt="Krishna Kategaru"
                width={128}
                height={128}
                priority
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover object-top border-2 border-gray-200"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Krishna Kategaru
                </h1>
                <p className="text-lg text-gray-600">
                  AI Consultant • Data Scientist • Systems Thinker
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <IconLink
                href={`mailto:${CONTACT.email}`}
                label="Email (Gmail)"
              >
                <MdEmail size={22} className="text-gray-700" />
              </IconLink>
              <IconLink href={CONTACT.linkedin} label="LinkedIn">
                <FaLinkedin size={22} className="text-gray-700" />
              </IconLink>
              <IconLink
                href={buildWhatsAppLink(
                  "Hi Krishna, I’m reaching out from kkai.in. I’d like to discuss AI architecture/system design."
                )}
                label="WhatsApp"
              >
                <FaWhatsapp size={22} className="text-gray-700" />
              </IconLink>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5 text-black">
            AI Architecture & System Design for Production
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 mb-6 max-w-3xl leading-relaxed">
            I help teams design, review, and de-risk AI systems—from GenAI and RAG to multi-agent workflows and data platforms—with
            a focus on production readiness, cost efficiency, and measurable outcomes.
          </p>
          <div className="flex flex-wrap gap-2 mb-8 max-w-3xl">
            {[
              "Multi-Agent Systems",
              "RAG & Knowledge",
              "LLMOps",
              "Model Context Protocol",
              "Data Science",
              "Workflow Automation",
            ].map((tag) => (
              <span
                key={tag}
                className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full border border-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="mailto:krishnakategaruai@gmail.com?subject=Consulting Inquiry"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors"
            >
              Book a Consultation
            </Link>
            <Link
              href="#architectures"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              See Architecture Work
            </Link>
            <Link
              href="#deliverables"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              What You’ll Receive
            </Link>
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {[
              {
                title: "Architecture Reviews",
                desc: "RAG/agent designs, data flows, security, and scaling — with clear recommendations.",
              },
              {
                title: "System Design",
                desc: "Reference architecture, tradeoffs, APIs, and operational plan for production rollout.",
              },
              {
                title: "PoC → Production",
                desc: "Turn prototypes into reliable systems with evaluation, observability, and guardrails.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-gray-200 p-5 bg-white hover:border-gray-300 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="mb-16 sm:mb-20 max-w-3xl">
          <h2 className="text-2xl font-semibold mb-6">Who this is for</h2>
          <p className="text-lg text-gray-700 mb-6">
            Teams building AI features that must work in the real world: with messy data, real users,
            compliance, budgets, and uptime requirements.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Engineering teams shipping GenAI, RAG, Multi-Agent, or MCP-powered workflows",
              "Founders validating whether AI or Data Science is worth building",
              "Leads who want an architecture or data science second opinion before committing",
              "Managers asked to “add AI, Multi-Agent, or Data Science” without a system design plan",
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-gray-200 p-5 bg-white hover:border-gray-300 transition-colors"
              >
                <p className="text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT I HELP WITH */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-2xl font-semibold mb-6">What I help with</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Practical guidance across AI product, architecture, and delivery — from first feasibility checks
            to production hardening.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Feasibility & ROI",
                points: [
                  "Use-case clarity and success metrics",
                  "Model vs rules vs search tradeoffs",
                  "Cost, latency, and risk estimation",
                  "Data readiness and data science opportunity analysis",
                ],
              },
              {
                title: "RAG & Knowledge Systems",
                points: [
                  "Indexing strategy, chunking, retrieval, reranking",
                  "Grounding, citations, and hallucination controls",
                  "Evaluation: relevance, faithfulness, and drift",
                  "Data pipelines, feature engineering, and data quality",
                ],
              },
              {
                title: "Multi-Agent & Agentic Workflows",
                points: [
                  "Tooling boundaries and failure modes",
                  "Human-in-the-loop checkpoints",
                  "State, retries, and idempotency",
                  "Multi-agent orchestration, communication, and collaboration",
                  "MCP (Model Context Protocol) integration",
                ],
              },
              {
                title: "Production Readiness",
                points: [
                  "Observability: traces, prompts, cost dashboards",
                  "Security & privacy: PII, secrets, access controls",
                  "Reliability: SLAs, fallbacks, and safe degradation",
                  "LLMOps, Responsible AI, and continuous evaluation",
                ],
              },
            ].map((block) => (
              <div
                key={block.title}
                className="rounded-lg border border-gray-200 p-6 bg-white hover:border-gray-300 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-3">{block.title}</h3>
                <ul className="space-y-2">
                  {block.points.map((p) => (
                    <li key={p} className="flex items-start">
                      <span className="mr-3 text-gray-900 font-medium">→</span>
                      <span className="text-gray-800">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ARCHITECTURES */}
        <section id="architectures" className="mb-16 sm:mb-20">
          <h2 className="text-2xl font-semibold mb-6">Architectures & system design</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            I design systems end-to-end: user workflow → APIs → data → compute → evaluation → monitoring.
            Below are common reference architectures I help teams implement.
          </p>

          <div className="grid lg:grid-cols-2 gap-6">
            {[
              {
                title: "RAG for enterprise knowledge",
                when: "When answers must be grounded in internal documents/data.",
                includes: "Ingestion, chunking, embeddings, vector store, reranking, citations, eval.",
              },
              {
                title: "Agent + tools (workflow automation)",
                when: "When tasks require calling APIs, updating systems, and multi-step reasoning.",
                includes: "Tool design, permissions, state, retries, human approvals, audit logs.",
              },
              {
                title: "AI copilots inside products",
                when: "When users need guided actions: search, summarize, draft, and decision support.",
                includes: "UX patterns, guardrails, prompt contracts, telemetry, A/B + evaluation.",
              },
              {
                title: "Data platform for ML/AI & Data Science",
                when: "When data reliability or advanced analytics is the bottleneck for any model, GenAI, or business system.",
                includes: "Pipelines, data contracts, feature/data stores, quality checks, lineage, analytics, and data science workflows.",
              },
            ].map((a) => (
              <div
                key={a.title}
                className="rounded-lg border border-gray-200 p-6 bg-white hover:border-gray-300 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-3">{a.title}</h3>
                <p className="text-gray-700 mb-2">
                  <span className="font-medium text-gray-900">When to use:</span> {a.when}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium text-gray-900">What’s inside:</span> {a.includes}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW I WORK */}
        <section id="how-i-work" className="mb-16 sm:mb-20">
          <h2 className="text-2xl font-semibold mb-6">How I work</h2>
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <p className="text-lg text-gray-700 mb-6 max-w-3xl">
              Clear, system-first thinking. I aim to reduce ambiguity, make tradeoffs explicit,
              and produce artifacts your team can execute.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "1) Discovery",
                  text: "Understand goals, constraints, current stack, data, and users.",
                },
                {
                  title: "2) System design",
                  text: "Define architecture, interfaces, components, and failure modes.",
                },
                {
                  title: "3) Evaluation plan",
                  text: "Define test sets, metrics, review loops, and launch criteria.",
                },
                {
                  title: "4) Delivery support",
                  text: "Help your team implement, iterate, and harden for production.",
                },
              ].map((step) => (
                <div key={step.title} className="rounded-lg bg-white border border-gray-200 p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DELIVERABLES */}
        <section id="deliverables" className="mb-16 sm:mb-20">
          <h2 className="text-2xl font-semibold mb-6">Deliverables you’ll receive</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            You’ll leave with concrete outputs your team can implement — not just a call recording.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Architecture pack",
                items: [
                  "High-level diagram + component responsibilities",
                  "Key tradeoffs and recommended decisions (ADRs)",
                  "Failure modes and mitigations",
                ],
              },
              {
                title: "System design details",
                items: [
                  "Data flows, APIs, and sequence of operations",
                  "Security & privacy considerations",
                  "Cost/performance notes and scaling plan",
                ],
              },
              {
                title: "Evaluation plan",
                items: [
                  "Metrics and acceptance criteria",
                  "Golden set / test set strategy",
                  "Monitoring + feedback loop recommendations",
                ],
              },
              {
                title: "Execution roadmap",
                items: [
                  "Prioritized backlog for MVP/PoC",
                  "Risks, unknowns, and validation steps",
                  "Phased rollout strategy",
                ],
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-lg border border-gray-200 p-6 bg-white hover:border-gray-300 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-3">{card.title}</h3>
                <ul className="space-y-2">
                  {card.items.map((it) => (
                    <li key={it} className="flex items-start">
                      <span className="mr-3 text-gray-900 font-medium">→</span>
                      <span className="text-gray-800">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ENGAGEMENTS */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-2xl font-semibold mb-8">Engagement options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-7 hover:border-gray-300 transition-colors bg-white">
              <h3 className="text-lg font-semibold mb-3">1:1 architecture review</h3>
              <p className="text-gray-600 mb-5">
                A focused session to review your AI system design and identify risks, tradeoffs, and next steps.
              </p>
              <ul className="text-sm text-gray-500 mb-6 space-y-2">
                <li>• 60 minutes • video call</li>
                <li>• You share context + diagrams (if available)</li>
                <li>• You receive written recommendations</li>
              </ul>
              <Link
                href="mailto:krishnakategaruai@gmail.com?subject=1:1 Architecture Review"
                className="block w-full text-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                Book a session
              </Link>
            </div>

            <div className="border border-gray-200 rounded-lg p-7 hover:border-gray-300 transition-colors bg-white">
              <h3 className="text-lg font-semibold mb-3">System design sprint</h3>
              <p className="text-gray-600 mb-5">
                Short engagement to produce a production-ready architecture, evaluation plan, and rollout approach.
              </p>
              <ul className="text-sm text-gray-500 mb-6 space-y-2">
                <li>• 1–2 weeks</li>
                <li>• Architecture pack + roadmap</li>
                <li>• Stakeholder-friendly docs</li>
              </ul>
              <Link
                href="mailto:krishnakategaruai@gmail.com?subject=System Design Sprint"
                className="block w-full text-center px-4 py-2 border border-black text-black rounded-md hover:bg-gray-50 transition-colors"
              >
                Discuss scope
              </Link>
            </div>

            <div className="border border-gray-200 rounded-lg p-7 hover:border-gray-300 transition-colors bg-white">
              <h3 className="text-lg font-semibold mb-3">Build with your team</h3>
              <p className="text-gray-600 mb-5">
                Hands-on support to implement, evaluate, and ship — with guardrails, monitoring, and reliability.
              </p>
              <ul className="text-sm text-gray-500 mb-6 space-y-2">
                <li>• Part-time / project-based</li>
                <li>• Pairing + reviews + PR guidance</li>
                <li>• Confidential, practical, fast</li>
              </ul>
              <Link
                href="mailto:krishnakategaruai@gmail.com?subject=Build Support Inquiry"
                className="block w-full text-center px-4 py-2 border border-black text-black rounded-md hover:bg-gray-50 transition-colors"
              >
                Start a project
              </Link>
            </div>
          </div>
        </section>

        {/* BACKGROUND */}
        <section className="mb-16 sm:mb-20 max-w-3xl">
          <h2 className="text-2xl font-semibold mb-6">Background</h2>
          <div className="text-gray-700 space-y-4">
            <p>
              I’ve worked on data science and AI systems across domains including supply chain, healthcare,
              and enterprise analytics. I’ve built and reviewed large-scale pipelines, GenAI applications,
              agent workflows, and optimization models (including MILP) on cloud platforms.
            </p>
            <p>
              I contribute as both an individual contributor and a technical lead. Client and employer details
              are anonymized due to confidentiality.
            </p>
          </div>
        </section>

        {/* THINKING */}
        <section className="mb-16 sm:mb-20 max-w-3xl">
          <h2 className="text-2xl font-semibold mb-6">Architectures, notes, and breakdowns</h2>
          <p className="text-lg text-gray-700 mb-6">
            I publish system-thinking content and practical AI engineering notes. More written breakdowns
            will be added here over time.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "YouTube: architecture + AI engineering",
                desc: "Deep dives, design tradeoffs, and practical build guidance.",
                href: "https://www.youtube.com/@krishnakategaruai",
              },
              {
                title: "Request a topic",
                desc: "Tell me what architecture/system design you want covered.",
                href: "mailto:krishnakategaruai@gmail.com?subject=Content Request (Architecture Topic)",
              },
            ].map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="rounded-lg border border-gray-200 p-5 bg-white hover:border-gray-300 transition-colors"
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-700">{card.desc}</p>
              </a>
            ))}
          </div>

          <div className="mt-10">
            <div className="flex items-end justify-between gap-4 mb-5">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Recent videos</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Click any card to open on YouTube.
                </p>
              </div>
              <a
                href="https://www.youtube.com/@krishnakategaruai"
                className="text-sm text-gray-700 underline underline-offset-4 hover:text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                View all on YouTube
              </a>
            </div>

            {!hasRecent && !hasManual ? (
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <p className="text-gray-700">
                  Videos will appear here automatically once the YouTube feed is configured
                  (set <span className="font-medium">YOUTUBE_CHANNEL_ID</span> or <span className="font-medium">YOUTUBE_RSS_URL</span>).
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Current feed: {rssUrl ? "Configured" : "Not configured"}
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4">
                {(hasRecent ? recent : youtubeVideos).slice(0, 6).map((v: any) => {
                  const url = hasRecent ? v.url : `https://www.youtube.com/watch?v=${v.id}`;
                  const title = v.title;
                  const thumb = hasRecent
                    ? v.thumbnailUrl || (v.id ? fallbackThumbnailUrl(v.id) : undefined)
                    : fallbackThumbnailUrl(v.id);

                  return (
                    <a
                      key={url}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-lg border border-gray-200 bg-white overflow-hidden hover:border-gray-300 transition-colors"
                    >
                      <div className="aspect-video bg-gray-50 overflow-hidden">
                        <img
                          src={thumb}
                          alt={title}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4">
                        <p className="font-semibold text-gray-900 leading-snug line-clamp-2">
                          {title}
                        </p>
                        <p className="mt-2 text-sm text-gray-700">Open on YouTube →</p>
                      </div>
                    </a>
                  );
                })}

                {showManual ? (
                  <div className="sm:col-span-2 rounded-lg border border-gray-200 bg-gray-50 p-5">
                    <p className="text-sm text-gray-700">
                      Auto-feed isn’t configured yet, so this is a curated list. Set
                      <span className="font-medium"> YOUTUBE_CHANNEL_ID</span> (preferred) or
                      <span className="font-medium"> YOUTUBE_RSS_URL</span> for automatic “latest uploads”.
                    </p>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="mb-16 sm:mb-20 max-w-3xl">
          <h2 className="text-2xl font-semibold mb-6">Client testimonial</h2>
          <div className="bg-gray-50 border-l-4 border-gray-900 p-8 rounded-r-lg">
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              "Krishna''s guidance helped us save 30% on infrastructure costs while scaling our AI system reliably. His cost-effective approach and practical architecture recommendations were exactly what we needed."
            </p>
            <div className="flex items-center gap-3">
              <span className="block w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-semibold text-gray-700 text-sm">C</span>
              <div>
                <div className="font-semibold text-gray-900">Confidential Client</div>
                <div className="text-sm text-gray-600">AI Platform Lead</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16 sm:mb-20 max-w-3xl">
          <h2 className="text-2xl font-semibold mb-6">FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: "Do you work with startups and enterprises?",
                a: "Yes. The approach is the same: clarify outcomes, design the system, and ensure it’s shippable and measurable.",
              },
              {
                q: "Can you review an existing architecture?",
                a: "Yes. I’ll review your diagrams/code notes, identify risks, and propose concrete fixes and tradeoffs.",
              },
              {
                q: "Do you build end-to-end?",
                a: "I can support implementation with your team (pairing, reviews, guidance). Full delivery depends on scope and timelines.",
              },
              {
                q: "What do you need from us to start?",
                a: "A short problem statement, current stack, sample data/doc sources (if RAG), and any constraints (security, latency, budget).",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-lg border border-gray-200 p-6 bg-white">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="max-w-3xl">
          <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
          <p className="text-lg text-gray-700 mb-6">
            If you’re unsure whether something makes sense, start with a conversation.
            Share your context and I’ll reply with a suggested next step.
          </p>
          <div className="space-y-4">
            <a
              href={`mailto:${CONTACT.email}`}
              className="block text-xl font-medium border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors"
            >
              {CONTACT.email}
            </a>
            <div className="flex items-center gap-3">
              <IconLink href={`mailto:${CONTACT.email}`} label="Email (Gmail)">
                <MdEmail size={22} className="text-gray-700" />
              </IconLink>
              <IconLink href={CONTACT.linkedin} label="LinkedIn">
                <FaLinkedin size={22} className="text-gray-700" />
              </IconLink>
              <IconLink
                href={buildWhatsAppLink(
                  "Hi Krishna, I’m reaching out from kkai.in. Can we connect?"
                )}
                label="WhatsApp"
              >
                <FaWhatsapp size={22} className="text-gray-700" />
              </IconLink>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

