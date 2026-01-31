/**
 * Пути к картинкам для сайта.
 * Файлы из src/assets/ — импортируйте так же. Файлы из public/ — используйте путь вида '/images/name.jpg'.
 */

import heroPlaceholder from './assets/hero-placeholder.png'
import demoEditTimeline from './assets/demo-edit-timeline.png'
import demoHealthTimelinePro from './assets/demo-health-timeline-pro.png'
import demoEditLabtests from './assets/demo-edit-labtests.png'
import demoClientList from './assets/demo-client-list.png'

/** Мультяшные аватарки команды (DiceBear Avataaars) */
const AVATAR_STYLE = 'https://api.dicebear.com/7.x/avataaars/svg'
const teamSeeds = ['alexey', 'maria', 'dmitry', 'elena']

export const IMAGES = {
  /** Главное изображение в hero */
  hero: heroPlaceholder,

  /** Аватарки команды по порядку (4 шт.) — мультяшный стиль */
  team: teamSeeds.map((seed) => `${AVATAR_STYLE}?seed=${seed}&size=200`) as string[],

  /** Картинки к блокам «Возможности»: 1 Дневник питания, 2 Активность и вес, 3 Лабораторные анализы, 4 Клиенты */
  features: [
    demoEditTimeline,      /* Дневник питания */
    demoHealthTimelinePro, /* Активность и вес, динамика */
    demoEditLabtests,      /* Лабораторные анализы */
    demoClientList,        /* Марафоны и цели, клиенты */
  ] as string[],
}
