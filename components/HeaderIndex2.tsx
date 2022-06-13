import Image from 'next/image'
import Link from 'next/link'

import { SiteNav } from '@components/SiteNav'
import { getLang, get } from '@utils/use-lang'
import { GhostSettings, NextImage } from '@lib/ghost'

interface HeaderIndexProps {
  settings: GhostSettings
}

export const HeaderIndex = ({ settings }: HeaderIndexProps) => {
  const text = get(getLang(settings.lang))
  const site = settings
  const title = text(`SITE_TITLE`, site.title)

  const { processEnv } = settings
  const { siteUrl, nextImages } = processEnv
  const { feature: nextFeatureImages, quality: imageQuality } = nextImages

  return (
    <header className="site-home-header">
      <div className="inner">
        <div className="site-header-content">
          <h1 className="site-title">
            {(
              title
            )}
          </h1>
        </div>
      </div>
    </header>
  )
}
