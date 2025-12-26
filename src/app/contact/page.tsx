"use client"

import { useState } from "react"
import { Send, MapPin, Phone, Mail, Clock, CheckCircle, MessageSquare, User, Briefcase, DollarSign, Calendar } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: ""
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const projectTypes = [
    "Produksi Film",
    "Program Televisi",
    "Video Dokumenter",
    "Video Komersial",
    "Music Video",
    "Post-Production",
    "Lainnya"
  ]

  const budgetRanges = [
    "Di bawah Rp 50 Juta",
    "Rp 50 - 100 Juta",
    "Rp 100 - 250 Juta",
    "Rp 250 - 500 Juta",
    "Di atas Rp 500 Juta",
    "Diskusikan lebih lanjut"
  ]

  const timelines = [
    "Segera (dalam 1 bulan)",
    "1-3 bulan",
    "3-6 bulan",
    "6-12 bulan",
    "Lebih dari 1 tahun",
    "Belum ditentukan"
  ]

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      content: "Dusun Peutua Husen, Keutapang Dua, Idi Timur, Aceh Timur, Provinsi Aceh",
      action: "Buka di Maps"
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "0852-8570-3497",
      action: "Hubungi Sekarang"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@muammarfilm.com",
      action: "Kirim Email"
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: "Senin - Jumat: 09:00 - 18:00\nSabtu: 09:00 - 15:00\nMinggu: Tutup",
      action: ""
    }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: ""
      })
    }, 3000)
  }

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
                Hubungi Kami
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Mari diskusikan proyek visual Anda. Tim profesional kami siap membantu 
              mewujudkan visi kreatif Anda dengan solusi produksi terbaik.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-purple-300 mb-2">{info.title}</h3>
                <p className="text-gray-300 text-sm whitespace-pre-line mb-3">{info.content}</p>
                {info.action && (
                  <button className="text-purple-400 text-sm hover:text-purple-300 transition-colors duration-200">
                    {info.action} →
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Kirim Pesan Anda
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Isi formulir di bawah ini dan tim kami akan menghubungi Anda dalam 24 jam
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-green-900/20 border border-green-500/50 rounded-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-green-400 mb-2">Pesan Terkirim!</h3>
              <p className="text-gray-300">
                Terima kasih telah menghubungi kami. Tim kami akan segera menghubungi Anda.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-purple-300 mb-2">
                    Nama Lengkap *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-purple-300 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-purple-300 mb-2">
                    Nomor Telepon *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200"
                      placeholder="0812-3456-7890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-purple-300 mb-2">
                    Perusahaan/Organisasi
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200"
                      placeholder="PT. Example Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-purple-300 mb-2">
                    Jenis Proyek *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200"
                  >
                    <option value="">Pilih jenis proyek</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-purple-300 mb-2">
                    Estimasi Budget
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200"
                    >
                      <option value="">Pilih rentang budget</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-purple-300 mb-2">
                    Timeline Proyek
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200"
                    >
                      <option value="">Pilih timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-purple-300 mb-2">
                  Pesan Detail *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200 resize-none"
                    placeholder="Jelaskan detail proyek Anda, visi, dan tujuan yang ingin dicapai..."
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">
                  * Wajib diisi. Tim kami akan menghubungi Anda dalam 24 jam.
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Pertanyaan yang sering diajukan tentang layanan kami
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                Berapa lama waktu yang dibutuhkan untuk menyelesaikan proyek?
              </h3>
              <p className="text-gray-300">
                Waktu pengerjaan bervariasi tergantung pada kompleksitas proyek. Video komersial biasanya 
                memakan waktu 2-4 minggu, sementara film dokumenter bisa memakan waktu 2-6 bulan. 
                Kami akan memberikan timeline detail setelah diskusi awal.
              </p>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                Apakah kami bisa bekerja dengan budget terbatas?
              </h3>
              <p className="text-gray-300">
                Ya, kami fleksibel dan dapat menyesuaikan layanan sesuai budget Anda. Kami akan 
                memberikan solusi kreatif yang optimal dengan anggaran yang tersedia.
              </p>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                Apa saja yang termasuk dalam paket produksi?
              </h3>
              <p className="text-gray-300">
                Paket produksi kami meliputi pra-produksi (konsep, storyboard), produksi (shooting), 
                dan pasca-produksi (editing, color grading, sound design). Kami juga menyediakan 
                layanan tambahan seperti casting dan lokasi scouting.
              </p>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                Bagaimana dengan hak cipta dan kepemilikan hasil karya?
              </h3>
              <p className="text-gray-300">
                Kepemilikan hak cipta akan diatur dalam kontrak kerja sama. Umumnya, setelah 
                pelunasan pembayaran, klien memiliki hak penuh atas hasil karya untuk penggunaan 
                sesuai yang disepakati.
              </p>
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
            Jangan ragu untuk menghubungi kami. Konsultasi gratis dan tanpa 
            kewajiban untuk membahas visi kreatif Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:085285703497"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-purple-900 font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              Hubungi Langsung
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white text-white font-semibold hover:bg-white/10 transition-all duration-200"
            >
              Lihat Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}