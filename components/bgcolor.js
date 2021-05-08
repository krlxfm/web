if (typeof window !== 'undefined') {
  var docBody = document.querySelector('body');
}
export default class Bg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bgColored: false};
    this.colorBackground = this.colorBackground.bind(this);
    this.clearBackground = this.clearBackground.bind(this);
  }

  colorBackground() {
    this.setState({bgColored: true});
  }

  clearBackground() {
    this.setState({bgColored: false});
  }

  componentDidUpdate(prevProps, prevState) {
    const { bgColored } = this.state;
    const className = 'coolBg';
console.log(bgColored);
    if(prevState.bgColored !== bgColored){
      bgColored ?
        docBody.classList.add(className) :
        docBody.classList.remove(className);
    }
  }

  render() {
    return (
      <div>
        <a href="#" onClick={() => this.colorBackground()}>KRLX</a>
        {' '}
        <a href="#" onClick={() => this.clearBackground()}>88.1 FM</a>
      </div>
    )
  }
}
