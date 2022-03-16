export default function Analystic({ title = "", value = 0, classes = "" }) {
  return (
    <div className={`col-3 box card ${classes} `}>
      <h5 className="box_title">{title}</h5>

      <h1 className="box_subtitle">{value}</h1>
    </div>
  );
}
