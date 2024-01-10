import { ComponentProps } from 'react'

export type RootProps = ComponentProps<'div'>

export default function Root(props: RootProps) {
  return <div {...props} />
}
