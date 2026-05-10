// app/page.tsx - Complete single file with all components
"use client";

import React, { useState } from "react";
import {
  Sparkles,
  CheckCircle2,
  Phone,
  Calendar,
  Brush,
  Wind,
  Layers,
  DollarSign,
  Clock,
  Users,
  Award,
  ThumbsUp,
  MessageCircle,
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

type BadgeVariant = "default" | "secondary" | "success";

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

const Button = ({ children, onClick, variant = "default", size = "default", className = "", asChild, href, target, ...props }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:opacity-50";
  const variants: Record<ButtonVariant, string> = {
    default: "bg-sky-600 text-white hover:bg-sky-700 shadow-md hover:shadow-lg",
    outline: "border-2 border-gray-300 bg-white text-gray-700 hover:border-sky-400 hover:text-sky-600",
    ghost: "text-gray-600 hover:bg-gray-100 hover:text-sky-600",
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
    default: "bg-sky-100 text-sky-700 border-sky-200",
    secondary: "bg-gray-100 text-gray-600 border-gray-200",
    success: "bg-green-100 text-green-700 border-green-200",
  };
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-sm ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

const Card = ({ children, className = "", hover = false }: any) => {
  return (
    <div className={`rounded-2xl bg-white border ${hover ? "hover:border-sky-300 hover:shadow-xl transition-all duration-300" : "border-gray-100"} ${className}`}>
      {children}
    </div>
  );
};

const Tabs = ({ defaultValue, children }: any) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return (
    <div>
      {React.Children.map(children, (child) => {
        if (child.type === TabsList) {
          return React.cloneElement(child, { activeTab, setActiveTab });
        }
        if (child.type === TabsContent && child.props.value === activeTab) {
          return child;
        }
        return null;
      })}
    </div>
  );
};

const TabsList = ({ children, activeTab, setActiveTab }: any) => {
  return (
    <div className="inline-flex rounded-2xl bg-gray-100 p-1 gap-1">
      {React.Children.map(children, (child) => {
        if (child.type === TabsTrigger) {
          return React.cloneElement(child, { activeTab, setActiveTab });
        }
        return null;
      })}
    </div>
  );
};

const TabsTrigger = ({ value, children, activeTab, setActiveTab }: any) => {
  const isActive = activeTab === value;
  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`px-6 py-2.5 text-sm font-medium rounded-xl transition-all ${isActive ? "bg-white text-sky-600 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ children, value }: any) => {
  return <div className="mt-6">{children}</div>;
};

export default function Homes() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const scrollToContact = () => {
    document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 to-sky-700 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">PT</span>
              </div>
              <span className="font-black text-xl tracking-tight">
                Premium <span className="text-sky-600">Toza</span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="tel:+998998184200"
                className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-sky-600 transition-colors"
              >
                <Phone className="h-4 w-4" />
                +998 99 818 42 00
              </a>
              <a
                href="https://t.me/tritonium"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700 transition-colors hover:bg-sky-100"
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
        {/* Hero Section with 3D-like design */}
        <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-white py-16 md:py-24 lg:py-32">
          <div className="absolute top-20 right-0 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-white/80 backdrop-blur-sm">
                  🧹 Toshkentdagi Professional Tozalash Xizmati
                </Badge>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                  Tezkor va Ishonchli
                  <span className="block text-sky-600 mt-2">Tozalash Xizmati</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold text-gray-800">Premium Toza</span> bilan uyingiz, kvartirangiz yoki ofisingiz 
                  bir kunda beg‘ubor poklikka erishadi. Tajribali ishchilar, shaffof narxlar va 100% sifat kafolati.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" onClick={scrollToContact}>
                    <Calendar className="mr-2 h-5 w-5" />
                    Xizmat Buyurtma Qilish
                  </Button>
                  <Button size="lg" variant="outline" asChild href="https://t.me/tritonium" target="_blank">
                    <>
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Telegram Orqali Bog‘lanish
                    </>
                  </Button>
                </div>
                <div className="mt-8 flex items-center gap-3">
                  <div className="flex items-center gap-2 rounded-2xl bg-white/80 p-2 pr-5 shadow-sm border border-gray-100">
                    <div className="rounded-full bg-sky-100 p-2">
                      <Phone className="h-4 w-4 text-sky-700" />
                    </div>
                    <a href="tel:+998998184200" className="font-medium text-gray-800 hover:text-sky-600 transition">
                      +998 99 818 42 00
                    </a>
                  </div>
                </div>
                <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
                  <div className="rounded-2xl bg-white p-4 shadow-sm border border-gray-100 hover:shadow-md transition">
                    <div className="text-2xl font-black text-sky-600">24/7</div>
                    <div className="text-xs text-gray-500 mt-1">Tezkor Aloqa</div>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm border border-gray-100 hover:shadow-md transition">
                    <div className="text-2xl font-black text-sky-600">300k</div>
                    <div className="text-xs text-gray-500 mt-1">Boshlang‘ich Narx</div>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm border border-gray-100 hover:shadow-md transition">
                    <div className="text-2xl font-black text-sky-600">100%</div>
                    <div className="text-xs text-gray-500 mt-1">Sifat Nazorati</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-sky-200/40 rounded-full blur-3xl"></div>
                <div className="relative grid grid-cols-2 gap-5 rounded-[40px] bg-white p-6 shadow-2xl border border-gray-100">
                  <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-white p-5 shadow-sm hover:shadow-md transition cursor-pointer">
                    <div className="text-4xl mb-3">🏠</div>
                    <h3 className="font-bold text-lg">Kvartira / Uy</h3>
                    <p className="text-sm text-gray-500 mt-1">300 000 so‘mdan</p>
                    <Badge variant="secondary" className="mt-3 text-xs">1 kunda</Badge>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-white p-5 shadow-sm mt-8 hover:shadow-md transition cursor-pointer">
                    <div className="text-4xl mb-3">🏡</div>
                    <h3 className="font-bold text-lg">Hovli bilan</h3>
                    <p className="text-sm text-gray-500 mt-1">500 000 so‘mdan</p>
                    <Badge variant="secondary" className="mt-3 text-xs">Yard included</Badge>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-white p-5 shadow-sm -mt-2 hover:shadow-md transition cursor-pointer">
                    <div className="text-4xl mb-3">✨</div>
                    <h3 className="font-bold text-lg">General Tozalash</h3>
                    <p className="text-sm text-gray-500 mt-1">+200 000 so‘m</p>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-white p-5 shadow-sm mt-8 hover:shadow-md transition cursor-pointer">
                    <div className="text-4xl mb-3">🪟</div>
                    <h3 className="font-bold text-lg">Derazalar</h3>
                    <p className="text-sm text-gray-500 mt-1">Maxsus narx</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tabs Section - Detailed */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <Badge variant="secondary" className="mb-4">Shaffof Narxlar</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Sizga qanday tozalash kerak?</h2>
              <p className="text-gray-500 mt-4">Kvartira, uy yoki hovli uchun aniq narxlarni tanlang. Ishchilarimiz bir kunda tozalab beradi.</p>
            </div>

            <Tabs defaultValue="apartment">
              <div className="flex justify-center mt-8">
                <TabsList>
                  <TabsTrigger value="apartment">🏢 Kvartira</TabsTrigger>
                  <TabsTrigger value="house">🏡 Uy + Hovli</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="apartment">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  <Card hover className="overflow-hidden">
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold">Standart Tozalash</h3>
                          <p className="text-sm text-gray-500 mt-1">Chang, pol, hammom</p>
                        </div>
                        <Sparkles className="h-5 w-5 text-sky-500" />
                      </div>
                      <div className="mt-4">
                        <span className="text-4xl font-black text-sky-600">300 000</span>
                        <span className="text-gray-500"> so‘m</span>
                      </div>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-green-500"/> Chang va axlat tozalash</li>
                        <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-green-500"/> Pol va gilamlarni tozalash</li>
                        <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-green-500"/> Oshxona va hammom</li>
                      </ul>
                      <Button className="w-full mt-6" onClick={scrollToContact}>Tanlash</Button>
                    </div>
                  </Card>
                  <Card hover className="overflow-hidden relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-sky-600 text-white">Eng ko‘p tanlanadi</Badge>
                    </div>
                    <div className="p-6 pt-8">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold">General Tozalash</h3>
                          <p className="text-sm text-gray-500 mt-1">Chuqur tozalash + derazalar</p>
                        </div>
                        <Brush className="h-5 w-5 text-sky-500" />
                      </div>
                      <div className="mt-4">
                        <span className="text-4xl font-black text-sky-600">500 000</span>
                        <span className="text-gray-500"> so‘m</span>
                      </div>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-green-500"/> Standart + chuqur tozalash</li>
                        <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-green-500"/> Derazalarni yuvish</li>
                        <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-green-500"/> Mebel va jihozlar parvarishi</li>
                      </ul>
                      <Button className="w-full mt-6" onClick={scrollToContact}>Tanlash</Button>
                    </div>
                  </Card>
                  <Card hover className="overflow-hidden">
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold">Yaxshilangan</h3>
                          <p className="text-sm text-gray-500 mt-1">Standart + oshxona</p>
                        </div>
                        <Layers className="h-5 w-5 text-sky-500" />
                      </div>
                      <div className="mt-4">
                        <span className="text-4xl font-black text-sky-600">400 000</span>
                        <span className="text-gray-500"> so‘m</span>
                      </div>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-green-500"/> Standart tozalash</li>
                        <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-green-500"/> Pech va muzlatgich tashqi</li>
                        <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-green-500"/> Kir yuvish mashinasi</li>
                      </ul>
                      <Button className="w-full mt-6" onClick={scrollToContact}>Tanlash</Button>
                    </div>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="house">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  <Card hover>
                    <div className="p-6">
                      <h3 className="text-xl font-bold">Faqat Uy</h3>
                      <p className="text-sm text-gray-500 mt-1">Uy ichki tozalash</p>
                      <div className="mt-4">
                        <span className="text-4xl font-black text-sky-600">300 000</span>
                        <span className="text-gray-500"> so‘m</span>
                      </div>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-green-500"/> Barcha xonalar</li>
                        <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-green-500"/> Chang va pol tozalash</li>
                      </ul>
                      <Button className="w-full mt-6" onClick={scrollToContact}>Tanlash</Button>
                    </div>
                  </Card>
                  <Card hover className="border-2 border-sky-200 shadow-lg">
                    <div className="p-6">
                      <div className="flex justify-between">
                        <h3 className="text-xl font-bold">Uy + Hovli</h3>
                        <Wind className="h-5 w-5 text-sky-500" />
                      </div>
                      <p className="text-sm text-gray-500">Uy va hovli to‘liq tozalash</p>
                      <div className="mt-4">
                        <span className="text-4xl font-black text-sky-600">500 000</span>
                        <span className="text-gray-500"> so‘m</span>
                      </div>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-green-500"/> Uy ichki tozalash</li>
                        <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-green-500"/> Hovli supurish va axlat</li>
                        <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-green-500"/> Yo‘laklar tozalash</li>
                      </ul>
                      <Button className="w-full mt-6" onClick={scrollToContact}>Tanlash</Button>
                    </div>
                  </Card>
                  <Card hover>
                    <div className="p-6">
                      <h3 className="text-xl font-bold">General + Hovli</h3>
                      <p className="text-sm text-gray-500">Chuqur tozalash</p>
                      <div className="mt-4">
                        <span className="text-4xl font-black text-sky-600">700 000</span>
                        <span className="text-gray-500"> so‘m</span>
                      </div>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-green-500"/> General tozalash (uy)</li>
                        <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-green-500"/> Hovli to‘liq tozalash</li>
                        <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-green-500"/> Derazalar yuviladi</li>
                      </ul>
                      <Button className="w-full mt-6" onClick={scrollToContact}>Tanlash</Button>
                    </div>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Gallery / Attractive Visuals Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <Badge variant="secondary" className="mb-4">✨ Bizning Ishlarimiz</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Professional tozalashdan oldin va keyin</h2>
              <p className="text-gray-500 mt-4">Derazalar, oshxona va umumiy tozalash natijalarini ko‘ring</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Window Cleaning Card */}
              <div className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop"
                      alt="Window cleaning"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <Badge className="bg-white/90 text-black mb-2">🪟 Deraza tozalash</Badge>
                      <p className="text-white text-sm font-medium">Professional uskuna bilan derazalarni tozalash</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Kitchen Cleaning Card */}
              <div className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=400&fit=crop"
                      alt="Kitchen cleaning"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <Badge className="bg-white/90 text-black mb-2">🍳 Oshxona tozalash</Badge>
                      <p className="text-white text-sm font-medium">Pech, plita va oshxona jihozlarini tozalash</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Living Room Cleaning Card */}
              <div className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&h=400&fit=crop"
                      alt="Living room clean"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <Badge className="bg-white/90 text-black mb-2">✨ Umumiy tozalash</Badge>
                      <p className="text-white text-sm font-medium">Chang, pol va mebellarni chuqur tozalash</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <Badge variant="secondary" className="mb-4">Nega aynan Premium Toza?</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Sifat va ishonch kafolati</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-sky-50 transition-colors">
                <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold">Tajribali Ishchilar</h3>
                <p className="text-gray-500 mt-2">Faqat tekshirilgan va malakali tozalash ustalari</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-sky-50 transition-colors">
                <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold">Shaffof Narxlar</h3>
                <p className="text-gray-500 mt-2">Hech qanday yashirin to‘lovlar, faqat kelishilgan narx</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-sky-50 transition-colors">
                <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold">Tezkor Xizmat</h3>
                <p className="text-gray-500 mt-2">24 soat ichida buyurtma bajarish</p>
              </div>
            </div>
          </div>
        </section>

        {/* Special Offer Banner */}
        <section className="py-16 bg-gradient-to-r from-sky-600 to-sky-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Award className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
            <h2 className="text-3xl md:text-4xl font-bold">Maxsus Taklif!</h2>
            <p className="mt-4 text-sky-100 text-lg max-w-2xl mx-auto">
              Birinchi buyurtmangizga <span className="font-bold text-yellow-300">10% chegirma</span> + Bepul changyutkich xizmati
            </p>
            <Button className="mt-6 bg-white text-sky-700 hover:bg-gray-100" onClick={scrollToContact}>
              Chegirmani Qo‘lga Kiriting
            </Button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-section" className="py-20 bg-gray-900 text-white rounded-t-[3rem]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ThumbsUp className="h-12 w-12 mx-auto mb-4 text-sky-400" />
            <h2 className="text-3xl md:text-5xl font-black">Bugun tozalashga buyurtma bering!</h2>
            <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto">
              Ishchilarimiz sizning uyingiz yoki ofisingizni bir kunda tozalab beradi. 
              Faqat Telegram orqali yozing yoki qo‘ng‘iroq qiling.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-sky-600 hover:bg-sky-700" asChild href="https://t.me/tritonium" target="_blank">
                <>
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Telegram’da yozish: @tritonium
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
              <div className="bg-white/10 p-3 rounded-xl backdrop-blur">✓ 24/7 Tezkor aloqa</div>
              <div className="bg-white/10 p-3 rounded-xl backdrop-blur">✓ Bepul konsultatsiya</div>
              <div className="bg-white/10 p-3 rounded-xl backdrop-blur">✓ Sifat kafolati</div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-xl bg-sky-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">PT</span>
                </div>
                <span className="font-black text-xl">Premium <span className="text-sky-600">Toza</span></span>
              </div>
              <p className="text-gray-500 mt-3 text-sm">Toshkent bo‘ylab professional tozalash xizmati</p>
              <div className="flex gap-3 mt-4">
                <a href="https://t.me/tritonium" target="_blank" className="text-gray-400 hover:text-sky-600 transition">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-800">Aloqa</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="tel:+998998184200" className="text-gray-500 hover:text-sky-600">+998 99 818 42 00</a></li>
                <li><a href="https://t.me/tritonium" target="_blank" className="text-gray-500 hover:text-sky-600">Telegram: @tritonium</a></li>
                <li className="text-gray-400">Toshkent sh., Yunusobod</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800">Xizmatlar</h4>
              <ul className="mt-3 space-y-1 text-sm text-gray-500">
                <li>🏠 Kvartira tozalash</li>
                <li>🏡 Uy va hovli tozalash</li>
                <li>✨ General tozalash</li>
                <li>🪟 Deraza yuvish</li>
                <li>🏢 Ofis tozalash</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-400 text-xs">
            © 2026 Premium Toza — Barcha huquqlar himoyalangan. Professional tozalash xizmati.
          </div>
        </div>
      </footer>
    </div>
  );
}