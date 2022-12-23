import { Container } from "./style";

export default function Card({ data, className }) {

  const descriptionSize = data.description.length;
  let level = 0;

  if (descriptionSize <= 100) {
    level = 0;
  } else if (descriptionSize > 100 && descriptionSize <= 200) {
    level = 1;
  } else if (descriptionSize > 200 && descriptionSize <= 300) {
    level = 2;
  } else {
    level = 3;
  }

  return (
      <div className={`level-${level}`}>
        <Container>
          <div className="card-header">
            <h3>{data.title}</h3>
          </div>
          <div className="card-body">
            <p>{level}{data.description}</p>
          </div>
        </Container>
      </div>
  )
}
