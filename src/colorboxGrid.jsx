import ColorBox from "./colorbox";
import "./colorBoxGrid.css";

export default function ColorBoxGrid({ colors }) {
  const boxes = [];
  for (let i = 0; i < 25; i++) {
    boxes.push(<ColorBox colors={colors} />);
  }
  console.log(boxes);

  return <div className="ColorBoxGrid">{boxes}</div>;
}
