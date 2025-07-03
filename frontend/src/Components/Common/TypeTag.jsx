const TypeTag = ({ type }) => (
  <span className={`px-2 py-1 text-xs rounded font-medium ${type === 'Online' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'}`}>
    {type}
  </span>
);

export default TypeTag;
