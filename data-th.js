/* ── HELP CENTRE DATA (THAI) ── */
window.UI_STRINGS = {
  helpCentre: "ศูนย์ช่วยเหลือ",
  searchGuides: "ค้นหาคู่มือ...",
  resources: "แหล่งข้อมูล",
  tutorials: "บทเรียน",
  tryProduct: "ลองใช้ผลิตภัณฑ์",
  howCanWeHelp: "เราจะ <span>ช่วยเหลือคุณได้อย่างไร?</span>",
  exploreGuides: "สำรวจคู่มือ บทเรียนวิดีโอ และเอกสารทางเทคนิคของเราเพื่อเชี่ยวชาญด้านอัจฉริยะเอกสาร",
  searchPlaceholder: "ค้นหาคำตอบ คู่มือ คุณสมบัติ...",
  browseByTopic: "เรียกดูตามหัวข้อ",
  videoTutorials: "บทเรียนวิดีโอ",
  resourcesAndPapers: "แหล่งข้อมูลและสมุดปกขาว",
  stillNeedHelp: "ยังต้องการความช่วยเหลือใช่ไหม?",
  supportTeamAvailability: "ทีมสนับสนุนของเราพร้อมให้บริการทุกวันตลอด 24 ชั่วโมงสำหรับผู้ใช้ระดับองค์กรพรีเมียม",
  contactSupport: "ติดต่อฝ่ายสนับสนุน",
  footerDesc: "อัจฉริยะเอกสารที่ขับเคลื่อนด้วย AI สำหรับการจัดการความรู้ระดับองค์กร เปลี่ยนเอกสารคงที่ของคุณให้เป็นทรัพย์สินความรู้เชิงโต้ตอบ",
  solution: "โซลูชัน",
  support: "สนับสนุน",
  legal: "กฎหมาย",
  features: "คุณสมบัติ",
  securityTitle: "ความปลอดภัย",
  pricing: "ราคา",
  enterprise: "องค์กร",
  apiDocs: "เอกสาร API",
  systemStatus: "สถานะระบบ",
  contact: "ติดต่อ",
  privacyPolicy: "นโยบายความเป็นส่วนตัว",
  termsOfService: "ข้อกำหนดการให้บริการ",
  cookiePolicy: "นโยบายคุกกี้",
  allRightsReserved: "สงวนลิขสิทธิ์ทั้งหมด",
  builtWithPrecision: "สร้างขึ้นด้วยความแม่นยำสำหรับผู้ใช้ระดับองค์กรพรีเมียม",
  browseAllSupport: "เรียกดูการสนับสนุนทั้งหมด",
  moreArticles: "รายการเพิ่มเติม",
  articlesLabel: "บทความ",
  readTime: "นาทีในการอ่าน",
  updated: "อัปเดตเมื่อ",
  previous: "ก่อนหน้า",
  next: "ถัดไป",
  home: "หน้าหลัก",
  noResults: "ไม่พบผลลัพธ์",
  myBox: "ตู้บันทึกของฉัน (My Box)",
  category: "หมวดหมู่ (Category)"
};

window.CATS = [
  {
    id: 'getting-started', title: 'การเริ่มต้นใช้งาน', bg: '#dbeafe', fg: '#1B2571',
    desc: 'เรียนรู้ว่า Doc-Scribe.ai คืออะไรและจะเปลี่ยนเวิร์กโฟลว์เอกสารของคุณได้อย่างไร',
    arts: ['what-is', 'how-it-works', 'language'],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C12 2 6 6 6 12c0 2 1 4 2 5l4 2 4-2c1-1 2-3 2-5 0-6-6-10-6-10z"/><circle cx="12" cy="12" r="2"/><path d="M6 17c-2 1-3 3-2 4s3 0 4-2"/><path d="M18 17c2 1 3 3 2 4s-3 0-4-2"/></svg>'
  },
  {
    id: 'doc-management', title: 'การจัดการเอกสาร', bg: '#d1fae5', fg: '#047857',
    desc: 'อัปโหลด จัดระเบียบ แท็ก และจัดการเอกสารของคุณอย่างมีประสิทธิภาพ',
    arts: ['upload', 'mybox-vs-cat', 'create-cat', 'collections', 'metadata', 'file-compatibility'],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h3.5l2 2H19a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/><path d="M12 11v4M10 13h4"/></svg>'
  },
  {
    id: 'ai-features', title: 'คุณสมบัติ AI', bg: '#fce7f3', fg: '#be185d',
    desc: 'โต้ตอบกับเอกสารของคุณโดยใช้โหมด AI และแชทที่ทรงพลัง',
    arts: ['chat-ai', 'ai-modes', 'cross-doc', 'export-ai'],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M6 10H3M6 14H3M18 10h3M18 14h3M10 6V3M14 6V3M10 18v3M14 18v3"/><circle cx="12" cy="12" r="2"/></svg>'
  },
  {
    id: 'sharing', title: 'การแบ่งปันและการทำงานร่วมกัน', bg: '#fef3c7', fg: '#b45309',
    desc: 'แบ่งปันเอกสารอย่างปลอดภัยและทำงานร่วมกับทีมของคุณ',
    arts: ['sharing'],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.4 10.8l7.2-4.1M8.4 13.2l7.2 4.1"/></svg>'
  },
  {
    id: 'account', title: 'บัญชีและการตั้งค่า', bg: '#ede9fe', fg: '#6d28d9',
    desc: 'จัดการโปรไฟล์ บทบาท การแจ้งเตือน และค่ากำหนดของคุณ',
    arts: ['user-roles', 'account-settings', 'notifications', 'user-access'],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6"/><circle cx="19" cy="6" r="2.5"/><path d="M19 3.5v1M19 8.5v1M17.5 5h-1M21.5 7h1M17.8 4.2l-.7-.7M20.9 7.3l.7.7M17.8 7.8l-.7.7M20.9 4.7l.7-.7"/></svg>'
  },
  {
    id: 'troubleshooting', title: 'การแก้ไขปัญหา', bg: '#fee2e2', fg: '#dc2626',
    desc: 'ค้นหาแนวทางแก้ไขปัญหาที่พบบ่อยและกลับมาใช้งานได้อย่างรวดเร็ว',
    arts: ['troubleshooting', 'data-security'],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>'
  }
];

