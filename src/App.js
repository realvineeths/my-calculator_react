import './App.css';
import Box from './components/box';
import React, { Component } from 'react'
import Output from './components/output';

const elements=[
  {
    id:'clear',
    num:'AC'
  },
  {
    id:'delete',
    num:'DEL'
  },
  {
    id:'divide',
    num:'/'
  },
  {
    id:"seven",
    num:'7'
  },
  {
    id:"eight",
    num:'8'
  },
  {
    id:"nine",
    num:'9'
  }, 
  {
    id:"multiply",
    num:'*'
  },
  {
    id:"four",
    num:'4'
  },
  {
    id:"five",
    num:'5'
  },
  {
    id:"six",
    num:'6'
  },
  {
    id:'add',
    num:'+'
  },
  {
    id:"one",
    num:'1'
  },
  {
    id:"two",
    num:'2'
  },
  {
    id:"three",
    num:'3'
  },
  {
    id:'subtract',
    num:'-'
  },
  {
    id:"zero",
    num:'0'
  },
  {
    id:'decimal',
    num:'.'
  },

  {
    id:'equals',
    num:'='
  }
 
];

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state={
      question:'0',
      answer:'0',
      flag:1,
      zeroflag:1
    }
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(event){

    const val=event.target.value;
    // let flag=1;
    switch (val) {
      case '=':
        if(this.state.question!=='0')
        {
          const val1=eval(this.state.question);
          this.setState({
            answer:val1,
            question:val1
          })

        }
        break;
      
      case '.':
          if(this.state.question.indexOf('.')===-1|| (this.state.question.indexOf('+')>-1|| this.state.question.indexOf('-')>-1|| this.state.question.indexOf('/')>-1|| this.state.question.indexOf('*')>-1))
          {
            this.setState({
              question:this.state.question+=val
            });            
          }                
        break;

      case 'AC':
        // console.log("clear")
        this.setState({
          flag:1
        });
        this.setState({
          question:'0',
          answer:'0'
        })
        break;
      case 'DEL':
        // console.log("delete")
        let str=this.state.question;
        str=str.substring(0,(str.length-1))
        this.setState({
          question:str
        });
        break;
        
      default:
        if(val!=='0' || this.state.zeroflag!==0)
        {

          if(val!=='0')
          {
            this.setState({
              zeroflag:1
            });
          }

          this.setState({
            question:this.state.question+=val
          });
          if(this.state.flag===1)
          {
            let str=this.state.question;
            str=str.substring(1); 
            // console.log(str);
            this.setState({
              question:str
            });
            this.setState({
              flag:0
            });
            if(val==='0'){
              this.setState({
                zeroflag:0
              });
            }
          }

        }
        break;
    }
  }

  render() {
    return (
      <div className='container'>
        <h2>My-Calci</h2>
        <div id='full-disp'>
        <div id='output'> 
          <Output val={this.state.question}/>
          <Output val={this.state.answer}/>
        </div>

        <div className='click-items' >
          { 
            elements.map((element,id)=>(
                <Box text={element.id} num={element.num}  key={id} handleClick={this.handleClick}/>
            ))
          }          
        </div>
      </div>
      </div>
    )
  }
}

export default Calculator

