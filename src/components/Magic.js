import PropTypes from 'prop-types';
export default function Magic ({magic}){
    return(
        <div>
            Magic: {magic}.
        </div>
    );
}

Magic.propTypes = {
    magic: PropTypes.string
}