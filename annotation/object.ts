const profile = {
    firstName: 'alex',
    age: 30,
    coords: {
        lng: 15,
        lat: 0
    },
    setAge(age: number) {
        this.age = age
    }
}


const { firstName }: { firstName: string } = profile
const {coords: {lng, lat}}: {coords: {lng: number; lat: number}} = profile