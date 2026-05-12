// app/page.tsx - Three cleaning plans with Light Gray + Blue Accent professional theme
"use client";

import React from "react";
import {
  Sparkles,
  CheckCircle2,
  Phone,
  Calendar,
  Brush,
  Clock,
  Users,
  Award,
  ThumbsUp,
  MessageCircle,
  Star,
  Wrench,
  Droplets,
  Shield,
  Zap,
} from "lucide-react";

type ButtonVariant = "default" | "outline" | "ghost";
type ButtonSize = "default" | "lg" | "sm";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  asChild?: boolean;
  href?: string;
  target?: string;
} & React.HTMLAttributes<HTMLElement>;

type BadgeVariant = "default" | "secondary" | "success" | "gold" | "silver" | "bronze";

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

const Button = ({ children, onClick, variant = "default", size = "default", className = "", asChild, href, target, ...props }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50";
  const variants: Record<ButtonVariant, string> = {
    default: "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg",
    outline: "border-2 border-gray-300 bg-white text-gray-700 hover:border-blue-400 hover:text-blue-600",
    ghost: "text-gray-600 hover:bg-gray-100 hover:text-blue-600",
  };
  const sizes: Record<ButtonSize, string> = {
    default: "px-5 py-2.5 rounded-xl text-sm",
    lg: "px-8 py-4 rounded-2xl text-base",
    sm: "px-3 py-1.5 rounded-lg text-xs",
  };
  
  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (asChild && href) {
    return (
      <a href={href} target={target} className={combinedClassName} {...props}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

const Badge = ({ children, variant = "default", className = "" }: BadgeProps) => {
  const variants: Record<BadgeVariant, string> = {
    default: "bg-blue-50 text-blue-700 border-blue-200",
    secondary: "bg-gray-100 text-gray-600 border-gray-200",
    success: "bg-green-50 text-green-700 border-green-200",
    gold: "bg-amber-50 text-amber-700 border-amber-200",
    silver: "bg-gray-100 text-gray-700 border-gray-200",
    bronze: "bg-orange-50 text-orange-700 border-orange-200",
  };
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default function Homes() {
  const scrollToContact = () => {
    document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const plans = [
    {
      id: "basic",
      title: "Basic Tozalash",
      subtitle: "Kundalik va haftalik tozalash",
      icon: <Sparkles className="h-8 w-8" />,
      badge: "🥇 Ommabop",
      badgeVariant: "gold" as BadgeVariant,
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&h=500&fit=crop",
      goodFor: [
        "Haftalik tozalash",
        "Oilalar uchun",
        "Nisbatan toza kvartiralar",
      ],
      includes: [
        "Chang va axlat tozalash",
        "Pol va gilamlarni tozalash",
        "Hammomni tozalash",
        "Oshxona yuzalarini tozalash",
        "Mebellarni artish",
        "Axlatni chiqarish",
      ],
    },
    {
      id: "deep",
      title: "General Tozalash",
      subtitle: "Chuqur va mavsumiy tozalash",
      icon: <Brush className="h-8 w-8" />,
      badge: "🥈 Eng ko'p tanlanadi",
      badgeVariant: "silver" as BadgeVariant,
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&h=500&fit=crop",
      goodFor: [
        "Mavsumiy tozalash",
        "If los kvartiralar",
        "Mehmon kelishidan oldin",
        "Uzoq muddatdan keyin",
      ],
      includes: [
        "Basic tozalashdagi barcha xizmatlar",
        "Oshxonani chuqur tozalash",
        "Mikroto'lqinli pech va pechni tozalash",
        "Devordagi dog'lar",
        "Hammomni qiyin joylarini tozalash",
        "Mebellarni to'liq artish",
        "Changni batafsil tozalash",
      ],
    },
    {
      id: "renovation",
      title: "Ta'mirdan Keyingi Tozalash",
      subtitle: "Qurilish changi va qoldiqlar",
      icon: <Wrench className="h-8 w-8" />,
      badge: "🥉 Professional",
      badgeVariant: "bronze" as BadgeVariant,
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=500&fit=crop",
      goodFor: [
        "Yangi kvartiralar",
        "Qurilishdan keyin",
        "Ta'mirdan so'ng",
        "Ofislar va uylar",
      ],
      includes: [
        "Qurilish changini tozalash",
        "Derazalarni yuvish",
        "Bo'yoq va tsement qoldiqlari",
        "Pollarini chuqur tozalash",
        "Axlat va qoldiqlarni yig'ish",
        "Shift va devorlarni tozalash",
        "Batareya va radiatorlarni tozalash",
      ],
    },
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&h=500&fit=crop",
      title: "Yashash xonasini tozalash",
      badge: "✨ Umumiy tozalash",
      description: "Chang va mebellarni chuqur tozalash",
    },
    {
      src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=500&fit=crop",
      title: "Oshxonani professional tozalash",
      badge: "🍳 Oshxona tozalash",
      description: "Pech, plita va jihozlarni tozalash",
    },
    {
      src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=500&fit=crop",
      title: "Derazalarni yuvish",
      badge: "🪟 Deraza tozalash",
      description: "Professional uskuna bilan derazalarni tozalash",
    },
    {
      src: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&h=500&fit=crop",
      title: "Hammomni tozalash",
      badge: "🚿 Hammom tozalash",
      description: "Dezinfeksiya va dog'larni tozalash",
    },
    {
      src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=500&fit=crop",
      title: "Yumshoq mebellarni tozalash",
      badge: "🛋️ Mebel tozalash",
      description: "Divan va kreslolarni tozalash",
    },
    {
      src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=500&fit=crop",
      title: "Ta'mirdan keyingi tozalash",
      badge: "🏗️ Ta'mirdan keyin",
      description: "Qurilish changi va qoldiqlarni tozalash",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-sm">PT</span>
              </div>
              <span className="font-black text-xl tracking-tight text-gray-800">
                Premium <span className="text-blue-600">Toza</span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="tel:+998998184200"
                className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Phone className="h-4 w-4" />
                +998 99 818 42 00
              </a>
              <a
                href="https://t.me/tritonium"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-200"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.6-1.38-.97-2.23-1.56-.99-.69-.35-1.07.22-1.69.15-.15 2.77-2.54 2.82-2.76.01-.03.02-.14-.05-.2-.07-.06-.18-.04-.26-.02-.11.02-1.86 1.18-5.25 3.47-.5.34-.95.5-1.36.49-.45-.01-1.31-.25-1.95-.46-.78-.25-1.4-.38-1.35-.81.03-.22.33-.45.91-.68 3.58-1.56 5.97-2.59 7.17-3.09 3.41-1.42 4.12-1.67 4.58-1.68.1 0 .33.02.48.15.13.11.16.27.18.43.01.09.01.21-.02.38z"/>
                </svg>
                <span className="hidden sm:inline">@tritonium</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section with Light Gray + Blue theme */}
        <section className="relative overflow-hidden bg-[#FAFAFA] py-16 md:py-24 lg:py-32">
          <div className="absolute top-20 right-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100/60 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-white border-gray-200 shadow-sm">
                  ✨ Toshkentdagi Professional Tozalash Xizmati
                </Badge>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-gray-800">
                  Uyingizni
                  <span className="block text-blue-600 mt-2">Beg'ubor Poklik</span>
                  bilan tanishtiring
                </h1>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold text-gray-800">Premium Toza</span> - bu nafaqat tozalash, balki sizning uyingizga 
                  yangi nafas va poklik olib kelamiz. Tajribali ishchilar, zamonaviy jihozlar va 100% sifat kafolati.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" onClick={scrollToContact}>
                    <Calendar className="mr-2 h-5 w-5" />
                    Bepul Baho Olish
                  </Button>
                  <Button size="lg" variant="outline" asChild href="https://t.me/tritonium" target="_blank">
                    <>
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Telegram orqali bog'lanish
                    </>
                  </Button>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-gray-600 text-xs font-bold shadow-sm">
                        ✓
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-gray-500">
                    <span className="font-bold text-gray-700">500+</span> mijozlar ishonchi
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-blue-100/30 rounded-full blur-3xl"></div>
                <div className="relative grid grid-cols-2 gap-4 rounded-3xl bg-white p-5 shadow-xl border border-gray-200">
                  <div className="rounded-xl bg-gray-50 p-4 shadow-sm hover:shadow-md transition cursor-pointer border border-gray-100">
                    <div className="text-3xl mb-2">🏠</div>
                    <h3 className="font-bold text-gray-800">Uy / Kvartira</h3>
                    <p className="text-xs text-gray-500 mt-1">To'liq tozalash</p>
                  </div>
                  <div className="rounded-xl bg-gray-50 p-4 shadow-sm mt-6 hover:shadow-md transition cursor-pointer border border-gray-100">
                    <div className="text-3xl mb-2">🏢</div>
                    <h3 className="font-bold text-gray-800">Ofis</h3>
                    <p className="text-xs text-gray-500 mt-1">Korporativ tozalash</p>
                  </div>
                  <div className="rounded-xl bg-gray-50 p-4 shadow-sm -mt-2 hover:shadow-md transition cursor-pointer border border-gray-100">
                    <div className="text-3xl mb-2">🪟</div>
                    <h3 className="font-bold text-gray-800">Derazalar</h3>
                    <p className="text-xs text-gray-500 mt-1">Professional yuvish</p>
                  </div>
                  <div className="rounded-xl bg-gray-50 p-4 shadow-sm mt-6 hover:shadow-md transition cursor-pointer border border-gray-100">
                    <div className="text-3xl mb-2">✨</div>
                    <h3 className="font-bold text-gray-800">General</h3>
                    <p className="text-xs text-gray-500 mt-1">Chuqur tozalash</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Plans Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <Badge variant="secondary" className="mb-4 bg-gray-100">Tozalash Paketlari</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-800">Sizning ehtiyojingizga mos paket</h2>
              <p className="text-gray-500 mt-4">Uyingizning holatiga qarab eng mos tozalash turini tanlang</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div 
                  key={plan.id}
                  className={`rounded-2xl bg-white border ${plan.borderColor} overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img 
                      src={plan.image}
                      alt={plan.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge variant={plan.badgeVariant} className="shadow-sm">
                        {plan.badge}
                      </Badge>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/70 to-transparent p-4">
                      <div className="text-white flex items-center gap-2">
                        {plan.icon}
                        <span className="font-bold text-lg">{plan.title}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-4">{plan.subtitle}</p>
                    
                    {/* Good For Section */}
                    <div className="mb-5">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                        <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                        Kimga mos:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {plan.goodFor.map((item, i) => (
                          <span key={i} className="text-xs bg-gray-100 rounded-full px-2 py-1 text-gray-600">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Includes Section */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3 text-green-500" />
                        Xizmatlar:
                      </h4>
                      <ul className="space-y-1.5">
                        {plan.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full mt-6" onClick={scrollToContact}>
                      Buyurtma Berish
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <Badge variant="secondary" className="mb-4 bg-gray-100">⭐ Bizning Ishlarimiz</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Professional tozalash natijalari</h2>
              <p className="text-gray-500 mt-4">Tozalashdan oldin va keyin - farqni o'zingiz ko'ring</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="relative rounded-2xl overflow-hidden shadow-md">
                    <div className="relative h-64 overflow-hidden bg-gray-100">
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-gray-900/20 to-transparent z-10"></div>
                      <img 
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute bottom-4 left-4 right-4 z-20">
                        <Badge className="bg-white/95 text-gray-800 mb-2 shadow-sm border-gray-200">{image.badge}</Badge>
                        <p className="text-white text-sm font-medium drop-shadow-md">{image.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <Badge variant="secondary" className="mb-4 bg-gray-100">Nega aynan Premium Toza?</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Sifat va ishonch kafolati</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: <Shield className="h-8 w-8" />, title: "100% Sifat Kafolati", desc: "Ish sifatiga to'liq kafolat", color: "bg-blue-600" },
                { icon: <Users className="h-8 w-8" />, title: "Tajribali Ishchilar", desc: "Malakali va tekshirilgan xodimlar", color: "bg-gray-700" },
                { icon: <Zap className="h-8 w-8" />, title: "24/7 Tezkor Xizmat", desc: "Tez va o'z vaqtida xizmat", color: "bg-blue-600" },
                { icon: <Droplets className="h-8 w-8" />, title: "Eko-mahsulotlar", desc: "Zararsiz tozalash vositalari", color: "bg-gray-700" },
              ].map((feature, idx) => (
                <div key={idx} className="text-center p-6 rounded-2xl bg-[#FAFAFA] hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100">
                  <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm`}>
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{feature.title}</h3>
                  <p className="text-gray-500 mt-2 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Offer Banner */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <Award className="h-5 w-5 text-white" />
              <span className="text-sm font-semibold">Maxsus Taklif</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Birinchi tozalashingizga 15% chegirma!</h2>
            <p className="mt-4 text-blue-100 text-lg max-w-2xl mx-auto">
              Hozir buyurtma qiling va <span className="font-bold text-white">bepul changyutkich</span> xizmatiga ega bo'ling
            </p>
            <Button className="mt-6 bg-white text-blue-600 hover:bg-gray-100 shadow-lg text-lg px-8 py-4" onClick={scrollToContact}>
              Chegirmani Qo'lga Kiriting 🎁
            </Button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-section" className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ThumbsUp className="h-12 w-12 mx-auto mb-4 text-blue-400" />
            <h2 className="text-3xl md:text-5xl font-black">Bugun tozalashga buyurtma bering!</h2>
            <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto">
              Ishchilarimiz sizning uyingiz yoki ofisingizni bir kunda tozalab beradi. 
              Faqat Telegram orqali yozing yoki qo'ng'iroq qiling.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild href="https://t.me/tritonium" target="_blank">
                <>
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Telegram'da yozish: @tritonium
                </>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900" asChild href="tel:+998998184200">
                <>
                  <Phone className="mr-2 h-5 w-5" />
                  +998 99 818 42 00
                </>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm text-gray-300 max-w-2xl mx-auto">
              <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">✓ 24/7 Tezkor aloqa</div>
              <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">✓ Bepul konsultatsiya</div>
              <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">✓ Sifat kafolati</div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-xl bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">PT</span>
                </div>
                <span className="font-black text-xl text-gray-800">Premium <span className="text-blue-600">Toza</span></span>
              </div>
              <p className="text-gray-500 mt-3 text-sm">Toshkent bo'ylab professional tozalash xizmati</p>
              <div className="flex gap-3 mt-4">
                <a href="https://t.me/tritonium" target="_blank" className="text-gray-400 hover:text-blue-600 transition">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-800">Aloqa</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="tel:+998998184200" className="text-gray-500 hover:text-blue-600">+998 99 818 42 00</a></li>
                <li><a href="https://t.me/tritonium" target="_blank" className="text-gray-500 hover:text-blue-600">Telegram: @tritonium</a></li>
                <li className="text-gray-400">Toshkent sh., Yunusobod</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800">Ish vaqti</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-500">
                <li>Dushanba - Shanba: 08:00 - 20:00</li>
                <li>Yakshanba: 09:00 - 18:00</li>
                <li className="text-blue-600 font-medium">24/7 Murojaat qabul qilamiz</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-400 text-xs">
            © 2026 Premium Toza — Barcha huquqlar himoyalangan. Professional tozalash xizmati.
          </div>
        </div>
      </footer>
    </div>
  );
}