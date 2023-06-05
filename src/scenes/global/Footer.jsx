import React from 'react'
import FooterBox from './FooterBox'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="row-fluid">
       <FooterBox/>
        <div className="span2">
          <h5>Iinformation</h5>
          <a href="contact.html">CONTACT</a><br />
          <a href="#ST">SITEMAP</a><br />
          <a href="#ST">LEGAL NOTICE</a><br />
          <a href="#ST">TERMS AND CONDITIONS</a><br />
          <a href="#ST">ABOUT US</a><br />
        </div>
        <div className="span2">
          <h5>Our Offer</h5>
          <a href="#ST">NEW PRODUCTS</a> <br />
          <a href="#ST">TOP SELLERS</a><br />
          <a href="#ST">SPECIALS</a><br />
          <a href="#ST">MANUFACTURERS</a><br />
          <a href="#ST">SUPPLIERS</a> <br />
        </div>
        <div className="span6">
          <h5>The standard chunk of Lorem</h5>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for
          those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et 
          Malorum" by Cicero are also reproduced in their exact original form, 
          accompanied by English versions from the 1914 translation by H. Rackham.
        </div>
      </div>
    </footer>
  )
}
