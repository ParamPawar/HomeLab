// export const menuItems = [
//   {
//     id: 'getting-started',
//     label: 'Getting Started',
//     type: 'folder',
//     children: [
//       { id: 'introduction', label: 'Introduction', type: 'file' },
//       { id: 'requirements', label: 'Requirements', type: 'file' },
//       { id: 'setup', label: 'Initial Setup', type: 'file' },
//     ],
//   },
//   {
//     id: 'hardware',
//     label: 'Hardware Guide',
//     type: 'folder',
//     children: [
//       { id: 'servers', label: 'Server Options', type: 'file' },
//       { id: 'networking', label: 'Networking', type: 'file' },
//       { id: 'storage', label: 'Storage Solutions', type: 'file' },
//     ],
//   },
//   {
//     id: 'software',
//     label: 'Software Stack',
//     type: 'folder',
//     children: [
//       { id: 'virtualization', label: 'Virtualization', type: 'file' },
//       { id: 'containers', label: 'Containers', type: 'file' },
//       { id: 'monitoring', label: 'Monitoring', type: 'file' },
//     ],
//   },
// ];
export const menuItems = [
  {
    id: 'getting-started',
    label: 'Getting Started',
    type: 'folder',
    children: [
      { id: 'introduction', label: 'Introduction', type: 'file' },
      { id: 'requirements', label: 'Requirements', type: 'file' },
      { id: 'setup', label: 'Initial Setup', type: 'file' },
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
    ],
  },
  {
    id: 'maintenance',
    label: 'Maintenance & Troubleshooting',
    type: 'folder',
    children: [
      { id: 'monitoring', label: 'Monitoring', type: 'file' },
      { id: 'backup', label: 'Backup & Recovery', type: 'file' },
    ],
  },
  {
    id: 'ai',
    label: 'Local AI & Model Training',
    type: 'folder',
    children: [
      { id: 'local-ai', label: 'Local AI Frameworks', type: 'file' },
      { id: 'model-training', label: 'Model Training', type: 'file' },
    ],
  },
];
