import "./App.css"
import { Event } from "./Event/Event"
import { Header } from "./Event/Header"
import { AllEvent, fetchEvents } from "./Event/EventList"
import { useEffect, useState } from "react"

function App() {
  const [events, setEvents] = useState()
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)
  const [error,setError] = useState('')

  const search = () => {
    const results = AllEvent.filter((item) =>
      item.names.toLowerCase().includes(name.toLowerCase())
    )
    setEvents(results)
  }

  useEffect(() => {
    search()
  }, [name])

  const fetchFeatures = async () => {
    setLoading(true)
    try {
      const res = await fetchEvents()
      setEvents(res.allEvents)
      console.log(res)
    } catch (err) {
      setError(err.msg)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchFeatures()
  }, [])

  return (
    <>
      <Header setName={setName} />

      <Event error={error} loading={loading} searhValue={name} events={events} />
    </>
  )
}

export default App
