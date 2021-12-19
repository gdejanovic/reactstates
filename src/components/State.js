import PropTypes from 'prop-types';
export default function State ({state}){
    return(
        <div>
            Korisnici: {state}.
            Djeca: {state.childrean}
        </div>
    );
}

State.propTypes = {
    state: PropTypes.string
}