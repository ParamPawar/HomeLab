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
    label: 'Hardware Guide',
    type: 'folder',
    children: [
      { id: 'servers', label: 'Server Options', type: 'file' },
      { id: 'networking', label: 'Networking', type: 'file' },
      { id: 'storage', label: 'Storage Solutions', type: 'file' },
    ],
  },
  {
    id: 'software',
    label: 'Software Stack',
    type: 'folder',
    children: [
      { id: 'virtualization', label: 'Virtualization', type: 'file' },
      { id: 'containers', label: 'Containers', type: 'file' },
      { id: 'monitoring', label: 'Monitoring', type: 'file' },
    ],
  },
];
