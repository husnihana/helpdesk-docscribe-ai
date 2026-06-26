// Admin Portal — English
// Loaded after ../data-en.js; overrides window.CATS and window.ARTS only.

window.CATS = [
  {
    id: 'user-management',
    title: 'User Management',
    bg: '#eff6ff', fg: '#1d4ed8',
    desc: 'Invite, manage and remove users across your organisation.',
    arts: ['admin-add-user', 'admin-roles', 'admin-deactivate', 'admin-reset-password'],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
  },
  {
    id: 'permissions',
    title: 'Permissions & Roles',
    bg: '#f0fdf4', fg: '#15803d',
    desc: 'Configure what each user role can access and perform.',
    arts: ['admin-perm-overview', 'admin-perm-category'],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>'
  },
  {
    id: 'system-config',
    title: 'System Configuration',
    bg: '#fff7ed', fg: '#c2410c',
    desc: 'Manage platform settings, file tags, and organisation preferences.',
    arts: ['admin-settings'],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>'
  },
  {
    id: 'audit-logs',
    title: 'Audit & Activity Logs',
    bg: '#fef2f2', fg: '#b91c1c',
    desc: 'Monitor user activity and generate compliance reports.',
    arts: ['admin-audit-view', 'admin-audit-export'],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>'
  },
];

