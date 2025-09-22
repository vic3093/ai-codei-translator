import Head from "next/head";

const features = [
  {
    title: "Human-Grade Ingredients",
    description:
      "Ethically sourced meats, vibrant superfoods, and farm-fresh vegetables designed for optimal digestibility.",
    icon: "🥩",
  },
  {
    title: "Veterinarian Crafted",
    description:
      "Every recipe is formulated alongside board-certified nutritionists to exceed AAFCO standards for all life stages.",
    icon: "🩺",
  },
  {
    title: "Personalized Meal Plans",
    description:
      "Smart portioning tailored to your pet’s breed, age, and activity level so every bowl is perfectly balanced.",
    icon: "📦",
  },
];

const benefits = [
  {
    title: "Radiant Coats",
    copy: "Omega-rich salmon oil and flaxseed support glossy fur and soothe sensitive skin from the inside out.",
  },
  {
    title: "Stronger Immunity",
    copy: "Probiotics, antioxidants, and adaptogens fortify your pet’s natural defenses against everyday stressors.",
  },
  {
    title: "Boundless Energy",
    copy: "Slow-cooked carbohydrates release steady energy that keeps tails wagging long after playtime ends.",
  },
  {
    title: "Gentle on Tummies",
    copy: "No fillers, no byproducts—just whole foods that are easy to digest for even the most sensitive companions.",
  },
];

const recipes = [
  {
    name: "Sunrise Salmon & Quinoa",
    description: "Wild-caught salmon, ancient grains, and garden peas rich in omega oils for luminous coats.",
    highlights: ["38% protein", "Infused with marine collagen", "Anti-inflammatory turmeric"],
    accent: "from-sky-300/30 via-blue-400/20 to-violet-400/30",
  },
  {
    name: "Meadow Lamb & Pumpkin",
    description: "Grass-fed lamb with roasted pumpkin and rosemary to support digestion and lean muscle.",
    highlights: ["32% protein", "Prebiotic pumpkin fiber", "Cold-pressed flaxseed"],
    accent: "from-emerald-300/30 via-lime-300/20 to-amber-200/30",
  },
  {
    name: "Harvest Turkey & Cranberry",
    description: "Free-range turkey simmered with cranberries and sweet potatoes for joint-friendly comfort.",
    highlights: ["36% protein", "Glucosamine boost", "Slow-release carbs"],
    accent: "from-rose-300/30 via-orange-300/20 to-amber-300/30",
  },
];

const testimonials = [
  {
    quote:
      "My senior lab is acting like a puppy again. Her coat shines, her eyes are bright, and she cleans her bowl every time!",
    name: "Samantha R.",
    role: "Dog Mom to Luna",
  },
  {
    quote:
      "We switched both of our Maine Coons and the difference in their energy and digestion was noticeable within a week.",
    name: "James & Priya",
    role: "Pet Parents of Nala & Kai",
  },
  {
    quote:
      "As a vet tech I’m picky about ingredients. This is the first brand that meets my standards and my dog’s cravings.",
    name: "Alex P.",
    role: "Veterinary Technician",
  },
];

