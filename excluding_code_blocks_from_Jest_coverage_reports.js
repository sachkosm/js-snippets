
https://disjoint.ca/til/2016/10/30/excluding-code-blocks-from-jest-coverage-reports/

Excluding code blocks from Jest coverage reports
Oct 30, 2016 using tags reactjs, jest, istanbul

 Switchboard Logo
Take control of how people reach you. Sign up for our free beta today.
Sponsored by https://goswitchboard.com.
I realized recently after poking around in the source code that Jest uses Istanbul under the hood to generate its code coverage report (via the --coverage option). This is useful for situations where you need to legitimately ignore blocks or lines from coverage reports.

Basically, the magic comment that makes this all work is:

/* istanbul ignore next */
Let’s say for example you needed to ignore the following dispatch(actions.initiateRequest(data)) call from your coverage report as it’s not very practical to test this code-path in redux. Here’s what that might look like.

function mapDispatchToProps(dispatch) {
  return {
    onSubmitFunction: function(data) {
      /* istanbul ignore next */
      return dispatch(actions.initiateRequest(data));
    }
  };
}
Simple as that! The general form of this magic comment looks something like:

/* istanbul ignore <word>[non-word] [optional-docs] */
The Istanbul project site has some very detailed documentation explaining this and other use-cases, read through there for how the ignore if and ignore else options work too!
