import Button from '@material-ui/core/Button';
import React from 'react';
const styleArgument={fontSize: '100px', color: 'red'};

class CounterButton extends React.Component{
    constructor(props){
      super(props)
      this.state={
        counter: 0
      }
      this.handleClick=this.handleClick.bind(this)
    }
    handleClick(event){
      this.setState({counter: this.state.counter+1});
      console.log(this.state);
    }
    render(){
      var text=this.state.counter;
      return(
        <Button variant="contained" color="primary" onClick={this.handleClick}>
          你點了{text}次。
        </Button>
      );
    }
}
  const multiButton=(num)=>{
    var output=[];
    for(let i=1; i<num+1; ++i){
    output.push(<CounterButton />)
    }
      return output;
  }

  export default multiButton;