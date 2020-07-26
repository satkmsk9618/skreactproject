import Particles from 'react-particles-js';
import React,{Component} from 'react';
 
class Part extends Component{
  
    render(){
        return (
            <Particles className= 'particles'
                params={{
                    particles:{
                        number:{
                          value:50,
                          density:{
                            enable:'true',
                            value_area: 800
                          }
                        }
                        } 
                }} />
        );
    };
 
}

export default Part;


