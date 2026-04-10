// Admin Portal — English
// Loaded after ../data-en.js; overrides window.CATS and window.ARTS only.

window.CATS = [
  {
    id: 'user-management',
    title: 'User Management',
    bg: '#eff6ff', fg: '#1d4ed8',
    desc: 'Invite, manage and remove users across your organisation.',
    arts: ['admin-add-user', 'admin-roles', 'admin-deactivate'],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
  },
  {
    id: 'permissions',
    title: 'Permissions & Roles',
    bg: '#f0fdf4', fg: '#15803d',
    desc: 'Configure what each user role can access and perform.',
    arts: ['admin-perm-overview', 'admin-perm-category', 'admin-global-access'],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>'
  },
  {
    id: 'category-mgmt',
    title: 'Category Management',
    bg: '#fdf4ff', fg: '#7e22ce',
    desc: 'Create, organise and control access to department categories.',
    arts: ['admin-cat-create', 'admin-cat-access'],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>'
  },
  {
    id: 'system-config',
    title: 'System Configuration',
    bg: '#fff7ed', fg: '#c2410c',
    desc: 'Manage platform settings, file tags, and organisation preferences.',
    arts: ['admin-settings', 'admin-file-tags'],
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
    title: 'Inviting & Adding Users',
    exc: 'How to invite new users and manage pending invitations.',
    body: '<p>As an administrator, you can invite new users to your Doc-Scribe.ai organisation directly from the Admin panel.</p><h2>Steps to Invite a User</h2><ol><li>Navigate to <strong>Admin &rsaquo; Users</strong>.</li><li>Click <strong>+ Invite User</strong>.</li><li>Enter the user\'s email address.</li><li>Select their role: Admin, Category Manager, Standard User, or Read-Only.</li><li>Click <strong>Send Invitation</strong>.</li></ol><p>The user will receive an email with an invitation link valid for <strong>72 hours</strong>.</p><h2>Managing Pending Invitations</h2><p>Under the <em>Pending Invitations</em> tab you can:</p><ul><li><strong>Resend</strong> — if the user did not receive the email.</li><li><strong>Cancel</strong> — to revoke access before the user joins.</li></ul><div class="tip"><strong>Tip:</strong> Email addresses cannot be edited after the invitation is sent. Double-check before sending.</div>'
  },
  'admin-roles': {
    cat: 'user-management',
    title: 'Assigning User Roles',
    exc: 'How to change a user\'s role within the platform.',
    body: '<p>User roles determine what actions a person can perform. Roles can be changed at any time by an administrator.</p><h2>Available Roles</h2><table><thead><tr><th>Role</th><th>Description</th></tr></thead><tbody><tr><td><strong>Admin</strong></td><td>Full platform control — users, categories, settings, audit logs.</td></tr><tr><td><strong>Category Manager</strong></td><td>Can create and manage categories; cannot manage users or system settings.</td></tr><tr><td><strong>Standard User</strong></td><td>Can upload, organise, and run AI Search on accessible documents.</td></tr><tr><td><strong>Read-Only</strong></td><td>Can view and use AI Search on documents shared with them only.</td></tr></tbody></table><h2>Changing a Role</h2><ol><li>Go to <strong>Admin &rsaquo; Users</strong>.</li><li>Click the user\'s name.</li><li>Click <strong>Edit Role</strong>, select the new role, and confirm.</li></ol><p>Role changes take effect immediately — no re-login required.</p>'
  },
  'admin-deactivate': {
    cat: 'user-management',
    title: 'Deactivating & Removing Users',
    exc: 'How to suspend or permanently remove a user from your organisation.',
    body: '<p>When a user leaves or needs their access suspended, you can deactivate or remove their account.</p><h2>Deactivating a User (Recommended)</h2><p>Deactivation suspends access while preserving all documents and history. The account can be reactivated at any time.</p><ol><li>Go to <strong>Admin &rsaquo; Users</strong>.</li><li>Click the user\'s name.</li><li>Click <strong>Deactivate User</strong> and confirm.</li></ol><h2>Permanently Removing a User</h2><p>Permanent removal deletes the account. Documents in the user\'s My Box will be archived.</p><ol><li>Go to <strong>Admin &rsaquo; Users</strong>.</li><li>Click the user\'s name.</li><li>Click <strong>Remove User</strong> and confirm.</li></ol><div class="tip"><strong>Note:</strong> Permanent removal cannot be undone. We recommend deactivation unless data must be purged for compliance reasons.</div>'
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
    body: '<p>Beyond platform-wide roles, you can control which users have access to each individual category.</p><h2>Granting Access</h2><ol><li>Go to <strong>Admin &rsaquo; Categories</strong> and click the category name.</li><li>Under <em>Access Control</em>, click <strong>+ Add User</strong>.</li><li>Search by name or email, select access level: <em>View Only</em> or <em>View &amp; Upload</em>.</li><li>Click <strong>Save</strong>.</li></ol><h2>Revoking Access</h2><ol><li>Open the category in Admin &rsaquo; Categories.</li><li>Find the user under Access Control.</li><li>Click <strong>Remove</strong> next to their name.</li></ol><div class="tip"><strong>Note:</strong> Admins always have access to all categories regardless of category-level settings.</div>'
  },
  'admin-global-access': {
    cat: 'permissions',
    title: 'Global Access',
    exc: 'How to make a document or category accessible to all users in your organisation.',
    body: '<p>Global Access allows any user in your organisation to access a specific document or category without individual sharing.</p><h2>On a Document</h2><ol><li>Open the document and click <strong>Share</strong>.</li><li>Toggle <strong>Global Access</strong> to On.</li><li>Select <em>Can View</em> or <em>Can Download</em>.</li><li>Click <strong>Save</strong>.</li></ol><h2>On a Category</h2><ol><li>Go to <strong>Admin &rsaquo; Categories</strong> and click the category.</li><li>Under Access Control, enable <strong>Global Access</strong>.</li></ol><p>Use Global Access for company policies, SOPs, and shared templates.</p><div class="tip"><strong>Best practice:</strong> Use Global Access sparingly. For sensitive documents, always use individual or role-based sharing.</div>'
  },
  'admin-cat-create': {
    cat: 'category-mgmt',
    title: 'Creating & Managing Categories',
    exc: 'How to create new department categories and configure their settings.',
    body: '<p>Categories are shared department-level folders accessible to team members based on permissions.</p><h2>Creating a Category</h2><ol><li>Go to <strong>Admin &rsaquo; Categories</strong>.</li><li>Click <strong>+ New Category</strong>.</li><li>Enter a name and optional description.</li><li>Click <strong>Create</strong>.</li></ol><h2>Editing a Category</h2><ol><li>Click the category name.</li><li>Click <strong>Edit</strong>, update the name or description, then save.</li></ol><h2>Deleting a Category</h2><ol><li>Click the category name.</li><li>Click <strong>Delete Category</strong> and confirm.</li></ol><div class="tip"><strong>Warning:</strong> Deleting a category moves all documents within it to an archived state. Documents are not permanently deleted but will not appear in standard views until restored by an admin.</div>'
  },
  'admin-cat-access': {
    cat: 'category-mgmt',
    title: 'Managing Category Membership',
    exc: 'How to add or remove users from a category and set their access level.',
    body: '<p>Each category has its own access control list that you can manage independently.</p><h2>Adding Members</h2><ol><li>Go to <strong>Admin &rsaquo; Categories</strong> and click the category.</li><li>Under <em>Members</em>, click <strong>+ Add Member</strong>.</li><li>Search by name or email and select the user.</li><li>Choose: <em>View Only</em> or <em>Contributor</em> (can also upload and organise).</li><li>Click <strong>Add</strong>.</li></ol><h2>Removing Members</h2><ol><li>Open the category in Admin &rsaquo; Categories.</li><li>Under Members, find the user and click <strong>Remove</strong>.</li></ol><p>Changes apply immediately on next page load for the affected user.</p>'
  },
  'admin-settings': {
    cat: 'system-config',
    title: 'System Settings',
    exc: 'Configure organisation name, default language, and notification preferences.',
    body: '<p>System Settings let you configure the global behaviour of your Doc-Scribe.ai instance.</p><h2>Accessing Settings</h2><p>Go to <strong>Admin &rsaquo; Settings</strong>.</p><h2>Organisation Settings</h2><ul><li><strong>Organisation Name</strong> — shown in the platform header and email notifications.</li><li><strong>Default Language</strong> — sets the default interface language for new users.</li><li><strong>Time Zone</strong> — used for audit logs and notification timestamps.</li></ul><h2>Notification Settings</h2><ul><li><strong>Document Shared</strong> — notify users when a document is shared with them.</li><li><strong>Invitation Accepted</strong> — notify admins when invited users join.</li><li><strong>Storage Threshold</strong> — alert admins when storage usage exceeds a set limit.</li></ul><p>Click <strong>Save Settings</strong> after making any changes.</p>'
  },
  'admin-file-tags': {
    cat: 'system-config',
    title: 'File Tag Management',
    exc: 'How to create and manage custom metadata fields for documents.',
    body: '<p>File Tags are custom metadata fields that appear on every document, helping users classify and search documents using structured data.</p><h2>Creating a File Tag</h2><ol><li>Go to <strong>Admin &rsaquo; Settings &rsaquo; File Tags</strong>.</li><li>Click <strong>+ New Tag</strong>.</li><li>Enter a label (e.g., <em>Department</em>, <em>Contract Date</em>, <em>Client</em>).</li><li>Select a type: Text, Date, Dropdown, or Number.</li><li>Set whether the field is <em>Required</em> or <em>Optional</em>.</li><li>Click <strong>Save</strong>.</li></ol><h2>Editing & Deleting Tags</h2><p>You can rename or delete tags from Admin &rsaquo; Settings &rsaquo; File Tags. Deleting a tag removes it from all documents — existing values will be lost.</p><div class="tip"><strong>Tip:</strong> Aim for 5–8 essential fields. Too many tags create friction for users uploading documents.</div>'
  },
  'admin-audit-view': {
    cat: 'audit-logs',
    title: 'Viewing Audit Logs',
    exc: 'How to monitor user activity and filter audit log entries.',
    body: '<p>The Audit Log records all significant platform actions including document access, uploads, deletions, sharing, and user management changes.</p><h2>Accessing the Audit Log</h2><p>Go to <strong>Admin &rsaquo; Audit Logs</strong>.</p><h2>What Is Logged</h2><ul><li>Document uploaded, downloaded, deleted, or shared</li><li>AI Search sessions initiated</li><li>User invited, role changed, deactivated, or removed</li><li>Category created, modified, or deleted</li><li>System settings changed</li><li>Login and logout events</li></ul><h2>Filtering</h2><p>Filter by <strong>User</strong>, <strong>Action Type</strong>, <strong>Date Range</strong>, or <strong>Document</strong> using the filter bar at the top of the log.</p>'
  },
  'admin-audit-export': {
    cat: 'audit-logs',
    title: 'Exporting Audit Reports',
    exc: 'How to export audit log data for compliance and reporting purposes.',
    body: '<p>Audit logs can be exported as CSV for external reporting, compliance audits, or integration with SIEM tools.</p><h2>Exporting</h2><ol><li>Go to <strong>Admin &rsaquo; Audit Logs</strong>.</li><li>Apply filters (date range, user, action type) to scope your export.</li><li>Click <strong>Export CSV</strong>.</li><li>The file downloads immediately to your browser.</li></ol><h2>CSV Fields Included</h2><ul><li>Timestamp (ISO 8601)</li><li>User Name &amp; Email</li><li>Action Type</li><li>Resource Name (document or category)</li><li>IP Address</li><li>Result (Success / Failed)</li></ul><div class="tip"><strong>Compliance note:</strong> For GDPR or PDPA audit requirements, export logs covering the relevant period and retain them per your organisation\'s data retention policy.</div>'
  },
};

window.VIDEOS = [
  { id: 'UmLDcJ7pvK4', label: 'Admin Tutorial — Setup', title: 'Getting Started as an Admin', desc: 'A complete walkthrough of the Admin panel — inviting users, assigning roles, and configuring system settings.', thumb: 'https://img.youtube.com/vi/UmLDcJ7pvK4/maxresdefault.jpg', url: 'https://youtu.be/UmLDcJ7pvK4' },
  { id: 'WtNTT6OnOyk', label: 'Admin Tutorial — Management', title: 'Managing Users, Permissions & Audit Logs', desc: 'Configure category access, manage roles, and export compliance reports from the Admin panel.', thumb: 'https://img.youtube.com/vi/WtNTT6OnOyk/maxresdefault.jpg', url: 'https://youtu.be/WtNTT6OnOyk' }
];
