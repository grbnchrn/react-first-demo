import HomeIcon from './homeIcon';
import PlusIcon from './plusIcon';
import './flexiButton.css'

function Button({ children, mode = "filled", Icon, ...props }) {
  let clName = "button " + mode + "-button";
  let iconSpan = <div></div>;
  if (Icon) {
    clName = clName + " icon-button";
    iconSpan = (
      <span className="button-icon">
        <Icon className="button-icon" />
      </span>
    );
  }

  return (
    <button className={clName} {...props}>
      {iconSpan}
      {children}
    </button>
  );
}

export default function ButtonContent() {
  return (
    <div className ="flexi">
      <section>
        <h2>Filled Button (Default)</h2>
        <p>
          <Button>Default</Button>
        </p>
        <p>
          <Button mode="filled">Filled (Default)</Button>
        </p>
      </section>
      <section>
        <h2>Button with Outline</h2>
        <p>
          <Button mode="outline">Outline</Button>
        </p>
      </section>
      <section>
        <h2>Text-only Button</h2>
        <p>
          <Button mode="text">Text</Button>
        </p>
      </section>
      <section>
        <h2>Button with Icon</h2>
        <p>
          <Button Icon={HomeIcon}>Home</Button>
        </p>
        <p>
          <Button Icon={PlusIcon} mode="text">
            Add
          </Button>
        </p>
      </section>
      <section>
        <h2>Buttons Should Support Any Props</h2>
        <p>
          <Button mode="filled" disabled>
            Disabled
          </Button>
        </p>
        <p>
          <Button onClick={() => console.log("Clicked!")}>Click me</Button>
        </p>
      </section>
    </div>
  );
}
