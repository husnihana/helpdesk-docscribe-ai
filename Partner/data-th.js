// Partner Portal — ภาษาไทย
// Loaded after ../data-th.js; overrides window.CATS and window.ARTS only.

window.CATS = [
  {
    id: 'partner-setup',
    title: 'เริ่มต้นใช้งาน',
    bg: '#eff6ff', fg: '#1d4ed8',
    desc: 'การเข้าสู่ระบบครั้งแรก การตั้งค่ารหัสผ่าน และปรับแต่งประสบการณ์ Partner ของคุณ',
    arts: ['partner-login', 'partner-customize'],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 8 12 12 14 14"/></svg>'
  },
  {
    id: 'partner-dashboard-cat',
    title: 'แดชบอร์ด Partner',
    bg: '#f0fdf4', fg: '#15803d',
    desc: 'ทำความเข้าใจกับตัวชี้วัดแดชบอร์ด สรุป Tenant และการดำเนินการด่วน',
    arts: ['partner-dashboard-view'],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>'
  },
  {
    id: 'tenant-mgmt',
    title: 'การจัดการ Tenant',
    bg: '#fdf4ff', fg: '#7e22ce',
    desc: 'สร้าง ดู ค้นหา และจัดการ Tenant รวมถึงหน้ารายละเอียดและการแยก Tenant',
    arts: ['partner-tenant-list', 'partner-create-tenant', 'partner-tenant-detail', 'partner-tenant-isolation'],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>'
  },
  {
    id: 'partner-help',
    title: 'เคล็ดลับและคำถามที่พบบ่อย',
    bg: '#fff7ed', fg: '#c2410c',
    desc: 'แนวปฏิบัติที่ดีที่สุด คำแนะนำการแก้ปัญหา และคำตอบสำหรับคำถาม Partner ที่พบบ่อย',
    arts: ['partner-tips', 'partner-faq-access', 'partner-faq-tenants'],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>'
  },
];

