import { Award, Users, Target, Lightbulb, Heart, MapPin, Phone, Mail, Calendar, CheckCircle } from "lucide-react"

export default function AboutPage() {
  const timeline = [
    {
      year: "2014",
      title: "Awal Mula",
      description: "MUAMMAR Film Production didirikan dengan visi menciptakan konten visual berkualitas tinggi untuk industri kreatif Indonesia."
    },
    {
      year: "2016",
      title: "Ekspansi Layanan",
      description: "Meluncurkan divisi produksi televisi dan memperluas jangkauan ke berbagai stasiun TV nasional."
    },
    {
      year: "2018",
      title: "Penghargaan Pertama",
      description: "Menerima penghargaan Festival Film Indonesia untuk kategori Dokumenter Terbaik."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Beradaptasi dengan era digital dan mengembangkan layanan streaming dan konten media sosial."
    },
    {
      year: "2024",
      title: "Ekspansi Regional",
      description: "Memperluas operasi ke regional Asia Tenggara dan membangun kemitraan internasional."
    }
  ]

  const values = [
    {
      icon: Lightbulb,
      title: "Inovasi",
      description: "Selalu berinovasi dalam teknik produksi dan penceritaan untuk menghasilkan karya yang segar dan relevan."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Kecintaan mendalam terhadap seni dan teknologi film menjadi dasar setiap produksi yang kami kerjakan."
    },
    {
      icon: Users,
      title: "Kolaborasi",
      description: "Membangun tim yang solid dan bekerja sama dengan klien untuk mewujudkan visi bersama."
    },
    {
      icon: Target,
      title: "Kualitas",
      description: "Komitmen pada standar kualitas tertinggi dalam setiap aspek produksi dari pra hingga pasca-produksi."
    },
    {
      icon: Award,
      title: "Profesionalisme",
      description: "Pendekatan profesional dalam setiap proyek dengan manajemen waktu dan anggaran yang tepat."
    },
    {
      icon: CheckCircle,
      title: "Integritas",
      description: "Menjunjung tinggi kejujuran, transparansi, dan etika dalam semua bisnis dan kreativitas."
    }
  ]

  const team = [
    {
      name: "Muammar A. Rahman",
      role: "Founder & CEO",
      description: "Visioner dengan 15+ tahun pengalaman di industri film dan televisi Indonesia.",
      expertise: ["Creative Direction", "Produksi", "Business Development"]
    },
    {
      name: "Sarah Wijaya",
      role: "Creative Director",
      description: "Sutradara berbakat dengan portfolio film-film pemenang penghargaan.",
      expertise: ["Directing", "Screenwriting", "Storytelling"]
    },
    {
      name: "Budi Santoso",
      role: "Head of Production",
      description: "Ahli produksi dengan pengalaman dalam puluhan proyek film dan TV nasional.",
      expertise: ["Production Management", "Budgeting", "Logistics"]
    },
    {
      name: "Maya Putri",
      role: "Post-Production Lead",
      description: "Spesialis editing dan visual effects dengan background dari industri Hollywood.",
      expertise: ["Video Editing", "VFX", "Color Grading"]
    }
  ]

  const achievements = [
    "50+ Film Produksi Selesai",
    "100+ Program Televisi",
    "25+ Penghargaan Nasional & Internasional",
    "200+ Klien Puas",
    "15+ Tahun Pengalaman",
    "10+ Negara Jangkauan Distribusi"
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
                Tentang MUAMMAR
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Perusahaan produksi film dan televisi profesional yang berdedikasi untuk 
              menceritakan kisah-kisah inspiratif melalui lensa kreatif dan teknologi terkini.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Cerita Kami
                </span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Didirikan pada tahun 2014, <strong className="text-purple-400">MUAMMAR Film Production</strong> 
                  lahir dari passion mendalam terhadap seni bercerita dan teknologi visual. Berawal dari tim kecil 
                  dengan visi besar, kami telah tumbuh menjadi salah satu rumah produksi terkemuka di Indonesia.
                </p>
                <p>
                  Berlokasi di Aceh Timur, kami telah berhasil membawa kisah-kisah lokal ke panggung nasional 
                  dan internasional. Setiap proyek adalah kesempatan untuk mengeksplorasi batas-batas kreativitas 
                  dan teknologi dalam menciptakan konten yang tidak hanya menghibur, tetapi juga memberikan dampak.
                </p>
                <p>
                  Dengan dukungan tim profesional berpengalaman dan peralatan produksi terkini, kami terus 
                  berkomitmen untuk menjadi mitra terpercaya dalam mewujudkan visi visual klien kami, dari 
                  konsep awal hingga distribusi final.
                </p>
              </div>
              
              <div className="mt-8 p-6 bg-slate-800 rounded-lg border border-purple-500/20">
                <h3 className="text-xl font-semibold text-purple-300 mb-4">Misi Kami</h3>
                <p className="text-gray-300 italic">
                  "Menjadi rumah produksi terdepan yang menghasilkan konten visual berkualitas tinggi, 
                  menginspirasi audiens global, dan mendukung pertumbuhan industri kreatif Indonesia."
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30"></div>
              <div className="relative bg-slate-800 rounded-lg p-8">
                <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      10+
                    </div>
                    <div className="text-purple-300">Tahun Berkarya</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Perjalanan Kami
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Milestone penting dalam evolusi MUAMMAR Film Production
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-600 to-pink-600"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-slate-800 p-6 rounded-lg border border-purple-500/20">
                      <div className="text-2xl font-bold text-purple-400 mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-purple-300 mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-slate-900"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Nilai-Nilai Kami
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Prinsip yang memandu setiap karya kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-slate-800 rounded-lg p-6 h-full">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg mb-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Tim Leadership
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Profesional berpengalaman yang memimpin kesuksesan kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-purple-500/20 text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-purple-300 mb-1">{member.name}</h3>
                <p className="text-sm text-purple-400 mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} className="px-2 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Prestasi & Capaian
            </h2>
            <p className="text-xl text-purple-200">
              Hasil kerja keras dan dedikasi kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                </div>
                <span className="text-white font-medium">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800 rounded-lg p-8 border border-purple-500/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Hubungi Kami
                </span>
              </h2>
              <p className="text-gray-300">
                Mari diskusikan proyek visual Anda bersama tim profesional kami
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="font-semibold text-purple-300 mb-2">Alamat</h3>
                <p className="text-gray-300 text-sm">
                  Dusun Peutua Husen, Keutapang Dua<br />
                  Idi Timur, Aceh Timur<br />
                  Provinsi Aceh
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="font-semibold text-purple-300 mb-2">Telepon</h3>
                <p className="text-gray-300 text-sm">
                  0852-8570-3497
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="font-semibold text-purple-300 mb-2">Email</h3>
                <p className="text-gray-300 text-sm">
                  info@muammarfilm.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}