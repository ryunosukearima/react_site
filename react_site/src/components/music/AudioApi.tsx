import React, { useRef, useState } from 'react'

const context = new AudioContext()

const loadSound = (url: string) => {
  return new Promise<AudioBuffer>((resolve) => {
    const request = new XMLHttpRequest()
    request.open('GET', url, true)
    request.responseType = 'arraybuffer'
    request.onload = () => {
      context.decodeAudioData(request.response, (buffer) => {
        resolve(buffer)
      })
    }
    request.send()
  })
}

const AudioApi = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const sourceRef = useRef<AudioBufferSourceNode | null>(null)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const bufferRef = useRef<AudioBuffer | null>(null)
  const startTimeRef = useRef<number>(0)

  const handlePlay = async () => {
    if (!bufferRef.current) {
      const buffer = await loadSound('/audio/ENDLESS_DANCE.mp3')
      bufferRef.current = buffer
      setDuration(buffer.duration)
    }
    if (bufferRef.current) {
      const source = context.createBufferSource()
      source.buffer = bufferRef.current
      source.connect(context.destination)
      source.start(0, currentTime)
      sourceRef.current = source
      setIsPlaying(true)
      startTimeRef.current = context.currentTime - currentTime

      source.onended = () => {
        setIsPlaying(false)
        setCurrentTime(0)
      }
    }
  }

  const handlePause = () => {
    if (sourceRef.current) {
      sourceRef.current.stop()
      setCurrentTime(context.currentTime - startTimeRef.current)
      setIsPlaying(false)
    }
  }

  // シークバーの更新
  React.useEffect(() => {
    let raf: number
    if (isPlaying) {
      const update = () => {
        setCurrentTime(context.currentTime - startTimeRef.current)
        raf = requestAnimationFrame(update)
      }
      raf = requestAnimationFrame(update)
    }
    return () => cancelAnimationFrame(raf)
  }, [isPlaying])

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value)
    setCurrentTime(time)
    if (isPlaying) {
      handlePause()
      setTimeout(handlePlay,0)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='w-50 md:min-w-80 h-50 md:min-h-80 bg-gray-900'></div>
      <button className='rotate-90' onClick={isPlaying ? handlePause : handlePlay}>
        {isPlaying ? '〓' : '▲'}
      </button>
      <input
        type="range"
        min={0}
        max={duration}
        step={0.01}
        value={currentTime}
        onChange={handleSeek}
        style={{ width: '100%' }}
      />
      <span>
      </span>
      <h1>Endless Dance.mp3</h1>
    </div>
  )
}

export default AudioApi