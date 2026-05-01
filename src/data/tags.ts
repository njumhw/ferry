export const DOMAIN_TAGS = [
  'AI Engineering', 'Research', 'Product', 'Org Design', 'Investing',
  'Founder Story', 'AI Coding', 'Models', 'Infrastructure', 'Robotics', 'Multimodal',
] as const;

export const FORMAT_TAGS = ['Interview', 'Panel', 'Talk', 'Fireside'] as const;

export const DEPTH_TAGS = ['Technical', 'Strategic', 'Accessible'] as const;

export const ALL_TAGS = [...DOMAIN_TAGS, ...FORMAT_TAGS, ...DEPTH_TAGS] as const;

export type Tag = (typeof ALL_TAGS)[number];
