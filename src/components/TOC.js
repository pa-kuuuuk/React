import React, {Component} from 'react';

class TOC extends Component{
  //돔이변경되지 않았을때 렌더링 하지않는법
  shouldComponentUpdate(newProps, newState){
    if(this.props.data === newProps.data){
    console.log(this.props.data === newProps.data);
      
      return false;
    }
    console.log(this.props.data === newProps.data);
    return true;
  }

    render(){
      console.log("이거나오냐");
        var lists =[];
        var data = this.props.data;
        var i =0;
        while(i<data.length){
            lists.push(<li key={data[i].id}><a 
            href={"/content/"+data[i].id}
            //data-id={data[i].id}
            onClick={function(id,e){
              e.preventDefault();
              this.props.onChangePage(id);
            }.bind(this,data[i].id)}>{data[i].title}</a></li>);
            i++;
        }
      return(
        <nav>
              <ul>
                  {lists}
              </ul>
          </nav>
      );
    }
  }
  export default TOC;