export default function PetFoodSalesPage() {
  return (
    <>
      <Head>
        <title>Golden Paws Provision | Luxury Pet Nutrition</title>
        <meta
          name="description"
          content="Elevated pet cuisine crafted with human-grade ingredients, tailored meal plans, and holistic nutrition."
        />
      </Head>

      <div className="relative min-h-screen bg-slate-950 text-slate-100">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none absolute -left-52 top-0 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-amber-400 via-pink-400 to-fuchsia-500 opacity-20 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-lime-300 via-emerald-400 to-cyan-400 opacity-10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-rose-500 via-purple-500 to-indigo-600 opacity-20 blur-3xl" />
        </div>

        <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-24">
          <header className="flex items-center justify-between py-12">
            <div className="text-2xl font-semibold tracking-tight text-white">
              Golden Paws Provision
            </div>
            <nav className="hidden items-center space-x-10 text-sm uppercase tracking-[0.2em] text-slate-300 md:flex">
              <a href="#recipes" className="transition hover:text-white">
                Recipes
              </a>
              <a href="#science" className="transition hover:text-white">
                Science
              </a>
              <a href="#stories" className="transition hover:text-white">
                Stories
              </a>
              <a href="#membership" className="transition hover:text-white">
                Membership
              </a>
            </nav>
            <a
              href="#membership"
              className="relative overflow-hidden rounded-full bg-gradient-to-r from-amber-400 via-rose-500 to-purple-600 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-rose-500/30 transition hover:scale-105"
            >
              Start Tailored Plan
            </a>
          </header>

          <main className="flex flex-col gap-24">
            <section className="relative grid gap-16 rounded-3xl border border-white/10 bg-white/5 p-12 shadow-[0_20px_80px_rgba(15,23,42,0.45)] backdrop-blur-xl md:grid-cols-2 md:items-center">
              <div>
                <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
                  Holistic Gourmet Nutrition
                </div>
                <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl">
                  Nourish the heart of your home with food crafted for royalty.
                </h1>
                <p className="mt-6 text-lg text-slate-300">
                  Elevate mealtime with chef-inspired recipes that indulge every sense while supporting longevity, vitality, and
                  radiant wellbeing for your four-legged family.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#membership"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-300 via-orange-400 to-rose-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-amber-500/40 transition hover:scale-[1.02]"
                  >
                    Build My Box
                  </a>
                  <a
                    href="#science"
                    className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-slate-200 transition hover:border-white hover:text-white"
                  >
                    Explore the Science
                  </a>
                </div>
                <div className="mt-10 grid gap-6 sm:grid-cols-3">
                  {features.map((feature) => (
                    <div key={feature.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner shadow-white/5">
                      <div className="text-3xl">{feature.icon}</div>
                      <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-300">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 -translate-y-6 rounded-[48px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
                <div className="relative grid gap-6 rounded-[40px] border border-white/10 bg-slate-900/70 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.65)]">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.4em] text-emerald-200">Chef’s Selection</p>
                      <h2 className="mt-2 text-2xl font-semibold text-white">Heritage Poultry & Wild Rice</h2>
                    </div>
                    <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">Best Seller</div>
                  </div>
                  <div className="grid gap-3 text-sm text-slate-300">
                    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <span className="font-medium text-white">Protein</span>
                      <span>Free-range chicken, turkey hearts</span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <span className="font-medium text-white">Superfoods</span>
                      <span>Blueberries, kelp, turmeric</span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <span className="font-medium text-white">Functional Boost</span>
                      <span>Joint support collagen blend</span>
                    </div>
                  </div>
                  <div className="rounded-3xl border border-emerald-300/40 bg-emerald-400/10 p-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">Results</p>
                    <p className="mt-2 text-lg text-emerald-50">
                      Clinically shown to improve coat shine by 63% and digestion comfort within the first 21 days.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="recipes"
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-12 shadow-[0_24px_72px_rgba(15,23,42,0.55)] backdrop-blur-xl"
            >
              <div className="flex flex-col items-center text-center">
                <p className="text-xs uppercase tracking-[0.35em] text-emerald-200">Signature menus</p>
                <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
                  Three culinary collections crafted to celebrate every palate.
                </h2>
                <p className="mt-4 max-w-2xl text-base text-slate-300">
                  Rotate between chef-designed recipes to unlock a spectrum of nutrients that keep your companion thriving.
                  Each menu arrives flash-frozen to preserve peak freshness—simply thaw, serve, and watch the delight.
                </p>
              </div>
              <div className="mt-12 grid gap-8 md:grid-cols-3">
                {recipes.map((recipe) => (
                  <div
                    key={recipe.name}
                    className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.45)] transition-transform duration-300 hover:-translate-y-2`}
                  >
                    <div
                      className={`absolute inset-x-10 top-10 -z-10 h-32 rounded-full bg-gradient-to-r ${recipe.accent} blur-3xl opacity-80 transition duration-300 group-hover:opacity-100`}
                    />
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-amber-200">Gourmet recipe</p>
                      <h3 className="mt-4 text-2xl font-semibold text-white">{recipe.name}</h3>
                      <p className="mt-3 text-sm text-slate-300">{recipe.description}</p>
                    </div>
                    <ul className="mt-8 space-y-3 text-sm text-slate-200">
                      {recipe.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-inner shadow-white/5"
                        >
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-300/20 text-xs font-semibold text-amber-200">
                            ✦
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section id="science" className="grid gap-12 rounded-3xl border border-white/10 bg-slate-900/60 p-12 backdrop-blur-xl md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">Built on biology</p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  Precision nutrition designed with data from over 50,000 thriving pets.
                </h2>
                <p className="mt-4 text-base text-slate-300">
                  We analyze breed-specific needs, metabolic rates, and lifestyle data to tailor every plan. Our proprietary
                  Wellness Mapping™ platform continually adjusts recipes as your pet grows, ensuring they receive the perfect
                  macronutrient balance in every serving.
                </p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {benefits.map((benefit) => (
                    <div key={benefit.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner shadow-white/5">
                      <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                      <p className="mt-2 text-sm text-slate-300">{benefit.copy}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative flex flex-col gap-6 rounded-[36px] border border-white/10 bg-gradient-to-br from-slate-900/60 via-slate-900/90 to-slate-900/60 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.6)]">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-200">Tailored Portions</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Each delivery includes calibrated serving vessels personalized to your pet’s needs.
                  </p>
                </div>
                <div className="rounded-3xl border border-amber-300/30 bg-gradient-to-r from-amber-300/20 via-rose-300/10 to-fuchsia-400/20 p-6 text-sm text-slate-100">
                  <p className="text-xs uppercase tracking-[0.25em] text-amber-200">Weekly Snapshot</p>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Digestive Comfort</span>
                      <span className="font-semibold text-emerald-200">+92%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Shine Score</span>
                      <span className="font-semibold text-amber-200">+76%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Playtime Stamina</span>
                      <span className="font-semibold text-rose-200">+54%</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200">
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Included Guidance</p>
                  <p className="mt-2">
                    Schedule monthly consultations with our veterinary nutritionists to keep your companion thriving.
                  </p>
                </div>
              </div>
            </section>

            <section id="stories" className="space-y-12">
              <div className="flex flex-col items-center text-center">
                <p className="text-xs uppercase tracking-[0.4em] text-amber-200">Loved by families everywhere</p>
                <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
                  Join thousands of discerning pet parents who refuse to compromise on nutrition.
                </h2>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.name}
                    className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-[0_20px_60px_rgba(15,23,42,0.45)]"
                  >
                    <p className="text-lg text-slate-200">“{testimonial.quote}”</p>
                    <div className="mt-6 text-sm text-slate-400">
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="membership" className="relative rounded-3xl border border-white/10 bg-gradient-to-r from-emerald-400/15 via-amber-300/10 to-rose-400/15 p-12 text-center backdrop-blur-3xl">
              <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
                <div className="absolute -top-24 left-1/4 h-48 w-48 rounded-full bg-emerald-300/30 blur-3xl" />
                <div className="absolute -bottom-10 right-1/3 h-40 w-40 rounded-full bg-rose-300/30 blur-3xl" />
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-950">Concierge delivery</p>
              <h2 className="mt-4 text-4xl font-semibold text-slate-950">
                White-glove nutrition service that arrives exactly when you need it.
              </h2>
              <p className="mt-4 text-base text-slate-800">
                Temperature-controlled packaging, flexible scheduling, and real-time nutrition tracking in our mobile app. Pause,
                resume, or adjust your plan in seconds.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-slate-900/40 transition hover:scale-[1.02]"
                >
                  Reserve Your Consultation
                </a>
                <span className="text-sm uppercase tracking-[0.3em] text-slate-800">Ships nationwide • carbon neutral</span>
              </div>
            </section>
          </main>

          <footer className="mt-24 flex flex-col items-center justify-between gap-8 border-t border-white/10 pt-8 text-xs text-slate-400 sm:flex-row">
            <p>© {new Date().getFullYear()} Golden Paws Provision. All rights reserved.</p>
            <div className="flex items-center gap-6 uppercase tracking-[0.3em]">
              <a href="#" className="transition hover:text-white">
                Ingredients
              </a>
              <a href="#" className="transition hover:text-white">
                Sustainability
              </a>
              <a href="#" className="transition hover:text-white">
                FAQ
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