window.ARTS = {

  // ── เริ่มต้นใช้งาน ────────────────────────────────────────────────────────────

  'partner-login': {
    cat: 'partner-setup',
    title: 'การเข้าสู่ระบบและการตั้งค่าครั้งแรก',
    exc: 'วิธีเข้าสู่ระบบครั้งแรกโดยใช้ข้อมูลประจำตัวชั่วคราวและรักษาความปลอดภัยบัญชีของคุณ',
    body: '<p>เมื่อ Superadmin สร้างบัญชีของคุณแล้ว คุณจะได้รับอีเมลเข้าสู่ระบบโดยอัตโนมัติ ซึ่งมีที่อยู่อีเมลที่ลงทะเบียนและรหัสผ่านชั่วคราวของคุณ</p><h2>สิ่งที่คุณต้องการ</h2><ul><li><strong>ที่อยู่อีเมล</strong>ที่ลงทะเบียนซึ่งได้รับจาก Superadmin ของคุณ</li><li><strong>รหัสผ่านชั่วคราว</strong> — ข้อมูลประจำตัวแบบใช้ครั้งเดียวที่สร้างขึ้นสำหรับการเข้าสู่ระบบครั้งแรก</li></ul><div class="tip"><strong>สำคัญ:</strong> รหัสผ่านชั่วคราวมีอายุการใช้งานสั้น โปรดเข้าสู่ระบบและเปลี่ยนรหัสผ่านทันทีที่ได้รับ หากไม่ได้รับข้อมูลประจำตัว โปรดตรวจสอบโฟลเดอร์สแปม/จดหมายขยะ หรือติดต่อ Superadmin ของคุณทันที</div><h2>ขั้นตอนการเข้าสู่ระบบ</h2><ol><li>ป้อนที่อยู่อีเมลและรหัสผ่านชั่วคราวที่ได้รับ</li><li>คลิก<strong>เข้าสู่ระบบ</strong></li><li>ระบบจะแจ้งให้คุณ<strong>เปลี่ยนรหัสผ่าน</strong>ทันที — นี่เป็นข้อบังคับด้านความปลอดภัย</li><li>ตั้งรหัสผ่านถาวรที่เข้มแข็งและไม่ซ้ำกัน และยืนยัน</li><li>หลังจากเปลี่ยนรหัสผ่านแล้ว คุณจะถูกเปลี่ยนเส้นทางไปยัง<strong>แดชบอร์ด Partner</strong></li></ol><img class="screenshot" src="../images/Partner1.png" onclick="openLb(this.src)" alt="ขั้นตอนการเข้าสู่ระบบ Partner"><p class="screenshot-caption">หน้าจอเข้าสู่ระบบ (1–2)  →  ตั้งรหัสผ่านใหม่ (3)  →  แดชบอร์ด Partner (5)</p><h2>ผลลัพธ์ที่คาดหวัง</h2><p>หลังจากเข้าสู่ระบบครั้งแรกสำเร็จและเปลี่ยนรหัสผ่านแล้ว คุณจะไปถึงแดชบอร์ด Partner ซึ่งสามารถเริ่มจัดการ Tenant ได้</p><h2>การออกจากระบบ</h2><p>คลิก<strong>ไอคอนผู้ใช้</strong>ที่มุมขวาบนและเลือก<strong>ออกจากระบบ</strong> ควรออกจากระบบเสมอเมื่อใช้อุปกรณ์ที่ใช้ร่วมกันหรือสาธารณะ</p><div class="tip"><strong>เคล็ดลับด้านความปลอดภัย:</strong> อย่าแชร์ข้อมูลประจำตัวการเข้าสู่ระบบกับใคร หากสงสัยว่ามีการเข้าถึงโดยไม่ได้รับอนุญาต ให้เปลี่ยนรหัสผ่านทันทีและติดต่อ Superadmin ของคุณ</div>'
  },

  'partner-customize': {
    cat: 'partner-setup',
    title: 'ปรับแต่งประสบการณ์ของคุณ',
    exc: 'วิธีสลับระหว่างโหมดสว่างและมืด และเปลี่ยนภาษาของอินเทอร์เฟซ',
    body: '<p>Partner Module รองรับตัวเลือกการปรับแต่งส่วนตัวที่มีอยู่ในแถบเครื่องมือส่วนหัว</p><table><thead><tr><th>ฟีเจอร์</th><th>วิธีใช้</th><th>ผลลัพธ์</th></tr></thead><tbody><tr><td><strong>สลับธีม</strong></td><td>คลิกไอคอนธีมที่มุมขวาบน</td><td>สลับระหว่าง<strong>โหมดสว่าง</strong>และ<strong>โหมดมืด</strong>เพื่อประสบการณ์ที่เป็นส่วนตัว</td></tr><tr><td><strong>ตัวเลือกภาษา</strong></td><td>คลิกเมนูดรอปดาวน์ภาษาในส่วนหัว</td><td>เปลี่ยนภาษาอินเทอร์เฟซเป็น <strong>EN</strong>, <strong>MY</strong>, <strong>ZH</strong> หรือ <strong>TH</strong></td></tr></tbody></table><p>การตั้งค่าของคุณจะมีผลทันที การตั้งค่าภาษาและธีมจะคงอยู่ตลอดทั้งเซสชัน</p>'
  },

  // ── แดชบอร์ด Partner ─────────────────────────────────────────────────────────

  'partner-dashboard-view': {
    cat: 'partner-dashboard-cat',
    title: 'ภาพรวมแดชบอร์ดและการดำเนินการด่วน',
    exc: 'ทำความเข้าใจกับตัวชี้วัดแดชบอร์ดของคุณและวิธีใช้การดำเนินการด่วนในการจัดการ Tenant',
    body: '<p>แดชบอร์ด Partner ให้ภาพรวมแบบเรียลไทม์ของ Tenant ทั้งหมดของคุณและการใช้ทรัพยากร</p><h2>ตัวชี้วัดแดชบอร์ด</h2><p>แดชบอร์ดแสดงตัวชี้วัดดังต่อไปนี้:</p><ul><li><strong>Tenant ทั้งหมด</strong> — จำนวน Tenant ทั้งหมดภายใต้บัญชีของคุณ</li><li><strong>ใช้งานอยู่</strong> — Tenant ที่มีการสมัครสมาชิกที่ใช้งานอยู่</li><li><strong>หยุดชั่วคราว</strong> — Tenant ที่การสมัครสมาชิกถูกหยุดชั่วคราว</li><li><strong>ยกเลิกแล้ว</strong> — Tenant ที่ยกเลิกการสมัครสมาชิก</li><li><strong>Token</strong> — การจัดสรร Token ทั้งหมดที่ใช้ในทุก Tenant</li><li><strong>พื้นที่จัดเก็บ</strong> — พื้นที่จัดเก็บทั้งหมดที่ใช้ในทุก Tenant</li><li><strong>ที่นั่ง</strong> — ที่นั่งที่มีใบอนุญาตทั้งหมดในทุก Tenant</li></ul><h2>สถานะว่างเปล่า</h2><p>หากยังไม่ได้สร้าง Tenant ตัวชี้วัดทั้งหมดจะแสดง <strong>0</strong> และจะมีข้อความ: <em>"ยังไม่มี Tenant สร้าง Tenant แรกของคุณ!"</em></p><h2>เมื่อมี Tenant</h2><p>เมื่อมี Tenant แล้ว ตัวชี้วัดจะอัปเดตแบบเรียลไทม์ คลิกการ์ด<strong>Tenant ทั้งหมด</strong>เพื่อไปยังรายการ Tenant โดยตรง</p><h2>การดำเนินการด่วน</h2><ul><li><strong>ตัวชี้วัด</strong> — ดูยอดรวม Tenant, Token, พื้นที่จัดเก็บ และที่นั่งได้อย่างรวดเร็ว</li><li><strong>ค้นหา</strong> — ค้นหา Tenant ที่ต้องการได้อย่างรวดเร็วโดยใช้แถบค้นหา</li><li><strong>สร้าง Tenant</strong> — เริ่มเพิ่ม Tenant ใหม่เพียงคลิกเดียว</li></ul><div class="tip"><strong>เคล็ดลับ:</strong> หากตัวชี้วัดแดชบอร์ดไม่อัปเดต ให้รีเฟรชเบราว์เซอร์หรือออกจากระบบแล้วเข้าสู่ระบบใหม่ หากปัญหายังคงอยู่ โปรดติดต่อฝ่ายสนับสนุน</div>'
  },

  // ── การจัดการ Tenant ─────────────────────────────────────────────────────────

  'partner-tenant-list': {
    cat: 'tenant-mgmt',
    title: 'การดูและค้นหา Tenant',
    exc: 'วิธีนำทางรายการ Tenant ของคุณ ทำความเข้าใจคอลัมน์ตาราง และค้นหา Tenant ที่ต้องการ',
    body: '<p>ส่วน<strong>Tenant</strong>ให้มุมมองเต็มรูปแบบของ Tenant ทั้งหมดภายใต้บัญชี Partner ของคุณ</p><h2>การนำทางไปยัง Tenant</h2><p>ใช้การนำทางแถบด้านข้างและคลิก<strong>Tenant</strong></p><img class="screenshot" src="../images/tenants.jpg" onclick="openLb(this.src)" alt="รายการ Tenant ของฉัน"><p class="screenshot-caption">Tenant ของฉัน — ภาพรวมของ Tenant ทั้งหมด แพ็กเกจ การจัดสรรที่นั่งและทรัพยากร รวมถึงสถานะการสมัครสมาชิก</p><h2>ตาราง Tenant</h2><p>แต่ละ Tenant จะปรากฏเป็นแถวในตารางพร้อมคอลัมน์ดังนี้:</p><table><thead><tr><th>คอลัมน์</th><th>คำอธิบาย</th></tr></thead><tbody><tr><td>ชื่อ Tenant</td><td>ชื่อขององค์กร Tenant</td></tr><tr><td>สถานะ</td><td>ใช้งานอยู่ หยุดชั่วคราว หรือยกเลิกแล้ว</td></tr><tr><td>แพ็กเกจ</td><td>แพ็กเกจที่สมัคร (เบสิก โปร เอ็นเตอร์ไพรส์)</td></tr><tr><td>ที่นั่ง</td><td>ที่นั่งที่มีใบอนุญาตทั้งหมดสำหรับ Tenant นี้</td></tr><tr><td>Token</td><td>การจัดสรร Token สำหรับ Tenant นี้</td></tr><tr><td>พื้นที่จัดเก็บ</td><td>การจัดสรรพื้นที่จัดเก็บสำหรับ Tenant นี้</td></tr><tr><td>การดำเนินการ</td><td>ดูหรือจัดการ Tenant</td></tr></tbody></table><h2>ไม่มี Tenant</h2><p>หากไม่มี Tenant จะมีข้อความ: <em>"ยังไม่มี Tenant สร้าง Tenant แรกของคุณ!"</em> พร้อมปุ่ม<strong>สร้าง Tenant แรก</strong></p><h2>การค้นหา Tenant</h2><ol><li>ในส่วน Tenant ค้นหา<strong>กล่องค้นหา</strong>ที่ด้านบนของรายการ</li><li>พิมพ์คำค้นหา — ชื่อ Tenant อีเมล หรือแพ็กเกจ</li><li>กด<strong>Enter</strong>หรือคลิกไอคอนค้นหา</li><li>รายการจะกรองเพื่อแสดงเฉพาะ Tenant ที่ตรงกัน</li></ol><h2>การดู Tenant</h2><p>คลิกที่แถว Tenant หรือปุ่ม<strong>ดู</strong>เพื่อเปิดหน้ารายละเอียด Tenant สำหรับข้อมูลเต็มรูปแบบ</p><img class="screenshot" src="../images/docscribe_tenant_censored_v2.png" onclick="openLb(this.src)" alt="หน้ารายละเอียด Tenant"><p class="screenshot-caption">รายละเอียด Tenant — มุมมองครบถ้วนของการใช้ทรัพยากร แพ็กเกจสมัครสมาชิก การจัดสรรที่นั่ง และข้อมูลบัญชีสำคัญของ Tenant</p>'
  },

  'partner-create-tenant': {
    cat: 'tenant-mgmt',
    title: 'การสร้าง Tenant ใหม่',
    exc: 'คู่มือทีละขั้นตอนในการสร้าง Tenant พร้อมช่องที่จำเป็น การตรวจสอบ ขีดจำกัดโควต้า และการคำนวณวันที่อัตโนมัติ',
    body: '<p>Partner สามารถสร้างองค์กร Tenant ใหม่ได้โดยตรงจากส่วน Tenant</p><h2>ข้อกำหนด</h2><p>ต้องระบุข้อมูลดังต่อไปนี้เมื่อสร้าง Tenant:</p><ul><li><strong>ชื่อ Tenant</strong> (จำเป็น)</li><li><strong>โดเมนบริษัท</strong> (จำเป็น)</li><li><strong>อีเมลผู้ดูแล</strong> (ต้องเป็นที่อยู่อีเมลที่ถูกต้อง)</li><li><strong>แพ็กเกจ</strong> — เบสิก โปร หรือ เอ็นเตอร์ไพรส์</li><li><strong>ที่นั่ง</strong>, <strong>โควต้า Token</strong> และ <strong>พื้นที่จัดเก็บ</strong> (ตามขีดจำกัดแพ็กเกจของคุณ)</li><li><strong>วันที่เริ่มต้น</strong> และ <strong>วันที่สิ้นสุด</strong> (วันที่สิ้นสุดจะคำนวณอัตโนมัติตามรอบการเรียกเก็บเงิน)</li></ul><h2>ขั้นตอนการสร้าง Tenant</h2><ol><li>ไปที่<strong>Tenant</strong>ในแถบด้านข้าง</li><li>คลิก<strong>สร้าง Tenant</strong></li><li>กรอกข้อมูลในช่องที่จำเป็นทั้งหมด</li><li>คลิก<strong>ส่ง</strong></li></ol><img class="screenshot" src="../images/Create%20New%20Tenant.png" onclick="openLb(this.src)" alt="แบบฟอร์มสร้าง Tenant ใหม่"><p class="screenshot-caption">ขั้นตอน 1–4: ไปที่ Tenant → คลิกสร้าง Tenant → กรอกแบบฟอร์ม → กดส่งเพื่อสร้าง Tenant ใหม่</p><h2>สร้าง Tenant สำเร็จแล้ว</h2><p>หน้าจอความสำเร็จจะปรากฏพร้อมสองตัวเลือก:</p><ul><li><strong>กลับไปยัง Tenant</strong> — กลับไปยังรายการ Tenant ทั้งหมด</li><li><strong>สร้างอีกรายการ</strong> — สร้าง Tenant อีกรายการทันที</li></ul><p>Tenant ใหม่จะปรากฏในรายการ Tenant ทันที</p><h2>ข้อผิดพลาดการตรวจสอบ</h2><table><thead><tr><th>ข้อผิดพลาด</th><th>สาเหตุ</th></tr></thead><tbody><tr><td>ช่องที่ไฮไลต์เป็นสีแดง</td><td>ช่องที่จำเป็นถูกปล่อยว่าง</td></tr><tr><td>"กรุณาป้อนที่อยู่อีเมลที่ถูกต้อง"</td><td>รูปแบบอีเมลผู้ดูแลไม่ถูกต้อง</td></tr><tr><td>"วันที่สิ้นสุดต้องหลังจากวันที่เริ่มต้น"</td><td>วันที่สิ้นสุดถูกกำหนดก่อนวันที่เริ่มต้น</td></tr></tbody></table><h2>การบังคับใช้โควต้าแพ็กเกจ</h2><p>Superadmin ของคุณกำหนดโควต้า Tenant สำหรับแพ็กเกจของคุณ เมื่อถึงขีดจำกัด คุณจะเห็น:</p><p><em>"คุณถึงขีดจำกัด Tenant แล้ว ติดต่อ Superadmin เพื่อเพิ่มโควต้าของคุณ"</em></p><h2>วันที่ที่คำนวณอัตโนมัติ</h2><ul><li><strong>แพ็กเกจรายเดือน:</strong> วันที่เริ่มต้น + 1 เดือน = วันที่สิ้นสุด</li><li><strong>แพ็กเกจรายปี:</strong> วันที่เริ่มต้น + 1 ปี = วันที่สิ้นสุด</li></ul><div class="tip"><strong>หมายเหตุ:</strong> วันที่สิ้นสุดจะคำนวณอัตโนมัติและไม่สามารถกำหนดด้วยตนเองได้ ติดต่อ Superadmin เพื่อต่ออายุการสมัครสมาชิก</div>'
  },

  'partner-tenant-detail': {
    cat: 'tenant-mgmt',
    title: 'หน้ารายละเอียด Tenant',
    exc: 'สิ่งที่คุณสามารถดูในหน้ารายละเอียด Tenant — สถานะ การใช้ทรัพยากร และไทม์ไลน์การสมัครสมาชิก',
    body: '<p>หน้ารายละเอียด Tenant แสดงมุมมองเต็มรูปแบบของข้อมูลและการใช้ทรัพยากรของ Tenant แต่ละราย</p><h2>ส่วนหัว Tenant</h2><p>ด้านบนของหน้ารายละเอียดแสดง:</p><ul><li><strong>ชื่อ Tenant</strong></li><li><strong>โดเมนบริษัท</strong></li><li><strong>สถานะ</strong> — ใช้งานอยู่ หยุดชั่วคราว หรือยกเลิกแล้ว</li><li><strong>ชื่อแพ็กเกจ</strong> — แพ็กเกจที่สมัครสมาชิก</li></ul><h2>การใช้ทรัพยากร</h2><p>แถบความคืบหน้าแสดงจำนวนทรัพยากรที่ Tenant ใช้ไป:</p><table><thead><tr><th>ทรัพยากร</th><th>การแสดงผล</th><th>เกณฑ์การแจ้งเตือน</th></tr></thead><tbody><tr><td>ที่นั่ง</td><td>ใช้แล้ว / สูงสุด (แถบความคืบหน้า)</td><td>แจ้งเตือนสีแดงที่ 90%+</td></tr><tr><td>Token</td><td>ใช้แล้ว / สูงสุด (แถบความคืบหน้า)</td><td>แจ้งเตือนสีแดงที่ 90%+</td></tr><tr><td>พื้นที่จัดเก็บ</td><td>ใช้แล้ว / สูงสุด (แถบความคืบหน้า)</td><td>แจ้งเตือนสีแดงที่ 90%+</td></tr></tbody></table><h2>รหัสสี</h2><ul><li><strong>สีเขียว</strong> (&lt;75% การใช้งาน) — การใช้งานปกติ</li><li><strong>สีส้ม</strong> (75–89% การใช้งาน) — ติดตามอย่างใกล้ชิด</li><li><strong>สีแดง</strong> (90%+ การใช้งาน) — ต้องดำเนินการทันที พิจารณาอัปเกรดแพ็กเกจหรือปรับปรุงการใช้ทรัพยากร</li></ul><h2>ไทม์ไลน์การสมัครสมาชิก</h2><ul><li><strong>วันที่เริ่มต้น</strong> — เมื่อการสมัครสมาชิกของ Tenant เริ่มต้น</li><li><strong>วันที่สิ้นสุด</strong> — เมื่อการสมัครสมาชิกหมดอายุ</li><li><strong>วันที่เหลือ</strong> — นับถอยหลังสู่วันหมดอายุ</li></ul><div class="tip"><strong>เคล็ดลับ:</strong> ตั้งการเตือนสำหรับการสมัครสมาชิกที่ใกล้วันหมดอายุ ติดต่อ Superadmin เพื่อต่ออายุก่อนที่การเข้าถึง Tenant จะถูกระงับ</div><h2>การแก้ไขรายละเอียด Tenant</h2><p>รายละเอียดบางอย่างเช่นแพ็กเกจหรือขีดจำกัดโควต้าสามารถเปลี่ยนแปลงได้โดย Superadmin เท่านั้น หากต้องการหยุดชั่วคราว ยกเลิก หรือแก้ไข Tenant ให้ใช้ตัวเลือกที่มีอยู่ในหน้ารายละเอียด Tenant หรือติดต่อ Superadmin ของคุณ</p>'
  },

  'partner-tenant-isolation': {
    cat: 'tenant-mgmt',
    title: 'การแยก Tenant และความปลอดภัย',
    exc: 'วิธีที่การแยก Tenant ทำงาน — สิ่งที่คุณเห็นได้และไม่ได้ในฐานะ Partner',
    body: '<p>Partner Module บังคับใช้การแยก Tenant อย่างเข้มงวด คุณสามารถดูและจัดการเฉพาะ Tenant ที่เป็นของบัญชี Partner ของคุณเท่านั้น</p><h2>สิ่งที่คุณไม่สามารถดูได้</h2><ul><li>Tenant ที่สร้างโดย Partner อื่นถูกซ่อนจากมุมมองของคุณโดยสมบูรณ์</li><li>การพยายามเข้าถึง URL ของ Tenant ที่ไม่ใช่ของคุณจะส่งคืน:<br><em>"ไม่พบ Tenant กรุณาตรวจสอบ ID ของ Tenant"</em></li></ul><h2>สิ่งที่คุณสามารถดูได้</h2><ul><li>เฉพาะ Tenant ที่เชื่อมโยงกับ<strong>Partner ID</strong>ของคุณเท่านั้นที่จะปรากฏในรายการ Tenant ของคุณ</li><li>ตัวชี้วัดแดชบอร์ดของคุณสะท้อนเฉพาะ<strong>Tenant ของคุณเอง</strong> — ไม่มีข้อมูลข้ามพาร์ทเนอร์แสดงให้เห็น</li></ul><h2>ทำไมสิ่งนี้จึงสำคัญ</h2><p>การแยก Tenant ช่วยให้มั่นใจว่า Partner ไม่สามารถเข้าถึงข้อมูลลูกค้าของกันและกัน นี่คือคุณสมบัติความปลอดภัยหลักของแพลตฟอร์มและทำงานโดยอัตโนมัติ — ไม่จำเป็นต้องกำหนดค่า</p><div class="tip"><strong>เตือนความปลอดภัย:</strong> หากคุณได้รับข้อผิดพลาด "404 ไม่พบ Tenant" ให้ตรวจสอบว่า ID ของ Tenant ถูกต้องและ Tenant นั้นเป็นของบัญชีของคุณ หากคุณเชื่อว่ามีข้อผิดพลาด ให้ติดต่อ Superadmin ของคุณ</div>'
  },

  // ── เคล็ดลับและคำถามที่พบบ่อย ───────────────────────────────────────────────

  'partner-tips': {
    cat: 'partner-help',
    title: 'เคล็ดลับและแนวปฏิบัติที่ดีที่สุด',
    exc: 'เคล็ดลับด้านความปลอดภัย การตรวจสอบ และการแก้ปัญหาสำหรับการดำเนินงาน Partner ประจำวัน',
    body: '<h2>ความปลอดภัย</h2><ul><li>ใช้<strong>รหัสผ่านที่เข้มแข็งและไม่ซ้ำกัน</strong>เสมอ และอัปเดตเป็นประจำ</li><li><strong>ออกจากระบบ</strong>เมื่อใช้อุปกรณ์ที่ใช้ร่วมกันหรือสาธารณะ</li><li>อย่าแชร์ข้อมูลประจำตัวการเข้าสู่ระบบกับใคร</li><li>หากสงสัยว่ามีการเข้าถึงโดยไม่ได้รับอนุญาต ให้เปลี่ยนรหัสผ่านทันทีและติดต่อฝ่ายสนับสนุน</li></ul><h2>การตรวจสอบ</h2><ul><li>ตรวจสอบแดชบอร์ด<strong>ทุกวัน</strong>สำหรับการอัปเดตการใช้งานใน Tenant ของคุณ</li><li>ตั้งการเตือนสำหรับ<strong>การต่ออายุการสมัครสมาชิก</strong>ก่อนที่ Tenant จะหมดอายุ</li><li>ตรวจสอบการใช้ทรัพยากรของแต่ละ Tenant<strong>ทุกสัปดาห์</strong>เพื่อหลีกเลี่ยงขีดจำกัดที่ไม่คาดคิด</li><li>ดู<strong>ตัวบ่งชี้สีส้มและสีแดง</strong>บนแถบทรัพยากร — สัญญาณว่า Tenant กำลังใกล้ถึงขีดจำกัด</li></ul><h2>การจัดการ Tenant</h2><ul><li>ใช้<strong>ฟังก์ชันค้นหา</strong>เพื่อค้นหา Tenant ได้อย่างรวดเร็วตามชื่อหรือโดเมน</li><li>รักษา<strong>ที่อยู่อีเมลผู้ดูแล</strong>ของ Tenant ให้เป็นปัจจุบันเพื่อให้แน่ใจว่าพวกเขาได้รับการแจ้งเตือนที่สำคัญ</li><li>ติดตามการใช้ทรัพยากรอย่างสม่ำเสมอเพื่อหลีกเลี่ยงไม่ให้ Tenant ถึงขีดจำกัดโดยไม่คาดคิด</li></ul><h2>การแก้ปัญหา</h2><ul><li><strong>เข้าสู่ระบบไม่ได้?</strong> ใช้ "ลืมรหัสผ่าน?" ในหน้าเข้าสู่ระบบเพื่อรีเซ็ตรหัสผ่านของคุณ</li><li><strong>ข้อผิดพลาดการตรวจสอบเมื่อสร้าง Tenant?</strong> ตรวจสอบช่องที่จำเป็นทั้งหมดอีกครั้งและตรวจสอบว่าวันที่ถูกตั้งค่าอย่างถูกต้อง</li><li><strong>ไม่พบ Tenant?</strong> ตรวจสอบว่าคุณเข้าสู่ระบบด้วยบัญชี Partner ที่ถูกต้อง</li><li><strong>ระบบช้าหรือไม่ตอบสนอง?</strong> รีเฟรชเบราว์เซอร์ ล้างแคช หรือลองใช้เบราว์เซอร์อื่น (แนะนำ Chrome หรือ Firefox)</li><li><strong>ตัวชี้วัดแดชบอร์ดไม่อัปเดต?</strong> ออกจากระบบแล้วเข้าสู่ระบบใหม่ หากปัญหายังคงอยู่ ให้ติดต่อฝ่ายสนับสนุน</li></ul>'
  },

  'partner-faq-access': {
    cat: 'partner-help',
    title: 'คำถามที่พบบ่อย: การเข้าสู่ระบบ แดชบอร์ด และการนำทาง',
    exc: 'คำถามที่พบบ่อยเกี่ยวกับการเข้าสู่ระบบ ข้อมูลประจำตัว แดชบอร์ด Partner และการนำทางใน Partner Module',
    body: '<p>คำถามทั่วไปเกี่ยวกับการเข้าสู่ระบบ ข้อมูลประจำตัว และแดชบอร์ด Partner</p><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">ฉันจะเข้าสู่ระบบครั้งแรกได้อย่างไร?<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">คุณจะได้รับอีเมลจาก Superadmin พร้อมอีเมลเข้าสู่ระบบและรหัสผ่านชั่วคราว ใช้สิ่งเหล่านี้เพื่อเข้าสู่ระบบ จากนั้นเปลี่ยนรหัสผ่านเป็นรหัสผ่านถาวรทันทีเมื่อได้รับการแจ้งเตือน</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">ฉันไม่ได้รับข้อมูลประจำตัวเข้าสู่ระบบ ควรทำอย่างไร?<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">ตรวจสอบโฟลเดอร์สแปมหรือจดหมายขยะก่อน หากยังไม่พบอีเมล ให้ติดต่อ Superadmin เพื่อส่งข้อมูลประจำตัวใหม่</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">ฉันลืมรหัสผ่าน จะรีเซ็ตได้อย่างไร?<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">ในหน้าเข้าสู่ระบบ คลิก<strong>"ลืมรหัสผ่าน?"</strong>และทำตามคำแนะนำ คุณจะได้รับอีเมลพร้อมลิงก์เพื่อสร้างรหัสผ่านใหม่</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">ฉันใช้รหัสผ่านชั่วคราวเป็นรหัสผ่านถาวรได้ไหม?<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">ไม่ได้ ด้วยเหตุผลด้านความปลอดภัย คุณต้องเปลี่ยนรหัสผ่านชั่วคราวเป็นรหัสผ่านใหม่ที่เข้มแข็งในระหว่างการเข้าสู่ระบบครั้งแรก</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">หลังเข้าสู่ระบบแล้ว ฉันควรเห็นอะไรในแดชบอร์ด?<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">แดชบอร์ดของคุณแสดง: Tenant ทั้งหมด จำนวนใช้งานอยู่/หยุดชั่วคราว/ยกเลิกแล้ว, Token (ใช้แล้ว/จัดสรร), พื้นที่จัดเก็บ (ใช้แล้ว/จัดสรร) และที่นั่ง (มีใบอนุญาต/ใช้แล้ว) หากยังไม่มี Tenant ตัวชี้วัดทั้งหมดจะแสดง 0</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">ทำไมตัวชี้วัดแดชบอร์ดของฉันไม่อัปเดต?<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">รีเฟรชเบราว์เซอร์หรือออกจากระบบแล้วเข้าสู่ระบบใหม่ หากปัญหายังคงอยู่ โปรดติดต่อทีมสนับสนุนของคุณ</div></div></div>'
  },

  'partner-faq-tenants': {
    cat: 'partner-help',
    title: 'คำถามที่พบบ่อย: Tenant การชำระเงิน และความปลอดภัย',
    exc: 'คำถามที่พบบ่อยเกี่ยวกับการสร้างและจัดการ Tenant การสมัครสมาชิก การแยก Tenant และการแก้ปัญหา',
    body: '<p>คำถามทั่วไปเกี่ยวกับการจัดการ Tenant การสมัครสมาชิก และความปลอดภัย</p><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">ฉันจะสร้าง Tenant ใหม่ได้อย่างไร?<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">ไปที่ Tenant &rsaquo; คลิก<strong>สร้าง Tenant</strong> &rsaquo; กรอกข้อมูลในช่องที่จำเป็น (ชื่อ Tenant โดเมนบริษัท อีเมลผู้ดูแล แพ็กเกจ ที่นั่ง Token พื้นที่จัดเก็บ วันที่เริ่มต้น/สิ้นสุด) &rsaquo; คลิก<strong>ส่ง</strong></div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">มีแพ็กเกจอะไรบ้างสำหรับ Tenant?<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">มีสามแพ็กเกจ: <strong>เบสิก</strong> (จำกัด Tenant ที่นั่ง Token และพื้นที่จัดเก็บ), <strong>โปร</strong> (ขีดจำกัดสูงกว่า) และ <strong>เอ็นเตอร์ไพรส์</strong> (ขีดจำกัดปรับแต่งได้)</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">ทำไมฉันไม่สามารถสร้าง Tenant เพิ่มได้?<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">แพ็กเกจของคุณมีขีดจำกัด Tenant ที่กำหนดโดย Superadmin คุณจะเห็น: <em>"คุณถึงขีดจำกัด Tenant แล้ว ติดต่อ Superadmin เพื่อเพิ่มโควต้าของคุณ"</em></div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">รหัสสีในการใช้งาน Tenant หมายความว่าอย่างไร?<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner"><strong>สีเขียว</strong> (&lt;75%) — การใช้งานปกติ <strong>สีส้ม</strong> (75–89%) — ติดตามอย่างใกล้ชิด <strong>สีแดง</strong> (90%+) — ต้องดำเนินการทันที</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">จะเกิดอะไรขึ้นเมื่อการสมัครสมาชิกของ Tenant หมดอายุ?<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">การเข้าถึงของ Tenant จะถูกระงับและบริการทั้งหมดจะหยุดจนกว่าการสมัครสมาชิกจะได้รับการต่ออายุ ติดต่อ Superadmin ของคุณเพื่อต่ออายุก่อนที่การสมัครสมาชิกจะหมดอายุ</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">ฉันสามารถดู Tenant ที่สร้างโดย Partner อื่นได้ไหม?<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">ไม่ได้ ระบบบังคับใช้การแยก Tenant — คุณสามารถดูและจัดการเฉพาะ Tenant ที่เชื่อมโยงกับ Partner ID ของคุณเท่านั้น</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">ฉันได้รับข้อผิดพลาดการตรวจสอบเมื่อสร้าง Tenant ควรทำอย่างไร?<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">ตรวจสอบข้อความข้อผิดพลาดสำหรับปัญหาเฉพาะ: <strong>ช่องที่จำเป็นว่าง</strong> — กรอกข้อมูลในช่องบังคับทั้งหมด <strong>อีเมลไม่ถูกต้อง</strong> — ตรวจสอบว่าอีเมลผู้ดูแลมีรูปแบบถูกต้อง (เช่น admin@company.com) <strong>วันที่สิ้นสุดก่อนวันที่เริ่มต้น</strong> — กำหนดวันที่สิ้นสุดให้อยู่หลังวันที่เริ่มต้น</div></div></div>'
  },

};

window.VIDEOS = [
  { id: 'UmLDcJ7pvK4', label: 'บทเรียน Partner — เริ่มต้น', title: 'Partner Module: ล็อกอินครั้งแรกและภาพรวมแดชบอร์ด', desc: 'คู่มือทีละขั้นตอน — เข้าสู่ระบบ เปลี่ยนรหัสผ่าน และนำทางในแดชบอร์ด Partner', thumb: 'https://img.youtube.com/vi/UmLDcJ7pvK4/maxresdefault.jpg', url: 'https://youtu.be/UmLDcJ7pvK4' },
  { id: 'WtNTT6OnOyk', label: 'บทเรียน Partner — Tenant', title: 'การสร้างและจัดการ Tenant', desc: 'วิธีสร้าง Tenant ติดตามการใช้ทรัพยากร และจัดการสมาชิกภาพจากแดชบอร์ด Partner', thumb: 'https://img.youtube.com/vi/WtNTT6OnOyk/maxresdefault.jpg', url: 'https://youtu.be/WtNTT6OnOyk' }
];
