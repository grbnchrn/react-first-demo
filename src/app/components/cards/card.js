import  './card.css';

export default function CardContent() {
    return (
      <div id="card">
        <h1>Available Experts</h1>
        <Card name="Anthony Blake">
          <p>
            Blake is a professor of Computer Science at the University of
            Illinois.
          </p>
          <p>
            <a href="mailto:blake@example.com">Email Anthony</a>
          </p>
        </Card>
  
        <Card name="Maria Miles">
          <p>
            Maria is a professor of Computer Science at the University of
            Illinois.
          </p>
          <p>
            <a href="mailto:milesm@example.com">Email Maria</a>
          </p>
        </Card>
      </div>
    );
  }

function Card(prop){
    return <div>
    <h2>{prop.name}</h2>
    {prop.children}
    </div>
}