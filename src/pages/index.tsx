import type { GetServerSideProps } from 'next'
import React from 'react'

const Title = () => {
  ;<div>
    <button>Teste</button>
  </div>
}

const Container = () => {}

interface HomeProps {
  repositories: string[]
}

export default function Home() {
  return (
    <div className="  h-10 border-solid border-2 border-sky-500">Teste</div>
  )
}
