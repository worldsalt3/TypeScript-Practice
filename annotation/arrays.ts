const carMarkers: string[] = ['ford', 'toyota', 'chevy', 'honda']

const dates = [new Date(), new Date()]

const carsByMake: number[] = []

// help with inference when extracting values
const car = carMarkers[0]
const myCar = carMarkers.pop()

carsByMake.push(10)

carMarkers.map((car: string): string => {
    return car.toUpperCase()
})

// Flexible types
const importantDates: (string | Date)[] = [new Date(), '2024-10-10']

importantDates.push('trying')
importantDates.push(400)



