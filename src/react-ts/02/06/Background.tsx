import { PositionType } from "./02";

// 01
type Props = {
  position: PositionType;
}
// export default function Background({ position }: Props) {

// 02 
export default function Background({ position }: { position: PositionType }) {
  return (
    <div style={{
      position: 'absolute',
      transform: `translate(
        ${position.x}px,
        ${position.y}px
      )`,
      width: 250,
      height: 250,
      backgroundColor: 'rgba(200, 200, 0, 0.2)',
    }} />
  );
};
