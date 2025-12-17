import React from 'react'
import Navbar from '~/components/Navbar'
//import auth from './auth'
import { usePuterStore } from "~/lib/puter"

const Upload = () => {
    const Userauth=usePuterStore().auth;
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
        <Navbar auth={Userauth} />
    </main>
  )
}

export default Upload