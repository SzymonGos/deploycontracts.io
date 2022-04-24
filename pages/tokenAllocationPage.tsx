import AllocationCart from '@/components/AllocationCart'
import { useState } from 'react'
import SecondaryButton from '@/components/buttons/SecondaryButton'
import Container from '@/components/Container'

export default function tokenAllocationPage() {
  const [allocations, setAllocations] = useState([0])
  const [counter, setCounter] = useState(0)

  const addAllocation = () => {
    setCounter((prev) => (prev === 14 ? 0 : prev + 1))
    let lastItem = allocations.slice(-1).toString()
    setAllocations([...allocations, parseInt(lastItem) + 1])
  }

  function deleteAllocation(index: number) {
    const newAllocations = allocations.filter((x) => x !== index || index === 0)
    setAllocations([...newAllocations])
  }

  return (
    <section className='my-[95px]'>
      <Container>
        <div className='mt-[38px] col-span-full sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-8  xl:col-start-5 xl:col-span-4 gap-y-[34px]'>
          <h1 className='font-space-grotesk font-bold text-xl text-white'>Token allocation</h1>
          <p className='text-gray-100'>
            Token generations is.... consectetur adipiscing elit. Etiam pulvinar leo vitae massa congue euismod eget
            convallis tortor.
          </p>
        </div>
        <div className='mt-[41px] col-span-full sm:col-start-3 sm:col-span-8 lg:col-start-4 lg:col-span-5 xl:col-start-5 xl:col-span-4 flex flex-col gap-y-9'>
          {allocations.map((x, i) => (
            <AllocationCart key={i} myKey={x} counter={counter} deleteAllocation={deleteAllocation} />
          ))}

          <div>
            <SecondaryButton title='Add new' addAllocation={addAllocation} />
          </div>
        </div>
      </Container>
    </section>
  )
}
