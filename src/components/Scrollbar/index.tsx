import { HTMLAttributes, useCallback, useEffect, useRef } from 'react'

import {
  Container,
  ScrollbarContainer,
  ScrollThumb,
  ScrollTrack,
} from './styles'

type ScrollbarProps = HTMLAttributes<HTMLElement>

type ThumbScroll = {
  initial: number
  isDragging: boolean
  startPosition?: number
}

const Scrollbar = (props: ScrollbarProps) => {
  const ref = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const thumbRef = useRef<HTMLDivElement>(null)
  const observer = useRef<ResizeObserver | null>(null)

  const thumbScroll = useRef<ThumbScroll>({ initial: 0, isDragging: false })

  const handleThumbPosition = useCallback(() => {
    if (!ref.current || !trackRef.current || !thumbRef.current) return

    const { scrollTop: contentTop, scrollHeight: contentHeight } = ref.current
    const { clientHeight: trackHeight } = trackRef.current
    const { clientHeight: thumbHeight } = thumbRef.current

    let newTop = (+contentTop / +contentHeight) * trackHeight
    newTop = Math.min(newTop, trackHeight - thumbHeight)

    thumbRef.current.style.top = `${newTop}px`
  }, [])

  const handleTrackClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault()
      e.stopPropagation()

      const container = ref.current
      const track = trackRef.current

      if (!container || !track || !thumbRef.current) return

      const { clientY } = e
      const { clientHeight: thumbHeight } = thumbRef.current

      const target = e.target as HTMLDivElement
      const rect = target.getBoundingClientRect()
      const trackTop = rect.top

      const thumbOffset = -(thumbHeight / 2)
      const clickRatio = (clientY - trackTop + thumbOffset) / track.clientHeight

      const scrollAmount = Math.floor(clickRatio * container.scrollHeight)

      container.scrollTo({ top: scrollAmount, behavior: 'smooth' })
    },
    []
  )

  const handleThumbMousedown = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault()
      e.stopPropagation()

      thumbScroll.current.startPosition = e.clientY
      if (ref.current) thumbScroll.current.initial = ref.current.scrollTop
      thumbScroll.current.isDragging = true
      thumbRef.current?.classList.add('active')
    },
    []
  )

  const handleThumbMouseup = useCallback((event: Event) => {
    const e = event as unknown as React.MouseEvent<HTMLDivElement, MouseEvent>
    e.preventDefault()
    e.stopPropagation()

    thumbScroll.current.isDragging = false
    thumbRef.current?.classList.remove('active')
  }, [])

  const handleThumbMousemove = useCallback((event: Event) => {
    const e = event as unknown as React.MouseEvent<HTMLDivElement, MouseEvent>
    e.preventDefault()
    e.stopPropagation()

    if (!thumbScroll.current || !thumbRef.current || !ref.current) return

    const { isDragging, initial, startPosition } = thumbScroll.current
    const { clientHeight: thumbHeight } = thumbRef.current

    if (!isDragging || startPosition === undefined) return

    const {
      scrollHeight: containerScrollHeight,
      offsetHeight: containerOffsetHeight,
    } = ref.current

    const deltaY =
      (e.clientY - startPosition) * (containerOffsetHeight / thumbHeight)

    const newScrollTop = Math.min(
      initial + deltaY,
      containerScrollHeight - containerOffsetHeight
    )

    ref.current.scrollTop = newScrollTop
  }, [])

  useEffect(() => {
    function handleResize(target: HTMLElement, trackSize: number) {
      const thumb = thumbRef.current
      if (!thumb) return

      const { clientHeight, scrollHeight } = target

      thumb.style.height = `${Math.max(
        (clientHeight / scrollHeight) * trackSize,
        20
      )}px`
    }

    if (ref.current && trackRef.current) {
      const target = ref.current
      const { clientHeight: trackSize } = trackRef.current

      observer.current = new ResizeObserver(() => {
        handleResize(target, trackSize)
      })
      observer.current.observe(target)
      target.addEventListener('scroll', handleThumbPosition)

      return () => {
        observer.current?.unobserve(target)
        target.removeEventListener('scroll', handleThumbPosition)
      }
    }
  }, [handleThumbPosition])

  useEffect(() => {
    document.addEventListener('mousemove', handleThumbMousemove)
    document.addEventListener('mouseup', handleThumbMouseup)
    document.addEventListener('mouseleave', handleThumbMouseup)

    return () => {
      document.removeEventListener('mousemove', handleThumbMousemove)
      document.removeEventListener('mouseup', handleThumbMouseup)
      document.removeEventListener('mouseleave', handleThumbMouseup)
    }
  }, [handleThumbMousemove, handleThumbMouseup])

  return (
    <Container ref={ref} {...props}>
      {props.children}

      <ScrollbarContainer>
        <ScrollTrack ref={trackRef} onClick={handleTrackClick}></ScrollTrack>
        <ScrollThumb
          ref={thumbRef}
          onMouseDown={handleThumbMousedown}></ScrollThumb>
      </ScrollbarContainer>
    </Container>
  )
}

export default Scrollbar
