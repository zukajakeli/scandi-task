import ContentWrapper from "Component/ContentWrapper";
import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";

import StepperComponent from "./Stepper.component";

export class Checkout extends SourceCheckout {
  renderStepper() {
    const { checkoutStep, history } = this.props;
    return (
      <StepperComponent stepMap={this.stepMap} checkoutStep={checkoutStep} />
    );
  }

  render() {
    return (
      <main block="Checkout">
        {this.renderStepper()}

        <ContentWrapper
          wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
          label={__("Checkout page")}
        >
          {this.renderSummary(true)}
          <div block="Checkout" elem="Step">
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </ContentWrapper>
      </main>
    );
  }
}

export default Checkout;
