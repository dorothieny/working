const isFetching: boolean = true
const isLoading: boolean = false

console.log(isFetching)

const arr: number[] = [1, 1, 2, 3]
const arr2: Array<number> = [1, 2, 3, 5]
const words: string[] = ['Hello', 'Typescript' ]

//tuple
const contact: [string, number] = ['Vlad', 79156714]

//Any
let int: any = 4
int = "stroke"

// function sayName(name:string): void{
//   console.log(name)
// }
//  sayName('Heizenberg')

//Type
type Login = string
const login: Login = 'admin'

console.log(login)
type Sometype = string | number

interface Rect{
  readonly id: string
  color?: string
  size: {
    width: number
    height: number
  }
}
const rect1: Rect{
  id: '1234',
  size: {
    width: 20,
    height:30
  },
  color: '#ccc';
}
interface RectWidth extends Rect {
  getArea: () => number
}