window.ARTS = {
  'what-is': { 
    cat: 'getting-started', title: 'Doc-Scribe.ai คืออะไร', exc: 'แพลตฟอร์มอัจฉริยะเอกสารที่ขับเคลื่อนด้วย AI สำหรับการจัดการความรู้ในองค์กร', 
    body: '<p>Doc-Scribe.ai เป็นแพลตฟอร์ม <strong>อัจฉริยะเอกสารที่ขับเคลื่อนด้วย AI</strong> ซึ่งช่วยให้องค์กรจัดการ ทำความเข้าใจ และดึงความรู้ออกจากเอกสารของตนได้</p><h2>ปัญหาที่ช่วยแก้ไข</h2><p>องค์กรสมัยใหม่สร้างเอกสารหลายพันฉบับ —— รายงาน นโยบาย รายงานการประชุม สัญญา และบันทึกโครงการ การค้นหาข้อมูลที่ถูกต้องมักต้องการให้พนักงานค้นหาผ่านไฟล์ด้วยตนเอง ซึ่งทำให้ล่าช้าและไม่มีประสิทธิภาพ</p><h2>ทางแก้ไข</h2><p>แทนที่จะค้นหาด้วยตนเอง ผู้ใช้สามารถ <strong>ถามคำถามกับเอกสารโดยตรง</strong> โดยใช้ AI ระบบจะดึงข้อมูลที่เกี่ยวข้อง สรุปประเด็นสำคัญ และให้คำตอบที่แม่นยำภายในไม่กี่วินาที</p><div class="tip"><strong>พูดง่ายๆ คือ:</strong> คุณไม่ได้ค้นหาเอกสารของคุณอีกต่อไป —— แต่คุณกำลังถามคำถามกับมัน</div><h2>เหมาะสำหรับใคร?</h2><ul><li>องค์กรที่จัดการเอกสารปริมาณมหาศาล</li><li>ทีมที่ต้องการคำตอบที่รวดเร็วและแม่นยำจากบันทึกภายใน</li><li>องค์กรที่ต้องการสภาพแวดล้อม AI ที่ปลอดภัยและเป็นส่วนตัว</li></ul>' 
  },

  'how-it-works': { 
    cat: 'getting-started', title: 'Doc-Scribe.ai ทำงานอย่างไร', exc: 'เป็นการรวมระบบการจัดการเอกสารเข้ากับเอ็นจิ้น AI ส่วนตัวที่สร้างขึ้นเพื่อองค์กรโดยเฉพาะ', 
    body: '<p>Doc-Scribe.ai รวม <strong>ระบบการจัดการเอกสาร (DMS)</strong> เข้ากับเอ็นจิ้น AI ส่วนตัวที่ออกแบบมาสำหรับเอกสารองค์กรโดยเฉพาะ</p><h2>ความสามารถหลัก</h2><ul><li>จัดเก็บและจัดระเบียบเอกสารอย่างปลอดภัย</li><li>ค้นหาเอกสารโดยใช้ภาษาธรรมชาติ</li><li>วิเคราะห์เอกสารด้วย AI</li><li>ดึงข้อมูลสำคัญโดยอัตโนมัติ</li><li>สร้างบทสรุปและข้อมูลเชิงลึกได้ทันที</li></ul><img class="screenshot" src="images/image1.png" onclick="openLb(this.src)" alt="ผังภาพรวมแพลตฟอร์ม"><p class="screenshot-caption">Doc-Scribe.ai —— เอ็นจิ้น AI เปลี่ยนเอกสารของคุณให้เป็นคำตอบทันทีและการตัดสินใจที่ชาญฉลาดขึ้น</p><h2>แพลตฟอร์มองค์กรที่ปลอดภัย</h2><ul><li>สภาพแวดล้อม AI ส่วนตัว —— ข้อมูลของคุณจะไม่ไหลออกจากองค์กร</li><li>การควบคุมการเข้าถึงตามบทบาท</li><li>การแชร์เอกสารที่ปลอดภัย</li><li>ระบบสิทธิการเข้าถึงข้อมูล</li></ul><h2>การโต้ตอบแบบหลายเอกสาร</h2><p>ผู้ใช้สามารถ <strong>ถามคำถามข้ามเอกสารหลายฉบับพร้อมกัน</strong> เพื่อค้นหาข้อมูลเชิงลึกจากคอลเลกชันเอกสารขนาดใหญ่ได้ทันที</p><div class="tip"><strong>วิธีการทำงาน:</strong> ระบบจะอ่านเอกสารของคุณ สร้างดัชนีความรู้ส่วนตัว และให้คุณโต้ตอบผ่านอินเทอร์เฟซแชท —— ทั้งหมดนี้อยู่ในสภาพแวดล้อมที่ปลอดภัยและเป็นส่วนตัว</div>' 
  },

  'upload': { 
    cat: 'doc-management', title: 'อัปโหลดเอกสารฉบับแรกของคุณ', exc: 'คู่มือทีละขั้นตอนเพื่ออัปโหลดและประมวลผลเอกสารแรกของคุณ', 
    body: '<p>การอัปโหลดเอกสารเป็นขั้นตอนแรกในการใช้งาน Doc-Scribe.ai เมื่ออัปโหลดแล้ว AI จะประมวลผลและทำดัชนีเอกสารของคุณโดยอัตโนมัติเพื่อให้พร้อมสำหรับการสอบถาม</p><h2>ขั้นตอนการอัปโหลด</h2><ol class="steps"><li>คลิก <strong>อัปโหลด (Upload)</strong> จากเมนูนำทาง</li><li>เลือกไฟล์จากคอมพิวเตอร์ของคุณ</li><li>เลือกปลายทาง: <strong>ตู้บันทึกของฉัน (My Box)</strong> (ส่วนตัว) หรือ <strong>หมวดหมู่ (Category)</strong> (แชร์)</li><li>คลิก <strong>อัปโหลดทันที (Upload Now)</strong></li></ol><img class="screenshot" src="images/image2.png" onclick="openLb(this.src)" alt="หน้าจออัปโหลดเอกสาร"><p class="screenshot-caption">หน้าจออัปโหลด —— เลือกไฟล์และเลือก My Box หรือหมวดหมู่เป็นปลายทาง</p><h2>สิ่งที่เกิดขึ้นหลังการอัปโหลด</h2><ul><li>ประมวลผลเอกสาร</li><li>ดึงข้อมูลเนื้อหาข้อความ</li><li>ทำดัชนีเนื้อหาเพื่อการค้นหาด้วย AI</li><li>ทำให้เอกสารพร้อมใช้งานใน AI แชท</li></ul><div class="tip"><strong>คำแนะนำ:</strong> เอกสารมักจะพร้อมสำหรับการตอบโต้ด้วย AI ในเวลาเพียงไม่กี่วินาที สำหรับไฟล์ขนาดใหญ่ โปรดรอสักครู่เพื่อให้กระบวนการเสร็จสิ้นก่อนเริ่มสอบถาม</div>' 
  },

  'mybox-vs-cat': { 
    cat: 'doc-management', title: 'My Box เทียบกับ หมวดหมู่', exc: 'ทำความเข้าใจสภาพแวดล้อมการจัดเก็บข้อมูลทั้งสองแบบและเวลาที่ควรใช้แต่ละแบบ', 
    body: '<p>Doc-Scribe.ai มีสภาพแวดล้อมการจัดเก็บเอกสารสองแบบ</p><h2>ตู้บันทึกของฉัน (My Box)</h2><p>My Box คือ <strong>พื้นที่เอกสารส่วนตัว</strong> ของคุณ ไฟล์ที่เก็บไว้ที่นี่เป็นส่วนตัวโดยค่าเริ่มต้น —— คุณเท่านั้นที่มองเห็นได้ เหมาะสำหรับงานร่างและงานส่วนตัว</p><img class="screenshot" src="images/image3.png" onclick="openLb(this.src)" alt="มุมมองรายการ My Box"><p class="screenshot-caption">My Box —— พื้นที่เอกสารส่วนตัวของคุณ คุณเท่านั้นที่เห็นได้</p><h2>หมวดหมู่ (Categories)</h2><p>หมวดหมู่คิอ <strong>โฟลเดอร์แผนกที่แชร์ร่วมกัน</strong> เอกสารเหล่านี้สามารถเข้าถึงได้โดยผู้ใช้รายอื่นในแผนกเดียวกัน</p><img class="screenshot" src="images/image4.png" onclick="openLb(this.src)" alt="มุมมองไฟล์ทั้งหมดแยกตามหมวดหมู่"><p class="screenshot-caption">มุมมองไฟล์ทั้งหมด —— เอกสารจัดเรียงไว้ในหมวดหมู่แผนกพร้อมการค้นหาด้วย AI</p><p><strong>โครงสร้างตัวอย่าง:</strong></p><ul><li>แผนกการขาย<ul><li>ใบเสนอราคา</li><li>รายการราคา</li><li>ข้อมูลคู่แข่ง</li><li>เอกสารประกวดราคา</li></ul></li></ul><h2>การเปรียบเทียบอย่างรวดเร็ว</h2><table><thead><tr><th>คุณสมบัติ</th><th>My Box</th><th>หมวดหมู่</th></tr></thead><tbody><tr><td>การมองเห็น</td><td>ส่วนตัว (คุณเท่านั้น)</td><td>แชร์ (แผนก)</td></tr><tr><td>การใช้งานที่ดีที่สุด</td><td>งานร่าง, ไฟล์ส่วนตัว</td><td>การทำงานร่วมกันในทีม</td></tr><tr><td>การควบคุมการเข้าถึง</td><td>คุณเป็นผู้ควบคุม</td><td>แอดมิน + บทบาทผู้ใช้</td></tr></tbody></table><div class="tip"><strong>คำแนะนำ:</strong> ใช้ My Box สำหรับเอกสารใดๆ ที่คุณยังไม่พร้อมจะแชร์ เมื่อพร้อมสำหรับทีมแล้วจึงค่อยย้ายไปยังหมวดหมู่</div>' 
  },

  'create-cat': { 
    cat: 'doc-management', title: 'การสร้างหมวดหมู่', exc: 'เรียนรู้วิธีสร้างและจัดการหมวดหมู่เอกสารของแผนก', 
    body: '<p>หมวดหมู่ช่วยจัดระเบียบเอกสารภายในแผนกและทำให้สมาชิกในทีมที่เหมาะสมเข้าถึงได้</p><h2>ขั้นตอนการสร้างหมวดหมู่</h2><ol class="steps"><li>คลิก <strong>จัดการหมวดหมู่ (Manage Category)</strong> ในเมนูนำทาง</li><li>ตรวจสอบว่าเลือก <strong>แถบหลัก (Main Tab)</strong></li><li>ป้อน <strong>ชื่อหมวดหมู่</strong> (เช่น ใบเสนอราคา)</li><li>เลือกไอคอนและสี (หากต้องการ)</li><li>คลิก <strong>สร้าง (Create)</strong></li></ol><img class="screenshot" src="images/image5.png" onclick="openLb(this.src)" alt="หน้าจอสร้างหมวดหมู่"><p class="screenshot-caption">สร้างหมวดหมู่ —— ตั้งชื่อ ไอคอน และสีให้กับหมวดหมู่แผนกของคุณ</p><div class="tip"><strong>แนวทางปฏิบัติที่ดีที่สุด:</strong> ตั้งชื่อหมวดหมู่ตามแผนกหรือประเภทเอกสาร (เช่น การเงิน, สัญญา, ใบเสนอราคา) เพื่อให้แน่ใจว่าสมาชิกทุกคนในทีมสามารถค้นหาได้ง่าย</div>' 
  },

  'collections': { 
    cat: 'doc-management', title: 'การใช้งานคอลเลกชัน', exc: 'จัดกลุ่มเอกสารจากหมวดหมู่ต่างๆ เข้าไว้ในพื้นที่ทำงานเสมือนเดียว', 
    body: '<p>คอลเลกชันช่วยให้คุณสามารถ <strong>จัดกลุ่มเอกสารจากหมวดหมู่ต่างๆ</strong> เข้าไว้ในพื้นที่ทำงานเสมือนเดียวได้ ไฟล์ต้นฉบับจะยังคงอยู่ในหมวดหมู่เดิม —— คอลเลกชันเป็นเพียงมุมมองที่ถูกจัดรวบรวมมาเท่านั้น</p><h2>ตัวอย่าง</h2><p><strong>คอลเลกชัน: การยื่นเรื่องของลูกค้าในไตรมาสที่ 1 ปี 2025</strong></p><p>เอกสารอาจมาจาก: ใบเสนอราคา, หนังสือราคา, ข้อมูลคู่แข่ง, เอกสารประกวดราคา</p><h2>ขั้นตอนการสร้างคอลเลกชัน</h2><ol class="steps"><li>คลิก <strong>คอลเลกชัน (Collections)</strong> จากเมนูนำทาง</li><li>คลิก <strong>คอลเลกชันใหม่</strong></li><li>ป้อนชื่อคอลเลกชัน</li><li>คลิก <strong>สร้าง</strong></li></ol><img class="screenshot" src="images/image6.png" onclick="openLb(this.src)" alt="ไดอะล็อกสร้างคอลเลกชัน"><p class="screenshot-caption">สร้างคอลเลกชัน —— รวมกลุ่มเอกสารข้ามหมวดหมู่เพื่อการวิเคราะห์ข้ามเอกสาร</p><div class="tip"><strong>คำแนะนำ:</strong> เมื่อคุณทำการค้นหาด้วย AI ในคอลเลกชัน AI จะวิเคราะห์เอกสารทั้งหมดพร้อมกัน —— เหมาะอย่างยิ่งสำหรับการค้นหาข้อมูลเชิงลึกข้ามเอกสาร</div>' 
  },

  'metadata': { 
    cat: 'doc-management', title: 'ข้อมูลเมตาและการติดแท็ก', exc: 'แนบฟิลด์ข้อมูลเมตาลงในเอกสารเพื่อเพิ่มความแม่นยำในการค้นหา', 
    body: '<p>ข้อมูลเมตา (Metadata) ช่วยให้คุณ <strong>แนบข้อมูลเพิ่มเติม</strong> ไปกับเอกสาร ทำให้ค้นหาได้ง่ายขึ้นและช่วยให้ AI เข้าใจเนื้อหาได้อย่างแม่นยำขึ้น</p><h2>ตัวอย่าง —— ข้อมูลเมตาของใบแจ้งหนี้</h2><ul><li>เลขที่ใบแจ้งหนี้</li><li>วันที่ในใบแจ้งหนี้</li><li>ซัพพลายเออร์</li><li>จำนวนเงินรวม</li></ul><h2>ขั้นตอนการสร้างแท็กไฟล์</h2><ol class="steps"><li>คลิก <strong>จัดการแท็กไฟล์ (Manage File Tags)</strong></li><li>เลือก <strong>สร้างแท็กไฟล์ใหม่</strong></li><li>ป้อนชื่อแท็ก (เช่น ใบแจ้งหนี้)</li><li>เพิ่มฟิลด์ข้อมูลเมตา เช่น เลขที่ใบแจ้งหนี้, วันที่ เป็นต้น</li><li>คลิก <strong>สร้างแท็กไฟล์ใหม่</strong></li></ol><img class="screenshot" src="images/image7.png" onclick="openLb(this.src)" alt="หน้าจอจัดการแท็กไฟล์"><p class="screenshot-caption">จัดการแท็กไฟล์ —— กำหนดค่าฟิลด์ข้อมูลเมตา เช่น เลขที่ใบแจ้งหนี้และวันที่</p><div class="tip"><strong>คำแนะนำระดับมืออาชีพ:</strong> เอกสารที่ติดแท็กอย่างดีจะให้คำตอบ AI ที่แม่นยำกว่า และทำให้การค้นคืนสำหรับทั้งทีมทำได้อย่างรวดเร็วมาก</div>' 
  },

  'chat-ai': { 
    cat: 'ai-features', title: 'โต้ตอบกับ AI แชท', exc: 'ถามคำถามกับเอกสารของคุณโดยตรงโดยใช้ภาษาธรรมชาติ', 
    body: '<p>แชท AI (AI Chat) ช่วยให้ผู้ใช้ <strong>โต้ตอบกับเอกสารโดยตรง</strong> โดยใช้ภาษาธรรมชาติ แทนที่จะต้องอ่านเอกสารทั้งหมด คุณเพียงแค่ถามคำถาม</p><h2>ขั้นตอนการใช้งาน AI แชท</h2><ol class="steps"><li>นำทางไปยังเอกสารที่คุณต้องการวิเคราะห์</li><li>เลือกเอกสาร</li><li>คลิกที่ <strong>การค้นหาด้วย AI (AI Search)</strong></li><li>ป้อนคำถามของคุณในหน้าต่างแชท AI</li></ol><img class="screenshot" src="images/image8.png" onclick="openLb(this.src)" alt="การเลือกเอกสารและเปิดแชท AI"><p class="screenshot-caption">เลือกเอกสารแล้วคลิก ถาม AI เพื่อเปิดแผงแชท AI</p><h2>ตัวอย่างคำถาม</h2><ul><li>"สรุปเอกสารฉบับนี้ให้หน่อย"</li><li>"ยอดรวมในใบเสนอราคาคือเท่าไหร่?"</li><li>"ระบุชื่อซัพพลายเออร์ทั้งหมดที่กล่าวถึง"</li><li>"เลขที่ใบแจ้งหนี้คืออะไร?"</li></ul><img class="screenshot" src="images/image9.png" onclick="openLb(this.src)" alt="AI แชทตอบคำถาม"><p class="screenshot-caption">แชท AI —— ถามคำถามและรอรับคำตอบที่ทราบบริบทจากเอกสารของคุณได้ทันที</p><div class="tip"><strong>คำแนะนำระดับมืออาชีพ:</strong> เริ่มด้วยคำถามกว้างๆ ("สรุปเอกสารนี้") จากนั้นเจาะลึกรายละเอียดเพื่อให้ได้คำตอบที่แม่นยำที่สุด</div>' 
  },

  'ai-modes': { 
    cat: 'ai-features', title: 'ทำความเข้าใจโหมด AI', exc: 'โหมด AI พิเศษหกโหมดที่ออกแบบมาสำหรับการวิเคราะห์เอกสารรูปแบบต่างๆ', 
    body: '<p>Doc-Scribe จัดเตรียม <strong>โหมด AI</strong> ที่หลากหลายซึ่งปรับให้เหมาะกับการวิเคราะห์ประเภทต่างๆ</p><div class="mode-cards"><div class="mode-card"><div class="mode-card-head"><div class="mode-ico" style="background:#dbeafe;color:#1B2571">GQ</div><h4>General Query</h4></div><p>คำถามทั่วไป ใช้สำหรับคำถามประจำวันและการสรุปภาพรวม</p><div class="mode-ex">เช่น: "สรุปเอกสารฉบับนี้"</div></div><div class="mode-card"><div class="mode-card-head"><div class="mode-ico" style="background:#d1fae5;color:#065f46">VZ</div><h4>Visualizer</h4></div><p>ผู้นำเสนอภาพ สร้างแผนภูมิ ไดอะแกรม และสรุปภาพจากข้อมูลในเอกสาร</p></div><div class="mode-card"><div class="mode-card-head"><div class="mode-ico" style="background:#fce7f3;color:#9d174d">AN</div><h4>Analyst</h4></div><p>นักวิเคราะห์ วิเคราะห์เจาะลึกและระบุรูปแบบหรือความไม่สอดคล้องกัน</p><div class="mode-ex">เช่น: "เปรียบเทียบใบเสนอราคาซัพพลายเออร์"</div></div><div class="mode-card"><div class="mode-card-head"><div class="mode-ico" style="background:#fef3c7;color:#92400e">RV</div><h4>Reviewer</h4></div><p>ผู้ตรวจสอบ ตรวจสอบข้อผิดพลาด ข้อมูลที่ขาดหาย หรือความขัดแย้งในเอกสาร</p></div><div class="mode-card"><div class="mode-card-head"><div class="mode-ico" style="background:#ede9fe;color:#4c1d95">TR</div><h4>Transcript</h4></div><p>วิเคราะห์บันทึกการประชุมและดึงข้อมูลการสนทนา งาน และการตัดสินใจ</p></div><div class="mode-card"><div class="mode-card-head"><div class="mode-ico" style="background:#fee2e2;color:#991b1b">EX</div><h4>Extractor</h4></div><p>เครื่องดึงข้อมูล ดึงข้อมูลที่มีโครงสร้างจากเอกสารเช่น ใบแจ้งหนี้ หรือรายงาน</p></div></div><img class="screenshot" src="images/image10.png" onclick="openLb(this.src)" alt="แผนภูมิจากโหมด Visualizer"><p class="screenshot-caption">Visualizer —— สร้างแผนภูมิภาพต่างๆ จากข้อมูลเอกสารของคุณ</p><img class="screenshot" src="images/image11.png" onclick="openLb(this.src)" alt="Analyst เปรียบเทียบซัพพลายเออร์"><p class="screenshot-caption">Analyst —— เปรียบเทียบใบเสนอราคาและค้นหารูปแบบหรือข้อมูลเชิงลึก</p><img class="screenshot" src="images/image12.png" onclick="openLb(this.src)" alt="Reviewer ตรวจข้อผิดพลาด"><p class="screenshot-caption">Reviewer —— ตรวจสอบข้อผิดพลาด ความไม่สอดคล้อง และข้อมูลที่หายไป</p><img class="screenshot" src="images/image13.png" onclick="openLb(this.src)" alt="Transcript วิเคราะห์การประชุม"><p class="screenshot-caption">Transcript —— ดึงรายการสิ่งที่ต้องทำ (Action Items) ผู้รับผิดชอบ และกำหนดเสร็จจากบันทึกการประชุม</p>' 
  },

  'cross-doc': { 
    cat: 'ai-features', title: 'การวิเคราะห์ข้ามเอกสาร', exc: 'ถามคำถามข้ามเอกสารหลายฉบับพร้อมกัน', 
    body: '<p>การวิเคราะห์ข้ามเอกสารช่วยให้คุณสามารถถามคำถาม <strong>ข้ามเอกสารหลายฉบับพร้อมกัน</strong> ได้ โดยให้ข้อมูลเชิงลึกจากคอลเลกชันทั้งหมดของคุณ</p><h2>วิธีการใช้งาน</h2><ol class="steps"><li>สร้าง <strong>คอลเลกชัน</strong> ที่มีเอกสารที่เกี่ยวข้อง</li><li>เปิดคอลเลกชัน</li><li>คลิก <strong>การค้นหาด้วย AI</strong> —— AI จะค้นหาข้อมูลในเอกสารที่เลือกทั้งหมด</li><li>ป้อนคำถามของคุณ</li></ol><h2>ตัวอย่างคำถาม</h2><ul><li>"ในกลุ่มใบเสนอราคาเหล่านี้ ซัพพลายเออร์เจ้าไหนเสนอราคาต่ำที่สุด?"</li><li>"สรุปการตัดสินใจที่สำคัญจากบันทึกการประชุมทั้งหมดในไตรมาสนี้"</li><li>"มีความขัดแย้งระหว่างสัญญากับขอบเขตงาน (Scope of Work) หรือไม่?"</li></ul><div class="tip"><strong>คำแนะนำ:</strong> จัดกลุ่มคอลเลกชันให้มุ่งเน้นในเรื่องเดียวกันเพื่อให้ได้ผลการวิเคราะห์ที่ดีที่สุด</div>' 
  },

  'export-ai': { 
    cat: 'ai-features', title: 'การส่งออกผลลัพธ์ AI', exc: 'ส่งออกข้อมูลที่มีโครงสร้างที่ดึงโดย AI ไปยัง Excel หรือระบบ ERP ของคุณ', 
    body: '<p>ผลลัพธ์จาก AI (โดยเฉพาะจาก <strong>โหมด Extractor</strong>) สามารถส่งออกเป็นรูปแบบที่มีโครงสร้างเพื่อนำไปใช้ในระบบอื่นต่อได้</p><h2>รูปแบบที่รองรับ</h2><ul><li>Excel (.xlsx)</li><li>CSV</li><li>JSON (สำหรับบูรณาการ ERP/API)</li></ul><h2>วิธีการส่งออก</h2><ol class="steps"><li>ทำคำถามใน <strong>โหมด Extractor</strong> บนเอกสาร</li><li>ตรวจสอบข้อมูลที่ดึงมาได้ในแผงผลลัพธ์</li><li>คลิก <strong>ส่งออก (Export)</strong> และเลือกรูปแบบที่ต้องการ</li></ol><img class="screenshot" src="images/image14.png" onclick="openLb(this.src)" alt="เอาต์พุต JSON จากโหมด Extractor"><p class="screenshot-caption">Extractor —— เอาต์พุต JSON พร้อมดาวน์โหลดหรือส่งไปยังระบบ ERP ของคุณ</p>' 
  },

  'sharing': { 
    cat: 'sharing', title: 'การแบ่งปันเอกสาร', exc: 'แบ่งปันเอกสารระหว่างแผนกอย่างปลอดภัยด้วยการควบคุมการเข้าถึง', 
    body: '<p>เอกสารสามารถแบ่งปันให้กับผู้ใช้รายอื่นหรือแผนกอื่นได้โดยมีการควบคุมระดับสิทธิ์</p><h2>ขั้นตอนการแชร์</h2><ol class="steps"><li>เปิดเอกสาร</li><li>คลิก <strong>แชร์ (Share)</strong></li><li>เลือกผู้ใช้หรือแผนก</li><li>เลือกระดับสิทธิ์</li></ol><img class="screenshot" src="images/image15.png" onclick="openLb(this.src)" alt="ไดอะล็อกการแชร์เอกสาร"><p class="screenshot-caption">แชร์เอกสาร —— กำหนดระดับการเข้าถึง (ส่วนตัวหรือกำหนดเอง) และเลือกแผนกหรือผู้ใช้</p><h2>ระดับสิทธิ์</h2><table><thead><tr><th>สิทธิ์</th><th>คำอธิบาย</th></tr></thead><tbody><tr><td><strong>ดูได้ (Can View)</strong></td><td>ผู้ใช้สามารถดูและใช้แชท AI สอบถามได้</td></tr><tr><td><strong>ดาวน์โหลดได้ (Can Download)</strong></td><td>ผู้ใช้สามารถดูและดาวน์โหลดไฟล์ต้นฉบับได้</td></tr></tbody></table><img class="screenshot" src="images/image16.png" onclick="openLb(this.src)" alt="ส่วนแชร์กับฉัน"><p class="screenshot-caption">แชร์กับฉัน —— ดูและเข้าถึงเอกสารที่เพื่อนร่วมงานแชร์กับคุณ</p>' 
  },

  'user-roles': { 
    cat: 'account', title: 'บทบาทและสิทธิ์ของผู้ใช้', exc: 'ทำความเข้าใจบทบาทผู้ใช้แบบต่างๆ และการเข้าถึงที่แต่ละบทบาทได้รับ', 
    body: '<p>Doc-Scribe.ai ใช้งาน <strong>การควบคุมการเข้าถึงตามบทบาท (RBAC)</strong> เพื่อให้มั่นใจในความถูกต้องและความปลอดภัยของข้อมูล</p><h2>บทบาทที่มีให้</h2><table><thead><tr><th>บทบาท</th><th>คำอธิบาย</th></tr></thead><tbody><tr><td><strong>ผู้ดูแลระบบ (Administrator)</strong></td><td>เข้าถึงได้ทั้งหมด —— จัดการผู้ใช้ หมวดหมู่</td></tr><tr><td><strong>ผู้จัดการ (Manager)</strong></td><td>จัดการเอกสารและผู้ใช้ภายในแผนกของตนเอง</td></tr><tr><td><strong>ผู้ใช้งาน (User)</strong></td><td>อัปโหลดและดูเอกสารที่ได้รับอนุญาต</td></tr><tr><td><strong>ดูได้อย่างเดียว (Read Only)</strong></td><td>ดูเอกสารได้เท่านั้น —— ไม่สามารถอัปโหลดหรือแก้ไขได้</td></tr></tbody></table>' 
  },

  'account-settings': { 
    cat: 'account', title: 'การตั้งค่าบัญชีและโปรไฟล์', exc: 'อัปเดตโปรไฟล์ รหัสผ่าน และการตั้งค่าภาษาของคุณ', 
    body: '<p>คุณสามารถจัดการข้อมูลบัญชีได้จากหน้า <strong>การตั้งค่าโปรไฟล์</strong></p><h2>การอัปเดตโปรไฟล์</h2><ol class="steps"><li>คลิกที่รูปโปรไฟล์ของคุณ</li><li>อัปเดตชื่อ อีเมล หรือรูปภาพ</li><li>คลิก <strong>บันทึกการเปลี่ยนแปลง</strong></li></ol><h2>การเปลี่ยนรหัสผ่าน</h2><ol class="steps"><li>ไปที่ <strong>การตั้งค่าโปรไฟล์ &rarr; ความปลอดภัย</strong></li><li>ป้อนรหัสผ่านเดิมและรหัสผ่านใหม่</li></ol>' 
  },

  'notifications': { 
    cat: 'account', title: 'การตั้งค่าการแจ้งเตือน', exc: 'ควบคุมการแจ้งเตือนและอีเมลที่คุณได้รับจาก Doc-Scribe.ai', 
    body: '<p>คุณสามารถควบคุมวิธีรับการแจ้งเตือนได้ ไม่ว่าจะเป็นในแอป ทางอีเมล หรือทั้งสองอย่าง</p><h2>การกำหนดค่าการแจ้งเตือน</h2><ol class="steps"><li>ไปที่ <strong>การตั้งค่า &rarr; การแจ้งเตือน</strong></li><li>เปิดหรือปิดการแจ้งเตือนแต่ละประเภท</li></ol>' 
  },

  
  'language': { cat: 'getting-started', title: 'การรองรับภาษา', exc: 'เปลี่ยนภาษาแพลตฟอร์ม — รองรับภาษาอังกฤษ มาเลย์ จีน ไทย ฮินดี และญี่ปุ่น', body: '<p>Doc-Scribe.ai รองรับหลายภาษาเพื่อให้ทีมของคุณทำงานในภาษาที่ต้องการได้ทั่วทั้งแพลตฟอร์ม</p><h2>วิธีเปลี่ยนภาษา</h2><ol><li>มองหา <strong>ไอคอนโลก 🌐</strong> ที่มุมขวาบน</li><li>คลิกที่รหัสภาษา (เช่น <strong>EN</strong>)</li><li>เลือกภาษาที่ต้องการจากเมนูแบบเลื่อนลง</li></ol><h2>ภาษาที่รองรับ</h2><table><thead><tr><th>ภาษา</th><th>รหัส</th></tr></thead><tbody><tr><td>ภาษาอังกฤษ</td><td>EN</td></tr><tr><td>ภาษามาเลย์</td><td>MS</td></tr><tr><td>ภาษาจีน (ตัวย่อ)</td><td>ZH</td></tr><tr><td>ภาษาไทย</td><td>TH</td></tr><tr><td>ภาษาฮินดี</td><td>HI</td></tr><tr><td>ภาษาญี่ปุ่น</td><td>JP</td></tr></tbody></table><div class="tip"><strong>คำแนะนำ:</strong> ค่าภาษาจะถูกบันทึกโดยอัตโนมัติ</div>' },
  'file-compatibility': { cat: 'doc-management', title: 'ประเภทไฟล์ที่รองรับ', exc: 'Doc-Scribe.ai รองรับเอกสาร สเปรดชีต ภาพวาด ไฟล์อีเมล และอื่นๆ', body: '<p>Doc-Scribe.ai รองรับรูปแบบไฟล์หลากหลายเพื่อให้ทีมอัปโหลดและทำงานกับเอกสารได้โดยไม่มีปัญหาความเข้ากันได้</p><h2>รูปแบบไฟล์ที่รองรับ</h2><table><thead><tr><th>หมวดหมู่</th><th>รูปแบบ</th></tr></thead><tbody><tr><td><strong>เอกสาร</strong></td><td>PDF, DOCX, DOC, TXT, RTF</td></tr><tr><td><strong>สเปรดชีต</strong></td><td>XLSX, XLS, CSV</td></tr><tr><td><strong>งานนำเสนอ</strong></td><td>PPTX, PPT</td></tr><tr><td><strong>รูปภาพ</strong></td><td>PNG, JPG, JPEG, TIFF</td></tr><tr><td><strong>ไฟล์อีเมล</strong></td><td>MSG, EML</td></tr><tr><td><strong>ภาพวาด</strong></td><td>DWG, DXF</td></tr></tbody></table><div class="tip"><strong>ไม่ต้องติดตั้งซอฟต์แวร์เพิ่มเติม</strong></div>' },
  'user-access': { cat: 'account', title: 'การควบคุมการเข้าถึงและบทบาทผู้ใช้', exc: 'ควบคุมสิ่งที่ผู้ใช้สามารถดูและทำได้ด้วยสิทธิ์การเข้าถึงระดับโลกและการจัดการหมวดหมู่', body: '<p>Doc-Scribe.ai ให้คุณควบคุมได้อย่างสมบูรณ์</p><h2>การเข้าถึงระดับโลก</h2><p>เมื่อเปิด (<strong>ON</strong>) ผู้ใช้สามารถดูไฟล์ใน <strong>ทุกแผนก</strong> เหมาะสำหรับผู้จัดการหรือผู้ดูแลระบบ</p><h2>จัดการหมวดหมู่</h2><p>เมื่อเปิด (<strong>ON</strong>) ผู้ใช้สามารถ <strong>เพิ่ม แก้ไข หรือลบ</strong> หมวดหมู่ไฟล์</p><h2>สรุปสิทธิ์</h2><table><thead><tr><th>สิทธิ์</th><th>อนุญาตให้</th><th>เหมาะสำหรับ</th></tr></thead><tbody><tr><td><strong>การเข้าถึงระดับโลก</strong></td><td>ดูไฟล์ในทุกแผนก</td><td>ผู้จัดการ, ผู้ดูแลระบบ</td></tr><tr><td><strong>จัดการหมวดหมู่</strong></td><td>เพิ่ม แก้ไข ลบหมวดหมู่</td><td>ผู้ดูแลเอกสาร</td></tr><tr><td><strong>ไม่มี</strong></td><td>เข้าถึงเฉพาะแผนกที่กำหนด</td><td>ผู้ใช้ทั่วไป</td></tr></tbody></table><div class="tip"><strong>ไม่แน่ใจ?</strong> สามารถอัปเดตได้ในการจัดการผู้ใช้</div>' },

  'troubleshooting': { cat: 'troubleshooting', title: 'การแก้ไขปัญหาเบื้องต้น', exc: 'ค้นหาแนวทางแก้ไขปัญหาที่พบบ่อยใน Doc-Scribe.ai อย่างรวดเร็ว', body: '<p>ค้นหาแนวทางแก้ไขปัญหาด้านล่าง หากไม่พบปัญหา โปรดติดต่อทีมสนับสนุน</p><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">อัปโหลดเอกสารไม่ได้<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">&bull; ขนาดไฟล์อยู่ในเกณฑ์ที่กำหนด<br>&bull; การเชื่อมต่ออินเทอร์เน็ตเสถียร<br>&bull; รูปแบบไฟล์รองรับ (PDF, DOCX, XLSX, PPTX, TXT)</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">การค้นหาด้วย AI ไม่ทำงาน<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">&bull; ต้องเลือกเอกสารก่อนเริ่มค้นหา<br>&bull; การประมวลผลเอกสารเสร็จสมบูรณ์<br>&bull; ลองรีเฟรชหน้าเว็บ</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">ไม่สามารถเข้าถึงเอกสารที่แชร์<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">&bull; เอกสารถูกแชร์กับบัญชีของคุณโดยตรง<br>&bull; ตรวจสอบส่วน "แชร์กับฉัน"<br>&bull; ติดต่อเจ้าของเอกสารเพื่อแชร์ใหม่</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">ข้อมูลเมตาไม่แสดง<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">&bull; รีเฟรชหน้าเว็บ<br>&bull; ตรวจสอบว่าใช้แท็กไฟล์ที่ถูกต้อง<br>&bull; ตรวจสอบว่าฟิลด์ทั้งหมดถูกกรอกและบันทึกแล้ว</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">ไม่ได้รับการแจ้งเตือน<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">&bull; ที่อยู่อีเมลถูกต้องในโปรไฟล์<br>&bull; อีเมลไม่อยู่ในโฟลเดอร์สแปม</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">ไม่สามารถลบเอกสารหรือคอลเลกชัน<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">&bull; คุณมีสิทธิ์ในการลบ<br>&bull; เอกสารหรือคอลเลกชันไม่ถูกล็อก</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">ปัญหาการเข้าสู่ระบบหรือเซสชัน<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">&bull; ใช้ข้อมูลบัญชีที่ถูกต้อง<br>&bull; ล้างแคชเบราว์เซอร์</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">ไม่เห็นตัวอย่างเอกสาร<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">&bull; รูปแบบเอกสารรองรับการแสดงตัวอย่าง<br>&bull; เอกสารอัปโหลดและประมวลผลเสร็จสมบูรณ์</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">การโหลดเอกสารช้า<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">&bull; การเชื่อมต่ออินเทอร์เน็ตเสถียร<br>&bull; ขนาดเอกสารไม่ใหญ่เกินไป<br>&bull; ลองรีเฟรชหน้าเว็บ</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">ไม่สามารถสร้างหมวดหมู่<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">&bull; มีสิทธิ์จัดการหมวดหมู่เปิดใช้งาน<br>&bull; ชื่อหมวดหมู่ยังไม่ถูกใช้งาน</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">ไม่สามารถแก้ไขข้อมูลเมตา<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">&bull; มีสิทธิ์แก้ไขเอกสาร<br>&bull; แท็กไฟล์ถูกสร้างไว้แล้ว<br>&bull; ฟิลด์ข้อมูลเมตาทั้งหมดถูกกรอกถูกต้องก่อนบันทึก</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">การค้นหาไม่พบผลลัพธ์<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">&bull; เอกสารประมวลผลและสร้างดัชนีเสร็จแล้ว<br>&bull; ลองใช้คำค้นหาที่แตกต่างหรือกว้างขึ้น<br>&bull; ตรวจสอบว่าค้นหาในหมวดหมู่หรือคอลเลกชันที่ถูกต้อง</div></div></div>' },

'data-security': { 
    cat: 'troubleshooting', title: 'ความเป็นส่วนตัวและความปลอดภัยของข้อมูล', exc: 'Doc-Scribe.ai ปกป้องข้อมูลองค์กรและเอกสารของคุณอย่างไร', 
    body: '<h2>คุณลักษณะด้านความปลอดภัยที่สำคัญ</h2><ul><li><strong>สภาพแวดล้อม AI ส่วนตัว</strong> —— ข้อมูลของคุณจะไม่ถูกส่งออกไปนอกองค์กร</li><li><strong>การควบคุมการเข้าถึงตามบทบาท</strong> —— ผู้ใช้จะเห็นเฉพาะฟีเจอร์และเอกสารที่ได้รับสิทธิ์</li><li><strong>การจัดเก็บข้อมูลแบบเข้ารหัส</strong> —— เอกสารจะถูกเข้ารหัสทั้งขณะจัดเก็บและขณะรับส่ง</li></ul>' 
  }
};

