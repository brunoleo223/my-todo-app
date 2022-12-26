import { Container } from "./style";

export default function Card({ data }) {

  const descriptionLength = data.description.length;
  let cardSize = 0;

  if (descriptionLength <= 100) {
    cardSize = 0;
  } else if (descriptionLength > 100 && descriptionLength <= 200) {
    cardSize = 1;
  } else if (descriptionLength > 200 && descriptionLength <= 300) {
    cardSize = 2;
  } else {
    cardSize = 3;
  }

  return (
      <div className={`level-${cardSize}`}>
        <Container>
          <div className="card-header">
            <h3>{data.title}</h3>
          </div>
          <div className="card-body" dangerouslySetInnerHTML={{__html: data.description}}></div>
        </Container>
      </div>
  )
}
