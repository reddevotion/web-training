### Задание

Переписать Class-компонент на функциональный.

```jsx
import React from "react";
import faker from "faker";
import "./styles.css";

async function fetchFeedItems(offset) {
  return Array.from({ length: 10 }).map(() => ({
    id: faker.random.number(),
    title: faker.lorem.words(3),
    description: faker.lorem.sentence()
  }));
}

class Feed extends React.Component {
  state = {
    feedItems: []
  };

  componentDidMount() {
    this.fetchNextBatch();
  }

  fetchNextBatch = async () => {
    await fetchFeedItems({ offset: this.state.feedItems.length }).then(
      (moreFeedItems) => {
        this.setState(({ feedItems }) => {
          return { feedItems: [...feedItems, ...moreFeedItems] };
        });
      }
    );
  };

  render() {
    return (
      <div className="Feed">
        {this.state.feedItems.map(({ id, title, description }) => (
          <div className="Feed-item" key={id}>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        ))}
        <button onClick={this.fetchNextBatch}>Load more</button>
      </div>
    );
  }
}

Feed.defaultProps = {
  rootMargin: "100px 0px 0px 0px",
  threshold: 0
};

export default function App() {
  return <Feed />;
}
```
