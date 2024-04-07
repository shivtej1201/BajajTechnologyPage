import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import BajajFinservLogo from "../../assets/images/logo/bajaj-finserv.png";
import { TbDatabaseEdit } from "react-icons/tb";
import { GrCloudComputer } from "react-icons/gr";
import { AiOutlinePartition } from "react-icons/ai";
import { TbCloudComputing } from "react-icons/tb";
import { FaDigitalOcean } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./Navbar.css";
import LogoOne from "../../assets/images/ourpartner/amul.png";
import LogoTwo from "../../assets/images/ourpartner/aws.png";
import LogoThree from "../../assets/images/ourpartner/bajaj-finserv.png";
import LogoFour from "../../assets/images/ourpartner/dunzo.png";
import LogoFive from "../../assets/images/ourpartner/hero.png";
import LogoSix from "../../assets/images/ourpartner/hindustan-unilever.png";
import LogoSeven from "../../assets/images/ourpartner/salesforce.png";
import LogoEight from "../../assets/images/ourpartner/phonepe.png";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function BasicExample() {
  return (
    <>
      <div className="MainDiv">
        <div className="NavbarDiv_One">
          <Navbar expand="lg" className="navbar_main bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  src={BajajFinservLogo}
                  className="finservLogo h-10 w-50"
                ></img>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link className="navLinks" href="#Offerings">
                    Offerings
                  </Nav.Link>
                  <Nav.Link className="navLinks" href="#Resource_Centre">
                    Resource Centre
                  </Nav.Link>
                  <Nav.Link className="navLinks" href="#Client_Outcomes">
                    Client Outcomes
                  </Nav.Link>
                  <Nav.Link className="navLinks" href="#Join_Us">
                    Join Us
                  </Nav.Link>
                  <Nav.Link className="navLinks" href="#About_Us">
                    About Us
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <div className="homeimg">
            <div className="home_Text_Main">
              <p className="home_Text">Bajaj Technology Services</p>
            </div>
            {/* <img className="homeimg" src={HomeBackground}></img> */}
          </div>
        </div>

        <div className="second_Section">
          <div className="second_Section_One">
            <p className="second_Section_Text">
              Bajaj Technology Services offers a combination of business
              understanding and technology expertise to accelerate your digital
              transformation roadmap and time to realize business value. Started
              as a captive unit of one of India’s leading conglomerate Bajaj
              Finserv Group, we have deep understanding of using technology at
              scale especially in highly regulated industries like finance and
              insurance.
            </p>
          </div>
        </div>

        <div className="third_Section">
          <div className="third_Section_Heading">
            <div className="third_Section_Heading_One">
              <p>OUR SERVICES</p>
            </div>
            <div className="third_Section_Heading_Two">
              <p>OUR SERVICES</p>
            </div>
          </div>
          <div className="third_Padding">
            <div className="third_Section_Card">
              <div class="responsive">
                <div class="gallery">
                  <div className="orange_Topline"></div>
                  <div className="card_Item">
                    <div className="Style_Svg">
                      <GrCloudComputer />
                    </div>
                    <div className="paragraph_Card">
                      <p>Custom Applications</p>
                    </div>
                    <div className="orange_Baseline"></div>
                  </div>

                  <div class="desc">
                    Leveraging a plethora of latest technologies for web and app
                    development
                  </div>
                </div>
              </div>

              <div class="responsive">
                <div class="gallery">
                  <div className="orange_Topline"></div>
                  <div className="card_Item">
                    <div className="Style_Svg">
                      <AiOutlinePartition />
                    </div>
                    <div className="paragraph_Card">
                      <p>Enterprise Applications</p>
                    </div>
                    <div className="orange_Baseline"></div>
                  </div>

                  <div class="desc">
                    Our Salesforce and Adobe practices offer implementation
                    services that derive maximum value from these platforms
                  </div>
                </div>
              </div>

              <div class="responsive">
                <div class="gallery">
                  <div className="orange_Topline"></div>
                  <div className="card_Item">
                    <div className="Style_Svg">
                      <TbDatabaseEdit />
                    </div>
                    <div className="paragraph_Card">
                      <p>Data Engineering & Analytics</p>
                    </div>
                    <div className="orange_Baseline"></div>
                  </div>

                  <div class="desc">
                    Mainstreaming AI for business and driving intelligent
                    analytics
                  </div>
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
          <div className="third_Padding">
            <div className="third_Section_Card">
              <div class="responsive">
                <div class="gallery">
                  <div className="orange_Topline"></div>
                  <div className="card_Item">
                    <div className="Style_Svg">
                      <GrTechnology />
                    </div>
                    <div className="paragraph_Card">
                      <p>Generative AI</p>
                    </div>
                    <div className="orange_Baseline"></div>
                  </div>

                  <div class="desc">
                    Drive application of GenAI to embrace the technology that is
                    transforming multiple areas across the business
                  </div>
                </div>
              </div>

              <div class="responsive">
                <div class="gallery">
                  <div className="orange_Topline"></div>
                  <div className="card_Item">
                    <div className="Style_Svg">
                      <TbCloudComputing />
                    </div>
                    <div className="paragraph_Card">
                      <p>Cloud</p>
                    </div>
                    <div className="orange_Baseline"></div>
                  </div>

                  <div class="desc">
                    Accelerate adoption of cloud to realize maximum value and
                    optimize costs
                  </div>
                </div>
              </div>

              <div class="responsive">
                <div class="gallery">
                  <div className="orange_Topline"></div>
                  <div className="card_Item">
                    <div className="Style_Svg">
                      <FaDigitalOcean />
                    </div>
                    <div className="paragraph_Card">
                      <p>Digital Agency</p>
                    </div>
                    <div className="orange_Baseline"></div>
                  </div>

                  <div class="desc">
                    Driving business success with SEO tactics, real-time
                    analytics and engaging marketing campaigns
                  </div>
                </div>
              </div>

              <div class="clearfix"></div>
            </div>
          </div>
        </div>

        <div className="Fourth_Section">
          <div className="third_Section_Heading">
            <div className="third_Section_Heading_One">
              <p>OUR PARTNERS</p>
            </div>
            <div className="third_Section_Heading_Two">
              <p>OUR PARTNERS</p>
            </div>
          </div>

          <div className="App">
            <Carousel breakPoints={breakPoints}>
              <Item>
                <img src={LogoOne}></img>
              </Item>
              <Item>
                {" "}
                <img src={LogoTwo}></img>
              </Item>
              <Item>
                {" "}
                <img src={LogoThree}></img>
              </Item>
              <Item>
                {" "}
                <img src={LogoFour}></img>
              </Item>
              <Item>
                {" "}
                <img src={LogoFive}></img>
              </Item>
              <Item>
                {" "}
                <img src={LogoSix}></img>
              </Item>
              <Item>
                {" "}
                <img src={LogoSeven}></img>
              </Item>
              <Item>
                {" "}
                <img src={LogoEight}></img>
              </Item>
            </Carousel>
          </div>
        </div>
        <div className="ourPartner_Line"></div>
        <div className="Six_Section">
          <div className="Six_SectionOne">
            <div className="Six_SectionOne_Para">
              <p>Digitally transforming business across multiple sectors</p>
            </div>
          </div>
          <div className="Six_SectionTwo">
            <div className="Six_SectionVideo">
              <iframe
                className="video_Iframe"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/MHhIzIgFgJo?si=r_kU2cNGQC3Dk8GO"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="seven_Section">
          <div className="third_Section_Heading">
            <div className="third_Section_Heading_One" id="resource_CenterOne">
              <p>RESOURCE CENTRE</p>
            </div>
            <div className="third_Section_Heading_Two" id="resource_CenterTwo">
              <p>RESOURCE CENTRE</p>
            </div>
          </div>
          <div className="seven_SectionOne">
            <div className="seven_SectionVideo">
              <iframe
                className="small_Video"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/sQ22pm-xvrE?si=iATaBo96lVsHC6i-"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="seven_SectionText">
              <p>
                <span>BALIC:</span> The company has strategic objective for
                build a platform for high growth, high margin and simple
                products that can be sold end-end digitally and to gain the
                ability for the broader enterprise to efficiently produce the
                content and experience needed to engage customers. Another key
                focus area was driving engagement. An opportunity to engage
                customers with augmented experiences can boost retention.
              </p>
            </div>
          </div>
        </div>

        <div className="eight_Section">
          <div className="eight_Section_Heading">
            <div id="eight_SectionheadingOne">
              <p>CLIENT OUTCOMES</p>
            </div>
            <div id="eight_SectionheadingTwo">
              <p>CLIENT OUTCOMES</p>
            </div>
          </div>
          <div className="eight_SectionMain">
            <div className="eight_SectionOne" id="eight_SectionPara">
              <p>
                Leading E-commerce platform where customers can avail all
                products on No Cost EMI
              </p>
            </div>
            <div className="eight_SectionTwo" id="eight_SectionPara">
              <p>
                Real-time data processing and content serving to customer with
                highly available infrastructure and efficient caching strategy
              </p>
            </div>
          </div>
        </div>

        <div className="nine_Section">
          <div className="nine_SectionOne">
            <div className="nine_SectionLinks">
              <a href="/">Privacy Notice |</a>
            </div>
            <div className="nine_SectionLinks">
              <a href="/"> T&C |</a>
            </div>
            <div className="nine_SectionLinks">
              <a href="/"> Cookie Policy |</a>
            </div>
            <div className="nine_SectionLinks">
              <a href="/">Sitemap |</a>
            </div>
            <div className="nine_SectionLinks">
              <a href="/">Follow Us |</a>
            </div>
            <div className="nine_SectionLinks">
              <a href="/">Investors</a>
            </div>
          </div>
          <div className="nine_SectionTwo">
            <div className="nine_SectionIcon">
              <a href="/">
                <MdOutlineMail />
              </a>
            </div>
            <div className="nine_SectionIcon">
              <a href="/">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BasicExample;

// favicon.ico
