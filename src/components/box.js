import React,{Component} from "react"

class Box extends Component{
    // constructor(props) {
    //   super(props);
    // }
    render(){
      return(
        <>
          {/* <div id={this.props.text} ref={this.it} className='items' onClick={this.handleClick}>{this.props.num}</div> */}
          <input type='button' className='items' id={this.props.text} value={this.props.num}  onClick={this.props.handleClick}/>
        </>
      )
    }
  }

export default Box   