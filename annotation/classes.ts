class Vehicle {
    constructor(public color: string) {
    
    }

    protected honk(): void {
        console.log('beep')
    }
}

const vehicle = new Vehicle('orange')
console.log(vehicle.color)

class  Car extends Vehicle {

    constructor(public wheel: number, color: string) {
        super(color)
    }

    testmethod (): void {
        this.honk()
    }
}

const car = new Car(5, 'yellow')

// car.drive()
// car.testmethod()
