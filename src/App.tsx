import React from 'react';
import {
  ArrowUp,
  BadgeCheck,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Cpu,
  Handshake,
  Home,
  Lock,
  PhoneCall,
  PhoneOff,
  QrCode,
  Radio,
  Receipt,
  ScanFace,
  ShieldAlert,
  ShieldCheck,
  Signal,
  Smartphone,
  Truck,
  UserCheck,
  Wallet,
  Wifi,
  WifiOff,
} from 'lucide-react';

interface PlanItem {
  allowance: string;
  details: string;
  price: string;
}

interface CarrierConfig {
  id: 'claro' | 'vivo' | 'tim';
  title: string;
  headerGradient: string;
  cardBorder: string;
  rowBg: string;
  rowBorder: string;
  priceColor: string;
  accentDot: string;
  plans: PlanItem[];
}

const CARRIERS: CarrierConfig[] = [
  {
    id: 'claro',
    title: '🔴 PLANOS PARA COBERTURA CLARO',
    headerGradient: 'from-[#D91A1A] to-[#B01414]',
    cardBorder: 'border-red-200/90',
    rowBg: 'bg-red-50/45',
    rowBorder: 'border-red-100 hover:border-red-300',
    priceColor: 'text-[#B91C1C]',
    accentDot: 'bg-[#D91A1A]',
    plans: [
      { allowance: '40GB', details: 'com ligação', price: 'R$ 49,90/mês' },
      { allowance: '80GB', details: 'com ligação', price: 'R$ 69,90/mês' },
      { allowance: '160GB', details: 'com ligação', price: 'R$ 99,90/mês' },
    ],
  },
  {
    id: 'vivo',
    title: '🟣 PLANOS PARA COBERTURA VIVO',
    headerGradient: 'from-[#6D28D9] to-[#52189B]',
    cardBorder: 'border-purple-200/90',
    rowBg: 'bg-purple-50/45',
    rowBorder: 'border-purple-100 hover:border-purple-300',
    priceColor: 'text-[#6B21A8]',
    accentDot: 'bg-[#6D28D9]',
    plans: [
      { allowance: '60GB', details: 'com ligação', price: 'R$ 69,90/mês' },
      { allowance: '100GB', details: 'com ligação', price: 'R$ 99,99/mês' },
      { allowance: '300GB', details: 'sem ligação', price: 'R$ 189,90/mês' },
      { allowance: '500GB', details: 'sem ligação', price: 'R$ 299,90/mês' },
    ],
  },
  {
    id: 'tim',
    title: '🔵 PLANOS PARA COBERTURA TIM',
    headerGradient: 'from-[#0369A1] to-[#1D4ED8]',
    cardBorder: 'border-blue-200/90',
    rowBg: 'bg-blue-50/45',
    rowBorder: 'border-blue-100 hover:border-blue-300',
    priceColor: 'text-[#1D4ED8]',
    accentDot: 'bg-[#1D4ED8]',
    plans: [
      { allowance: '100GB', details: 'com ligação', price: 'R$ 69,90/mês' },
      { allowance: '500GB', details: 'sem ligação', price: 'R$ 189,90/mês' },
    ],
  },
];

const STEP_ANCHORS = [
  { id: 'etapa-1', label: '1', icon: Wifi },
  { id: 'etapa-2', label: '2', icon: Cpu },
  { id: 'etapa-3', label: '3', icon: UserCheck },
  { id: 'etapa-4', label: '4', icon: Handshake },
  { id: 'etapa-5', label: '5', icon: ScanFace },
];

