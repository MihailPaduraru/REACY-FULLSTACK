import PropTypes from 'prop-types';

function SearchBar({text, isVisible, price}){

    
    return (
        
        <div>
            {isVisible ? 'Afisez text' : ''}
            {text.length > 10 && <p>Textul nu este ,mai lung de 10 caractere</p>}
            <h1>{text}</h1> 
            <h2>{price}</h2>

        </div>
        )


};

SearchBar.propTypes = {
    text:PropTypes.string.isRequired,
    isVisible:PropTypes.bool,
    price:PropTypes.number
  }
export default SearchBar;
