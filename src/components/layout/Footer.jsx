import Container from './Container'

function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container>
        <p className="text-center text-sm text-muted">
          © {new Date().getFullYear()} TSdev. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}

export default Footer