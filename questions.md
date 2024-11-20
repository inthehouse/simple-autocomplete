1. Difference Between Component and PureComponent
Component: This updates whenever there is a change to its props and state in the shouldComponentUpdate lifecycle method and by default when the parent re-renders. 
PureComponent: If nothing has changed, this component does not update. In the case that shouldComponentUpdate is added to this component, you will meet with an error.
Example where it might break your app: If your component relies on deeply nested objects or arrays, PureComponent might not detect changes because comparisons only check the reference, not the contents.

2. Context + ShouldComponentUpdate might be dangerous. Why is that?
shouldComponentUpdate only checks for changes in props or state. It doesn't know about updates from the context provider. If the context changes, but the shouldComponentUpdate blocks rendering, the component won't update even though it should.

3. 3 Ways to Pass Information from a Child to a Parent
Callback Functions: The parent passes a function to the child as a prop.
Context: Create a context for shared state.
Shared State: Manage state in parent and pass down from parent to child.

4. 2 Ways to Prevent Components from Re-Rendering
use React.Memo
shouldComponentUpdate 

5. What is a fragment and why do we need it? Give an example where it might break my app.
Fragments let you group a list of children elements without adding extra nodes to the DOM.
function FragmentDemo() {
  return (
    <React.Fragment>
		  <h1>Header</h1>
		  <p>Text</p>
    </React.Fragment>
  );
}
In the case that the wrapping tags were a normal <div> the root would have an extra <div>.
This could break stylings in the case you have CSS that relies on the tags.

6. Give 3 examples of the HOC pattern.
function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    return isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />;
  };
}

function withLogger(Component) {
  return function LoggedComponent(props) {
    return <Component {...props} />;
  };
}
const withTheme = (Component) => (props) => (
  <ThemeContext.Consumer>
    {(theme) => <Component {...props} theme={theme} />}
  </ThemeContext.Consumer>
);

7. What's the difference in handling exceptions in promises,
callbacks and async...await?
Promises: Errors are handled using .catch():
Callbacks: Errors must be explicitly handled by the callback.
Async/Await: Errors are caught using try catch blocks.


8. How many arguments does setState take and why is it async.
setState takes:

An object or a function as its first argument to update the state.
An optional callback to execute after the state is updated.
Why Async: React makes multiple state updates to improve performance and ensures consistent UI updates. This behavior avoids unnecessary re-renders with updates.

9. Steps to Migrate a Class Component to a Function Component
Replace the class syntax with a function.
Replace lifecycle methods with useEffect and useState.
Convert this.state and this.setState to useState.
Convert methods to regular functions.

10. Ways to Style Components
CSS Modules (scoped)
Inline Styles
Styled Components