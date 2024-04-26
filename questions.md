# Questions

1. **What is the difference between Component and PureComponent? Give an example where it might break my app.**

   - The main difference between Component and PureComponent is that PureComponent conducts a shallow comparison. In simple terms, a Component rerenders every time its parent does, even if props were not changed. On the other hand, PureComponent will rerender only when props or inner state change.
   - It might break the application when we provide complex data structures like arrays and objects to PureComponents as props because objects are compared by their reference, potentially causing unexpected behavior.

2. **Context + ShouldComponentUpdate might be dangerous. Why is that?**

   - First, it is worth mentioning that `ShouldComponentUpdate` is a lifecycle method that determines if the component should rerender. The problem happens when you use this method within a component that is using context, as it might cause unexpected behavior. This occurs because when deciding whether to rerender or not, `ShouldComponentUpdate` only considers the previous props and the current props; it doesn't inherently consider changes in context values.

3. **Describe 3 ways to pass information from a component to its PARENT.**

   - Callback function - When we provide a callback function to children as a prop, it triggers an action in the parent component.
   - The same callback function can be set in the context of the parent component and used in the child component, also triggering an action in the parent component.
   - State Lifting - Sharing State Between Components

4. **Give 2 ways to prevent components from re-rendering.**

   - Pure Component, when wrapped with React.memo, enables shallow comparison, rendering only when its props and inner state are updated (as described in question 1).
   - By using ShouldComponentUpdate, we can implement our own comparison logic and trigger a rerender when necessary for the component.

5. **What is a fragment and why do we need it? Give an example where it might break my app.**

   - A fragment is a special React component that allows grouping multiple children elements without adding extra nodes to the DOM. It is necessary because React children components should always have a parent.
   - Using fragments might break your application if you've provided styles based on tag elements.

6. **Give 3 examples of the HOC pattern.**

   - Conditional rendering: A higher-order component (HOC) can determine whether a component should be displayed based on conditions such as the type of logged-in user or permissions. Components can then be wrapped with this HOC.
   - Data Fetching: To handle different states of data fetching within the application, a solution like ReactQueryProvider can be employed.
   - Styling: Apply specific styles based on the theme or other criteria, for example, using ThemeProvider provided by Styled Components.

7. **What's the difference in handling exceptions in promises, callbacks and async…await?**

   - When using promises, errors can be handled using the .catch() method or the second argument of the .then() method. Also promises give you the possibility easy organise few request in the order ( Promises Chain )
   - In traditional callback-based APIs, error handling is typically done by convention, where the first parameter of the callback function is reserved for an error object.
   - Error handling in async/await is achieved using try-catch blocks, making it very intuitive and easy to read

8. **How many arguments does setState take and why is it async.**

   - setState takes two arguments. The first is the Updater Function, used to update the state. The second, which is optional, is a Callback Function that will be executed after the state has been updated and the component has been re-rendered.
   - This operation is asynchronous due to the inner algorithm of React rendering. The setState function actually groups a few operations and updates the component only once, for optimization purposes.

9. **List the steps needed to migrate a Class to Function Component.**

   - Review the component's lifecycle methods and convert them to useEffect hooks.
   - Change state and this.setState({}) to useState and setState({}).
   - Refactor event handlers from class methods to simple functions; replace calls to this.method.
   - Update unit tests accordingly.

10. **List a few ways styles can be used with components.**

    - CSS Modules
    - Styled Components (used in the current project)
    - Inline Styles
    - Import External CSS File

11. **How to render an HTML string coming from the server.**

    - Inserting an incoming HTML string can be dangerous as it may lead to cross-site scripting attacks. However, if you trust the source and the incoming HTML, as I did in the project to highlight the selected item, you can use dangerouslySetInnerHTML.
