const InputComponent = ({ type, name, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      maxLength={1}
      className="w-9 text-center mx-1 p-2 rounded-md border border-c-light-gray bg-c-dark text-c-white hover:border-c-pink"
    />
  )
}

export default InputComponent;