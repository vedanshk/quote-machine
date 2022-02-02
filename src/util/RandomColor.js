// Generate random color
const Colors = {
    colors : [ "BlueViolet" , "alice blue" , "CadetBlue" ,  "Chocolate" , "Coral" , "CornflowerBlue" , "Crimson"],

    color: function getRandomColor()
    {
        return this.colors[Math.floor(Math.random() * this.colors.length)];
    }

}

export default Colors;