window.ARTS = {
  'admin-add-user': {
    cat: 'user-management',
    title: 'Inviting Users & Creating Departments',
    exc: 'How to invite new users and create departments in your organisation.',
    body: '<p>Once you are in Admin Mode, navigate to <strong>Users &amp; Departments</strong> from the left sidebar. You will see two tabs at the top:</p><ul><li><strong>Users</strong> &mdash; displays all registered users in the system</li><li><strong>Departments</strong> &mdash; displays all departments created in your organisation</li></ul><h2>Inviting a New User</h2><ol><li>Click the <strong>Invite User</strong> button at the top right of the Users tab.</li><li>A modal will appear. Fill in the following fields:<ul><li><strong>Full Name</strong> (required) &mdash; enter the user\'s full name.</li><li><strong>Email Address</strong> (required) &mdash; enter the user\'s work email.</li><li><strong>Job Title</strong> (optional) &mdash; for example, Software Engineer.</li></ul></li><li>Configure access settings:<ul><li><strong>Use an Existing User</strong> &mdash; tick this if the person already has an account in another workspace.</li><li><strong>Global Access</strong> &mdash; tick this to allow the user to see all departments, categories, and files across the organisation.</li></ul></li><li>Set the <strong>Role</strong> &mdash; choose either <strong>User</strong> or <strong>Manager</strong> from the dropdown.</li><li>Select the <strong>Department</strong> the user belongs to.</li><li>Adjust the <strong>Monthly Token Limit</strong> using the slider. The default is 500, with a maximum of 10,000.</li><li>Under <strong>Security &amp; Access Configuration</strong>, tick <strong>Manage Categories</strong> if you want this user to be able to create, edit, and delete file categories.</li><li>Click <strong>Send Invitation</strong> to invite the user.</li></ol><div class="tip"><strong>Note:</strong> The seat counter at the top of the modal shows your current usage, for example 3 / 5. You cannot invite more users than your plan allows.</div><img src="../images/invite user.png" alt="Invite User" class="screenshot"><p class="screenshot-caption">Invite User &mdash; fill in user details, set role and department</p><div class="tip"><strong>Note:</strong> The invited user will receive an email to set up their account.</div><div class="warning"><strong>⚠️ Important:</strong> The email address must be valid. The account is only created after the user clicks the verification link in their email. Incorrect addresses will result in failed invitations.</div><h2>Creating a New Department</h2><ol><li>Click the <strong>+ Create Department</strong> button at the top right of the Departments tab.</li><li>A modal will appear. Fill in the following fields:<ul><li><strong>Department Name</strong> (required) &mdash; enter the name of the department, for example Engineering or HR.</li><li><strong>Description</strong> (optional) &mdash; add a brief description of what the department does.</li></ul></li><li>Under <strong>Department Manager</strong>, choose one of the following:<ul><li><strong>Existing User</strong> &mdash; select a manager who already has an account in the system.</li><li><strong>Invite New</strong> &mdash; enter the manager\'s name and email to send them an invitation.</li></ul></li><li>Click <strong>Create Department</strong> to save.</li></ol><img src="../images/invite department.png" alt="Create Department" class="screenshot"><p class="screenshot-caption">Create Department &mdash; set name, description and assign a manager</p><div class="tip"><strong>Note:</strong> Department Name and Department Manager are required fields. You cannot create a department without assigning a manager.</div>'
  },
  'admin-roles': {
    cat: 'user-management',
    title: 'Assigning User Roles',
    exc: 'How to change a user\'s role within the platform.',
    body: '<p>User roles determine what actions a person can perform. Roles can be changed at any time by an administrator.</p><h2>Available Roles</h2><table><thead><tr><th>Role</th><th>Description</th></tr></thead><tbody><tr><td><strong>Admin</strong></td><td>Full platform control — users, categories, settings, audit logs.</td></tr><tr><td><strong>Department Manager</strong></td><td>Can create and manage categories; cannot manage users or system settings.</td></tr><tr><td><strong>User</strong></td><td>Can upload, organise, and run AI Search on accessible documents.</td></tr><tr><td><strong>Read-Only</strong></td><td>Can view and use AI Search on documents shared with them only.</td></tr></tbody></table><h2>Changing a Role</h2><p>Click <strong>Users &amp; Departments</strong> in the left navigation panel. There are two ways to change a role depending on what you need to update.</p><h3>Changing a User\'s Role</h3><ol><li>Go to the <strong>Users</strong> tab.</li><li>Find the user and click the <strong>three dots (&hellip;)</strong> in the Action column.</li><li>Click <strong>Edit</strong>.</li><li>Change the role to <strong>User</strong> or <strong>Tenant Admin</strong> and save.</li></ol><h3>Changing a Department Manager</h3><ol><li>Go to the <strong>Departments</strong> tab.</li><li>Find the department and click the <strong>three dots (&hellip;)</strong> in the Action column.</li><li>Click <strong>Edit Department</strong>.</li><li>Update the <strong>Department Manager</strong> field to a different user and save.</li></ol>'
  },
  'admin-deactivate': {
    cat: 'user-management',
    title: 'Deactivating & Removing Users',
    exc: 'How to suspend or permanently remove a user from your organisation.',
    body: '<p>When a user leaves or needs their access suspended, you can deactivate or remove their account.</p><h2>Deactivating a User (Recommended)</h2><p>Deactivation suspends access while preserving all documents and history. The account can be reactivated at any time.</p><ol><li>Go to <strong>Users &amp; Departments</strong>.</li><li>Find the user and click the <strong>three dots (&hellip;)</strong> in the Action column.</li><li>Click <strong>Deactivate User</strong>.</li><li>Type <strong>FREEZE</strong> in the confirmation box and confirm.</li></ol><h2>Permanently Removing a User</h2><p>Permanent removal deletes the account. Documents in the user\'s My Box will be archived.</p><ol><li>Go to <strong>Users &amp; Departments</strong>.</li><li>Find the user and click the <strong>three dots (&hellip;)</strong> in the Action column.</li><li>Click <strong>Delete User</strong>.</li><li>Type <strong>DELETE</strong> in the confirmation box and confirm.</li></ol><div class="tip"><strong>Note:</strong> Permanent removal cannot be undone. We recommend deactivation unless data must be purged for compliance reasons.</div>'
  },
  'admin-perm-overview': {
    cat: 'permissions',
    title: 'Permissions Overview',
    exc: 'A full breakdown of what each user role can and cannot do.',
    body: '<p>The table below summarises permissions across all platform features.</p><table><thead><tr><th>Feature</th><th>Admin</th><th>Cat. Mgr</th><th>Standard</th><th>Read-Only</th></tr></thead><tbody><tr><td>Upload Documents</td><td>&#10003;</td><td>&#10003;</td><td>&#10003;</td><td>&#10007;</td></tr><tr><td>Delete Documents</td><td>&#10003;</td><td>&#10003; (own)</td><td>&#10003; (own)</td><td>&#10007;</td></tr><tr><td>Create Categories</td><td>&#10003;</td><td>&#10003;</td><td>&#10007;</td><td>&#10007;</td></tr><tr><td>Manage Category Access</td><td>&#10003;</td><td>&#10003;</td><td>&#10007;</td><td>&#10007;</td></tr><tr><td>Run AI Search</td><td>&#10003;</td><td>&#10003;</td><td>&#10003;</td><td>&#10003;</td></tr><tr><td>Share Documents</td><td>&#10003;</td><td>&#10003;</td><td>&#10003;</td><td>&#10007;</td></tr><tr><td>Invite Users</td><td>&#10003;</td><td>&#10007;</td><td>&#10007;</td><td>&#10007;</td></tr><tr><td>Manage Roles</td><td>&#10003;</td><td>&#10007;</td><td>&#10007;</td><td>&#10007;</td></tr><tr><td>View Audit Logs</td><td>&#10003;</td><td>&#10007;</td><td>&#10007;</td><td>&#10007;</td></tr><tr><td>System Settings</td><td>&#10003;</td><td>&#10007;</td><td>&#10007;</td><td>&#10007;</td></tr></tbody></table>'
  },
  'admin-perm-category': {
    cat: 'permissions',
    title: 'Category-Level Access Control',
    exc: 'How to grant or restrict access to specific categories for individual users.',
    body: '<p>Beyond platform-wide roles, you can control which users have access to each individual category.</p><h2>Granting Access</h2><ol><li>Go to <strong>Users &amp; Departments</strong>.</li><li>Find the user and click the <strong>three dots (&hellip;)</strong> in the Action column.</li><li>Click <strong>Edit</strong>.</li><li>Under <strong>Security &amp; Access Configuration</strong>, tick <strong>Global Access</strong>.</li><li>Click <strong>Save</strong> to save changes.</li></ol><div class="tip"><strong>🎬 Show Me:</strong> Watch how to grant global access to a user in your organisation.<div class="video-embed"><a href="https://youtu.be/kzPm6G0zEfQ" target="_blank" rel="noopener noreferrer"><img src="https://img.youtube.com/vi/kzPm6G0zEfQ/hqdefault.jpg" alt="Watch tutorial on YouTube" class="video-thumb small-thumb"><div class="play-overlay">▶</div></a></div></div>'
  },
  'admin-settings': {
    cat: 'system-config',
    title: 'System Settings',
    exc: 'Configure organisation name, default language, and notification preferences.',
    body: '<p>System Settings let you configure the global behaviour of your Doc-Scribe.ai instance.</p><h2>Global Access Users</h2><p>Global Access Users can view all files, categories, and departments across the entire organization, regardless of department assignments.</p><p>This level of access is typically granted to:</p><ul><li>Senior management or executives</li><li>IT Administrators</li><li>Compliance or audit personnel</li></ul><p>To add a Global Access User, click <strong>Add Global Access User</strong> and select a user from the list.</p><div class="warning"><strong>⚠️ Note:</strong> Assign Global Access carefully. Users with this permission can view all documents across all departments, including sensitive files.</div><h2>Trash Retention</h2><p><strong>Auto-delete files in Trash after 30 days</strong></p><p>When this setting is enabled, files moved to Trash will be permanently deleted after 30 days. Files in Trash continue to count against your organization\'s storage allowance until they are permanently removed.</p><p>Enable this setting to keep storage usage under control without requiring manual cleanup.</p><img src="../images/admin setting.png" alt="Admin Settings" class="screenshot">'
  },
  'admin-audit-view': {
    cat: 'audit-logs',
    title: 'Viewing Audit Logs',
    exc: 'How to monitor user activity and filter audit log entries.',
    body: '<p>The Audit Log records all significant platform actions including document access, uploads, deletions, sharing, and user management changes.</p><h2>Accessing the Audit Log</h2><p>Switch to <strong>User mode</strong>, then navigate to <strong>Audit Trail</strong>.</p><h2>What Is Logged</h2><ul><li>Document uploaded, downloaded, deleted, or shared</li><li>AI Search sessions initiated</li><li>User invited, role changed, deactivated, or removed</li><li>Category created, modified, or deleted</li><li>System settings changed</li><li>Login and logout events</li></ul><h2>Filtering</h2><p>Use the filter bar to narrow results by <strong>File</strong>, <strong>Department</strong>, <strong>User</strong>, or <strong>Setting</strong> events.</p><ol><li>Open <strong>Audit Trail</strong> from the left navigation panel.</li><li>Type a keyword into the search bar to look up specific activity.</li><li>Select an event type from the dropdown to filter results by the category of action you are looking for.</li></ol><img src="../images/admin audit trail.png" alt="Admin Audit Trail" class="screenshot">'
  },
  'admin-reset-password': { cat: 'user-management', title: 'How to Reset Your Password', exc: 'Step-by-step guide to resetting your password using the Forgot Password link.', body: '<p>If you have forgotten your password, follow these steps to reset it and regain access to your account.</p><h2>How to Reset Your Password</h2><ol><li><strong>Click &ldquo;Forgot Password?&rdquo;</strong><br>On the Sign In page, click the <strong>Forgot Password?</strong> link located above the password field.<img class="screenshot" src="../images/reset-pw-step1.png" alt="Sign In page — click Forgot Password"></li><li><strong>Enter Your Email Address</strong><br>Type your registered email address, then click <strong>Send Verification Code</strong>.<img class="screenshot" src="../images/reset-pw-step2.png" alt="Enter your email address"></li><li><strong>Check Your Email</strong><br>You will receive an email containing a <strong>6-digit Authorization Key</strong>. Use it quickly &mdash; it expires soon.<img class="screenshot" src="../images/reset-pw-step3.png" alt="Check your email for the Authorization Key"></li><li><strong>Enter Code &amp; Set New Password</strong><br>Enter the 6-digit code, then type your new password.<img class="screenshot" src="../images/reset-pw-step4.png" alt="Enter verification code and set new password">It must meet these requirements:<ul><li>At least 8 characters</li><li>Uppercase letter (A&ndash;Z)</li><li>Lowercase letter (a&ndash;z)</li><li>Number (0&ndash;9)</li><li>Special character (!@#$%^&amp;*)</li></ul>Click <strong>Reset Password</strong> when done.</li><li><strong>Password Reset Successful!</strong><br>You&rsquo;re all set. Click <strong>Back to Sign In</strong> and log in with your new password.<img class="screenshot" src="../images/reset-pw-step5.png" alt="Password reset successful"></li></ol><div class="tip"><strong>Security tip:</strong> Use a strong, unique password. Your Authorization Key expires quickly &mdash; complete the reset in one session.</div>' },

  'admin-audit-export': {
    cat: 'audit-logs',
    title: 'Exporting Audit Reports',
    exc: 'How to export audit log data for compliance and reporting purposes.',
    body: '<p>Audit logs can be exported as CSV for external reporting, compliance audits, or integration with SIEM tools.</p><h2>Exporting</h2><ol><li>Go to <strong>Audit Trail</strong>.</li><li>Apply filters (date range, user, action type) to scope your export.</li><li>Click <strong>Export</strong>.</li><li>The file downloads immediately to your browser.</li></ol>'
  },
};

window.VIDEOS = [
  { id: 'ak2UWuSw_D0', label: 'Overview', title: 'Product Overview', desc: 'A comprehensive overview of Doc-Scribe.ai — how it reads, understands and acts on documents to eliminate manual data entry.', thumb: '../images/Thumbnail Product Overview.png', url: 'https://youtu.be/ak2UWuSw_D0' },
  { id: 'UmLDcJ7pvK4', label: 'Admin Tutorial — Setup', title: 'Getting Started as an Admin', desc: 'A walkthrough of the Doc-Scribe.ai platform — from document ingestion to AI-powered extraction and workflow triggers.', thumb: '../images/gettingstarted.png', url: 'https://youtu.be/UmLDcJ7pvK4' },
  { id: 'WtNTT6OnOyk', label: 'Admin Tutorial — Management', title: 'Security & Architecture', desc: 'An in-depth look at Doc-Scribe.ai\'s security model, data architecture and deployment considerations.', thumb: '../images/docscribe_structure.png', url: 'https://youtu.be/WtNTT6OnOyk' }
];
