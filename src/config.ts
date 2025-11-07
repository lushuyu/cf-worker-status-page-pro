import type { Config } from './types'

export const config: Config = {
  settings: {
    title: 'Shuyu Status',
    url: 'https://status.lushuyu.site',
    displayDays: 30,
    collectResponseTimes: true,
  },
  monitors: [
    {
      id: 'lushuyu.site',
      url: 'https://lushuyu.site',
      description: 'LUSHUYU MAIN SITE',
      followRedirect: false,
    },
    {
      id: 'NUS Personal Page',
      url: 'https://www.comp.nus.edu.sg/~e1376036/Shuyu/',
      description: 'NUS Personal Page',
    },
    {
      id: 'NYC Server',
      url: 'https://nyc.lushuyu.site/',
      description: 'NYC Server',
    },
    {
      id: 'NYC Server - Transmisson',
      url: 'https://nyc-transmission.lushuyu.site/',
      description: 'NYC Server - Transmisson',
    },
    {
      id: 'NYC Server - Jellyfin',
      url: 'https://nyc-jellyfin.lushuyu.site/',
      description: 'NYC Server - Jellyfin',
      followRedirect: true,
    },
  ],
}
