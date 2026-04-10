// Admin Portal — Bahasa Malaysia
// Loaded after ../data-bm.js; overrides window.CATS and window.ARTS only.

window.CATS = [
  {
    id: 'user-management',
    title: 'Pengurusan Pengguna',
    bg: '#eff6ff', fg: '#1d4ed8',
    desc: 'Jemput, urus dan keluarkan pengguna dalam organisasi anda.',
    arts: ['admin-add-user', 'admin-roles', 'admin-deactivate'],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
  },
  {
    id: 'permissions',
    title: 'Kebenaran & Peranan',
    bg: '#f0fdf4', fg: '#15803d',
    desc: 'Konfigurasi akses dan tindakan yang dibenarkan untuk setiap peranan pengguna.',
    arts: ['admin-perm-overview', 'admin-perm-category', 'admin-global-access'],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>'
  },
  {
    id: 'category-mgmt',
    title: 'Pengurusan Kategori',
    bg: '#fdf4ff', fg: '#7e22ce',
    desc: 'Cipta, susun dan kawal akses kepada kategori jabatan.',
    arts: ['admin-cat-create', 'admin-cat-access'],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>'
  },
  {
    id: 'system-config',
    title: 'Konfigurasi Sistem',
    bg: '#fff7ed', fg: '#c2410c',
    desc: 'Urus tetapan platform, tag fail, dan pilihan organisasi.',
    arts: ['admin-settings', 'admin-file-tags'],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>'
  },
  {
    id: 'audit-logs',
    title: 'Audit & Log Aktiviti',
    bg: '#fef2f2', fg: '#b91c1c',
    desc: 'Pantau aktiviti pengguna dan jana laporan pematuhan.',
    arts: ['admin-audit-view', 'admin-audit-export'],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>'
  },
];

