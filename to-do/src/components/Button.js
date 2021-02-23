


// each button color is defined within the Buttton import on Header.js


const Button = ({color, text, onClick}) => {

    


    return (
        
            <button 
            onClick ={onClick}                      // Made the button clickable 
            style={{ backgroundColor: color}}       // color can change in the Header.js file
            className= 'btn'>                      
                {text}
                </button> 
        
    )
}




export default Button


