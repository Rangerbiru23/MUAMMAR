export default function PrivacyPage() {
  const lastUpdated = "24 Desember 2024"

  return (
    <div className="min-h-screen bg-slate-950 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          <p className="text-gray-300 text-lg">
            Kebijakan Privasi MUAMMAR Film Production - Terakhir diperbarui: {lastUpdated}
          </p>
        </div>

        <div className="space-y-8 text-gray-300">
          <section className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">1. Pendahuluan</h2>
            <p className="mb-4">
              Selamat datang di MUAMMAR Film Production. Kami sangat menghargai privasi Anda dan berkomitmen 
              untuk melindungi informasi pribadi yang Anda berikan kepada kami. Kebijakan Privasi ini menjelaskan 
              bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda saat menggunakan layanan kami.
            </p>
            <p>
              Dengan menggunakan website dan layanan kami, Anda menyetujui praktik-praktik yang dijelaskan dalam 
              kebijakan privasi ini.
            </p>
          </section>

          <section className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">2. Informasi yang Kami Kumpulkan</h2>
            
            <h3 className="text-xl font-semibold text-purple-400 mb-3">2.1 Informasi Pribadi</h3>
            <p className="mb-4">Kami dapat mengumpulkan informasi pribadi berikut:</p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Nama lengkap</li>
              <li>Alamat email</li>
              <li>Nomor telepon</li>
              <li>Alamat perusahaan atau rumah</li>
              <li>Informasi pembayaran (saat menggunakan layanan berbayar)</li>
              <li>Informasi proyek dan kebutuhan produksi</li>
            </ul>

            <h3 className="text-xl font-semibold text-purple-400 mb-3">2.2 Informasi Teknis</h3>
            <p className="mb-4">Kami juga mengumpulkan informasi teknis secara otomatis:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Alamat IP</li>
              <li>Jenis browser dan sistem operasi</li>
              <li>Informasi perangkat</li>
              <li>Cookie dan data tracking</li>
              <li>Halaman yang dikunjungi dan waktu kunjungan</li>
            </ul>
          </section>

          <section className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">3. Cara Kami Menggunakan Informasi Anda</h2>
            <p className="mb-4">Kami menggunakan informasi yang dikumpulkan untuk:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Menyediakan dan mengelola layanan produksi film dan TV</li>
              <li>Merespons pertanyaan dan permintaan Anda</li>
              <li>Mengirimkan informasi tentang layanan kami</li>
              <li>Memproses pembayaran dan transaksi</li>
              <li>Meningkatkan kualitas layanan dan website</li>
              <li>Mengirimkan newsletter dan update (dengan persetujuan Anda)</li>
              <li>Mematuhi kewajiban hukum dan peraturan</li>
            </ul>
          </section>

          <section className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">4. Berbagi Informasi</h2>
            <p className="mb-4">Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada pihak ketiga. 
            Kami hanya akan berbagi informasi Anda dalam keadaan berikut:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Dengan persetujuan eksplisit dari Anda</li>
              <li>Kepada mitra bisnis tepercaya untuk menyediakan layanan</li>
              <li>Untuk mematuhi hukum atau perintah pengadilan</li>
              <li>Untuk melindungi hak, properti, atau keselamatan kami atau orang lain</li>
              <li>Kepada pihak ketiga dalam kasus merger, akuisisi, atau penjualan aset</li>
            </ul>
          </section>

          <section className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">5. Keamanan Data</h2>
            <p className="mb-4">
              Kami mengimplementasikan berbagai langkah keamanan untuk melindungi informasi pribadi Anda:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Enkripsi data saat transmisi dan penyimpanan</li>
              <li>Akses terbatas ke informasi pribadi</li>
              <li>Firewall dan sistem keamanan yang canggih</li>
              <li>Update keamanan reguler</li>
              <li>Training staf tentang keamanan data</li>
            </ul>
            <p className="mt-4">
              Namun, harap diingat bahwa tidak ada metode transmisi internet atau penyimpanan elektronik 
              yang 100% aman.
            </p>
          </section>

          <section className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">6. Cookie dan Tracking</h2>
            <p className="mb-4">
              Website kami menggunakan cookie untuk meningkatkan pengalaman pengguna:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Cookie esensial untuk fungsi website</li>
              <li>Cookie analitik untuk memahami penggunaan website</li>
              <li>Cookie pemasaran untuk personalisasi konten</li>
            </ul>
            <p>
              Anda dapat mengatur browser untuk menolak cookie atau memberi tahu saat cookie dikirim. 
              Namun, beberapa fitur website mungkin tidak berfungsi dengan baik tanpa cookie.
            </p>
          </section>

          <section className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">7. Hak Anda Sebagai Pengguna</h2>
            <p className="mb-4">Anda memiliki hak untuk:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
              <li>Memperbaiki informasi yang tidak akurat</li>
              <li>Menghapus informasi pribadi Anda (dalam batas tertentu)</li>
              <li>Menolak penggunaan informasi untuk tujuan pemasaran</li>
              <li>Meminta salinan data pribadi Anda</li>
              <li>Membatasi pemrosesan data Anda</li>
            </ul>
          </section>

          <section className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">8. Penyimpanan Data</h2>
            <p className="mb-4">
              Informasi pribadi Anda akan disimpan selama diperlukan untuk tujuan yang dijelaskan dalam 
              kebijakan privasi ini, kecuali periode penyimpanan yang lebih lama diperlukan atau diizinkan 
              oleh hukum.
            </p>
            <p>
              Kami akan menghapus atau mengamankan informasi pribadi Anda ketika tidak lagi diperlukan 
              untuk tujuan pengumpulan.
            </p>
          </section>

          <section className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">9. Link ke Pihak Ketiga</h2>
            <p>
              Website kami mungkin berisi link ke website pihak ketiga. Kami tidak bertanggung jawab atas 
              praktik privasi website tersebut. Kami mendorong Anda untuk membaca kebijakan privasi dari 
              setiap website yang Anda kunjungi.
            </p>
          </section>

          <section className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">10. Perubahan Kebijakan Privasi</h2>
            <p>
              Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan diposting 
              di halaman ini dengan tanggal "Terakhir Diperbarui" yang baru. Kami akan memberi tahu Anda 
              tentang perubahan signifikan melalui email atau pemberitahuan di website.
            </p>
          </section>

          <section className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">11. Kontak Kami</h2>
            <p className="mb-4">
              Jika Anda memiliki pertanyaan tentang kebijakan privasi ini atau praktik privasi kami, 
              silakan hubungi kami:
            </p>
            <div className="space-y-2 text-purple-300">
              <p><strong>Email:</strong> privacy@muammarfilm.com</p>
              <p><strong>Telepon:</strong> 0852-8570-3497</p>
              <p><strong>Alamat:</strong> Dusun Peutua Husen, Keutapang Dua, Idi Timur, Aceh Timur, Provinsi Aceh</p>
            </div>
          </section>

          <section className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">12. Hukum yang Berlaku</h2>
            <p>
              Kebijakan privasi ini diatur oleh dan ditafsirkan sesuai dengan hukum Indonesia. 
              Setiap sengketa akan diselesaikan melalui perundingan baik-baik atau melalui yurisdiksi 
              pengadilan di Indonesia.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center text-gray-400">
          <p>&copy; 2024 MUAMMAR Film Production. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}