window.ARTS = {
  'admin-add-user': {
    cat: 'user-management', title: 'Menjemput & Menambah Pengguna',
    exc: 'Cara menjemput pengguna baru dan mengurus jemputan yang belum diterima.',
    body: '<p>Sebagai pentadbir, anda boleh menjemput pengguna baru ke organisasi Doc-Scribe.ai anda dari panel Admin.</p><h2>Langkah Menjemput Pengguna</h2><ol><li>Pergi ke <strong>Admin &rsaquo; Pengguna</strong>.</li><li>Klik <strong>+ Jemput Pengguna</strong>.</li><li>Masukkan alamat emel pengguna.</li><li>Pilih peranan: Admin, Pengurus Kategori, Pengguna Standard, atau Baca Sahaja.</li><li>Klik <strong>Hantar Jemputan</strong>.</li></ol><p>Pengguna akan menerima emel dengan pautan jemputan yang sah selama <strong>72 jam</strong>.</p><h2>Mengurus Jemputan Belum Diterima</h2><ul><li><strong>Hantar Semula</strong> — jika pengguna tidak menerima emel.</li><li><strong>Batal</strong> — untuk membatalkan akses sebelum pengguna menyertai.</li></ul><div class="tip"><strong>Tip:</strong> Periksa alamat emel dengan teliti sebelum menghantar — ia tidak boleh diedit selepas jemputan dihantar.</div>'
  },
  'admin-roles': {
    cat: 'user-management', title: 'Menetapkan Peranan Pengguna',
    exc: 'Cara menukar peranan pengguna dalam platform.',
    body: '<p>Peranan pengguna menentukan tindakan yang boleh dilakukan. Peranan boleh ditukar pada bila-bila masa oleh pentadbir.</p><h2>Peranan yang Tersedia</h2><table><thead><tr><th>Peranan</th><th>Keterangan</th></tr></thead><tbody><tr><td><strong>Admin</strong></td><td>Kawalan penuh — pengguna, kategori, tetapan, log audit.</td></tr><tr><td><strong>Pengurus Kategori</strong></td><td>Boleh cipta dan urus kategori; tidak boleh urus pengguna atau tetapan sistem.</td></tr><tr><td><strong>Pengguna Standard</strong></td><td>Boleh muat naik, susun dan jalankan Carian AI pada dokumen yang boleh diakses.</td></tr><tr><td><strong>Baca Sahaja</strong></td><td>Boleh lihat dan guna Carian AI pada dokumen yang dikongsi sahaja.</td></tr></tbody></table><h2>Menukar Peranan</h2><ol><li>Pergi ke <strong>Admin &rsaquo; Pengguna</strong>.</li><li>Klik nama pengguna.</li><li>Klik <strong>Edit Peranan</strong>, pilih peranan baru dan sahkan.</li></ol><p>Perubahan peranan berkuat kuasa serta-merta.</p>'
  },
  'admin-deactivate': {
    cat: 'user-management', title: 'Menyahaktifkan & Mengeluarkan Pengguna',
    exc: 'Cara menggantung atau mengeluarkan pengguna secara kekal dari organisasi anda.',
    body: '<p>Apabila pengguna meninggalkan organisasi atau perlu digantung aksesnya, anda boleh menyahaktifkan atau mengeluarkan akaun mereka.</p><h2>Menyahaktifkan Pengguna (Disyorkan)</h2><p>Penyahaktifan menggantung akses sambil memelihara semua dokumen dan sejarah. Akaun boleh diaktifkan semula pada bila-bila masa.</p><ol><li>Pergi ke <strong>Admin &rsaquo; Pengguna</strong>.</li><li>Klik nama pengguna.</li><li>Klik <strong>Nyahaktifkan Pengguna</strong> dan sahkan.</li></ol><h2>Mengeluarkan Pengguna Secara Kekal</h2><p>Pengeluaran kekal memadamkan akaun. Dokumen dalam My Box pengguna akan diarkibkan.</p><ol><li>Pergi ke <strong>Admin &rsaquo; Pengguna</strong>.</li><li>Klik nama pengguna.</li><li>Klik <strong>Keluarkan Pengguna</strong> dan sahkan.</li></ol><div class="tip"><strong>Nota:</strong> Pengeluaran kekal tidak boleh dibatalkan. Kami mengesyorkan penyahaktifan melainkan data perlu dihapuskan atas sebab pematuhan.</div>'
  },
  'admin-perm-overview': {
    cat: 'permissions', title: 'Gambaran Keseluruhan Kebenaran',
    exc: 'Pecahan penuh tentang apa yang boleh dan tidak boleh dilakukan oleh setiap peranan.',
    body: '<p>Jadual di bawah merumuskan kebenaran merentas semua ciri platform.</p><table><thead><tr><th>Ciri</th><th>Admin</th><th>Pengurus Kat.</th><th>Standard</th><th>Baca Sahaja</th></tr></thead><tbody><tr><td>Muat Naik Dokumen</td><td>&#10003;</td><td>&#10003;</td><td>&#10003;</td><td>&#10007;</td></tr><tr><td>Padam Dokumen</td><td>&#10003;</td><td>&#10003; (sendiri)</td><td>&#10003; (sendiri)</td><td>&#10007;</td></tr><tr><td>Cipta Kategori</td><td>&#10003;</td><td>&#10003;</td><td>&#10007;</td><td>&#10007;</td></tr><tr><td>Urus Akses Kategori</td><td>&#10003;</td><td>&#10003;</td><td>&#10007;</td><td>&#10007;</td></tr><tr><td>Jalankan Carian AI</td><td>&#10003;</td><td>&#10003;</td><td>&#10003;</td><td>&#10003;</td></tr><tr><td>Kongsi Dokumen</td><td>&#10003;</td><td>&#10003;</td><td>&#10003;</td><td>&#10007;</td></tr><tr><td>Jemput Pengguna</td><td>&#10003;</td><td>&#10007;</td><td>&#10007;</td><td>&#10007;</td></tr><tr><td>Urus Peranan</td><td>&#10003;</td><td>&#10007;</td><td>&#10007;</td><td>&#10007;</td></tr><tr><td>Lihat Log Audit</td><td>&#10003;</td><td>&#10007;</td><td>&#10007;</td><td>&#10007;</td></tr><tr><td>Tetapan Sistem</td><td>&#10003;</td><td>&#10007;</td><td>&#10007;</td><td>&#10007;</td></tr></tbody></table>'
  },
  'admin-perm-category': {
    cat: 'permissions', title: 'Kawalan Akses Peringkat Kategori',
    exc: 'Cara memberi atau menyekat akses kepada kategori tertentu untuk pengguna individu.',
    body: '<p>Di luar peranan seluruh platform, anda boleh mengawal pengguna yang mempunyai akses kepada setiap kategori individu.</p><h2>Memberi Akses</h2><ol><li>Pergi ke <strong>Admin &rsaquo; Kategori</strong> dan klik nama kategori.</li><li>Di bawah <em>Kawalan Akses</em>, klik <strong>+ Tambah Pengguna</strong>.</li><li>Cari mengikut nama atau emel, pilih tahap akses: <em>Lihat Sahaja</em> atau <em>Lihat &amp; Muat Naik</em>.</li><li>Klik <strong>Simpan</strong>.</li></ol><h2>Mencabut Akses</h2><ol><li>Buka kategori dalam Admin &rsaquo; Kategori.</li><li>Cari pengguna di bawah Kawalan Akses.</li><li>Klik <strong>Keluarkan</strong> di sebelah nama mereka.</li></ol><div class="tip"><strong>Nota:</strong> Admin sentiasa mempunyai akses kepada semua kategori tanpa mengira tetapan peringkat kategori.</div>'
  },
  'admin-global-access': {
    cat: 'permissions', title: 'Akses Global',
    exc: 'Cara menjadikan dokumen atau kategori boleh diakses oleh semua pengguna dalam organisasi anda.',
    body: '<p>Akses Global membenarkan mana-mana pengguna dalam organisasi anda mengakses dokumen atau kategori tertentu tanpa perkongsian individu.</p><h2>Pada Dokumen</h2><ol><li>Buka dokumen dan klik <strong>Kongsi</strong>.</li><li>Togol <strong>Akses Global</strong> kepada Hidup.</li><li>Pilih <em>Boleh Lihat</em> atau <em>Boleh Muat Turun</em>.</li><li>Klik <strong>Simpan</strong>.</li></ol><h2>Pada Kategori</h2><ol><li>Pergi ke <strong>Admin &rsaquo; Kategori</strong> dan klik kategori.</li><li>Di bawah Kawalan Akses, aktifkan <strong>Akses Global</strong>.</li></ol><p>Gunakan Akses Global untuk polisi syarikat, SOP dan templat dikongsi.</p><div class="tip"><strong>Amalan terbaik:</strong> Gunakan Akses Global dengan berhati-hati. Untuk dokumen sensitif, sentiasa gunakan perkongsian individu atau berasaskan peranan.</div>'
  },
  'admin-cat-create': {
    cat: 'category-mgmt', title: 'Mencipta & Mengurus Kategori',
    exc: 'Cara mencipta kategori jabatan baru dan mengkonfigurasi tetapannya.',
    body: '<p>Kategori adalah folder peringkat jabatan yang dikongsi yang boleh diakses oleh ahli pasukan berdasarkan kebenaran.</p><h2>Mencipta Kategori</h2><ol><li>Pergi ke <strong>Admin &rsaquo; Kategori</strong>.</li><li>Klik <strong>+ Kategori Baru</strong>.</li><li>Masukkan nama dan keterangan pilihan.</li><li>Klik <strong>Cipta</strong>.</li></ol><h2>Mengedit Kategori</h2><ol><li>Klik nama kategori.</li><li>Klik <strong>Edit</strong>, kemaskini nama atau keterangan, kemudian simpan.</li></ol><h2>Memadam Kategori</h2><ol><li>Klik nama kategori.</li><li>Klik <strong>Padam Kategori</strong> dan sahkan.</li></ol><div class="tip"><strong>Amaran:</strong> Memadam kategori memindahkan semua dokumen di dalamnya ke keadaan arkib. Dokumen tidak dipadam secara kekal tetapi tidak akan muncul dalam paparan standard sehingga dipulihkan oleh pentadbir.</div>'
  },
  'admin-cat-access': {
    cat: 'category-mgmt', title: 'Mengurus Keahlian Kategori',
    exc: 'Cara menambah atau mengeluarkan pengguna dari kategori dan menetapkan tahap akses mereka.',
    body: '<p>Setiap kategori mempunyai senarai kawalan akses tersendiri yang boleh anda urus secara bebas.</p><h2>Menambah Ahli</h2><ol><li>Pergi ke <strong>Admin &rsaquo; Kategori</strong> dan klik kategori.</li><li>Di bawah <em>Ahli</em>, klik <strong>+ Tambah Ahli</strong>.</li><li>Cari mengikut nama atau emel dan pilih pengguna.</li><li>Pilih: <em>Lihat Sahaja</em> atau <em>Penyumbang</em> (boleh juga muat naik dan susun).</li><li>Klik <strong>Tambah</strong>.</li></ol><h2>Mengeluarkan Ahli</h2><ol><li>Buka kategori dalam Admin &rsaquo; Kategori.</li><li>Di bawah Ahli, cari pengguna dan klik <strong>Keluarkan</strong>.</li></ol><p>Perubahan berkuat kuasa serta-merta pada muatan halaman seterusnya untuk pengguna yang terjejas.</p>'
  },
  'admin-settings': {
    cat: 'system-config', title: 'Tetapan Sistem',
    exc: 'Konfigurasi nama organisasi, bahasa lalai dan pilihan pemberitahuan.',
    body: '<p>Tetapan Sistem membolehkan anda mengkonfigurasi tingkah laku global instans Doc-Scribe.ai anda.</p><h2>Mengakses Tetapan</h2><p>Pergi ke <strong>Admin &rsaquo; Tetapan</strong>.</p><h2>Tetapan Organisasi</h2><ul><li><strong>Nama Organisasi</strong> — ditunjukkan dalam pengepala platform dan pemberitahuan emel.</li><li><strong>Bahasa Lalai</strong> — menetapkan bahasa antara muka lalai untuk pengguna baru.</li><li><strong>Zon Waktu</strong> — digunakan untuk log audit dan cap masa pemberitahuan.</li></ul><h2>Tetapan Pemberitahuan</h2><ul><li><strong>Dokumen Dikongsi</strong> — maklumkan pengguna apabila dokumen dikongsi dengan mereka.</li><li><strong>Jemputan Diterima</strong> — maklumkan pentadbir apabila pengguna yang dijemput menyertai.</li><li><strong>Ambang Storan</strong> — maklumkan pentadbir apabila penggunaan storan melebihi had.</li></ul><p>Klik <strong>Simpan Tetapan</strong> selepas membuat sebarang perubahan.</p>'
  },
  'admin-file-tags': {
    cat: 'system-config', title: 'Pengurusan Tag Fail',
    exc: 'Cara mencipta dan mengurus medan metadata tersuai untuk dokumen.',
    body: '<p>Tag Fail adalah medan metadata tersuai yang muncul pada setiap dokumen, membantu pengguna mengklasifikasikan dan mencari dokumen menggunakan data berstruktur.</p><h2>Mencipta Tag Fail</h2><ol><li>Pergi ke <strong>Admin &rsaquo; Tetapan &rsaquo; Tag Fail</strong>.</li><li>Klik <strong>+ Tag Baru</strong>.</li><li>Masukkan label (contoh: <em>Jabatan</em>, <em>Tarikh Kontrak</em>, <em>Klien</em>).</li><li>Pilih jenis: Teks, Tarikh, Dropdown, atau Nombor.</li><li>Tetapkan sama ada medan adalah <em>Diperlukan</em> atau <em>Pilihan</em>.</li><li>Klik <strong>Simpan</strong>.</li></ol><h2>Mengedit & Memadam Tag</h2><p>Anda boleh menamakan semula atau memadam tag dari Admin &rsaquo; Tetapan &rsaquo; Tag Fail. Memadam tag mengeluarkannya dari semua dokumen — nilai sedia ada akan hilang.</p><div class="tip"><strong>Tip:</strong> Sasarkan 5–8 medan penting. Terlalu banyak tag mencipta halangan bagi pengguna yang memuat naik dokumen.</div>'
  },
  'admin-audit-view': {
    cat: 'audit-logs', title: 'Melihat Log Audit',
    exc: 'Cara memantau aktiviti pengguna dan menapis entri log audit.',
    body: '<p>Log Audit merekodkan semua tindakan platform yang signifikan termasuk akses dokumen, muat naik, pemadaman, perkongsian, dan perubahan pengurusan pengguna.</p><h2>Mengakses Log Audit</h2><p>Pergi ke <strong>Admin &rsaquo; Log Audit</strong>.</p><h2>Apa Yang Dilog</h2><ul><li>Dokumen dimuat naik, dimuat turun, dipadam atau dikongsi</li><li>Sesi Carian AI dimulakan</li><li>Pengguna dijemput, peranan ditukar, disahaktifkan atau dikeluarkan</li><li>Kategori dicipta, diubah suai atau dipadam</li><li>Tetapan sistem ditukar</li><li>Acara log masuk dan log keluar</li></ul><h2>Penapisan</h2><p>Tapis mengikut <strong>Pengguna</strong>, <strong>Jenis Tindakan</strong>, <strong>Julat Tarikh</strong>, atau <strong>Dokumen</strong> menggunakan bar penapis di bahagian atas log.</p>'
  },
  'admin-audit-export': {
    cat: 'audit-logs', title: 'Mengeksport Laporan Audit',
    exc: 'Cara mengeksport data log audit untuk tujuan pematuhan dan pelaporan.',
    body: '<p>Log audit boleh dieksport sebagai CSV untuk pelaporan luaran, audit pematuhan atau integrasi dengan alatan SIEM.</p><h2>Mengeksport</h2><ol><li>Pergi ke <strong>Admin &rsaquo; Log Audit</strong>.</li><li>Gunakan penapis (julat tarikh, pengguna, jenis tindakan) untuk menghadkan eksport anda.</li><li>Klik <strong>Eksport CSV</strong>.</li><li>Fail dimuat turun serta-merta ke pelayar anda.</li></ol><h2>Medan CSV Disertakan</h2><ul><li>Cap Masa (ISO 8601)</li><li>Nama &amp; Emel Pengguna</li><li>Jenis Tindakan</li><li>Nama Sumber (dokumen atau kategori)</li><li>Alamat IP</li><li>Hasil (Berjaya / Gagal)</li></ul><div class="tip"><strong>Nota pematuhan:</strong> Untuk keperluan audit GDPR atau PDPA, eksport log yang merangkumi tempoh yang berkaitan dan simpan mengikut polisi pengekalan data organisasi anda.</div>'
  },
};

window.VIDEOS = [
  { id: 'UmLDcJ7pvK4', label: 'Tutorial Admin — Persediaan', title: 'Bermula sebagai Admin', desc: 'Panduan lengkap panel Admin — menjemput pengguna, menetapkan peranan, dan mengkonfigurasi tetapan sistem.', thumb: 'https://img.youtube.com/vi/UmLDcJ7pvK4/maxresdefault.jpg', url: 'https://youtu.be/UmLDcJ7pvK4' },
  { id: 'WtNTT6OnOyk', label: 'Tutorial Admin — Pengurusan', title: 'Mengurus Pengguna, Kebenaran & Log Audit', desc: 'Konfigurasi akses kategori, urus peranan, dan eksport laporan pematuhan daripada panel Admin.', thumb: 'https://img.youtube.com/vi/WtNTT6OnOyk/maxresdefault.jpg', url: 'https://youtu.be/WtNTT6OnOyk' }
];
