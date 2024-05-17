interface Props {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonComponent = ( props : Props) => {
  return (
    <button className="btn" onClick={props.onClick}>
      {props.label}
    </button>
  );
};  

export default ButtonComponent;
