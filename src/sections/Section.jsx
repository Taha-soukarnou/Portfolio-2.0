import Container from '../components/layout/Container'

function Section({ id, title }) {
  return (
    <section id={id} className="min-h-screen scroll-mt-20 py-24">
      <Container>
        <h2 className="text-3xl font-bold text-accent">{title}</h2>
      </Container>
    </section>
  )
}

export default Section