function FederalEmblem({ className = 'w-9 h-9' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="10" fill="url(#fed-grad)" />
      <path
        d="M20 7L30 11.5V19.5C30 25.8 25.7 31.3 20 33C14.3 31.3 10 25.8 10 19.5V11.5L20 7Z"
        stroke="white"
        strokeOpacity="0.9"
        strokeWidth="1.75"
        fill="white"
        fillOpacity="0.08"
      />
      <path
        d="M15.5 20.5C16.8 18.7 18.3 17.8 20 17.8C21.7 17.8 23.2 18.7 24.5 20.5"
        stroke="white"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M13 17.3C14.9 14.9 17.3 13.7 20 13.7C22.7 13.7 25.1 14.9 27 17.3"
        stroke="#93C5FD"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="20" cy="24" r="2" fill="white" />
      <defs>
        <linearGradient id="fed-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0B1F3A" />
          <stop offset="1" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SimIllustration() {
  return (
    <div
      className="relative flex items-center justify-center gap-4 rounded-xl bg-gradient-to-br from-slate-50 to-blue-50/60 border border-slate-200/80 px-5 py-6"
      aria-hidden="true"
    >
      <div className="relative flex h-16 w-14 flex-col justify-between rounded-xl border-2 border-[#0E2B52] bg-white p-2 shadow-xs">
        <div className="h-2.5 w-5 self-end rounded-sm bg-slate-200" />
        <div className="grid grid-cols-2 gap-0.5 rounded bg-amber-100 border border-amber-300 p-1">
          <span className="h-2 rounded-[1px] bg-amber-400/70" />
          <span className="h-2 rounded-[1px] bg-amber-400/70" />
          <span className="h-2 rounded-[1px] bg-amber-400/70" />
          <span className="h-2 rounded-[1px] bg-amber-400/70" />
        </div>
      </div>
      <div className="flex items-center gap-2 text-[#1D4ED8]">
        <span className="h-px w-5 bg-blue-300" />
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-blue-200 shadow-xs">
          <Truck className="h-5 w-5 text-[#0E2B52]" />
        </div>
        <span className="h-px w-5 bg-blue-300" />
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0E2B52] text-white shadow-xs">
        <Home className="h-5 w-5" />
      </div>
    </div>
  );
}

function EsimIllustration() {
  return (
    <div
      className="relative flex items-center justify-center gap-4 rounded-xl bg-gradient-to-br from-blue-50/60 to-indigo-50/70 border border-blue-100 px-5 py-6"
      aria-hidden="true"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white border border-blue-200 shadow-xs text-[#0E2B52]">
        <QrCode className="h-9 w-9 stroke-[1.75]" />
      </div>
      <div className="flex items-center gap-2">
        <span className="h-px w-5 bg-blue-300" />
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1D4ED8] text-white shadow-xs">
          <Wifi className="h-5 w-5" />
        </div>
        <span className="h-px w-5 bg-blue-300" />
      </div>
      <div className="relative flex h-16 w-12 items-center justify-center rounded-xl border-2 border-[#0E2B52] bg-white shadow-xs text-[#0E2B52]">
        <Smartphone className="h-7 w-7 stroke-[1.75]" />
        <span className="absolute -bottom-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-600 text-white border-2 border-white">
          <ShieldCheck className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );
}

export default function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] text-slate-900">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 rounded-lg py-1 pr-2 cursor-pointer"
          >
            <FederalEmblem className="h-9 w-9 shrink-0" />
            <span className="font-display text-base sm:text-lg font-bold tracking-tight text-[#0B1F3A] whitespace-nowrap shrink-0">
              Federal Associados
            </span>
          </button>

          <nav aria-label="Etapas" className="flex items-center gap-1.5 sm:gap-2">
            {STEP_ANCHORS.map((step) => {
              const Icon = step.icon;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => scrollToSection(step.id)}
                  className="inline-flex h-10 min-w-[40px] items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50/80 px-2.5 text-sm font-bold text-[#0E2B52] transition-colors duration-150 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 cursor-pointer tabular-nums"
                >
                  <Icon className="hidden sm:block h-3.5 w-3.5 text-blue-700" aria-hidden="true" />
                  <span>{step.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12 space-y-12 sm:space-y-16">
        {/* Hero Title Card */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#081931] via-[#0F2C56] to-[#16427E] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16 text-white shadow-md">
          {/* Architectural signal grid pattern */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <pattern id="hero-grid" width="44" height="44" patternUnits="userSpaceOnUse">
                <path d="M 44 0 L 0 0 0 44" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-400/15 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-3xl">
              <h1
                className="font-display font-extrabold tracking-tight text-white leading-[1.15] text-balance"
                style={{ fontSize: 'clamp(1.85rem, 3.8vw, 3.25rem)' }}
              >
                Contratar sua internet com a Federal Associados é bem simples!
              </h1>
            </div>

            {/* Pure visual 5-step anchor path */}
            <div className="flex items-center gap-2.5 sm:gap-3 self-start lg:self-center rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-sm">
              {STEP_ANCHORS.map((step, index) => {
                const Icon = step.icon;
                return (
                  <React.Fragment key={step.id}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(step.id)}
                      className="group flex h-11 w-11 sm:h-12 sm:w-12 flex-col items-center justify-center rounded-xl bg-white/10 border border-white/15 text-white transition-transform duration-150 hover:-translate-y-0.5 hover:bg-white hover:text-[#0B1F3A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
                    >
                      <Icon className="h-4 w-4 mb-0.5" aria-hidden="true" />
                      <span className="text-[11px] font-bold leading-none tabular-nums">
                        {step.label}
                      </span>
                    </button>
                    {index < STEP_ANCHORS.length - 1 && (
                      <span className="hidden sm:block h-px w-2.5 bg-white/25" aria-hidden="true" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </section>

        {/* STEP 1 */}
        <section id="etapa-1" className="scroll-mt-24 space-y-8">
          {/* Step 1 Banner Header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0B1F3A] to-[#1D4ED8] text-white shadow-xs">
              <Signal className="h-7 w-7" aria-hidden="true" />
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#0B1F3A] leading-snug text-balance">
              1. Escolha a cobertura e o plano que melhor atende às suas necessidades.
            </h2>
          </div>

          {/* Plans Subheading */}
          <div className="flex items-center gap-3 px-1">
            <h3 className="font-display text-lg sm:text-xl font-extrabold tracking-tight text-slate-900">
              📱 PLANOS DISPONÍVEIS POR COBERTURA
            </h3>
            <div className="hidden sm:block h-px flex-1 bg-slate-200" aria-hidden="true" />
          </div>

          {/* 3 Carrier Plan Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {CARRIERS.map((carrier) => (
              <article
                key={carrier.id}
                className={`flex flex-col rounded-2xl border ${carrier.cardBorder} bg-white shadow-sm overflow-hidden`}
              >
                {/* Carrier Header */}
                <div
                  className={`relative bg-gradient-to-r ${carrier.headerGradient} px-5 py-5 text-white`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="font-display text-base sm:text-[17px] font-bold tracking-tight leading-snug">
                      {carrier.title}
                    </h4>
                    <Radio className="h-5 w-5 shrink-0 opacity-85" aria-hidden="true" />
                  </div>
                </div>

                {/* Carrier Plans List */}
                <div className="flex-1 p-5 flex flex-col justify-between gap-3">
                  <ul className="space-y-3">
                    {carrier.plans.map((plan, idx) => (
                      <li
                        key={idx}
                        className={`flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1.5 rounded-xl border ${carrier.rowBorder} ${carrier.rowBg} px-4 py-3.5 transition-colors duration-150`}
                      >
                        <span className="text-[15px] sm:text-base font-medium text-slate-800">
                          <span>🔹 </span>
                          <strong className="font-display text-lg font-extrabold text-slate-950 tabular-nums">
                            {plan.allowance}
                          </strong>
                          <span> {plan.details} </span>
                          <span className="text-slate-400 font-normal">— </span>
                        </span>
                        <span
                          className={`font-display text-lg sm:text-xl font-extrabold tracking-tight tabular-nums ${carrier.priceColor}`}
                        >
                          {plan.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {/* Difference Between With Call and Without Call */}
          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700">
                  <PhoneCall className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 border border-sky-200 text-sky-700">
                  <PhoneOff className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-extrabold tracking-tight text-slate-900">
                📌 DIFERENÇA ENTRE OS PLANOS COM E SEM LIGAÇÃO
              </h3>
            </div>

            {/* Detailed Explanation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* Planos Com Ligação */}
              <div className="flex flex-col gap-4 rounded-2xl border border-emerald-200 bg-emerald-50/55 p-6">
                <div className="flex items-center justify-between gap-3">
                  <h4 className="font-display text-base sm:text-lg font-bold text-emerald-950">
                    🟢 PLANOS COM LIGAÇÃO
                  </h4>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <Wifi className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>
                <p className="text-[15.5px] sm:text-base leading-relaxed text-slate-700">
                  Caso você consuma 100% da franquia contratada antes da renovação mensal, sua internet não será bloqueada. A navegação continuará normalmente com velocidade reduzida, permitindo que você continue utilizando aplicativos, enviando e recebendo mensagens e mantendo-se conectado.
                </p>
              </div>

              {/* Planos Sem Ligação */}
              <div className="flex flex-col gap-4 rounded-2xl border border-sky-200 bg-sky-50/55 p-6">
                <div className="flex items-center justify-between gap-3">
                  <h4 className="font-display text-base sm:text-lg font-bold text-sky-950">
                    🔵 PLANOS SEM LIGAÇÃO
                  </h4>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                    <WifiOff className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>
                <p className="text-[15.5px] sm:text-base leading-relaxed text-slate-700">
                  Ao consumir 100% da franquia de um plano sem ligação, o acesso à internet será interrompido completamente até a renovação do plano. Para voltar a navegar, será necessário aguardar o próximo ciclo de renovação.
                </p>
              </div>
            </div>

            {/* Direct Comparison Summary Strip */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-100/70 px-5 py-4 text-[15.5px] sm:text-base font-bold text-emerald-950">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" aria-hidden="true" />
                <span>✅ Com ligação: continua navegando com velocidade reduzida.</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-rose-200 bg-rose-50/90 px-5 py-4 text-[15.5px] sm:text-base font-bold text-rose-950">
                <ShieldAlert className="h-5 w-5 shrink-0 text-rose-600" aria-hidden="true" />
                <span>❌ Sem ligação: a internet fica bloqueada até a renovação.</span>
              </div>
            </div>
          </div>
        </section>

        {/* STEP 2 */}
        <section id="etapa-2" className="scroll-mt-24 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0B1F3A] to-[#1D4ED8] text-white shadow-xs">
              <Smartphone className="h-7 w-7" aria-hidden="true" />
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#0B1F3A] leading-snug text-balance">
              2. Escolha entre chip físico ou eSIM, conforme a compatibilidade do seu aparelho.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Physical SIM Card */}
            <article className="lg:col-span-5 rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm space-y-5">
              <SimIllustration />
              <p className="text-[15.5px] sm:text-base leading-relaxed text-slate-700">
                <strong className="font-bold text-slate-950">Chip físico:</strong> Será enviado pela Federal Associados, você receberá entre 5 e 15 dias úteis em sua casa.
              </p>
            </article>

            {/* Virtual eSIM Card + Reserved Image Slot */}
            <article className="lg:col-span-7 rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm space-y-5">
              <EsimIllustration />
              <p className="text-[15.5px] sm:text-base leading-relaxed text-slate-700">
                <strong className="font-bold text-slate-950">Chip virtual:</strong> Ativação via QR code após o cadastro. Pra verificar se o seu aparelho é confiável, basta realizar o procedimento da imagem abaixo.
              </p>

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <img
                  src="https://videos.suanetturbinada.com.br/chipvirtual.jpeg"
                  alt="Procedimento para verificar compatibilidade com chip virtual"
                  referrerPolicy="no-referrer"
                  className="block w-full h-auto object-contain"
                />
              </div>
            </article>
          </div>
        </section>

        {/* STEP 3 */}
        <section id="etapa-3" className="scroll-mt-24">
          <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex items-center gap-3 shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0B1F3A] to-[#1D4ED8] text-white shadow-xs">
                  <ClipboardCheck className="h-7 w-7" aria-hidden="true" />
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 text-[#1D4ED8]">
                  <UserCheck className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-700">
                  <Lock className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>

              <h2 className="font-display text-lg sm:text-xl lg:text-[22px] font-bold tracking-tight text-[#0B1F3A] leading-relaxed">
                3. Após escolher o plano e o chip desejado, Informe seus dados para realizar o cadastro de forma rápida e segura na Federal Associados.
              </h2>
            </div>
          </div>
        </section>

        {/* STEP 4 */}
        <section id="etapa-4" className="scroll-mt-24">
          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
              <div className="flex items-center gap-2.5 shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0B1F3A] to-[#1D4ED8] text-white shadow-xs">
                  <Handshake className="h-7 w-7" aria-hidden="true" />
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-200 bg-amber-50 text-amber-700">
                  <BadgeCheck className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#0B1F3A] leading-snug text-balance">
                4. Após cadastro realize sua adesão associativa no mesmo valor do plano escolhido.
              </h2>
            </div>

            <div className="border-t border-slate-100 pt-6 space-y-6">
              <p className="text-base sm:text-[17px] leading-relaxed text-slate-700 max-w-4xl">
                A Federal Associados atua no modelo de associação, por isso, para se tornar associado, existe uma adesão associativa após cadastro.
              </p>

              {/* Example Highlight Surface */}
              <div className="rounded-2xl border border-blue-200/80 bg-gradient-to-br from-slate-50 to-blue-50/45 p-6 sm:p-7">
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="flex sm:flex-col items-center gap-3 shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B1F3A] text-white shadow-xs">
                      <Wallet className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-200 bg-white text-[#1D4ED8]">
                      <Receipt className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="space-y-3 text-[15.5px] sm:text-base leading-relaxed text-slate-800">
                    <p className="font-medium">
                      Por exemplo: se no cadastro você escolheu o plano de <strong className="font-display font-bold text-[#0B1F3A] tabular-nums">R$ 69,90/mês.</strong>
                    </p>
                    <p className="font-medium">
                      Após o cadastro o seu pagamento será de <strong className="font-display font-bold text-[#1D4ED8] tabular-nums">R$ 69,90.</strong>
                    </p>
                    <p>
                      Esse pagamento é feito uma única vez no mesmo valor do plano escolhido.
                    </p>
                    <p className="font-semibold text-[#0B1F3A]">
                      É o que formaliza sua entrada como associado e permite a ativação do seu plano.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STEP 5 & STEP 5 */}
        <section id="etapa-5" className="scroll-mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Biometria Digital (5.) */}
          <article className="flex flex-col justify-between gap-6 rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0B1F3A] to-[#1D4ED8] text-white shadow-xs">
                <ScanFace className="h-7 w-7" aria-hidden="true" />
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 text-[#1D4ED8]">
                <Camera className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>

            <h2 className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#0B1F3A] leading-relaxed">
              5. Após adesão associativa: Vamos fazer a Biometria Digital onde você irá tirar uma foto para ativação.
            </h2>
          </article>

          {/* Ativação da linha (5.) */}
          <article className="flex flex-col justify-between gap-6 rounded-2xl border border-[#1E467E] bg-gradient-to-br from-[#081931] via-[#0F2C56] to-[#16427E] p-6 sm:p-8 text-white shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 border border-white/20 text-white">
                <Clock className="h-7 w-7" aria-hidden="true" />
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/15 border border-emerald-300/30 text-emerald-300">
                <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>

            <h2 className="font-display text-lg sm:text-xl font-bold tracking-tight text-white leading-relaxed">
              5. Aguarde a ativação da sua linha: Prazo máximo para ativação em até 24h úteis.
            </h2>
          </article>
        </section>
      </main>

      {/* Quiet Visual Footer */}
      <footer className="border-t border-slate-200/90 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <FederalEmblem className="h-8 w-8 shrink-0" />
            <span className="font-display text-sm font-bold text-[#0B1F3A]">
              Federal Associados
            </span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-colors duration-150 hover:border-blue-300 hover:bg-blue-50 hover:text-[#0B1F3A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 cursor-pointer"
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </footer>
    </div>
  );
}
