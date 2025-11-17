function Radio({ id, label, name, value, checked, onChange }) {
  return (
    <label htmlFor={id} className="flex items-center mr-4 cursor-pointer">
      <input
        id={id}
        name={name}
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        className="mr-2  h-4 w-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
      />
      {label}
    </label>
  );
}

export default Radio;
