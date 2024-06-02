/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import star from '../../public/icons/star.svg'
import MarkerIcon from '../../public/icons/MarkerIcon.svg'

const icons = {
  star,
  MarkerIcon,
}

export default icons as Record<keyof typeof icons, StaticImport>
