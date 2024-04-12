import { useLazyGetStatusCountByDeviceQuery } from "../../store/slices/statisticsSlice"

const Analytics = () => {
  const [
    getStatusCountByDevice,
    { isLoading, isError, data }
  ] = useLazyGetStatusCountByDeviceQuery()

  const handleClick = () => {
    getStatusCountByDevice({device_id: 27})
  }
  return (
    <section className="analytics">

      <div className="container">
        <h1>Estadística</h1>

        <button
          className="btn"
          onClick={handleClick}
        >
          Obtener estadística
        </button>
        {
          isLoading && <p>Cargando...</p>
        }
        {
          isError && <p>Error al obtener la estadística</p>
        }
        {
          data && <p>{data.total}</p>
        }
      </div>
    </section>
  )
}

export default Analytics