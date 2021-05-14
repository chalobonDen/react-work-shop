import PropTypes from 'prop-types';

const Count = ({ total, handlerPlus, handlerMinus }) => {
  return (
    <div>
      <div className="text-center">Count : {total}</div>
      <div className="space-x-4 text-center clickBtn">
        <div
          className="inline-block bg-transparent hover:bg-indigo-300 
        text-indigo-400 hover:text-white py-2 px-4 border 
        border-indigo-400 hover:border-transparent rounded"
        >
          <button onClick={() => handlerPlus()}> plus </button>
        </div>
        <div
          className="inline-block bg-transparent hover:bg-indigo-300 
        text-indigo-400 hover:text-white py-2 px-4 border 
        border-indigo-400 hover:border-transparent rounded"
        >
          <button onClick={() => handlerMinus()}> minus </button>
        </div>
      </div>
    </div>
  );
};

Count.protoType = {
  total: PropTypes.number.isRequired,
  handlerPlus: PropTypes.func.isRequired,
  handlerMinus: PropTypes.func.isRequired,
};

export default Count;
