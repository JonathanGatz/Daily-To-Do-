import Button from "./Button"
import PropTypes from 'prop-types'



const Header = ({ title, onAdd, showAdd }) => {




    return (
        <header className='header'>
            <h1>{title}</h1>

            <Button 
            onClick={onAdd}
            color={showAdd ? 'rgb(221, 143, 143' : 'rgb(89, 118, 151)'} 
            text={showAdd ? 'Close' : 'Open'} 
            />
            
        </header>
    )
}

Header.defaultProps = {
    title: 'To DO List',
}

Header.propTypes = {
    title: PropTypes.string.isRequired, 
}






// Style option below vvvv
// CSS in Js - <h1 style={headingStyle}>{title}</h1> will add this color 

// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black',
// }




export default Header