window.VIDEOS = [
  { label: 'บทเรียน — เริ่มต้น', title: 'เริ่มต้นใช้งาน Doc-Scribe.ai', desc: 'การสาธิตฉบับสมบูรณ์ในการอัปโหลดเอกสาร การใช้งาน AI แชท และการจัดการพื้นที่ทำงานของคุณ', thumb: 'https://img.youtube.com/vi/UmLDcJ7pvK4/maxresdefault.jpg', url: 'https://youtu.be/UmLDcJ7pvK4' },
  { label: 'บทเรียน — ระดับกลาง', title: 'เชี่ยวชาญโหมด AI และการวิเคราะห์', desc: 'สำรวจโหมด AI ทั้งหกโหมดและเรียนรู้วิธีใช้ประโยชน์สูงสุดจากการวิเคราะห์ข้ามเอกสาร', thumb: 'https://img.youtube.com/vi/WtNTT6OnOyk/maxresdefault.jpg', url: 'https://youtu.be/WtNTT6OnOyk' }
];

window.PAPERS = [
  { tag: 'White Paper', title: 'อนาคตของอัจฉริยะเอกสารในองค์กร', desc: 'การจัดการเอกสารที่ขับเคลื่อนด้วย AI กำลังเปลี่ยนรูปแบบการทำงานความรู้ได้อย่างไร', file: 'docs/Doc-Scribe_Security_Whitepaper.pdf' },
  { tag: 'คู่มือทางเทคนิค', title: 'สถาปัตยกรรมและความปลอดภัยของ AI', desc: 'เจาะลึกสถาปัตยกรรม AI ส่วนตัวของ Doc-Scribe.ai และโมเดลความปลอดภัย', file: 'docs/Use-Cases-for-Vertical-Industries.pdf' }
];
