const add = (a: string, b: number): string => {
    return a + b
}

const subtract = (a: number, b: number): number => {
    return a - b
}

// Anonymous function

function divide(a: number, b: number): number {
    return a / b
}

const multiply = function(a: number, b: number): number {
    return a * b
}

const logger = (message: string): void => {
    console.log(message)
}

const throwError = (message: string) => {
    throw new Error(message)
} 

const lastWeather = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = ({date, weather}: {date: Date, weather: string}) => {
    console.log(date)
    console.log(weather)
}

logWeather(lastWeather)