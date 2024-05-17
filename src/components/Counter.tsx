interface Props {
  value: number
}


function Counter(props: Props) {
  return (
    <div className="counter">{props.value}</div>
  )
}

export default Counter