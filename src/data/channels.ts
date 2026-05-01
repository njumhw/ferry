export const channels = {
  'lennys-podcast': {
    name: "Lenny's Podcast",
    description: 'PM/产品视角的 AI 访谈',
    url: 'https://www.youtube.com/@LennysPodcast',
  },
  'sequoia-capital': {
    name: 'Sequoia Capital',
    description: '投资人视角的创始人对谈',
    url: 'https://www.youtube.com/@sequoiacapital',
  },
  'y-combinator': {
    name: 'Y Combinator',
    description: '创业者视角，AI startup 节奏感',
    url: 'https://www.youtube.com/@ycombinator',
  },
  'dwarkesh-patel': {
    name: 'Dwarkesh Patel',
    description: '深度技术访谈，研究员视角',
    url: 'https://www.youtube.com/@DwarkeshPatel',
  },
  'latent-space': {
    name: 'Latent Space',
    description: 'AI Engineer 视角',
    url: 'https://www.youtube.com/@LatentSpace',
  },
  'no-priors': {
    name: 'No Priors',
    description: 'VC 深度对话',
    url: 'https://www.youtube.com/@NoPriorsPodcast',
  },
  'a16z': {
    name: 'a16z',
    description: 'Marc & Ben 系列',
    url: 'https://www.youtube.com/@a16z',
  },
  'cognitive-revolution': {
    name: 'The Cognitive Revolution',
    description: '频次高、覆盖广',
    url: 'https://www.youtube.com/@CognitiveRevolution',
  },
  'ml-street-talk': {
    name: 'Machine Learning Street Talk',
    description: '偏研究、纯度高',
    url: 'https://www.youtube.com/@MLStreetTalk',
  },
  '20vc': {
    name: '20VC',
    description: 'VC 视角',
    url: 'https://www.youtube.com/@20VC',
  },
  'acquired': {
    name: 'Acquired',
    description: '长篇深度公司史',
    url: 'https://www.youtube.com/@AcquiredFM',
  },
  'ai-engineer': {
    name: 'AI Engineer Conference',
    description: '会议演讲合集',
    url: 'https://www.youtube.com/@AIEngineer',
  },
} as const;

export type ChannelSlug = keyof typeof channels;
