import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-200">
      <main className="max-w-4xl mx-auto px-6 py-20 lg:py-32">
        {/* HERO SECTION */}
        <section className="mb-24 sm:mb-32">
          <div className="mb-8 flex items-center space-x-6">
            <img
              src="/profilepic.jpeg"
              alt="Krishna Kategaru"
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover object-top border-2 border-gray-200"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Krishna Kategaru
              </h1>
              <p className="text-lg text-gray-600">
                AI Consultant & Data Scientist
              </p>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-black">
            Practical AI Consulting for Real-World Systems
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
            I work with teams to evaluate, design, and review AI architectures —
            with a focus on feasibility, cost, and production readiness. No
            hype. No overengineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="mailto:krishnakategaruai@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors"
            >
              Book a 1:1 Consultation
            </Link>
            <Link
              href="#how-i-work"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              View How I Work
            </Link>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="mb-24 max-w-2xl">
          <h2 className="text-2xl font-semibold mb-6">Who this is for</h2>
          <p className="text-lg text-gray-700 mb-6">
            This work is for teams and individuals who are exploring AI
            seriously — but want to avoid costly mistakes, overengineered
            solutions, or unclear direction.
          </p>
          <ul className="space-y-3">
            {[
              "Teams experimenting with GenAI, RAG, or agents",
              "Founders unsure what AI is actually worth building",
              "Engineers needing a second opinion on architecture",
              "Managers asked to “add AI” without clarity",
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-3 text-gray-400">•</span>
                <span className="text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* WHAT I HELP WITH */}
        <section className="mb-24 max-w-2xl">
          <h2 className="text-2xl font-semibold mb-6">What I Help With</h2>
          <p className="text-lg text-gray-700 mb-6">
            I provide practical guidance on AI implementation, focusing on
            real-world constraints and business value.
          </p>
          <ul className="space-y-4">
            {[
              "Assessing if AI or agent-based systems are the right fit for your specific use case, considering technical and business factors",
              "Conducting thorough reviews of RAG and GenAI architectures to ensure they're production-ready and scalable",
              "Designing efficient AI workflows that integrate seamlessly with your existing enterprise data infrastructure",
              "Proactively identifying potential risks, hidden costs, and scaling challenges before they become problems",
              "Developing focused proof-of-concepts that demonstrate real value and can evolve into production systems",
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-3 text-gray-900 font-medium">→</span>
                <span className="text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* HOW I WORK */}
        <section id="how-i-work" className="mb-24 max-w-2xl">
          <h2 className="text-2xl font-semibold mb-6">How I Work</h2>
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <p className="text-lg text-gray-700 mb-6">
              I prioritize clarity over complexity. My methodical approach
              ensures we understand the full context before diving into
              technical solutions, helping you make informed decisions that
              align with your goals and constraints.
            </p>
            <ol className="list-decimal list-inside space-y-3 text-gray-800">
              <li>
                <strong>Deep Dive Analysis:</strong> We start by thoroughly
                understanding your problem, current systems, data landscape, and
                business objectives
              </li>
              <li>
                <strong>Feasibility Assessment:</strong> Evaluate technical
                viability, cost implications, timeline requirements, and
                potential risks
              </li>
              <li>
                <strong>Strategic Recommendations:</strong> Provide clear,
                actionable technical direction with specific tool and
                architecture choices
              </li>
              <li>
                <strong>Hands-On Support:</strong> Guide implementation of
                proof-of-concepts or help refine architectural decisions as you
                move forward
              </li>
            </ol>
          </div>
        </section>

        {/* CONSULTING OFFERINGS */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-8">Consulting Options</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Option 1 */}
            <div className="border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors">
              <h3 className="text-xl font-bold mb-4">1:1 AI Consultation</h3>
              <p className="text-gray-600 mb-6">
                A focused one-on-one session to discuss your AI idea,
                architecture, or challenges. Ideal for early evaluation, second
                opinions, or direction-setting.
              </p>
              <ul className="text-sm text-gray-500 mb-8 space-y-2">
                <li>• Duration: 60 minutes</li>
                <li>• Format: Video call</li>
                <li>• Outcome: Clear next steps, risks, and recommendations</li>
              </ul>
              <Link
                href="mailto:krishnakategaruai@gmail.com?subject=Book 1:1 Session"
                className="block w-full text-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                Book a 1:1 Session
              </Link>
            </div>

            {/* Option 2 */}
            <div className="border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors">
              <h3 className="text-xl font-bold mb-4">Project / Architecture</h3>
              <p className="text-gray-600 mb-6">
                Short-term consulting support for teams working on AI systems,
                PoCs, or production designs. Range from architecture review to
                PoC guidance.
              </p>
              <div className="text-sm text-gray-500 mb-8">
                <p className="italic">
                  Scope and pricing are discussed based on requirements.
                </p>
              </div>
              <Link
                href="mailto:krishnakategaruai@gmail.com?subject=Project Inquiry"
                className="block w-full text-center px-4 py-2 border border-black text-black rounded-md hover:bg-gray-50 transition-colors"
              >
                Discuss a Project
              </Link>
            </div>
          </div>
        </section>

        {/* BACKGROUND */}
        <section className="mb-24 max-w-2xl">
          <h2 className="text-2xl font-semibold mb-6">Background</h2>
          <div className="prose prose-gray text-gray-700">
            <p className="mb-4">
              I have worked on data science and AI systems across domains such
              as supply chain, healthcare, and enterprise analytics. My
              experience includes building and reviewing large-scale data
              pipelines, GenAI applications, agent-based workflows, and
              optimization models (including MILP) on cloud platforms.
            </p>
            <p>
              I’ve contributed both as an individual contributor and as a
              technical lead on PoCs and internal systems. Client and employer
              details are anonymized due to confidentiality.
            </p>
          </div>
        </section>

        {/* PROOF OF THINKING */}
        <section className="mb-24 max-w-2xl">
          <h2 className="text-2xl font-semibold mb-6">Thinking & Work</h2>
          <ul className="space-y-3">
            {[
              { label: "Architecture breakdowns (Coming Soon)", href: "#" },
              {
                label: "My YouTube Channel",
                href: "https://www.youtube.com/@krishnakategaruai",
              },
            ].map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="text-black underline underline-offset-4 hover:text-gray-600"
                  target={link.href !== "#" ? "_blank" : undefined}
                  rel={link.href !== "#" ? "noopener noreferrer" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* CONTACT */}
        <section className="max-w-2xl">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-6">
            If you’re unsure whether something makes sense, we can start with a
            conversation.
          </p>
          <div className="space-y-4">
            <a
              href="mailto:krishnakategaruai@gmail.com"
              className="block text-xl font-medium border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors"
            >
              krishnakategaruai@gmail.com
            </a>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/krishna-kategaru-32463253"
                className="text-gray-600 hover:text-black transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://www.youtube.com/@krishnakategaruai"
                className="text-gray-600 hover:text-black transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
