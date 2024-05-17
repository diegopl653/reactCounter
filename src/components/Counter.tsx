interface Props {
  value: number
}


function Counter(props: Props) {
  return (
    <div>{props.value}</div>
  )
}

export default Counter