export default function ContactButton() {
  return (
    <button
      className="rounded-full px-10 py-4 sm:px-12 sm:py-5 md:px-14 md:py-5 text-sm sm:text-base md:text-lg text-white font-medium uppercase tracking-widest cursor-pointer hover:opacity-90 transition-opacity duration-200"
      style={{
        background:
          'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow:
          '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '3px solid white',
        outlineOffset: '3px',
      }}
    >
      Get In Touch
    </button>
  )
}
