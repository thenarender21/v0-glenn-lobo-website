import React from 'react'

const mockComponent = (TagName: string) => {
  const Component = React.forwardRef(({ 
    initial, 
    animate, 
    exit, 
    transition, 
    variants, 
    whileHover, 
    whileTap, 
    layout, 
    viewport,
    onAnimationStart,
    onAnimationComplete,
    ...props 
  }: any, ref) => {
    return <TagName ref={ref} {...props} />
  })
  Component.displayName = `motion.${TagName}`
  return Component
}

export const motion = new Proxy({} as any, {
  get(target, prop: string) {
    if (typeof prop !== 'string') return undefined;
    if (!target[prop]) {
      target[prop] = mockComponent(prop)
    }
    return target[prop]
  }
})

export const AnimatePresence = ({ children }: any) => {
  return <>{children}</>
}

export default motion
