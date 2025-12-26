export default function TermsPage() {
  const lastUpdated = "24 Desember 2024"

  return (
    <div className="min-h-screen bg-slate-950 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Terms & Conditions
            </span>
          </h1>
          <p className="text-gray-300 text-lg">
            Syarat dan Ketentuan Layanan MUAMMAR Film Production - Terakhir diperbarui: {lastUpdated}
          </p>
        </div>

        <div className="space-y-8 text-gray-300">
          <section className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">1. Penerimaan Syarat dan Ketentuan</h2>
            <p className="mb-4">
              Selamat datang di MUAMMAR Film Production. Syarat dan Ketentuan ini ("Syarat") mengatur 
              penggunaan website dan layanan yang disediakan oleh MUAMMAR Film Production ("kami," "kita," atau "perusahaan").
            </p>
            <p>
              Dengan mengakses atau menggunakan website dan layanan kami, Anda setuju untuk terikat oleh 
              Syarat ini. Jika Anda tidak setuju dengan Syarat ini, jangan gunakan website atau layanan kami.
            </p>
          </section>

          <section className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">2. Deskripsi Layanan</h2>
            <p className="mb-4">
              MUAMMAR Film Production menyediakan layanan produksi film dan televisi profesional, termasuk:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Produksi film (film pendek, film panjang, dokumenter)</li>
              <li>Produksi program televisi (drama, reality show, talk show)</li>
              <li>Video komersial dan corporate</li>
              <li>Layanan post-produksi (editing, VFX, color grading)</li>
              <li>Konsultasi kreatif dan pengembangan konsep</li>
              <li>Penyewaan peralatan produksi</li>
            </ul>
          </section>

          <section className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">3. Kewajiban Pengguna</h2>
            <p className="mb-4">Sebagai pengguna layanan kami, Anda setuju untuk:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Memberikan informasi yang akurat dan lengkap</li>
              <li>Mematuhi semua hukum dan peraturan yang berlaku</li>
              <li>Tidak menggunakan layanan untuk tujuan ilegal atau tidak etis</li>
              <li>Memiliki hak yang diperlukan untuk konten yang Anda berikan</li>
              <li>Melakukan pembayaran tepat waktu untuk layanan berbayar</li>
              <li>Menghormati hak kekayaan intelektual pihak ketiga</li>
              <li>Tidak mengganggu atau merusak operasi website</li>
            </ul>
          </section>

          <section className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">4. Hak Kekayaan Intelektual</h2>
            <p className="mb-4">
              Semua konten di website ini, termasuk namun tidak terbatas pada teks, gambar, video, logo, 
              dan desain, dilindungi oleh hak cipta, merek dagang, dan hak kekayaan intelektual lainnya.
            </p>
            <p className="mb-4">
              Karya yang dihasilkan melalui layanan kami tunduk pada perjanjian terpisah yang mengatur 
              kepemilikan dan penggunaan hak kekayaan intelektual.
            </p>
            <p>
              Anda tidak boleh mereproduksi, mendistribusikan, atau menggunakan konten kami tanpa 
              izin tertulis sebelumnya.
            </p>
          </section>

          <section className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">5. Pembayaran dan Biaya</h2>
            <h3 className="text-xl font-semibold text-purple-400 mb-3">5.1 Struktur Biaya</h3>
            <p className="mb-4">Biaya layanan kami meliputi:</p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Biaya produksi berdasarkan skala proyek</li>
              <li>Biaya kru dan talent</li>
              <li>Biaya peralatan dan lokasi</li>
              <li>Biaya post-produksi</li>
              <li>Biaya tambahan yang disepakati bersama</li>
            </ul>

            <h3 className="text-xl font-semibold text-purple-400 mb-3">5.2 Syarat Pembayaran</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Uang muka minimal 50% saat konfirmasi proyek</li>
              <li>Pelunasan sebelum delivery final</li>
              <li>Pembayaran dapat dilakukan melalui transfer bank</li>
              <li>Biaya tambahan akan dikenakan untuk keterlambatan pembayaran</li>
            </ul>
          </section>

          <section className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">6. Proyek dan Timeline</h2>
            <h3 className="text-xl font-semibold text-purple-400 mb-3">6.1 Perjanjian Proyek</h3>
            <p className="mb-4">Setiap proyek akan diatur oleh perjanjian tertulis yang mencakup:</p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Scope of work yang jelas</li>
              <li>Timeline dan milestone</li>
              <li>Biaya dan syarat pembayaran</li>
              <li>Kepemilikan hak kekayaan intelektual</li>
              <li>Ketentuan revisi dan approval</li>
            </ul>

            <h3 className="text-xl font-semibold text-purple-400 mb-3">6.2 Perubahan Proyek</h3>
            <p>
              Perubahan pada scope proyek akan dievaluasi dan dapat mengakibatkan penyesuaian 
              biaya dan timeline. Semua perubahan harus disetujui secara tertulis oleh kedua belah pihak.
            </p>
          </section>

          <section className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">7. Pembatalan dan Pengembalian Dana</h2>
            <h3 className="text-xl font-semibold text-purple-400 mb-3">7.1 Pembatalan oleh Klien</h3>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>&gt;30 hari sebelum produksi: Pengembalian 75% dari uang muka</li>
              <li>15-30 hari sebelum produksi: Pengembalian 50% dari uang muka</li>
              <li>&lt;15 hari sebelum produksi: Tidak ada pengembalian</li>
            </ul>

            <h3 className="text-xl font-semibold text-purple-400 mb-3">7.2 Pembatalan oleh Perusahaan</h3>
            <p>
              Jika kami membatalkan proyek karena alasan di luar kendali kami (force majeure), 
              kami akan mengembalikan seluruh pembayaran yang telah diterima.
            </p>
          </section>

          <section className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">8. Ketersediaan Layanan</h2>
            <p className="mb-4">
              Kami berusaha untuk menjaga ketersediaan layanan yang tinggi, namun tidak dapat menjamin 
              akses yang tidak terputus. Layanan mungkin tidak tersedia karena:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Maintenance terjadwal</li>
              <li>Gangguan teknis yang tidak terduga</li>
              <li>Force majeure (bencana alam, perang, dll)</li>
              <li>Kebijakan pemerintah atau peraturan yang berlaku</li>
            </ul>
          </section>

          <section className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">9. Privasi dan Data Pribadi</h2>
            <p>
              Penggunaan data pribadi Anda diatur oleh Kebijakan Privasi kami yang terpisah. 
              Dengan menggunakan layanan kami, Anda menyetujui pengumpulan dan penggunaan data 
              sesuai dengan kebijakan privasi kami.
            </p>
          </section>

          <section className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">10. Penolakan Jaminan</h2>
            <p className="mb-4">
              Layanan kami disediakan "sebagaimana adanya" dan "sebagaimana tersedia". Kami tidak 
              memberikan jaminan tersurat maupun tersirat, termasuk namun tidak terbatas pada:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Kesesuaian untuk tujuan tertentu</li>
              <li>Akurasi atau kelengkapan konten</li>
              <li>Tidak adanya virus atau malware</li>
              <li>Ketersediaan yang berkelanjutan</li>
            </ul>
          </section>

          <section className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">11. Batasan Tanggung Jawab</h2>
            <p className="mb-4">
              Sejauh diizinkan oleh hukum, tanggung jawab kami terbatas pada jumlah yang telah 
              Anda bayarkan untuk layanan yang terkait dengan klaim. Kami tidak bertanggung jawab atas:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
              <li>Kehilangan keuntungan atau peluang bisnis</li>
              <li>Kerusakan pada perangkat atau data</li>
              <li>Gangguan bisnis atau operasional</li>
            </ul>
          </section>

          <section className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">12. Ganti Rugi</h2>
            <p>
              Anda setuju untuk mengganti rugi, membela, dan membebaskan kami dari segala klaim, 
              kewajiban, kerugian, dan biaya (termasuk biaya hukum) yang timbul dari atau 
              sehubungan dengan pelanggaran Anda terhadap Syarat ini atau penggunaan layanan kami.
            </p>
          </section>

          <section className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">13. Hukum yang Berlaku</h2>
            <p>
              Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. 
              Setiap sengketa akan diselesaikan melalui perundingan baik-baik terlebih dahulu. 
              Jika tidak tercapai kesepakatan, sengketa akan diselesaikan melalui pengadilan yang 
              berwenang di Indonesia.
            </p>
          </section>

          <section className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">14. Perubahan Syarat dan Ketentuan</h2>
            <p>
              Kami berhak mengubah Syarat dan Ketentuan ini dari waktu ke waktu. Perubahan akan 
              berlaku efektif setelah diposting di website. Penggunaan lanjutan layanan kami 
              setelah perubahan menunjukkan penerimaan Anda terhadap Syarat yang diperbarui.
            </p>
          </section>

          <section className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">15. Kontak Kami</h2>
            <p className="mb-4">
              Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
            </p>
            <div className="space-y-2 text-purple-300">
              <p><strong>Email:</strong> legal@muammarfilm.com</p>
              <p><strong>Telepon:</strong> 0852-8570-3497</p>
              <p><strong>Alamat:</strong> Dusun Peutua Husen, Keutapang Dua, Idi Timur, Aceh Timur, Provinsi Aceh</p>
            </div>
          </section>

          <section className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">16. Pemisahan Kelayakan</h2>
            <p>
              Jika bagian mana pun dari Syarat ini dinyatakan tidak sah atau tidak dapat dilaksanakan, 
              bagian tersebut akan dihapus dan sisanya akan tetap berlaku sepenuhnya.
            </p>
          </section>

          <section className="bg-slate-800 rounded-lg p-6 border border-purple-500/20">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">17. Keseluruhan Perjanjian</h2>
            <p>
              Syarat dan Ketentuan ini, bersama dengan Kebijakan Privasi kami, merupakan keseluruhan 
              perjanjian antara Anda dan MUAMMAR Film Production mengenai penggunaan layanan kami.
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