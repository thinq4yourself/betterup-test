# Storybook
We incorporate [react-storybook](https://github.com/storybooks/react-storybook) for the development process. It helps improve productivity and developer experience. Most of the time we just use the `storybook` instead of the real webapp while creating components.

During the creation of a new component, we'll want to test it in a browser. Usually, we'll render it in a top level component with every possible state so we can check if it's working properly:
```jsx
const HomePage = () => (
  <PageTemplate>
    ...
    <MyNewAwesomeComponent />
    <MyNewAwesomeComponent sun />
    <MyNewAwesomeComponent moon />
    <MyNewAwesomeComponent sun moon />
    ...
  </PageTemplate>
)
```
Once you've finished the work, you need to remove that component from `HomePage`. But, as we all know, 2 weeks later you'll come back to change something, add a new state, fix some bugs etc. And, when that happens, you'll need to repeat that task, rendering every state of that component, to make sure the new and the old states are working.

Fortunately, [storybook](https://github.com/storybooks/storybook) solves this problem by letting us write every state of our component on a file and keep it there so we can always use it.
```jsx
storiesOf('MyNewAwesomeComponent', module)
  .add('default', () => (
    <MyNewAwesomeComponent />
  ))
  .add('sun', () => (
    <MyNewAwesomeComponent sun />
  ))
  .add('moon', () => (
    <MyNewAwesomeComponent moon />
  ))
  .add('sun and moon', () => (
    <MyNewAwesomeComponent sun moon />
  ))
```

Then, just run `npm run storybook`.

### Removing storybook

If you don't want to use Storybook in your project, just run:
```sh
rm -rf .storybook # remove .storybook folder
npm un -D @storybook/react # remove storybook dependency
```