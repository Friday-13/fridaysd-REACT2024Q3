import { Component, ComponentProps } from 'react';

export default class Section extends Component<ComponentProps<'section'>> {
  render() {
    return (
      <section>
        <h2>Section</h2>
        {this.props.children}
      </section>
    );
  }
}
