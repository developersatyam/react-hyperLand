import React, { useReducer } from "react";
import { useFetch } from "./hooks";
import NavBar from "../Components/NavBar";
import { Container } from "react-bootstrap";
import { backApi } from "../URL";

const Landing=()=>{  return ()
    <header>
    <h2><a href="#">HyperLand</a></h2>
    <nav>
      <li><a href="#">Login</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">FAQ</a></li>
    </nav>
  </header>

  <section class="hero">
    <div class="background-image" style="background-image: url(assets/img/main.jpg);"></div>
    <div class="hero-content-area">
      <h1>HyperLand</h1>
      <h3>Unmissable Properties Around The Country</h3>
      <a href="#" class="btn">Login</a>
    </div>
  </section>
  
  <section class="destinations">
    <h3 class="title">Some of our Properties</h3>
    <p>India's only real estate platform with
      end-to-end Secure Property Exchanges. No brokers Involed.</p>
    <hr>

    <ul class="grid">
      <li class="small" style="background-image: url(assets/img/super.jpg);"></li>
      <li class="large" style="background-image: url(assets/img/residential.jpg);"></li>
      <li class="large" style="background-image: url(assets/img/square.jpg);"></li>
      <li class="small" style="background-image: url(assets/img/morning.jpg);"></li>
    </ul>
  </section>

  <section class="packages">
    <h3 class="title">Property Values</h3>
    <p>We offer a variety of amazing Property values. Whether you've climbed Everest or don't even know what a good flat is, we've got the perfect home for you.</p>
    <hr>

    <ul class="grid">
      <li>
        <<i class="fa fa-bed fa-4x" ></i>
        <h4>Single Bed Rooms</h4>
        <p>Looking for the private experience? Take a tour with one of our experts. They'll show you secrets that you're likely to miss otherwise.</p>
      </li>
      <li>
          <i class="fa fa-home fa-4x"></i>
        <h4>Houses</h4>
        <p>Want to experience the actual beauty without all of that annoying exercise? Take a photo tour on one of the available properties.</p>
      </li>
      <li>
          <i class="fa fa-bath fa-4x"></i>
        <h4>Attached Bathrooms</h4>
        <p>If Attached Bathrooms are more your speed, consider taking a tour through one of the amazing properties.</p>
      </li>
      <li>
          <i class="fa fa-car fa-4x"></i>
        <h4>Parkings</h4>
        <p>Get a Covered/Uncovered Car Parking of your choice.</p>
      </li>
    </ul>
  </section>

  
  <section class="contact">
    <h3 class="title">Learn more</h3>
    <p> We understand that people everywhere are searching for a home to call their own. We want to make this search as joyful as finally finding the perfect home because we understand that finding a home is much more than an online search!
        A home is a cherished memory that lasts forever, it is where the walls embrace memories, the ceilings shelter love and laughter, where the quiet corners offer a much-needed pause and life itself becomes a reason to celebrate.So to make this journey joyful, we begin by partnering with our customers from the start and being there when it matters the most - right from online search to brokers to home loans to paperwork to finally finding that perfect home.
  </p>
    <hr>
    <p>
      For any Queries Related to how securely you can transfer your properties online, without any broker fees, Enter your email-id below and Contact Now 
    </p>
    <form action="mailto:rahulbhatia1998@gmail.com" method="post" enctype="text/plain">
      <input type="email" placeholder="Email" required>
      <a href="mailto:rahulbhatia1998@gmail.com" class="btn" aria-required="true">Contact Now</a>
    </form>
  </section>

  <footer>
  <p class="quote">
       </p>
  
  </footer>

 
};

export default Property;
