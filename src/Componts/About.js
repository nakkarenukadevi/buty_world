import React from "react";
import Footer from "../Footer";
const About = () => {
  return (
    <>
      <div className="container-fulid about-p">
        <div className="container">
          <div className="about row">
            <h3 className="text-center">About Us</h3>
            <div className="col-lg-6 col-sm-12">
              <p>OUR STORY </p>
              <h3>
                At VU Natural, we believe in the power of nature and the beauty
                that lies within it.
              </h3>

              <p>
                Our brand was born from the passion and vision of Gissel Defex,
                a remarkable woman who embodies the essence of being a mother, a
                business owner, and a true advocate for embracing one's natural
                self.
              </p>
              <p>
                Gissel's journey began with a profound realization of the
                harmful effects of synthetic chemicals and additives found in
                everyday products. As a mother, she wanted to create a safe and
                healthy environment for her family, starting with the products
                they used. Determined to make a positive change, Gissel embarked
                on a mission to develop a brand that would offer 100 percent
                organic products, right down to the very bottle they come in.
              </p>
            </div>
            <div className="col-lg-6 col-sm-12 ">
              <img
                src="https://cdn.shopify.com/s/files/1/0750/6060/9328/files/WhatsApp_Image_2023-06-22_at_7.57.10_PM_1.jpg?width=560"
                alt="about"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid about-2 ">
        <div className="conatiner">
          <div className="row py-4">
            <div className="col-lg-6 col-sm-12 ">
              <img src="https://cdn.shopify.com/s/files/1/0750/6060/9328/files/WhatsApp_Image_2023-06-22_at_7.58.20_PM.jpg?width=560" />
            </div>
            <div className="col-lg-6 col-sm-12">
              <h4> OUR PHILOSOPHY</h4>{" "}
              <p>
                Nature is the foundation of daily life. Driven by her unwavering
                commitment to authenticity and sustainability, Gissel explored
                the world of natural ingredients, seeking out the finest organic
                elements that nature had to offer. She dedicated countless hours
                researching and collaborating with experts in the field to
                create formulas that would nourish and rejuvenate without
                compromising on quality.
              </p>
              <p>
                {" "}
                Inspired by the boundless beauty found in nature, Gissel ensured
                that every product at Vu Natural was meticulously crafted to
                harness the incredible benefits of organic ingredients. From the
                rich botanical extracts to the nurturing oils, each element was
                thoughtfully selected to enhance the natural beauty that lies
                within us all. But Gissel's passion for sustainability didn't
                stop at the ingredients. She recognized the environmental impact
                of packaging waste and made a groundbreaking decision to
                revolutionize the industry.
              </p>
              <p>
                Through tireless innovation, Gissel introduced the world to our
                signature biodegradable bottles – a pioneering step towards a
                more eco-friendly future. Each bottle embodies our commitment to
                reducing plastic waste and protecting the planet for future
                generations. Vu Natural is more than just a brand; it is a
                celebration of individuality, self-love, and the beauty that
                emerges when we embrace our natural selves.
              </p>{" "}
              <p>
                Gissel's mission to provide products that empower and inspire
                extends far beyond the physical realm. She aims to create a
                community where individuals can connect, share their stories,
                and support one another in their journey towards embracing their
                true beauty.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
