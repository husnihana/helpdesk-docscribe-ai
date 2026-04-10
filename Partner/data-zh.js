// Partner Portal — 简体中文
// Loaded after ../data-zh.js; overrides window.CATS and window.ARTS only.

window.CATS = [
  {
    id: 'partner-setup',
    title: '入门指南',
    bg: '#eff6ff', fg: '#1d4ed8',
    desc: '首次登录、密码设置，以及个性化您的合作伙伴使用体验。',
    arts: ['partner-login', 'partner-customize'],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 8 12 12 14 14"/></svg>'
  },
  {
    id: 'partner-dashboard-cat',
    title: '合作伙伴控制台',
    bg: '#f0fdf4', fg: '#15803d',
    desc: '了解控制台指标、租户摘要及快捷操作。',
    arts: ['partner-dashboard-view'],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>'
  },
  {
    id: 'tenant-mgmt',
    title: '租户管理',
    bg: '#fdf4ff', fg: '#7e22ce',
    desc: '创建、查看、搜索和管理租户，包括详情页面与租户隔离机制。',
    arts: ['partner-tenant-list', 'partner-create-tenant', 'partner-tenant-detail', 'partner-tenant-isolation'],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>'
  },
  {
    id: 'partner-help',
    title: '提示与常见问题',
    bg: '#fff7ed', fg: '#c2410c',
    desc: '最佳实践、故障排查指南及合作伙伴常见问题解答。',
    arts: ['partner-tips', 'partner-faq-access', 'partner-faq-tenants'],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>'
  },
];

