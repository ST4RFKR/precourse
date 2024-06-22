const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
   
    let filteredColors = colors.filter(color => color === 'черный' || color === 'красный' || color === 'желтый');
    
    
    let result = filteredColors.join('-');
    
    return result;
}
console.log(createColorString());