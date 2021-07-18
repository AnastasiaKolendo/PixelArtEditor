class Picture{
    constructor(width, height, pixels){
        this.height = height;
        this.width = width; 
        this.pixels = pixels
    }

    static empty(width, height, color){
        let pixels = new Array(width * height).fill(color);
        return new Picture(width, height, pixels);
    }

    pixel(x, y){
        return this.pixel[x + y * this.width];
    }
    draw(pixels){
        let copy = this.pixel.slice();
        for(let {x, y, color} of pixels){
            copy[x + y * this.width.length] = color;
        }
        return new Picture(this.width, this.height, copy)
    }
}