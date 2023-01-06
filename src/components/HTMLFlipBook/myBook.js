import React from "react";
// import { Link } from "react-router-dom";
import HTMLFlipBook from "react-pageflip";
// import "../PlannerBook/PlannerBook.scss";
import "../../../src/index.css";
import  './myBook.css';
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import AboutBook from "../About/aboutBook";




export default class MyBook extends React.Component {
  constructor(props) {
    super(props);                                                

    this.state = {
      page: 0,
      totalPage: 0,
      // height: props.height,
      bookPages: [
      {
        pageImg: "CoversFront.jpg",
        showTriggerBtn: false
      },
      {
        pageImg:"page_6.jpg",
        showTriggerBtn: false
      },
      {
        pageImg: "page_1.jpg",
        showTriggerBtn: true
      },
      {
        pageImg: "page_2.jpg",
        showTriggerBtn: true
      },
      {
        pageImg: "page_3.jpg",
        showTriggerBtn: true
      },
      {
        pageImg: "page_4.jpg",
        showTriggerBtn: true
      },
      {
        pageImg:"page_5.jpg",
        showTriggerBtn: true
      },
      {
        pageImg: "page_6.jpg",
        showTriggerBtn: false
      },
      {
        pageImg: "page_7.jpg",
        showTriggerBtn: true
      },
      {
        pageImg:  "page_8.jpg",
        showTriggerBtn: true
      },
      {
        pageImg:  "page_10.jpg",
        showTriggerBtn: true
      },
      {
        pageImg:"page_11.jpg",
        showTriggerBtn: true
      },
      {
        pageImg: "page_12.jpg",
        showTriggerBtn: true
      },
      {
        pageImg: "page_13.jpg",
        showTriggerBtn: true
      },
      {
        pageImg: "page_14.jpg",
        showTriggerBtn: true
      },
      {
        pageImg: "page_15.jpg",
        showTriggerBtn: true
      },
      {
        pageImg: "page_16.jpg",
        showTriggerBtn: true
      },
      {
        pageImg: "CoversBack.jpg",
        showTriggerBtn: false
      },
      
    ]


      // bookPages: [
      //   "CoversFront.jpg",
      //   "page_6.jpg",
      //   "page_1.jpg",
      //   "page_2.jpg",
      //   "page_3.jpg",
      //   "page_4.jpg",
      //   "page_5.jpg",
      //   "page_6.jpg",
      //   "page_7.jpg",
      //   "page_8.jpg",
      //   "page_9.jpg",
      //   "page_10.jpg",
      //   "page_11.jpg",
      //   "page_12.jpg",
      //   "page_13.jpg",
      //   "page_14.jpg",
      //   "page_15.jpg",
      //   "page_16.jpg",
      //   "page_6.jpg",
      //   "CoversBack.jpg",
      // ],
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

  componentWillMount() {
    this.setState({ height: window.innerHeight + "px" });
  }

  render() {
    return (
      <div
        className="main demo-block bg-lightx pt-3 pb-3 overflow-hidden"
        id="demoBlock"
      >
        <div className="">
          <div className="container-md" style={{ position: "relative" }}>
            <div
              className="flip-book html-book demo-book stf__parent" 
            >
              <div className="stf__wrapper --portrait" >
                <div classN ame="stf__block">
                  <HTMLFlipBook
                    width={500}
                    height={650}
                    showCover={true}
                    ref={(el) => (this.flipBook = el)}
                  >
                    {this.state.bookPages.map((page, index) => {
                      console.log("index coverback", this.state.bookPages.length);
                      return (
                        <div className="pageDiv demoPage page page-cover page-cover-top stf__item --right --hard">
                          { page.showTriggerBtn === false ? ( null
                          ) : (
                            <div className="tag">
                              <a
                                style={{ textDecoration: "none", color: "red" }}
                                href='https://www.youtube.com/'
                                
                              >
                                <FontAwesomeIcon icon={faCircleQuestion} />
                              </a>
                              {/* <Link to={<AboutBook/>}></Link> */}
                            </div>
                          )}
                          <img
                            // src={"/assets/images/"+ page}
                            src={
                              "https://thumbstack.in/wp-content/uploads/2023/01/" +
                              page.pageImg
                            }
                            className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                            alt=""
                            width={320}
                            // minWidth={350} minHeight={500}
                            height={400}
                          />
                          {/* Page {index + 1} */}
                        </div>                                                                                                                                                                                         
                      );
                    })}
                  </HTMLFlipBook>
                  {/* <AboutBook /> */}
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
