import { IconProps } from '@types'
import { ReactElement } from 'react'

export function Icon({
  name,
  size = '1em',
  width,
  height,
  href = '/images/sprite.svg',
  ...attrs
}: IconProps): ReactElement {
  width = size || width
  height = size || height

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      {...{ width, height, href, ...attrs }}>
      <use href={`${href}#${name}`} />
    </svg>
  )
}
