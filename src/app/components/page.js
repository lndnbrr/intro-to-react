import React from 'react'
import SayHello from '@/components/SayHello'
import SayGoodBye from '@/components/SayGoodBye'

export default function Components() {
const array = [
  {
    id: 0,
    name: "Lebron James",
    greeting: "You are my Sunshine, my only sunshine.",
  },
  {
    id: 1,
    name: "Mona Lisa",
    greeting: "😐",
  },
  {
    id: 2,
    name: "Random Detroit Resident",
  },
]

  return (
    <>
    <h1> Components Page </h1>
    <div>
      {
        array.map((item) => <SayHello key={item.id} name={item.name} greeting={item.greeting} />)
      }
      <SayHello name="Landon" greeting="Hola!"/>
      <SayHello name="Ozzy" greeting="Yo!"/>
      <SayHello name={2676} />
      {
        array.map((item) => <SayGoodBye key={item.id} name={item.name} />)
      }
      <SayGoodBye name="Landon" />
      <SayGoodBye name="Ozzy" />
    </div>
    </>
  )
}
