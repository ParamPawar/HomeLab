export const menuItems = [
  {
    id: 'getting-started',
    label: 'Getting Started',
    type: 'folder',
    children: [
      { id: 'introduction', label: 'Introduction', type: 'file' },
      { id: 'requirements', label: 'Requirements', type: 'file' },
      { id: 'Setup', label: 'Initial Setup', type: 'file' },
    ],
  },
  {
    id: 'hardware',
    label: 'Hardware & Infrastructure',
    type: 'folder',
    children: [
      { id: 'raspberry-pi', label: 'Raspberry Pi', type: 'file' },
      { id: 'sbc', label: 'Low-Cost SBCs', type: 'file' },
      { id: 'nas', label: 'NAS (Network Attached Storage)', type: 'file' },
      { id: 'legacy', label: 'Old PCs & Servers', type: 'file' },
      { id: 'self-hosted-cloud', label: 'Self-Hosted Cloud (Nextcloud, etc.)', type: 'file' },
      { id: 'file-systems', label: 'File Systems (ZFS, Btrfs, etc.)', type: 'file' },
    ],
  },
  {
    id: 'software',
    label: 'Software & Tools',
    type: 'folder',
    children: [
      { id: 'operating-systems', label: 'Operating Systems', type: 'file' },
      { id: 'virtualization', label: 'Virtualization', type: 'file' },
      { id: 'containers', label: 'Containers', type: 'file' },
    ],
  },
  {
    id: 'networking',
    label: 'Networking & Security',
    type: 'folder',
    children: [
      { id: 'networking', label: 'Networking', type: 'file' },
      { id: 'security', label: 'Security', type: 'file' },
      { id: 'remote-access', label: 'Remote Access', type: 'file' },
      { id: 'firewalls', label: 'Firewalls & Intrusion Detection', type: 'file' },
      { id: 'vpn', label: 'VPN & Secure Access', type: 'file' },
    ],
  },
  {
    id: 'maintenance',
    label: 'Maintenance & Troubleshooting',
    type: 'folder',
    children: [
      { id: 'monitoring', label: 'Monitoring', type: 'file' },
      { id: 'backup', label: 'Backup & Recovery', type: 'file' },
      { id: 'logging', label: 'Logging & Log Management', type: 'file' },
      { id: 'alerting', label: 'Alerting & Incident Response', type: 'file' },
    ],
  },
  {
    id: 'automation',
    label: 'Automation & DevOps',
    type: 'folder',
    children: [
      { id: 'ansible', label: 'Ansible & Configuration Management', type: 'file' },
      { id: 'ci-cd', label: 'CI/CD Pipelines', type: 'file' },
    ],
  },
  {
    id: 'ai',
    label: 'Local AI & Model Training',
    type: 'folder',
    children: [
      { id: 'local-ai', label: 'Local AI Frameworks', type: 'file' },
      { id: 'model-training', label: 'Model Training', type: 'file' },
      { id: 'gpu-acceleration', label: 'GPU Acceleration & Optimization', type: 'file' },
      { id: 'model-inference', label: 'Model Inference & Deployment', type: 'file' },
    ],
  },
  {
    id: 'admin',
    label: 'Admin & Content Management',
    type: 'folder',
    children: [
      { id: 'content-creation', label: 'Content Creation', type: 'file' },
      { id: 'markdown-guide', label: 'Markdown Guide', type: 'file' },
      { id: 'content-storage', label: 'Content Storage & Management', type: 'file' },
    ],
  },
];
