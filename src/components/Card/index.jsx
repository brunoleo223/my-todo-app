import { Container } from "./style";

export default function Card({ data, className }) {
  return (
      <div className={className}>
        <Container>
          <div className="card-header">
            <h3>{data.title}</h3>
          </div>
          <div className="card-body">
            <p>{data.description}</p>
          </div>
        </Container>
      </div>
  )
}
