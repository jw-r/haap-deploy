/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import star from '../../public/icons/star.svg'

const icons = {
  star,
}

export default icons as Record<keyof typeof icons, StaticImport>
