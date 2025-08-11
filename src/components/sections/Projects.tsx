import Card from "../main/Card";

export default function Projects() {
  return (
    <section id="projects" className=''>
      <div className='flex flex-row justify-end pr-10'>
        <h1 className='text-8xl onest-lighter bg-clip-text text-transparent inline-block h-30 bg-gradient-to-r from-violet-600 to-pink-600'>
          Projects
        </h1>
      </div>
      <Card />
      <Card />
      <Card />
    </section>
  )
}