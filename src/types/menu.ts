export interface MenuItem {
  id: string;
  label: string;
  type: 'folder' | 'file';
  children?: MenuItem[];
}