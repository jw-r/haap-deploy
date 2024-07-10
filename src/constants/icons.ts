/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import star from '../../public/icons/star.svg'
import MarkerIcon from '../../public/icons/MarkerIcon.svg'
import MarkerSmallIcon from '../../public/icons/MarkerSmallIcon.svg'
import camera from '../../public/icons/camera.svg'
import edit from '../../public/icons/edit.svg'
import kakao from '../../public/icons/kakao.svg'
import google from '../../public/icons/google.svg'

const icons = {
  star,
  MarkerIcon,
  MarkerSmallIcon,
  camera,
  edit,
  kakao,
  google,
}

export default icons as Record<keyof typeof icons, StaticImport>
