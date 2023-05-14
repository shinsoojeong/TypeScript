type HandleChangeColor = {
    onChangeColor: () => void;
  };

export default function ColorSwitch({onChangeColor}: HandleChangeColor) 
{
return (
    <button onClick={e => {
    e.stopPropagation();
    onChangeColor();
    }}>
    Change color
    </button>
);
}
  