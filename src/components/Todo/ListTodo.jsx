import PropTypes from 'prop-types';

const ListTodo = ({ data, handleCheck }) => {
  return (
    <div className="inline">
      <input
        type="checkbox"
        onClick={() => handleCheck(data.id)}
        defaultChecked={data.completed}
      />
      {data.name}
    </div>
  );
};

ListTodo.protoType = {
  data: PropTypes.string.isRequired,
  // data: PropTypes.object.isRequired,
  handleCheck: PropTypes.func.isRequired,
};

export default ListTodo;
