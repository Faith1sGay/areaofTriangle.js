class triangle {
    constructor(height, width) {
        this.height = height
        this.width = width
    }

}

const tri = new triangle(10, 17)
console.log(`The area of this triangle is ${tri.height * tri.width / 2}.`)