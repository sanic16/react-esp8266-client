const dashboard_kitchen = [
    { id: '1', device: 'Interruptor 1'},
    { id: '2', device: 'Interruptor 1'},
    { id: '3', device: 'Iluminación 1'},
    { id: '4', device: 'Iluminación 2'},
]

const dashboard_bedroom_1 = [
    { id: '1', device: 'Interruptor 1'},
    { id: '2', device: 'Iluminación 1'},    
]

const dashboard_bedroom_2 = [
    { id: '1', device: 'Interruptor 1'},
    { id: '2', device: 'Iluminación 1'},    
]

const dashboard_garage_yard = [
    { id: '1', device: 'Interruptor 1'},
    { id: '2', device: 'Iluminación 1'},
    { id: '3', device: 'Iluminación 2'},
    { id: '4', device: 'Iluminación 3'},
]

export const level_1 = [
    { id: '1', dashboard: dashboard_kitchen, name: 'Cocina y Comedor'},
    { id: '2', dashboard: dashboard_bedroom_1, name: 'Dormitorio 1'},
    { id: '3', dashboard: dashboard_bedroom_2, name: 'Dormitorio 2'},
    { id: '4', dashboard: dashboard_garage_yard, name: 'Garage y Patio'}
]

const dashboard_bedroom_3 = [
    { id: '1', device: 'Interruptor 1'},
    { id: '2', device: 'Iluminación 1'},    
    { id: '3', device: 'Iluminación 2'},    
]

const marquee = [
    { id: '2', device: 'Iluminación 1'},    
    { id: '3', device: 'Iluminación 2'},    
]

export const level_2 = [
    { id: '1', dashboard: dashboard_bedroom_3, name: 'Dormitorio 3'},
    { id: '2', dashboard: marquee, name: 'Marquesina'},
]