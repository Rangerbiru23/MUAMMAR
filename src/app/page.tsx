"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Play, ArrowRight, Star, Camera, Video, Film, Award, TrendingUp, Users, Clock } from "lucide-react"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const heroSlides = [
    {
      title: "Produksi Film Profesional",
      subtitle: "Menciptakan kisah yang menginspirasi dan menggerakkan emosi",
      description: "Dari konsep hingga produksi final, kami menghadirkan film berkualitas tinggi yang meninggalkan kesan mendalam."
    },
    {
      title: "Program Televisi Berkualitas",
      subtitle: "Konten hiburan yang mengedukasi dan menghibur",
      description: "Produksi program TV yang menarik, informatif, dan relevan untuk audience Indonesia."
    },
    {
      title: "Video Dokumenter",
      subtitle: "Menangkap kebenaran dan keindahan dalam setiap frame",
      description: "Dokumenter mendalam yang menceritakan kisah nyata dengan perspektif yang unik dan kuat."
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const services = [
    {
      icon: Film,
      title: "Produksi Film",
      description: "Film pendek, film panjang, dan sinematik berkualitas tinggi dengan tim profesional berpengalaman.",
      features: ["Skenario & Storyboard", "Lokasi Scouting", "Casting & Directing", "Post-Production"]
    },
    {
      icon: Video,
      title: "Program TV",
      description: "Program televisi berbagai genre dari drama hingga dokumenter dengan standar broadcasting internasional.",
      features: ["TV Series", "Reality Show", "Talk Show", "Documentary Series"]
    },
    {
      icon: Camera,
      title: "Video Komersial",
      description: "Iklan TV, corporate video, dan konten promosi yang efektif untuk meningkatkan brand awareness.",
      features: ["TV Commercial", "Corporate Video", "Brand Storytelling", "Social Media Content"]
    }
  ]

  const stats = [
    { icon: Film, label: "Film Diproduksi", value: "50+" },
    { icon: Video, label: "Program TV", value: "100+" },
    { icon: Users, label: "Klien Puas", value: "200+" },
    { icon: Award, label: "Penghargaan", value: "25+" }
  ]

  const testimonials = [
    {
      name: "Ahmad Wijaya",
      role: "CEO Media Corporation",
      content: "MUAMMAR Film Production adalah mitra yang sempurna untuk proyek televisi kami. Kualitas produksi mereka luar biasa.",
      rating: 5
    },
    {
      name: "Sarah Putri",
      role: "Produser Film Independen",
      content: "Profesionalisme dan kreativitas tim MUAMMAR membawa visi kami menjadi kenyataan dengan hasil yang melebihi ekspektasi.",
      rating: 5
    },
    {
      name: "Budi Santoso",
      role: "Direktur Marketing",
      content: "Video komersial yang mereka buat meningkatkan brand awareness kami secara signifikan. Sangat recommended!",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900/90 to-pink-900/20 z-10"></div>
        
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                {heroSlides[currentSlide].title}
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl text-purple-300 font-light">
              {heroSlides[currentSlide].subtitle}
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {heroSlides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-200 hover:scale-105"
              >
                <Play className="mr-2 h-5 w-5" />
                Lihat Portfolio
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-purple-500 text-purple-300 font-semibold hover:bg-purple-900/20 transition-all duration-200"
              >
                Konsultasi Gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-12">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'w-8 bg-gradient-to-r from-purple-600 to-pink-600' 
                    : 'w-2 bg-purple-600/30 hover:bg-purple-600/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Layanan Kami
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Solusi produksi video komprehensif untuk kebutuhan visual Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-slate-800 rounded-lg p-8 h-full">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg mb-6">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-purple-300">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Mengapa Memilih MUAMMAR?
                </span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-300 mb-2">Pengalaman Terbukti</h3>
                    <p className="text-gray-300">Lebih dari 10 tahun pengalaman dalam industri film dan televisi Indonesia.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-300 mb-2">Tim Profesional</h3>
                    <p className="text-gray-300">Sutradara, sinematografer, dan editor berpengalaman dengan portfolio internasional.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-300 mb-2">Hasil Berkualitas</h3>
                    <p className="text-gray-300">Menggunakan peralatan terkini dan teknologi produksi terbaru untuk hasil maksimal.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-300 mb-2">Tepat Waktu</h3>
                    <p className="text-gray-300">Komitmen pada deadline tanpa mengorbankan kualitas produksi.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30"></div>
              <div className="relative bg-slate-800 rounded-lg p-8">
                <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-lg flex items-center justify-center">
                  <Play className="h-16 w-16 text-purple-300" />
                </div>
                <p className="text-center mt-4 text-purple-300">Watch Our Showreel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Apa Kata Klien
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Kepuasan klien adalah prioritas utama kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-purple-300">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Siap Mewujudkan Visi Visual Anda?
          </h2>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Mari diskusikan proyek Anda dan temukan bagaimana kami dapat membantu menceritakan kisah Anda dengan cara yang luar biasa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-purple-900 font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5" />
              Mulai Proyek Sekarang
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white text-white font-semibold hover:bg-white/10 transition-all duration-200"
            >
              Lihat Karya Kami
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}