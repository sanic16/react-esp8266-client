import { useLazyGetStatusCountByDeviceQuery } from "../../../store/slices/statisticsSlice"
import { Bar } from "react-chartjs-2"
import { 
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

  const StatusCount = (
    {
        device
    }: {
        device: Device
    }
  ) => {
  const [
    getStatusCountByDevice,
    { isLoading, isError, data }
  ] = useLazyGetStatusCountByDeviceQuery()

  const handleClick = () => {
    getStatusCountByDevice({device_id: device.id})
  }

  const options = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        title: {
            display: true,
            text: 'Cantidad de estados'
        }
    },
    maintainAspectRatio: false,
    responsive: true

  }

  const barData = {
    labels: data && ['Encendido', 'Apagado', 'Total'] || [],
    datasets: [
        {
            label: device.name,
            data: data && [data.true_count, data.false_count, data.total] || [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',  
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
        }
    ]
  }

  return (
    <div className="analytics__chart">
        <div>
        <Bar options={options} data={barData} />
        </div>
        <div>
            <button 
                onClick={handleClick}
                className={`btn ${isLoading ? 'disabled' : ''} ${isError ? 'danger' : ''} primary`}
                disabled={isLoading}
            >
                {isLoading ? 'Cargando...' : isError ? 'Error' : 'Obtener datos'}
            </button>
        </div>
    </div>
  )
}

export default StatusCount