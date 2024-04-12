import { Line } from "react-chartjs-2"
import { 
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const LineGraph = (
    {
        device
    }:{
        device: Device
    }
) => {
  const options = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        title: {
            display: true,
            text: device.name
        }
    },
    maintainAspectRatio: false,
    responsive: true

  } 
  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
    datasets: [
        {
            label: 'Ventas',
            data: [12, 19, 3, 5, 2, 3, 6],
            fill: false,
            borderColor: 'hsla(82, 82%, 35%, 1)',
        }
    ]
  } 
  return (
    <div>
        <Line options={options} data={data} />
    </div>
  )
}

export default LineGraph