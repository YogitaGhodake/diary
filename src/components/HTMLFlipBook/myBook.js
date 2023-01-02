import React from "react";
// import { Link } from "react-router-dom";
import HTMLFlipBook from "react-pageflip";
import './myBook.css';
import '../../../src/index.css';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

// const PageCover = React.forwardRef((props, ref) => {
//   return (
//     <div className="page page-cover" ref={ref} data-density="hard">
//       <div className="page-content">
//         <h2>{props.children}</h2>
//       </div>
//     </div>
//   );
// });

// const Page = React.forwardRef((props, ref) => {
//   return (
//     <div className="page" ref={ref}>
//       <div className="page-content">
//         <h2 className="page-header">Page header - {props.number}</h2>
//         <div className="page-image"></div>
//         <div className="page-text">{props.children}</div>
//         <div className="page-footer">{props.number + 1}</div>
//       </div>
//     </div>
//   );
// });



export default class MyBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      totalPage: 0,
      // height: props.height,
      bookPages: [
       
        // "Separator.jpg",
        "CoversFront.jpg",
        // "Separator.jpg",
        "page_1.jpg",
        "page_2.jpg",
        "page_3.jpg",
        "page_4.jpg",
        "page_5.jpg",
        "page_6.jpg",
        "page_7.jpg",
        "page_8.jpg",
        "page_9.jpg",
        "page_10.jpg",
        "page_11.jpg",
        "page_12.jpg",
        "page_13.jpg",
        "page_14.jpg",
        "page_15.jpg",
        "page_16.jpg",
        "CoversBack.jpg",
      ],
     
    };
  }

 
  nextButtonClick = () => {
    this.flipBook.getPageFlip().flipNext();
  };

  prevButtonClick = () => {
    this.flipBook.getPageFlip().flipPrev();
  };

  onPage = (e) => {
    this.setState({
      page: e.data,
    });
  };

  componentDidMount() {
    this.setState({
      //   totalPage: this.flipBook.getPageFlip().getPageCount(),
    });
  }

  componentWillMount(){
    this.setState({height: window.innerHeight + 'px'});
  }

  
  render() {
    return (
      <div className="main demo-block bg-lightx pt-3 pb-3 overflow-hidden" id="demoBlock">

        <div className="">

        <div className="container-md" style={{position:"relative"}}>
          <div className="flip-book html-book demo-book stf__parent" style={{ minWidth: '315px', minHeight: '400px', width: '100%', maxWidth: '2000px', display: 'block'}}>
          <div className="stf__wrapper --landscape">
          <div classN ame="stf__block">
          <HTMLFlipBook
          width={600}
          height={790}
          showCover={true}
          size= {"stretch"}
          ref={(el) => (this.flipBook = el)}
        >
         
         { this.state.bookPages.map((page, index) => {
          return(
            <div className="demoPage page page-cover page-cover-top stf__item --right --hard">
              <div className="tag">
             <a style={{textDecoration: "none", color:"red"}} href="https://www.youtube.com/" > <FontAwesomeIcon icon={faCircleQuestion} />
            </a>
                
              </div>
              <img
              // src={"/assets/images/"+ page}
              src={"../images/" + page}
              className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
              alt="" width={550} height='auto'
            /> 
            Page {index+1}
          </div>
          )
        }) }
            </HTMLFlipBook>
            </div>
          
          </div>
          </div>
        
        </div>
        

        {/* <div className="container">
          <div>
            <button type="button" onClick={this.prevButtonClick}>
              Previous page
            </button>
            [<span>{this.state.page}</span> of
            <span>{this.state.totalPage}</span>]
            <button type="button" onClick={this.nextButtonClick}>
              Next page
            </button>
          </div>
        </div> */}
      </div>
      </div>
    );
  }
}
