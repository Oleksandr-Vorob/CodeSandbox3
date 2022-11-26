export default function Card(props) {
  return props.cards.map((item, i) => (
    <div className="card" key={i}>
      <p>{item.value}</p>
      <p>{item.pict}</p>
      <p className="center">{item.pict}</p>
      <div className="bottom">
        <p>{item.value}</p>
        <p>{item.pict}</p>
      </div>
    </div>
  ));
}
