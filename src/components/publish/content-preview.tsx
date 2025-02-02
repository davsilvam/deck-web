import type { ElementType } from 'react'

import { cn } from '@/lib/utils'
import { Audiovisual } from '../assets/audiovisual'
import { Design } from '../assets/design'
import { Games } from '../assets/games'
import { SMD } from '../assets/smd'
import { Systems } from '../assets/systems'
import { Badge } from '../ui/badge'

const trailsIcons: Record<string, [ElementType, string, string, string]> = {
  Design: [
    Design,
    '#980C0C',
    cn('bg-deck-red-light'),
    cn('text-deck-red-dark'),
  ],
  Sistemas: [
    Systems,
    '#00426E',
    cn('bg-deck-blue-light'),
    cn('text-deck-blue-dark'),
  ],
  Audiovisual: [
    Audiovisual,
    '#8A3500',
    cn('bg-deck-orange-light'),
    cn('text-deck-orange-dark'),
  ],
  Jogos: [
    Games,
    '#007F05',
    cn('bg-deck-green-light'),
    cn('text-deck-green-dark'),
  ],
  SMD: [
    SMD,
    '#7D00B3',
    cn('bg-deck-purple-light'),
    cn('text-deck-purple-dark'),
  ],
}

interface ContentPreviewProps {
  bannerUrl?: string
  title?: string
  trails?: string[]
  subject?: string
  publishedYear?: number
  semester?: number
  description?: string
  professors?: string[]
  content?: string
}

export function ContentPreview({
  bannerUrl,
  title,
  trails = [],
  subject,
  publishedYear,
  semester,
  description,
  professors,
  content,
}: ContentPreviewProps) {
  const trailTheme =
    trails.length > 0
      ? trails.length > 1
        ? [trailsIcons.SMD[2], trailsIcons.SMD[3]]
        : [trailsIcons[trails[0]][2], trailsIcons[trails[0]][3]]
      : [cn('bg-deck-bg'), cn('text-deck-secondary-text')]

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-[860px]">
        <div>
          <div
            className="h-[300px] w-[860px] bg-slate-600"
            style={{
              backgroundImage: bannerUrl ? `url(${bannerUrl})` : undefined,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          {title && (
            <h1 className="pt-6 font-semibold text-[32px] text-deck-darkest">
              {title}
            </h1>
          )}

          {trails && (
            <div className="flex gap-4 pt-6">
              {trails.map(trail => {
                const [Icon, color, bgColor, textColor] = trailsIcons[trail]
                const [_, SMDColor, SMDBgColor, SMDTextColor] = trailsIcons.SMD

                return (
                  <Badge
                    key={trail}
                    className={cn(
                      trails.length > 1 ? SMDBgColor : bgColor,
                      trails.length > 1 ? SMDTextColor : textColor,
                    )}
                  >
                    <Icon
                      className="size-[18px]"
                      innerColor={trails.length > 1 ? SMDColor : color}
                      foregroundColor="transparent"
                    />
                    {trail}
                  </Badge>
                )
              })}
            </div>
          )}

          {(subject || publishedYear || semester) && (
            <div className="flex items-center gap-4 pt-6">
              {subject && (
                <Badge className={cn(trailTheme[0], trailTheme[1])}>
                  {subject}
                </Badge>
              )}

              {semester && (
                <Badge className={cn(trailTheme[0], trailTheme[1])}>
                  {semester}º Semestre
                </Badge>
              )}

              {publishedYear && (
                <Badge className={cn(trailTheme[0], trailTheme[1])}>
                  {publishedYear}
                </Badge>
              )}
            </div>
          )}

          {description && (
            <p className="pt-6 pl-[6px] text-deck-secondary-text">
              {description}
            </p>
          )}

          {professors && professors.length > 0 && (
            <div className="flex items-center gap-4 pt-6">
              {professors.map(professor => (
                <Badge
                  key={professor}
                  className={cn(trailTheme[0], trailTheme[1])}
                >
                  {professor}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {content && (
          <div className="w-full py-11">
            <div
              className="prose prose-slate w-full max-w-none pt-6 text-deck-secondary-text leading-5"
              // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        )}
      </div>
    </main>
  )
}
