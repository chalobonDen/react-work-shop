import PropTypes from 'prop-types';

const InputText = ({ inputText }) => {
  return (
    <div className="text-center">
      <input
        className="border-solid border-2 border-light-blue-500"
        type="text"
        onChange={(e) => inputText(e)}
      />
    </div>
  );
};

InputText.propTypes = {
  inputText: PropTypes.func.isRequired,
};

export default InputText;
