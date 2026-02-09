'use client'

import React, { useState, useEffect, useRef } from 'react'

const page = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')
    const [visibleElements, setVisibleElements] = useState<{ [key: string]: boolean }>({})
    const elementsRef = useRef<{ [key: string]: IntersectionObserver | null }>({})

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('data-animate-id')
                    if (id) {
                        setVisibleElements((prev) => ({ ...prev, [id]: true }))
                    }
                }
            })
        }, observerOptions)

        const elements = document.querySelectorAll('[data-animate-id]')
        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsSubmitting(true)
        setStatus('idle')
        setErrorMessage('')

        const form = event.currentTarget
        const formData = new FormData(form)

        try {
            const response = await fetch('/api/career', {
                method: 'POST',
                body: formData,
            })

            if (!response.ok) {
                const data = await response.json().catch(() => ({}))
                setErrorMessage(data?.error || 'Something went wrong. Please try again.')
                setStatus('error')
            } else {
                setStatus('success')
                form.reset()
            }
        } catch {
            setErrorMessage('Network error. Please try again.')
            setStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="bg-white text-slate-900">
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 -z-10 career-shimmer bg-[radial-gradient(60%_60%_at_20%_10%,rgba(14,165,233,0.18),transparent_60%),radial-gradient(40%_40%_at_80%_20%,rgba(34,197,94,0.18),transparent_60%),linear-gradient(180deg,rgba(15,23,42,0.04),rgba(15,23,42,0))]" />
                <div className="pointer-events-none absolute -right-24 top-10 h-56 w-56 rounded-full bg-sky-200/40 blur-3xl career-float" />
                <div className="pointer-events-none absolute -left-24 bottom-10 h-56 w-56 rounded-full bg-emerald-200/40 blur-3xl career-float" style={{ animationDelay: '1s' }} />
                <div className="mx-auto max-w-6xl px-6 pb-16 pt-24">
                    <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                        <div className="slide-up">
                            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 backdrop-blur animate-in fade-in slide-in-from-bottom-6 duration-700">
                                Careers at MVAntix
                            </p>
                            <h1 className="text-glow text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
                                Build AI products that move real businesses
                            </h1>
                            <p className="mt-4 max-w-xl text-lg text-slate-600 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                                We are a product-minded team designing practical AI systems for growth, automation, and insight. Join us
                                to ship meaningful work with high standards and real impact.
                            </p>
                            <div className="mt-8 flex flex-wrap items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                                <a
                                    href="#open-roles"
                                    className="group relative rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-0.5 hover:bg-slate-800 hover:shadow-lg overflow-hidden"
                                >
                                    <span className="relative z-10">View open roles</span>
                                    <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity" />
                                </a>
                                <a
                                    href="#apply"
                                    className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:translate-y-0.5 hover:border-slate-400 hover:shadow-lg hover:bg-slate-50"
                                >
                                    Apply now
                                </a>
                            </div>
                            <div className="mt-10 grid gap-6 sm:grid-cols-3">
                                {[
                                    { label: 'Distributed team', value: 'Remote-first' },
                                    { label: 'Work style', value: 'Deep focus' },
                                    { label: 'Growth', value: 'Learning budget' },
                                ].map((item, idx) => (
                                    <div
                                        key={item.label}
                                        data-animate-id={`hero-card-${idx}`}
                                        className={`rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur transition hover:-translate-y-2 hover:shadow-md hover-lift ${visibleElements[`hero-card-${idx}`] ? 'slide-up' : 'opacity-0'
                                            }`}
                                        style={{
                                            animationDelay: `${idx * 100}ms`,
                                        }}
                                    >
                                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                                        <p className="mt-2 text-lg font-semibold text-slate-900">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="scale-in">
                            <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-lg career-float hover-lift glow-card">
                                <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-sky-100 blur-2xl" />
                                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Team snapshot</p>
                                <h3 className="mt-3 text-2xl font-semibold text-slate-900">Small, senior, high-trust</h3>
                                <p className="mt-3 text-slate-600">
                                    We keep teams lean and highly collaborative. You will own problems end-to-end and work closely with
                                    founders, designers, and clients.
                                </p>
                                <div className="mt-6 grid gap-4">
                                    {[
                                        'Ship weekly with measurable outcomes',
                                        'Design systems that scale',
                                        'Work with modern stacks and real data',
                                    ].map((line) => (
                                        <div key={line} className="flex items-start gap-3">
                                            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                                            <p className="text-sm text-slate-600">{line}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="border-t border-slate-200 bg-slate-50/60">
                <div className="mx-auto max-w-6xl px-6 py-16">
                    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between slide-up">
                        <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Our values</p>
                            <h2 className="mt-3 text-3xl font-semibold text-slate-900">The way we build, together</h2>
                        </div>
                        <p className="max-w-xl text-slate-600">
                            We are a systems-driven team: we value clear thinking, honest feedback, and craft that earns trust.
                        </p>
                    </div>
                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {[
                            {
                                title: 'Customer obsession',
                                desc: 'We listen deeply and build for outcomes, not vanity metrics.',
                            },
                            {
                                title: 'Elegant execution',
                                desc: 'We favor simple, durable solutions and rigorous engineering.',
                            },
                            {
                                title: 'Growth mindset',
                                desc: 'We teach, learn, and iterate fast without cutting corners.',
                            },
                        ].map((item, idx) => (
                            <div
                                key={item.title}
                                data-animate-id={`value-card-${idx}`}
                                className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-lg hover-lift glow-card ${visibleElements[`value-card-${idx}`] ? 'slide-up' : 'opacity-0'
                                    }`}
                                style={{
                                    animationDelay: `${idx * 150}ms`,
                                }}
                            >
                                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                                <p className="mt-3 text-sm text-slate-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="border-t border-slate-200">
                <div className="mx-auto max-w-6xl px-6 py-16">
                    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                        <div className="slide-up">
                            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Benefits</p>
                            <h2 className="mt-3 text-3xl font-semibold text-slate-900">A place built for deep work</h2>
                            <p className="mt-4 text-slate-600">
                                We invest in the conditions that let great people do great work: focus time, autonomy, and supportive
                                systems.
                            </p>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {[
                                'Competitive compensation',
                                'Flexible remote policy',
                                'Annual learning stipend',
                                'Premium health coverage',
                                'Dedicated focus blocks',
                                'Career growth coaching',
                            ].map((benefit, idx) => (
                                <div
                                    key={benefit}
                                    data-animate-id={`benefit-card-${idx}`}
                                    className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-2 hover:shadow-md hover-lift glow-card ${visibleElements[`benefit-card-${idx}`] ? 'slide-up' : 'opacity-0'
                                        }`}
                                    style={{
                                        animationDelay: `${idx * 100}ms`,
                                    }}
                                >
                                    <p className="text-sm font-semibold text-slate-900">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Open roles */}
            <section id="open-roles" className="border-t border-slate-200 bg-slate-50/60">
                <div className="mx-auto max-w-6xl px-6 py-16">
                    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between slide-up">
                        <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Open roles</p>
                            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Join the team</h2>
                        </div>
                        <p className="max-w-xl text-slate-600">
                            We are always looking for builders who love shipping and learning. Explore a few priority openings below.
                        </p>
                    </div>
                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                        {[
                            {
                                title: 'AI Product Engineer',
                                type: 'Full-time - Remote',
                                desc: 'Own end-to-end delivery of AI features from design to production.',
                            },
                            {
                                title: 'Frontend Experience Designer',
                                type: 'Full-time - Hybrid',
                                desc: 'Craft polished interfaces that make complex systems feel simple.',
                            },
                            {
                                title: 'ML Ops Specialist',
                                type: 'Contract - Remote',
                                desc: 'Ship reliable pipelines, monitoring, and deployment workflows.',
                            },
                            {
                                title: 'Growth & Partnerships',
                                type: 'Full-time - Remote',
                                desc: 'Drive strategy, storytelling, and growth experiments.',
                            },
                        ].map((role, idx) => (
                            <div
                                key={role.title}
                                data-animate-id={`role-card-${idx}`}
                                className={`group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:border-slate-300 hover:shadow-lg hover-lift glow-card ${visibleElements[`role-card-${idx}`] ? 'slide-up' : 'opacity-0'
                                    }`}
                                style={{
                                    animationDelay: `${idx * 150}ms`,
                                }}
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-slate-900">{role.title}</h3>
                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 group-hover:bg-sky-100 transition">
                                        {role.type}
                                    </span>
                                </div>
                                <p className="mt-3 text-sm text-slate-600">{role.desc}</p>
                                <a
                                    href="#apply"
                                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition group-hover:gap-3 group-hover:text-sky-600"
                                >
                                    Apply for this role
                                    <span aria-hidden className="text-lg">
                                        -&gt;
                                    </span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="border-t border-slate-200">
                <div className="mx-auto max-w-6xl px-6 py-16">
                    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                        <div className="slide-up">
                            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Hiring process</p>
                            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Transparent from hello to offer</h2>
                            <p className="mt-4 text-slate-600">
                                We move quickly and keep communication clear at every step. Expect thoughtful feedback and a respectful
                                experience.
                            </p>
                        </div>
                        <div className="grid gap-4">
                            {[
                                { step: '01', title: 'Intro call', text: 'A short chat to learn about your goals and our needs.' },
                                { step: '02', title: 'Skill interview', text: 'Deep dive into your craft with our team.' },
                                { step: '03', title: 'Practical exercise', text: 'A real-world prompt, scoped to be fair and fast.' },
                                { step: '04', title: 'Final fit', text: 'Meet leadership and align on values and scope.' },
                            ].map((item, idx) => (
                                <div
                                    key={item.step}
                                    data-animate-id={`process-card-${idx}`}
                                    className={`flex items-start gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-2 hover:shadow-md hover-lift hover:border-slate-300 ${visibleElements[`process-card-${idx}`] ? 'slide-up' : 'opacity-0'
                                        }`}
                                    style={{
                                        animationDelay: `${idx * 150}ms`,
                                    }}
                                >
                                    <div className="text-sm font-semibold text-slate-500 bg-linear-to-br from-sky-100 to-emerald-100 rounded-lg px-3 py-2">{item.step}</div>
                                    <div>
                                        <p className="text-base font-semibold text-slate-900">{item.title}</p>
                                        <p className="mt-1 text-sm text-slate-600">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Application form */}
            <section id="apply" className="border-t border-slate-200 bg-slate-50/60">
                <div className="mx-auto max-w-6xl px-6 py-16">
                    <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
                        <div className="slide-up">
                            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Apply</p>
                            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Tell us about yourself</h2>
                            <p className="mt-4 text-slate-600">
                                Share your background and what you want to build next. We respond to every application within 7 days.
                            </p>
                            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-md hover-lift glow-card">
                                <h3 className="text-base font-semibold text-slate-900">What we value in applicants</h3>
                                <ul className="mt-4 grid gap-3 text-sm text-slate-600">
                                    {[
                                        'Clear communication and ownership',
                                        'Evidence of shipped work',
                                        'Curiosity about AI and systems',
                                        'Ability to collaborate across disciplines',
                                    ].map((line, idx) => (
                                        <li key={line} className={`flex items-start gap-3 ${idx % 2 === 0 ? 'slide-up-stagger-1' : 'slide-up-stagger-2'}`}>
                                            <span className="mt-1 h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
                                            {line}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg scale-in hover-lift glow-card"
                        >
                            <div className="grid gap-4 sm:grid-cols-2">
                                <label className="grid gap-2 text-sm font-semibold text-slate-700">
                                    First name
                                    <input
                                        className="h-11 rounded-xl border border-slate-200 px-4 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                                        placeholder="Jane"
                                        type="text"
                                        name="firstName"
                                        required
                                    />
                                </label>
                                <label className="grid gap-2 text-sm font-semibold text-slate-700">
                                    Last name
                                    <input
                                        className="h-11 rounded-xl border border-slate-200 px-4 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                                        placeholder="Doe"
                                        type="text"
                                        name="lastName"
                                        required
                                    />
                                </label>
                                <label className="grid gap-2 text-sm font-semibold text-slate-700 sm:col-span-2">
                                    Email
                                    <input
                                        className="h-11 rounded-xl border border-slate-200 px-4 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                                        placeholder="you@example.com"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </label>
                                <label className="grid gap-2 text-sm font-semibold text-slate-700 sm:col-span-2">
                                    Role interested in
                                    <select
                                        name="role"
                                        className="h-11 rounded-xl border border-slate-200 px-4 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                                    >
                                        <option>AI Product Engineer</option>
                                        <option>Frontend Experience Designer</option>
                                        <option>ML Ops Specialist</option>
                                        <option>Growth & Partnerships</option>
                                        <option>Other</option>
                                    </select>
                                </label>
                                <label className="grid gap-2 text-sm font-semibold text-slate-700 sm:col-span-2">
                                    Portfolio / LinkedIn
                                    <input
                                        className="h-11 rounded-xl border border-slate-200 px-4 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                                        placeholder="https://"
                                        type="url"
                                        name="portfolio"
                                    />
                                </label>
                                <label className="grid gap-2 text-sm font-semibold text-slate-700 sm:col-span-2">
                                    Resume
                                    <input
                                        className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-600 transition hover:border-slate-400 cursor-pointer"
                                        type="file"
                                        name="resume"
                                    />
                                </label>
                                <label className="grid gap-2 text-sm font-semibold text-slate-700 sm:col-span-2">
                                    Tell us about your proudest project
                                    <textarea
                                        className="min-h-30 rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                                        placeholder="Share the problem, your approach, and the outcome."
                                        name="message"
                                    />
                                </label>
                            </div>
                            <label className="mt-4 flex items-start gap-3 text-xs text-slate-600">
                                <input
                                    type="checkbox"
                                    name="consent"
                                    value="yes"
                                    className="mt-1 h-4 w-4 rounded border-slate-300 cursor-pointer"
                                    required
                                />
                                I agree to be contacted about my application and understand my data will be handled securely.
                            </label>
                            {status === 'success' && (
                                <p className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 animate-in slide-in-from-top">
                                    🎉 Thanks! Your application has been sent.
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                                    {errorMessage}
                                </p>
                            )}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-6 w-full rounded-full bg-linear-to-r from-slate-900 to-slate-800 px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 hover:from-slate-800 hover:to-slate-700"
                            >
                                {isSubmitting ? 'Sending...' : 'Submit application'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page
