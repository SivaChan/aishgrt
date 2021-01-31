import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Slider from "react-slick";

import ProfilePicture from './images/aish-the-great.jpeg';
import Unicorn from './svgs/unicorn.svg';
import './App.scss';

class App extends React.Component {
  state = {
    currentTheme: 'dark',
  }

  componentDidMount() {
    this.getThemeFromLS();
  }

  getThemeFromLS = () => {
    const localTheme = localStorage.getItem('tpuTheme');
    if (localTheme) {
      if (localTheme === 'light') {
        this.setState({ currentTheme: 'light' });  
      } else {
        this.setState({ currentTheme: 'dark' });  
      }
    } else {
      this.setState({ currentTheme: 'light' });
    }
  }

  handleClick = () => {
    if (this.state.currentTheme === 'light') {
      localStorage.setItem('tpuTheme', 'dark');
      this.setState({ currentTheme: 'dark' });
    } else {
      localStorage.setItem('tpuTheme', 'light');
      this.setState({ currentTheme: 'light' });
    }
  }

  getAppTheme = () => {
    if (this.state.currentTheme === 'light') {
      return 'light-theme';
    } else {
      return 'dark-theme';
    }
  }

  renderProfile = () => {
    return (
      <div className="grid">
      <div className="grid-details">
        <img src={ProfilePicture} alt="Aishwarya Srinivasan Profile" className="profile" />
      </div>
      <div>
        <div className="grid-details">
          <ul className="data-list">
            <li>Data Scientist @IBM Science Elite</li>
            <li>LinkedIn Top Voice 2020 - Data Science and AI</li>
            <li>Women in Data Science Ambassador</li>
            <li>MS Data Science - Columbia University</li>
            <li>Unicorn in Data Science</li>
            <li>Scikit-Learn Contributor</li>
            <li>Deep Learning Researcher</li>
          </ul>
        </div>
      </div>
    </div>
    );
  }

  renderTheme = () => {
    const { currentTheme } = this.state;
    if (currentTheme === 'light') {
      return <WbSunnyIcon style={{ fontSize: 40, color: '#f7cb3b' }} />;
    }
    return <Brightness3Icon style={{ fontSize: 40, color: '#ffffff' }} />
  }

  renderHeader = () => {
    return (
      <header className={`header ${this.getAppTheme()}`}>
        <div className="header-title-comp">
          <div className="header-title">The Peculiar Unicorn</div>
          <img className="header-icon" src={Unicorn} alt="The Peculiar Unicorn" />
        </div>
        <button onClick={this.handleClick}>
          {this.renderTheme()}
        </button>
      </header>
    );
  }

  renderFooter = () => {
    return (
      <footer className={`footer ${this.getAppTheme()}`}>
        <div>
        <a href="mailto:aishwarya.srinivasan@columbia.edu" target="_blank" rel="noreferrer">
          <MailIcon style={{ color: '#fb260a', paddingRight: '5px', cursor: 'pointer', fontSize: 30 }} />
        </a>
          <a href="https://www.linkedin.com/in/aishwarya-srinivasan/" target="_blank" rel="noreferrer">
            <LinkedInIcon style={{ color: '#005ec9', paddingRight: '5px', cursor: 'pointer', fontSize: 30 }} />
          </a>
          <a href="https://twitter.com/Aishwarya_Sri0/" target="_blank" rel="noreferrer">
          <TwitterIcon style={{ color: '#009afa', paddingRight: '5px', cursor: 'pointer', fontSize: 30 }} />
          </a>
          <a href="https://www.youtube.com/channel/UCzd4ZN716evEjtbJERBMTfg/" target="_blank" rel="noreferrer">
            <YouTubeIcon style={{ color: '#ff0000', paddingRight: '5px', cursor: 'pointer', fontSize: 30 }} />
          </a>
          <a href="https://www.instagram.com/kravmaga.yogi/" target="_blank" rel="noreferrer">
            <InstagramIcon style={{ color: '#ff0000', paddingRight: '5px', cursor: 'pointer', fontSize: 30 }} />
          </a>
        </div>
      </footer>
    );
  }

  renderAboutMe = () => {
    return (
      <div className="about-me">
        <div className="about-me-title">About Me</div>
        <div className="desc">
          <div>A Mischievous human by nature.</div>
          <div>A Data Scientist by profession.</div>
          <div>Live life to the fullest, make a difference along the way !</div>
          <br />
          <div>
            I dwell in the belief that learning and innovation have no horizon. Learning is a never ending process and knowledge in this world has no boundaries. If one has the will to learn endlessly, one ought to break all barriers to reach their goal.
          </div>
        </div>
      </div>
    );
  }

