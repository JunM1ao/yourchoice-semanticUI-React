import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import {
  Container,
  Grid,
  GridColumn,
  Menu,
  ItemImage,
  Dropdown,
  Button,
  Flag,
  Segment,
  Image,
  Input
} from 'semantic-ui-react';

const TopMenu = () => (
    <Container id='top'>
      <Grid>
        <GridColumn width={1}>
          <a href='.'>
            <Menu.Item position='left'>
              <ItemImage src='https://i.pinimg.com/originals/f1/37/c8/f137c8e169d6a1ac74198400eeb949e0.jpg'
                         size='mini'/>
            </Menu.Item>
          </a>
        </GridColumn>
        <GridColumn width={8} className='centered'>
          <Menu secondary>
            <Menu.Item>Phone</Menu.Item>
            <Menu.Item>Store</Menu.Item>
            <Menu.Item>About</Menu.Item>
            <Menu.Item>Support</Menu.Item>
            <Menu.Item>Community</Menu.Item>
            <Menu.Item>Find a store</Menu.Item>
          </Menu>
        </GridColumn>
        <GridColumn>
          <Menu secondary>

            <Dropdown icon='user' id='top-icons'>
              <Dropdown.Menu id='user-menu'>
                <Dropdown.Item>Order</Dropdown.Item>
                <hr/>
                <Dropdown.Item>Account</Dropdown.Item>
                <hr/>
                <Dropdown.Item>Refer a friend</Dropdown.Item>
                <hr/>
                <a href='.'>Sign in</a> | <a href='.'>Sign up</a>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown icon='shop' id='top-icons'>
              <Dropdown.Menu>
                <Dropdown.Item disabled id='shopping-cart'><br/><br/>Your shopping cart is empty right now, <br/>
                  but it doesn't have to be!<br/></Dropdown.Item>
                <hr color='grey'/>
                <Button color='red' floated fluid>Go shopping</Button>
              </Dropdown.Menu>
            </Dropdown>

            <Flag name='us' id='top-icons'/>

          </Menu>
        </GridColumn>
      </Grid>
    </Container>
);

const PhoneBackground = () => (
    <div className='phone-background'>
      <Container className='textbox'>
        <p className="large-text">90 Hz Display.<br/>Smooth Like Never Before.</p>
        <h1 style={{ fontSize: '3.5em' }}>OnePlus 7T</h1>
        <p className='large-text'><strike style={{ color: 'grey' }}>$599</strike> $499</p>
        <p className='large-text'>Get your OnePlus 7T for $42/mo with 0% APR</p>
        <Button className='huge basic ui button' color='grey'>Buy now</Button>
        <p><br/>Save $100 on the OnePlus 7T now!</p>
      </Container>
    </div>
);

const TMobile = () => (
    <div className='tmobile'>
      <Container className='textboxx' style={{ color: 'white', transform: 'translate(5%, 100%)' }}>
        <p className="large-text">Get 50% off the</p>
        <h1 style={{ fontSize: '3.5em' }}>OnePlus 7T</h1>
        <p className="large-text">When you add-a-line or switch to T-Mobile</p>
        <Button color='white' size='huge' basic inverted>Shop T-Mobile</Button>
      </Container>
    </div>
);

const FourPanel = () => (
    <Segment className='borderless'>
      <Grid columns={2} className='equal width'>
        <GridColumn>
          <a href="."><Image src="https://raw.githubusercontent.com/JunM1ao/yourchoice-semanticUI/master/sprint.png"/>
          </a>
          <br/>
          <a href="."><Image
              src="https://raw.githubusercontent.com/JunM1ao/yourchoice-semanticUI/master/order.png"/></a>
        </GridColumn>
        <GridColumn>
          <a href="."><Image src="https://raw.githubusercontent.com/JunM1ao/yourchoice-semanticUI/master/ref.png"/> </a>
          <br/>
          <a href="."><Image
              src="https://raw.githubusercontent.com/JunM1ao/yourchoice-semanticUI/master/trade.png"/></a>
        </GridColumn>
      </Grid>
    </Segment>
);