window.ARTS = {

  // ── 入门指南 ──────────────────────────────────────────────────────────────────

  'partner-login': {
    cat: 'partner-setup',
    title: '首次登录与账号设置',
    exc: '如何使用临时凭据首次登录并保护您的账号安全。',
    body: '<p>超级管理员创建您的账号后，您将自动收到一封包含注册邮箱和临时密码的登录邮件。</p><h2>所需信息</h2><ul><li>超级管理员提供的注册<strong>邮箱地址</strong>。</li><li><strong>临时密码</strong> — 为您的首次登录生成的一次性凭据。</li></ul><div class="tip"><strong>重要提示：</strong>临时密码仅在短时间内有效。收到后请立即登录并修改密码。如未收到凭据，请检查垃圾邮件文件夹，或立即联系超级管理员。</div><h2>登录步骤</h2><ol><li>输入您的邮箱地址和临时密码。</li><li>点击<strong>登录</strong>。</li><li>系统将立即提示您<strong>修改密码</strong> — 这是安全必要步骤。</li><li>设置一个强而独特的永久密码并确认。</li><li>修改密码后，您将被跳转到<strong>合作伙伴控制台</strong>。</li></ol><img class="screenshot" src="../images/Partner1.png" onclick="openLb(this.src)" alt="合作伙伴登录流程"><p class="screenshot-caption">登录界面 (1–2)  →  设置新密码 (3)  →  合作伙伴控制台 (5)</p><h2>预期结果</h2><p>首次成功登录并更改密码后，您将进入合作伙伴控制台，可以开始管理您的租户。</p><h2>退出登录</h2><p>点击右上角的<strong>用户图标</strong>，选择<strong>退出登录</strong>。在共享或公共设备上使用后，请务必退出登录。</p><div class="tip"><strong>安全提示：</strong>切勿与他人共享您的登录凭据。如怀疑存在未授权访问，请立即修改密码并联系超级管理员。</div>'
  },

  'partner-customize': {
    cat: 'partner-setup',
    title: '个性化您的使用体验',
    exc: '如何切换明暗主题及更改界面语言。',
    body: '<p>合作伙伴模块支持从顶部工具栏进行个性化设置。</p><table><thead><tr><th>功能</th><th>使用方法</th><th>功能说明</th></tr></thead><tbody><tr><td><strong>主题切换</strong></td><td>点击右上角的主题图标。</td><td>在<strong>浅色模式</strong>和<strong>深色模式</strong>之间切换，打造个性化体验。</td></tr><tr><td><strong>语言选择器</strong></td><td>点击顶部导航中的语言下拉菜单。</td><td>将界面语言切换为 <strong>EN</strong>、<strong>MY</strong>、<strong>ZH</strong> 或 <strong>TH</strong>。</td></tr></tbody></table><p>您的设置将立即生效。语言和主题偏好在整个会话期间保持不变。</p>'
  },

  // ── 合作伙伴控制台 ───────────────────────────────────────────────────────────

  'partner-dashboard-view': {
    cat: 'partner-dashboard-cat',
    title: '控制台概览与快捷操作',
    exc: '了解您的控制台指标及如何使用快捷操作管理租户。',
    body: '<p>合作伙伴控制台实时呈现所有租户及其资源使用情况的快照。</p><h2>控制台指标</h2><p>控制台显示以下指标：</p><ul><li><strong>租户总数</strong> — 您账号下的租户总数。</li><li><strong>活跃</strong> — 拥有有效订阅的租户数量。</li><li><strong>已暂停</strong> — 订阅临时暂停的租户数量。</li><li><strong>已取消</strong> — 订阅已取消的租户数量。</li><li><strong>Token</strong> — 所有租户已使用的 Token 总量。</li><li><strong>存储</strong> — 所有租户已使用的存储总量。</li><li><strong>席位</strong> — 所有租户的授权席位总数。</li></ul><h2>空状态</h2><p>如果您尚未创建任何租户，所有指标均显示 <strong>0</strong>，并出现提示：<em>"暂无租户。立即创建您的第一个租户！"</em></p><h2>已有租户时</h2><p>创建租户后，指标将随您的添加或修改操作实时更新。点击<strong>租户总数</strong>卡片可直接跳转到租户列表。</p><h2>快捷操作</h2><ul><li><strong>指标</strong> — 一目了然地查看租户、Token、存储和席位的汇总数据。</li><li><strong>搜索</strong> — 使用搜索栏快速查找特定租户。</li><li><strong>创建租户</strong> — 一键开始添加新租户。</li></ul><div class="tip"><strong>提示：</strong>如控制台指标未更新，请刷新浏览器或重新登录。如问题持续，请联系支持团队。</div>'
  },

  // ── 租户管理 ─────────────────────────────────────────────────────────────────

  'partner-tenant-list': {
    cat: 'tenant-mgmt',
    title: '查看与搜索租户',
    exc: '如何浏览租户列表、了解表格列含义及搜索特定租户。',
    body: '<p><strong>租户</strong>模块为您提供合作伙伴账号下所有租户的完整视图。</p><h2>进入租户列表</h2><p>使用侧边栏导航，点击<strong>租户</strong>。</p><img class="screenshot" src="../images/tenants.jpg" onclick="openLb(this.src)" alt="我的租户列表"><p class="screenshot-caption">我的租户 — 一览所有租户的套餐、席位与资源配额及订阅状态。</p><h2>租户列表表格</h2><p>每个租户以行的形式显示在表格中，包含以下列：</p><table><thead><tr><th>列名</th><th>说明</th></tr></thead><tbody><tr><td>租户名称</td><td>租户组织的名称。</td></tr><tr><td>状态</td><td>活跃、已暂停或已取消。</td></tr><tr><td>套餐</td><td>已订阅的套餐（基础版、专业版、企业版）。</td></tr><tr><td>席位</td><td>该租户的授权席位数量。</td></tr><tr><td>Token</td><td>该租户的 Token 配额。</td></tr><tr><td>存储</td><td>该租户的存储配额。</td></tr><tr><td>操作</td><td>查看或管理该租户。</td></tr></tbody></table><h2>无租户</h2><p>如无租户，将显示消息：<em>"暂无租户。立即创建您的第一个租户！"</em>，并附有<strong>创建第一个租户</strong>按钮。</p><h2>搜索租户</h2><ol><li>在租户模块中，找到列表顶部的<strong>搜索框</strong>。</li><li>输入关键词 — 租户名称、邮箱或套餐。</li><li>按下 <strong>Enter</strong> 或点击搜索图标。</li><li>列表将筛选，仅显示匹配的租户。</li></ol><h2>查看租户详情</h2><p>点击某行租户或<strong>查看</strong>按钮，即可打开租户详情页，获取完整信息。</p><img class="screenshot" src="../images/docscribe_tenant_censored_v2.png" onclick="openLb(this.src)" alt="租户详情页"><p class="screenshot-caption">租户详情 — 完整展示租户的资源使用情况、订阅套餐、席位配额及关键账号信息。</p>'
  },

  'partner-create-tenant': {
    cat: 'tenant-mgmt',
    title: '创建新租户',
    exc: '创建租户的分步指南，包括必填字段、验证规则、配额限制及日期自动计算。',
    body: '<p>合作伙伴可直接在租户模块中创建新的租户组织。</p><h2>所需信息</h2><p>创建租户时需填写以下信息：</p><ul><li><strong>租户名称</strong>（必填）</li><li><strong>公司域名</strong>（必填）</li><li><strong>管理员邮箱</strong>（必须是有效的邮箱地址）</li><li><strong>套餐</strong> — 基础版、专业版或企业版</li><li><strong>席位</strong>、<strong>Token 配额</strong>和<strong>存储</strong>（基于您的套餐限制）</li><li><strong>开始日期</strong>和<strong>结束日期</strong>（结束日期根据计费周期自动计算）</li></ul><h2>创建租户步骤</h2><ol><li>在侧边栏导航到<strong>租户</strong>。</li><li>点击<strong>创建租户</strong>。</li><li>填写所有必填字段。</li><li>点击<strong>提交</strong>。</li></ol><img class="screenshot" src="../images/Create%20New%20Tenant.png" onclick="openLb(this.src)" alt="创建新租户表单"><p class="screenshot-caption">步骤 1–4：进入租户列表 → 点击创建租户 → 填写表单 → 提交以完成租户创建。</p><h2>租户创建成功</h2><p>成功界面将出现两个选项：</p><ul><li><strong>返回租户列表</strong> — 回到租户完整列表。</li><li><strong>再创建一个</strong> — 立即创建另一个租户。</li></ul><p>新租户将立即出现在租户列表中。</p><h2>验证错误</h2><table><thead><tr><th>错误</th><th>原因</th></tr></thead><tbody><tr><td>字段红色高亮</td><td>必填字段未填写。</td></tr><tr><td>"请输入有效的邮箱地址。"</td><td>管理员邮箱格式不正确。</td></tr><tr><td>"结束日期必须在开始日期之后。"</td><td>结束日期设置在开始日期之前。</td></tr></tbody></table><h2>套餐配额限制</h2><p>超级管理员为您的套餐设置了租户配额。达到限制后，您将看到：</p><p><em>"您已达到租户数量上限。请联系超级管理员提高配额。"</em></p><h2>日期自动计算</h2><ul><li><strong>月度套餐：</strong>开始日期 + 1 个月 = 结束日期</li><li><strong>年度套餐：</strong>开始日期 + 1 年 = 结束日期</li></ul><div class="tip"><strong>注意：</strong>结束日期自动计算，无法手动设置。如需延长订阅，请联系超级管理员。</div>'
  },

  'partner-tenant-detail': {
    cat: 'tenant-mgmt',
    title: '租户详情页',
    exc: '租户详情页的内容概览 — 状态、资源使用情况及订阅时间线。',
    body: '<p>租户详情页提供单个租户信息及资源消耗的完整视图。</p><h2>租户标题栏</h2><p>详情页顶部显示：</p><ul><li><strong>租户名称</strong></li><li><strong>公司域名</strong></li><li><strong>状态</strong> — 活跃、已暂停或已取消</li><li><strong>套餐名称</strong> — 已订阅的套餐</li></ul><h2>资源使用情况</h2><p>进度条显示租户已消耗的各类资源量：</p><table><thead><tr><th>资源</th><th>显示方式</th><th>预警阈值</th></tr></thead><tbody><tr><td>席位</td><td>已用 / 最大值（进度条）</td><td>90%+ 时红色预警</td></tr><tr><td>Token</td><td>已用 / 最大值（进度条）</td><td>90%+ 时红色预警</td></tr><tr><td>存储</td><td>已用 / 最大值（进度条）</td><td>90%+ 时红色预警</td></tr></tbody></table><h2>颜色编码说明</h2><ul><li><strong>绿色</strong>（&lt;75% 使用率）— 正常使用。</li><li><strong>橙色</strong>（75–89% 使用率）— 请密切关注。</li><li><strong>红色</strong>（90%+ 使用率）— 需立即处理。请考虑升级套餐或优化资源使用。</li></ul><h2>订阅时间线</h2><ul><li><strong>开始日期</strong> — 租户订阅的起始日期。</li><li><strong>结束日期</strong> — 订阅的到期日期。</li><li><strong>剩余天数</strong> — 到期倒计时。</li></ul><div class="tip"><strong>提示：</strong>为即将到期的订阅设置提醒。在租户访问被暂停前，请联系超级管理员续期或延长。</div><h2>编辑租户详情</h2><p>某些详情（如套餐或配额限制）只能由超级管理员修改。如需暂停、取消或修改租户，请使用租户详情页上提供的选项，或联系超级管理员。</p>'
  },

  'partner-tenant-isolation': {
    cat: 'tenant-mgmt',
    title: '租户隔离与安全',
    exc: '租户隔离机制的工作原理 — 作为合作伙伴您能看到什么、看不到什么。',
    body: '<p>合作伙伴模块实施严格的租户隔离机制。您只能查看和管理属于您的合作伙伴账号的租户。</p><h2>您无法看到的内容</h2><ul><li>其他合作伙伴创建的租户对您完全不可见。</li><li>尝试访问不属于您的租户 URL 将返回：<br><em>"未找到租户。请检查租户 ID。"</em></li></ul><h2>您可以看到的内容</h2><ul><li>租户列表中仅显示与您的<strong>合作伙伴 ID</strong> 关联的租户。</li><li>控制台指标<strong>仅反映您自己的租户</strong> — 不会显示跨合作伙伴的数据。</li></ul><h2>为什么这很重要</h2><p>租户隔离确保合作伙伴之间无法互相访问客户数据。这是平台的核心安全功能，自动运行，无需任何配置。</p><div class="tip"><strong>安全提示：</strong>如果收到"404 未找到租户"错误，请验证租户 ID 是否正确，以及该租户是否属于您的账号。如认为存在错误，请联系超级管理员。</div>'
  },

  // ── 提示与常见问题 ───────────────────────────────────────────────────────────

  'partner-tips': {
    cat: 'partner-help',
    title: '提示与最佳实践',
    exc: '日常合作伙伴运营的安全、监控和故障排查建议。',
    body: '<h2>安全</h2><ul><li>始终使用<strong>强而独特的密码</strong>，并定期更新。</li><li>在共享或公共设备上使用后，请务必<strong>退出登录</strong>。</li><li>切勿与他人共享您的登录凭据。</li><li>如怀疑存在未授权访问，请立即修改密码并联系支持团队。</li></ul><h2>监控</h2><ul><li><strong>每天</strong>查看控制台，了解各租户的使用更新情况。</li><li>在租户到期前为<strong>订阅续期</strong>设置提醒。</li><li><strong>每周</strong>检查每个租户的资源使用情况，避免意外超限。</li><li>关注资源条上的<strong>橙色和红色指示器</strong> — 它们表示租户正在接近限额。</li></ul><h2>租户管理</h2><ul><li>使用<strong>搜索功能</strong>按名称或域名快速查找租户。</li><li>保持租户<strong>管理员邮箱地址</strong>最新，确保其接收重要通知。</li><li>定期监控资源使用情况，避免租户意外达到限额。</li></ul><h2>故障排查</h2><ul><li><strong>无法登录？</strong>在登录页面使用"忘记密码？"重置密码。</li><li><strong>创建租户时出现验证错误？</strong>仔细检查所有必填字段，确保日期设置正确。</li><li><strong>租户不见了？</strong>确保您使用正确的合作伙伴账号登录。</li><li><strong>系统缓慢或无响应？</strong>刷新浏览器、清除缓存，或尝试其他浏览器（推荐 Chrome 或 Firefox）。</li><li><strong>控制台指标未更新？</strong>退出后重新登录。如问题持续，请联系支持团队。</li></ul>'
  },

  'partner-faq-access': {
    cat: 'partner-help',
    title: '常见问题：登录、控制台与导航',
    exc: '关于登录、凭据、合作伙伴控制台及合作伙伴模块导航的常见问题解答。',
    body: '<p>关于登录、凭据和合作伙伴控制台的常见问题。</p><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">如何首次登录？<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">您将收到超级管理员发送的邮件，其中包含登录邮箱和临时密码。使用这些信息登录，并在系统提示时立即将密码更改为永久密码。</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">我没有收到登录凭据。该怎么办？<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">请先检查您的垃圾邮件或垃圾箱。如仍找不到邮件，请联系超级管理员重新发送凭据。</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">我忘记密码了。如何重置？<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">在登录页面点击<strong>"忘记密码？"</strong>，按照提示操作。您将收到一封包含创建新密码链接的邮件。</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">我可以将临时密码用作永久密码吗？<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">不可以。出于安全原因，您必须在首次登录时将临时密码更改为新的强密码。</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">我可以在多台设备上登录吗？<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">可以。但出于安全考虑，请避免在公共或共享设备上登录。在共享设备的每次使用后，请务必退出登录。</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">登录后我应该在控制台上看到什么？<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">控制台显示：租户总数、活跃/已暂停/已取消数量、Token（已用/配额）、存储（已用/配额）以及席位（授权/已用）。如尚未创建租户，所有指标均显示 0。</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">如何在合作伙伴模块的各个模块之间导航？<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">使用侧边栏在<strong>控制台</strong>和<strong>租户</strong>之间切换。顶部导航包含主题切换和语言选择选项。</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">为什么我的控制台指标没有更新？<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">请刷新浏览器，或退出后重新登录。如问题持续，请联系您的支持团队。</div></div></div>'
  },

  'partner-faq-tenants': {
    cat: 'partner-help',
    title: '常见问题：租户、计费与安全',
    exc: '关于创建和管理租户、订阅、租户隔离及故障排查的常见问题解答。',
    body: '<p>关于租户管理、订阅及安全的常见问题。</p><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">如何创建新租户？<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">前往租户 &rsaquo; 点击<strong>创建租户</strong> &rsaquo; 填写必填字段（租户名称、公司域名、管理员邮箱、套餐、席位、Token、存储、开始/结束日期）&rsaquo; 点击<strong>提交</strong>。</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">租户有哪些可用套餐？<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">提供三种套餐：<strong>基础版</strong>（租户、席位、Token 和存储有限制）、<strong>专业版</strong>（更高限额）和<strong>企业版</strong>（可自定义限额）。</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">为什么我无法创建更多租户？<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">您的套餐有超级管理员设置的租户数量上限。您将看到：<em>"您已达到租户数量上限。请联系超级管理员提高配额。"</em></div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">租户使用量的颜色编码代表什么？<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner"><strong>绿色</strong>（&lt;75%）— 正常使用。<strong>橙色</strong>（75–89%）— 需密切关注。<strong>红色</strong>（90%+）— 需立即处理。</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">租户订阅到期后会发生什么？<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">租户的访问将被暂停，所有服务将停止，直到订阅续期。请在到期前联系超级管理员延长订阅。</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">我能看到其他合作伙伴创建的租户吗？<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">不能。系统实施租户隔离机制 — 您只能查看和管理与自己合作伙伴 ID 关联的租户。</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">创建租户时出现验证错误该怎么办？<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">查看错误信息以确定具体问题：<strong>必填字段为空</strong> — 填写所有必填字段。<strong>邮箱格式无效</strong> — 确保管理员邮箱格式正确（如 admin@company.com）。<strong>结束日期早于开始日期</strong> — 将结束日期设置在开始日期之后。</div></div></div><div class="ts-item"><div class="ts-q" onclick="toggleTs(this)">我的租户列表为空，但我知道有租户。这是怎么回事？<svg class="ts-ch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div><div class="ts-a"><div class="ts-a-inner">请尝试刷新页面或退出后重新登录。确保您使用正确的合作伙伴账号登录。如问题持续，请联系支持团队。</div></div></div>'
  },

};

window.VIDEOS = [
  { id: 'UmLDcJ7pvK4', label: 'Partner 教程 — 入门指南', title: 'Partner 模块：首次登录与控制台概览', desc: '逐步演示如何登录、更改密码与导航合作伙伴控制台。', thumb: 'https://img.youtube.com/vi/UmLDcJ7pvK4/maxresdefault.jpg', url: 'https://youtu.be/UmLDcJ7pvK4' },
  { id: 'WtNTT6OnOyk', label: 'Partner 教程 — 租户管理', title: '创建与管理租户', desc: '如何创建租户、监控资源使用情况与管理订阅。', thumb: 'https://img.youtube.com/vi/WtNTT6OnOyk/maxresdefault.jpg', url: 'https://youtu.be/WtNTT6OnOyk' }
];
