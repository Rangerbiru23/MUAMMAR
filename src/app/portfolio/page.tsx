"use client"

import { useState } from "react"
import { Play, Filter, Calendar, Eye, Heart, Award, TrendingUp, Clock, Users } from "lucide-react"

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = [
    { id: "all", name: "Semua" },
    { id: "film", name: "Film" },
    { id: "tv", name: "TV Program" },
    { id: "commercial", name: "Komersial" },
    { id: "documentary", name: "Dokumenter" },
    { id: "music", name: "Music Video" }
  ]

  const projects = [
    {
      id: 1,
      title: "Jejak Aceh",
      category: "documentary",
      thumbnail: "/api/placeholder/400/300",
      duration: "45 menit",
      year: "2024",
      views: "125K",
      likes: "8.5K",
      description: "Dokumenter mendalam tentang kekayaan budaya dan sejarah Aceh.",
      director: "Muammar A. Rahman",
      cinematographer: "Sarah Wijaya",
      awards: ["Best Documentary 2024", "Cinematography Excellence"],
      client: "Kementerian Pariwisata"
    },
    {
      id: 2,
      title: "Kisah di Balik Layar",
      category: "tv",
      thumbnail: "/api/placeholder/400/300",
      duration: "60 menit/episode",
      year: "2023",
      views: "2.3M",
      likes: "45K",
      description: "Serial drama tentang perjuangan industri film Indonesia.",
      director: "Budi Santoso",
      cinematographer: "Maya Putri",
      awards: ["Best TV Series 2023"],
      client: "National TV Network"
    },
    {
      id: 3,
      title: "Inspirasi Indonesia",
      category: "commercial",
      thumbnail: "/api/placeholder/400/300",
      duration: "30 detik",
      year: "2024",
      views: "5.2M",
      likes: "120K",
      description: "Iklan komersial inspiratif untuk merek nasional terkemuka.",
      director: "Sarah Wijaya",
      cinematographer: "Muammar A. Rahman",
      awards: ["Best Commercial 2024"],
      client: "Mega Corporation"
    },
    {
      id: 4,
      title: "Mimpi di Tengah Kota",
      category: "film",
      thumbnail: "/api/placeholder/400/300",
      duration: "90 menit",
      year: "2023",
      views: "890K",
      likes: "32K",
      description: "Film drama tentang perjuangan anak muda di kota besar.",
      director: "Muammar A. Rahman",
      cinematographer: "International Team",
      awards: ["Best Indie Film 2023", "Audience Choice"],
      client: "Independent Production"
    },
    {
      id: 5,
      title: "Ritual Nusantara",
      category: "documentary",
      thumbnail: "/api/placeholder/400/300",
      duration: "50 menit",
      year: "2024",
      views: "678K",
      likes: "28K",
      description: "Eksplorasi ritual tradisional di berbagai daerah Indonesia.",
      director: "Budi Santoso",
      cinematographer: "Maya Putri",
      awards: ["Cultural Heritage Award"],
      client: "UNESCO Indonesia"
    },
    {
      id: 6,
      title: "Bintang Kecil",
      category: "music",
      thumbnail: "/api/placeholder/400/300",
      duration: "4 menit",
      year: "2024",
      views: "12M",
      likes: "450K",
      description: "Music video untuk artis Indonesia papan atas.",
      director: "Sarah Wijaya",
      cinematographer: "Creative Team",
      awards: ["Best Music Video 2024"],
      client: "Major Record Label"
    }
  ]

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const stats = [
    { icon: Play, label: "Total Proyek", value: "200+" },
    { icon: Eye, label: "Total Views", value: "100M+" },
    { icon: Users, label: "Klien Puas", value: "150+" },
    { icon: Award, label: "Penghargaan", value: "35+" }
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
                Portfolio Kami
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Koleksi karya terbaik kami yang telah menginspirasi jutaan audiens dan 
              mendapatkan pengakuan di industri kreatif Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-b from-slate-900 to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-slate-900 sticky top-16 z-40 backdrop-blur-md bg-opacity-90 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-purple-400" />
              <span className="text-purple-300 font-medium">Filter:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                      : "bg-slate-800 text-gray-300 hover:bg-slate-700 border border-purple-500/20"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer" onClick={() => setSelectedProject(project)}>
                <div className="relative overflow-hidden rounded-lg bg-slate-800 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  {/* Thumbnail */}
                  <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="h-12 w-12 text-purple-300 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full">
                        {categories.find(c => c.id === project.category)?.name}
                      </span>
                      <span className="text-gray-400 text-sm">{project.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-purple-300 mb-2 group-hover:text-purple-200 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-3">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {project.duration}
                        </span>
                        <span className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {project.views}
                        </span>
                      </div>
                      <span className="flex items-center">
                        <Heart className="h-4 w-4 mr-1" />
                        {project.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div className="bg-slate-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/20" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                ×
              </button>
              
              {/* Video Player Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center">
                <Play className="h-16 w-16 text-purple-300" />
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-3xl font-bold text-purple-300">{selectedProject.title}</h2>
                  <span className="px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full">
                    {categories.find(c => c.id === selectedProject.category)?.name}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-purple-300 mb-3">Detail Produksi</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Durasi:</span>
                        <span className="text-gray-300">{selectedProject.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Tahun:</span>
                        <span className="text-gray-300">{selectedProject.year}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Sutradara:</span>
                        <span className="text-gray-300">{selectedProject.director}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Sinematografer:</span>
                        <span className="text-gray-300">{selectedProject.cinematographer}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Klien:</span>
                        <span className="text-gray-300">{selectedProject.client}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-purple-300 mb-3">Penghargaan</h3>
                    <div className="space-y-2">
                      {selectedProject.awards.map((award, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Award className="h-4 w-4 text-yellow-400" />
                          <span className="text-sm text-gray-300">{award}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-purple-500/20">
                  <div className="flex items-center space-x-6 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {selectedProject.views} views
                    </span>
                    <span className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" />
                      {selectedProject.likes} likes
                    </span>
                  </div>
                  
                  <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-200">
                    Hubungi Kami
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Siap Membuat Proyek Anda Berikutnya?
          </h2>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Mari wujudkan visi kreatif Anda bersama tim profesional berpengalaman kami. 
            Dari konsep hingga produksi final, kami siap membantu Anda.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-purple-900 font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            Mulai Proyek Sekarang
          </a>
        </div>
      </section>
    </div>
  )
}