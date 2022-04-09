import "./Checkout.extension.style.scss";

export class Stepper extends React.Component {
  render() {
    const { stepMap, checkoutStep } = this.props;
    const stepsArray = Object.entries(stepMap);
    const indexOfStep = stepsArray.findIndex(
      (step) => step[0] === checkoutStep
    );

    return (
      <div block="Checkout" elem="Stepper">
        {stepsArray &&
          stepsArray.map((item, index) => {
            if (index + 1 !== stepsArray.length)
              return (
                <div
                  className={
                    indexOfStep >= index ? "single-step--active" : "single-step"
                  }
                  key={`step-${item[1].title.value}`}
                >
                  <span className="single-step-bar" />
                  <span className="single-step-title">
                    <span className="step-title-number">{index + 1}</span>
                    <span className="step-title-name">
                      {item[1].title.value.split(" ")[0]}
                    </span>
                  </span>
                </div>
              );
          })}

        <div className="last-step">
          <span
            className={
              indexOfStep + 1 === stepsArray.length
                ? "last-step-bar--active"
                : "last-step-bar"
            }
          />
        </div>
      </div>
    );
  }
}

export default Stepper;
