const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `Name is ${this.name}`
    }
}


interface Reportable {
    summary(): string
}



const printSummary = (item: Reportable): void => {
    console.log(item.summary())
}

printSummary(oldCivic)