  renderSlider = () => {
    const settings = {
      infinite: true,
      arrows: false,
      speed: 500,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="gallery">
        <div className="gallery-title">Gallery</div>
        <div className="slider">
          <Slider {...settings}>
            <div className="slider-comp">
              <img className="slider-image" src={ProfilePicture} alt="Gallery 1" />
            </div>
            <div className="slider-comp">
            <img className="slider-image" src={ProfilePicture} alt="Gallery 2" />
            </div>
            <div className="slider-comp">
            <img className="slider-image" src={ProfilePicture} alt="Gallery 3" />
            </div>
            <div className="slider-comp">
            <img className="slider-image" src={ProfilePicture} alt="Gallery 4" />
            </div>
            <div className="slider-comp">
            <img className="slider-image" src={ProfilePicture} alt="Gallery 5" />
            </div>
          </Slider>
        </div>
      </div>
    );
  }

  renderProjects = () => {
    return (
      <div className="projects">
        <div className="projects-title">Selected Projects</div>

        <div className="project">
          <div className="project-title">IBM</div>
          <div>
            <a  className={this.getAppTheme()} href="https://medium.com/inside-machine-learning/reinforcement-learning-the-business-use-case-part-2-c175740999" target="_blank" rel="noreferrer">
              Reinforcement Learning: Business Use-cases
            </a>
          </div>
          <div className="project-desc">
            Reinforcement Learning model to automate the trading policy/strategy making, and back-testing it for long and short trades. The policy generating model, which observes the market movement, can be used to critically assess and efficiently maintain a balanced portfolio. This use-case could behave as an assistant to validate the decisions of a trader and portfolio manager.
          </div>
        </div>

        <div className="project">
          <div className="project-title">COLUMBIA UNIVERSITY NEW YORK PRESBYTERIAN</div>
          <div className="project-subtitle">Predicting Acute Kidney Injury</div>
          <div className="project-desc">
          Acute kidney injury is a common post-operative event, which can be an effect of the drugs given to the patient before, during and after the surgery. It is also highly dependent upon the health conditions of the patient. This study is for analyzing the EHR, pre and inter-operative hemodynamic data of various patients, and creating a model for the prediction of Acute Kidney Injury (AKI).
          </div>
        </div>

        <div className="project">
          <div className="project-title">SCIKIT-LEARN</div>
          <div className="project-subtitle">Analysis and Development of Python Machine Learning Package - sklearn</div>
          <div className="project-desc">
          Scikit-learn is a Python machine learning library containing a large collection of machine learning models, as well as evaluation metrics and tools for implementing machine learning workflows. The goal of this project is to analyze the current usage of scikit-learn on a large scale (i.e. the scale of all open-source code, even all public code), and extend the library based on the findings; to identify usage patterns, problematic use cases, and ways to improve the interface.</div>
        </div>
      </div>
    );
  }

  renderHobbies = () => {
    return (
      <div className="hobbies pb-5">
        <div className="hobbies-title">Hobbies</div>
        <div className="hobbies-group">
          <div className="flex-center">
            <div className="hobby-dance">
              <div>DANCING</div>
            </div>
          </div>
          <div className="flex-center">
          <div className="hobby-hiking">
            <div>HIKING</div>
          </div>
          </div>
          <div className="flex-center">
          <div className="hobby-poem">
            <div>
              <div>POEMS AND</div>
              <div>APHORISMS</div>
            </div>
          </div>
          </div>
          <div className="flex-center">
          <div className="hobby-teaching">
            <div>TEACHING</div>
          </div>
          </div>
          <div className="flex-center">
          <div className="hobby-yoga">
            <div>YOGA</div>
          </div>
          </div>
          <div className="flex-center">
          <div className="hobby-food">
            <div>FOOD</div>
          </div>
          </div>
          <div className="flex-center">
          <div className="hobby-debate">
            <div>DEBATING</div>
          </div>
          </div>
          <div className="flex-center">
          <div className="hobby-event">
            <div>EVENT MANAGEMENT</div>
          </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const bodyTheme = this.getAppTheme();
    console.log('bodyTheme', bodyTheme);
    return (
      <div className={bodyTheme}>
        {this.renderHeader()}
        {this.renderProfile()}
        {this.renderAboutMe()}
        {this.renderSlider()}
        {this.renderProjects()}
        {this.renderHobbies()}
        {this.renderFooter()}
      </div>
    );
  }
}

export default App;