const Rating = () => (
    <Segment secondary className='borderless'>
      <Container style={{ fontSize: '1.3em', color: '#828282' }}>
        <Grid columns={3} centered relaxed='very'>
          <GridColumn textAlign='center'>
            <br/>
            <Image src="https://image01.oneplus.net/shop/201910/18/1-M00-0A-BD-rB8LB12pgmGAKKdVAAFpoKiZEow207.jpg"
                   className="centered" size='small'/>
            <br/><br/>
            <p>"I'm not sure anything can touch this<br/>combinations of display, performance,<br/>and price."</p>
            <br/>
            <a href=".">Learn more</a>
          </GridColumn>

          <GridColumn textAlign='center'>
            <br/>
            <Image src="https://image01.oneplus.net/shop/201910/16/1-M00-0A-B1-rB8bwl2mwOqATT6iAAAWxCcoPNw859.png"
                   className="centered" size='tiny'/>
            <br/><br/>
            <p>"An Android flagship on par with<br/>iPhone 11 Pro Max for literally half the<br/>price"</p>
            <br/>
            <a href=".">Learn more</a>
          </GridColumn>

          <GridColumn textAlign='center'>
            <Image src="https://image01.oneplus.net/shop/201910/18/1-M00-0A-BD-rB8LB12phzCAYwmsAAB8UqiNZMA435.png"
                   className="centered" size='small'/>
            <p>"Best Smartphone in the world."</p>
            <br/><br/><br/><br/>
            <a href=".">Learn more</a>
          </GridColumn>
        </Grid>
      </Container>
    </Segment>
);

const Newsletter = () => (
    <div className='newsletter-background'>
      <Grid centered style={{ transform: 'translateY(30%)' }}>
        <GridColumn textAlign='center'>
          <h1>Always be the first to know.</h1>
          <p style={{ fontSize: '1.3em', color: '#828282' }}>Sign up for our newsletter!</p>
          <Input placeholder='Email address' size='big'/>
          <p>Subscribe to receive <a href="."><u>marketing information</u></a></p>
        </GridColumn>
      </Grid>
    </div>
);

const Footer = () => (
    <Segment className='borderless'>
      <Container style={{padding: '1em', lineHeight: '2.5em', fontSize: '1.2em'}}>
        <Grid centered columns={5}>
          <GridColumn>
            <h3>Phones</h3>
            <a href=".">OnePlus 7T</a><br/>
            <a href=".">OnePlus 7T Pro</a><br/>
            <a href=".">OnePlus 6T</a><br/>
            <a href=".">OnePlus 6</a><br/>
          </GridColumn>
          <GridColumn>
            <h3>Accessories</h3>
            <a href=".">Cases & Protection</a><br/>
            <a href=".">Power & Cables</a><br/>
            <a href=".">Audio</a><br/>
            <a href=".">Bundles</a><br/>
            <a href=".">Gear</a><br/>
          </GridColumn>
          <GridColumn>
            <h3>Programs</h3>
            <a href=".">Student Program</a><br/>
            <a href=".">Trade-in Program</a><br/>
            <a href=".">Referral Program</a><br/>
            <a href=".">Affiliate Program</a><br/>
            <a href=".">Shot on OnePlus</a><br/>
            <a href=".">Financing</a><br/>
          </GridColumn>
          <GridColumn>
            <h3>Support</h3>
            <a href=".">Shopping FAQs</a><br/>
            <a href=".">User Manuals</a><br/>
            <a href=".">Software Upgrade</a><br/>
            <a href=".">Repair Service</a><br/>
            <a href=".">Contact Us</a><br/>
          </GridColumn>
          <GridColumn>
            <h3>Company</h3>
            <a href=".">About OnePlus</a><br/>
            <a href=".">Community</a><br/>
            <a href=".">Careers</a><br/>
            <a href=".">Press</a><br/>
          </GridColumn>
        </Grid>
      </Container>
    </Segment>
);

const OnePlus = () => (
    <>
      <TopMenu/>
      <PhoneBackground/>
      <TMobile/>
      <FourPanel/>
      <Rating/>
      <Newsletter/>
      <Footer/>
    </>
);

ReactDOM.render(
    <OnePlus/>
    , document.getElementById('root'));