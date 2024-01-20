import { ref } from 'vue'

// import { useSongStore } from '@/stores/song'
// import { storeToRefs } from 'pinia'

// // const useSong = useSongStore()
// // const { isPlaying, audio, currentTrack, currentArtist } = storeToRefs(useSong)

/**
 * React hook that allow you to enable picture in picture mode on a music player
 * @param {*} initialImage          First Image to display in background of the pip frame (required)
 * @param {function} onPlay        function that would be triggered when the play btn is pressed
 * @param {function} onPause       function that would be triggered when the play btn is pressed
 * @param {function} onPrevious    function that would be triggered when the play btn is pressed
 * @param {function} onNext        function that would be triggered when the play btn is pressed
 */
export const useAudioPictureInPicture = (
  initialImage,
  isPlaying,
  onPlay,
  onPause,
  onPrevious,
  onNext
) => {
  const isPipToggled = ref(false)
  const setIsToggled = (value) => {
    isPipToggled.value = value
  }
  let thumb = initialImage
  const canvas = document.createElement('canvas') // canvas element that would be display in the video element when pip mode is enable
  canvas.width = canvas.height = 512 // default canvas height
  const video = document.createElement('video') // create a new video element that would hold the canvas on pip mode

  video.muted = true

  /**
   * Toggle pip mode on screen if it's not already on
   */
  const togglePip = async () => {
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture().then(() => {
        setIsToggled(false)
      })
    } else {
      video.srcObject = canvas.captureStream() // get audio src from the page

      await updatePip(thumb)
      await video
        .requestPictureInPicture() // go in PIP mode !!
        .then(() => {
          setIsToggled(true)
          if (isPlaying) {
            document.pictureInPictureElement.play()
          } else {
            document.pictureInPictureElement.pause()
          }
        })
    }
  }
  /**
   * update the picture in picture background
   * @param {*} image path of the new image
   */
  const updatePip = async (image) => {
    if (document.pictureInPictureElement) document.exitPictureInPicture() // close previous one if set to avoid update glitch
    thumb = image
    const thumbnail = new Image() // thumbnail creation
    thumbnail.crossOrigin = true
    thumbnail.src = thumb
    await thumbnail.decode()
    const aspectRatio = thumbnail.width / thumbnail.height

    canvas.getContext('2d').drawImage(thumbnail, -200, 0, 512 * aspectRatio, 512) // draw the image as the background of the canvas
    await video.play()
    await video.requestPictureInPicture()
  }
  // attach previous track btn on pip element
  navigator.mediaSession.setActionHandler('previoustrack', () => {
    if (onPrevious) onPrevious()
  })
  // attach next track btn on pip element
  navigator.mediaSession.setActionHandler('nexttrack', () => {
    if (onNext) onNext()
  })
  // attach pause track btn on pip element
  navigator.mediaSession.setActionHandler('pause', () => {
    console.log('pause')
    if (onPause) onPause()
    // set pause state on pip frame
    if (document.pictureInPictureElement) document.pictureInPictureElement.pause()
  })
  // attach play track btn on pip element
  navigator.mediaSession.setActionHandler('play', () => {
    console.log('play')
    if (onPlay) onPlay()
    // set play state on pip frame
    if (document.pictureInPictureElement) document.pictureInPictureElement.play()
  })

  return {
    isPipToggled,
    togglePip,
    updatePip
  }
}
