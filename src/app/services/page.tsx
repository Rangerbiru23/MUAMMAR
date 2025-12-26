import { Film, Video, Camera, Music, Radio, Clapperboard, PlayCircle, Edit3, Palette, Mic, Users, Clock, CheckCircle, ArrowRight } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: "film",
      icon: Film,
      title: "Produksi Film",
      description: "Layanan produksi film lengkap dari konsep hingga distribusi dengan kualitas sinematik terbaik.",
      features: [
        "Development & Script Writing",
        "Pre-production & Storyboarding", 
        "Production & Directing",
        "Post-production & Editing",
        "Color Grading & Sound Design",
        "Distribution Strategy"
      ],
      pricing: {
        basic: "Mulai dari Rp 150 Juta",
        professional: "Mulai dari Rp 500 Juta",
        enterprise: "Custom Quote"
      }
    },
    {
      id: "tv",
      icon: Radio,
      title: "Program Televisi",
      description: "Produksi program TV berkualitas broadcasting untuk berbagai genre dan target audience.",
      features: [
        "TV Series & Drama",
        "Reality Show & Competition",
        "Talk Show & Interview",
        "Documentary Series",
        "News Magazine",
        "Live Event Coverage"
      ],
      pricing: {
        basic: "Mulai dari Rp 75 Juta/Episode",
        professional: "Mulai dari Rp 200 Juta/Episode", 
        enterprise: "Custom Quote"
      }
    },
    {
      id: "documentary",
      icon: Camera,
      title: "Video Dokumenter",
      description: "Dokumenter mendalam yang menceritakan kisah nyata dengan perspektif yang kuat dan emosional.",
      features: [
        "Research & Development",
        "Field Production",
        "Interview & Voice Over",
        "Archival Research",
        "Narrative Structure",
        "Impact Distribution"
      ],
      pricing: {
        basic: "Mulai dari Rp 100 Juta",
        professional: "Mulai dari Rp 300 Juta",
        enterprise: "Custom Quote"
      }
    },
    {
      id: "commercial",
      icon: Video,
      title: "Video Komersial",
      description: "Iklan TV dan video promosi yang efektif untuk meningkatkan brand awareness dan konversi.",
      features: [
        "Concept Development",
        "Brand Storytelling",
        "Product Photography",
        "TV Commercial Production",
        "Social Media Content",
        "Campaign Analytics"
      ],
      pricing: {
        basic: "Mulai dari Rp 50 Juta",
        professional: "Mulai dari Rp 150 Juta",
        enterprise: "Custom Quote"
      }
    },
    {
      id: "post",
      icon: Edit3,
      title: "Post-Production",
      description: "Layanan post-produksi lengkap dengan teknologi terkini dan tim editor berpengalaman.",
      features: [
        "Video Editing & Assembly",
        "Visual Effects (VFX)",
        "Motion Graphics & Animation",
        "Color Grading & Correction",
        "Sound Design & Mixing",
        "Format Conversion & Delivery"
      ],
      pricing: {
        basic: "Mulai dari Rp 25 Juta",
        professional: "Mulai dari Rp 75 Juta",
        enterprise: "Custom Quote"
      }
    },
    {
      id: "creative",
      icon: Palette,
      title: "Creative Services",
      description: "Layanan kreatif komprehensif untuk mengembangkan konsep visual yang kuat dan konsisten.",
      features: [
        "Creative Concept Development",
        "Brand Identity & Design",
        "Content Strategy",
        "Script & Copywriting",
        "Art Direction",
        "Creative Consulting"
      ],
      pricing: {
        basic: "Mulai dari Rp 20 Juta",
        professional: "Mulai dari Rp 60 Juta",
        enterprise: "Custom Quote"
      }
    }
  ]

  const process = [
    {
      step: 1,
      title: "Discovery & Briefing",
      description: "Memahami kebutuhan, tujuan, dan visi klien melalui diskusi mendalam dan analisis.",
      icon: Users
    },
    {
      step: 2,
      title: "Concept Development",
      description: "Mengembangkan konsep kreatif, script, dan storyboard yang sesuai dengan tujuan proyek.",
      icon: Clapperboard
    },
    {
      step: 3,
      title: "Pre-Production",
      description: "Persiapan lengkap termasuk casting, lokasi scouting, dan perencanaan produksi.",
      icon: Clock
    },
    {
      step: 4,
      title: "Production",
      description: "Proses shooting dengan tim profesional dan peralatan terkini untuk hasil maksimal.",
      icon: Camera
    },
    {
      step: 5,
      title: "Post-Production",
      description: "Editing, visual effects, sound design, dan color grading untuk finishing yang sempurna.",
      icon: Edit3
    },
    {
      step: 6,
      title: "Delivery & Support",
      description: "Delivery final dan dukungan purna jual untuk memastikan kepuasan klien.",
      icon: CheckCircle
    }
  ]

  const industries = [
    "Broadcasting & TV Networks",
    "Film Distribution", 
    "Corporate & Business",
    "Advertising Agencies",
    "Government Institutions",
    "Non-Profit Organizations",
    "Education & Training",
    "Entertainment & Media"
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900/90 to-pink-900/20"></div>
        
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Layanan Kami
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Solusi produksi visual komprehensif untuk kebutuhan film, televisi, dan konten digital Anda. 
              Dari konsep hingga distribusi, kami hadirkan karya berkualitas tinggi.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={service.id} className="group">
                <div className="bg-slate-800 rounded-lg p-8 border border-purple-500/20 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-purple-300">{service.title}</h3>
                        <p className="text-gray-400 text-sm mt-1">Layanan Premium</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-purple-300 mb-3">Fitur Utama:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-purple-500/20 pt-6">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-xs text-gray-400 mb-1">Basic</p>
                        <p className="text-sm font-semibold text-purple-300">{service.pricing.basic}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-1">Professional</p>
                        <p className="text-sm font-semibold text-purple-300">{service.pricing.professional}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-1">Enterprise</p>
                        <p className="text-sm font-semibold text-purple-300">{service.pricing.enterprise}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Proses Produksi
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Metodologi kami yang terstruktur untuk memastikan hasil terbaik untuk setiap proyek
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-slate-800 rounded-lg p-6 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-purple-400/30">0{item.step}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Industri Yang Dilayani
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Pengalaman luas dalam berbagai sektor industri
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-purple-500/20 text-center hover:border-purple-500/40 transition-colors duration-200">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <PlayCircle className="h-6 w-6 text-white" />
                </div>
                <p className="text-purple-300 font-medium">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Technology */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Peralatan & Teknologi
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Menggunakan teknologi terkini untuk hasil produksi terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Kamera & Lensa</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• ARRI Alexa Mini LF</li>
                <li>• RED Komodo 6K</li>
                <li>• Sony FX6/FX9</li>
                <li>• Canon C300 Mark III</li>
                <li>• Lensa Cinema Prime & Zoom</li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Audio & Sound</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Sound Devices MixPre</li>
                <li>• Sennheiser & Rode Microphones</li>
                <li>• Pro Tools & Adobe Audition</li>
                <li>• Foley & Sound Design Studio</li>
                <li>• 5.1 Surround Sound Mixing</li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Post-Production</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• DaVinci Resolve Studio</li>
                <li>• Adobe Creative Cloud</li>
                <li>• Final Cut Pro X</li>
                <li>• Autodesk Flame</li>
                <li>• 4K/8K Editing Suite</li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Lighting & Grip</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• ARRI SkyPanel & L-Series</li>
                <li>• Kino Flo & Dedolight</li>
                <li>• Grip & Electric Equipment</li>
                <li>• Dolly & Crane Systems</li>
                <li>• Drone & Stabilizer</li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Visual Effects</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• After Effects & Nuke</li>
                <li>• Cinema 4D & Blender</li>
                <li>• Houdini & Maya</li>
                <li>• Render Farm & GPU Acceleration</li>
                <li>• Motion Graphics Library</li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Live Production</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Multi-Camera Switching</li>
                <li>• Live Streaming Setup</li>
                <li>• Broadcast Graphics</li>
                <li>• Satellite & IP Distribution</li>
                <li>• Mobile Production Units</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Konsultasikan kebutuhan produksi visual Anda dengan tim profesional kami. 
            Dapatkan solusi terbaik yang disesuaikan dengan anggaran dan tujuan Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-purple-900 font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              <Mic className="mr-2 h-5 w-5" />
              Konsultasi Gratis
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white text-white font-semibold hover:bg-white/10 transition-all duration-200"
            >
              Lihat Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}