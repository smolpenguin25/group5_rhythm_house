import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { IconsHeart } from "./components/IconsHeart";
import { IconsQuotes } from "./components/IconsQuotes";
import { IconsArrow } from "./icons/IconsArrow";
import { IconsArrow1 } from "./icons/IconsArrow1";
import { IconsChat1 } from "./icons/IconsChat1";
import { IconsHeart3 } from "./icons/IconsHeart3";
import { IconsInstagram } from "./icons/IconsInstagram";
import { IconsQuotes2 } from "./icons/IconsQuotes2";
import { IconsQuotes5 } from "./icons/IconsQuotes5";
import './More.css';
import avatar from "./img/avataralt.svg";
import avatar1 from "./img/avataralt-1.svg";
import avatar2 from "./img/avataralt-2.svg";
import img from "./img/img.svg";
import img1 from "./img/img-1.svg";
import img2 from "./img/img-2.svg";
import img3 from "./img/img-3.svg";
import img4 from "./img/img-4.svg";




export const More = () => {
  return (
    <div className="box">
      <div className="group">
        <div className="testimonials">
          <div className="content">
            <div className="text-wrapper">Feedback</div>
            <div className="div">
              <div className="testimonial">
                <div className="overlap-group-wrapper-2">
                  <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="content-2">
                      <div className="content-4">
                        <div className="icons-quotes-wrapper">
                          <IconsQuotes2 className="icons-quotes" />
                        </div>
                        <div className="text">
                          <p className="lorem-ipsum-is">
                            The darkness becomes pitch black by the album’s closer, “27 Club,” a song Whack says is inspired by the Mary Jane Girls’ 1983 R&B ballad “You Are My Heaven.” It’s jarring at first to hear the word “suicide” repeated like a chant, but it becomes clear that the purpose of the repetition is not to sanction the act but rather to release Whack from its hold. In an interview with Vulture, she revealed that when she started recording the song she didn’t know what it would be about. “But it came so easy,” she said. “I cried, and I was like, ‘This is what I’ve been trying to say.’”


                          </p>
                        </div>
                        <IconsQuotes direction="right" type="double" />
                      </div>
                      <div className="user">
                        <img className="avatar" alt="Avatar" src={avatar} />
                        <div className="name">
                          <div className="text-wrapper-2">Myne Barack</div>
                          <div className="text-wrapper-3">ipsum.com</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlap-wrapper">
                <div className="overlap-group">
                  <div className="rectangle" />
                  <div className="content-2">
                    <div className="content-4">
                      <div className="icons-quotes-wrapper">
                        <IconsQuotes2 className="icons-quotes" />
                      </div>
                      <div className="text">
                        <p className="lorem-ipsum-is">
                          Not everyone can afford to pay for the news right now. That’s why we choose to keep our journalism open for everyone to read, even in Vietnam. If this is you, please continue to read for free.
                        </p>
                      </div>
                      <IconsQuotes5 className="icons-quotes" />
                    </div>
                    <div className="user">
                      <img className="avatar" alt="Avatar" src={avatar1} />
                      <div className="name">
                        <div className="text-wrapper-2">Johnny Doe</div>
                        <div className="text-wrapper-3">ipsum.com</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlap-group-wrapper">
                <div className="overlap-group">
                  <div className="rectangle" />
                  <div className="content-2">
                    <div className="content-4">
                      <div className="icons-quotes-wrapper">
                        <IconsQuotes direction="left" type="double" />
                      </div>
                      <div className="text">
                        <p className="lorem-ipsum-is">
                          Along with rousing melodies and galloping choruses, Crutchfield plays with cliche and mixes metaphors (particularly on Crowbar, endlessly winking at itself). The lyrical effect is a kind of mind maze: concentrate too hard and you’ll tie yourself in knots, but look at it out of the corner of your eye and it swims into focus. Crutchfield has said that after the sobriety glow-up of Saint Cloud, there’s no major narrative attached to Tigers Blood, an album that comes across more like a good feeling than a statement.
                        </p>
                      </div>
                      <IconsQuotes5 className="icons-quotes" />
                    </div>
                    <div className="user">
                      <img className="avatar" alt="Avatar" src={avatar2} />
                      <div className="name">
                        <div className="text-wrapper-2">Ellie James</div>
                        <div className="text-wrapper-3">lorem.com</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery">
          <div className="overlap">
            <IconsInstagram className="icons-instagram" />
            <div className="text-wrapper-4">See our Best Shots</div>
            {/* <div className="media">
              <div className="instashot">
                <img className="img" alt="Img" src={img} />
                <div className="title-tags">
                  <div className="likes-comments">
                    <div className="div-2">
                      <IconsHeart3 className="icon-instance-node" />
                      <div className="text-wrapper-5">270</div>
                    </div>
                    <div className="div-2">
                      <IconsChat1 className="icon-instance-node" />
                      <div className="text-wrapper-5">22</div>
                    </div>
                  </div>
                  <div className="text-wrapper-6">enjoying</div>
                  <p className="p">#music #concert #conference #london #event #artist #dj #soundtrack #dance</p>
                </div>
              </div>
              

              <div className="overlap-group-2">
                <div className="instashot-2">
                  <img className="img-2" alt="Img" src={img1} />
                  <div className="title-tags">
                    <div className="likes-comments">
                      <div className="like">
                        <IconsHeart fill={false} />
                        <div className="text-wrapper-5">222</div>
                      </div>
                      <div className="div-2">
                        <IconsChat1 className="icon-instance-node" />
                        <div className="text-wrapper-5">156</div>
                      </div>
                    </div>
                    <div className="text-wrapper-6">DJ showing up</div>
                    <p className="p">#music #concert #conference #london #event #artist #dj #soundtrack #dance</p>
                  </div>
                </div>
                <div className="arrow">
                  <IconsArrow1 className="icons-arrow" />
                </div>
              </div>
          

              <div className="instashot-3">
                <img className="img" alt="Img" src={img2} />
                <div className="title-tags">
                  <div className="likes-comments">
                    <div className="div-2">
                      <IconsHeart3 className="icon-instance-node" />
                      <div className="text-wrapper-5">382</div>
                    </div>
                    <div className="div-2">
                      <IconsChat1 className="icon-instance-node" />
                      <div className="text-wrapper-5">120</div>
                    </div>
                  </div>
                  <div className="text-wrapper-6">Before concert</div>
                  <p className="p">#music #concert #conference #london #event #artist #dj #soundtrack #dance</p>
                </div>
              </div>
              

              <div className="instashot-4">
                <img className="img" alt="Img" src={img3} />
                <div className="title-tags">
                  <div className="likes-comments">
                    <div className="div-2">
                      <IconsHeart3 className="icon-instance-node" />
                      <div className="text-wrapper-5">239</div>
                    </div>
                    <div className="div-2">
                      <IconsChat1 className="icon-instance-node" />
                      <div className="text-wrapper-5">152</div>
                    </div>
                  </div>
                  <div className="text-wrapper-6">Main area</div>
                  <p className="p">#music #concert #conference #london #event #artist #dj #soundtrack #dance</p>
                </div>
              </div>
            


              <div className="overlap-2">
                <div className="instashot-2">
                  <img className="img-3" alt="Img" src={img4} />
                  <div className="title-tags">
                    <div className="likes-comments">
                      <div className="div-2">
                        <IconsHeart3 className="icon-instance-node" />
                        <div className="text-wrapper-5">412</div>
                      </div>
                      <div className="div-2">
                        <IconsChat1 className="icon-instance-node" />
                        <div className="text-wrapper-5">140</div>
                      </div>
                    </div>
                    <div className="text-wrapper-6">Somewhere</div>
                    <p className="p">#music #concert #conference #london #event #artist #dj #soundtrack #dance</p>
                  </div>
                </div>
                <div className="arrow">
                  <IconsArrow className="icons-arrow" />
                </div>
              </div>

            </div> */}
            <div className="media">
                <div className="arrow">
                  <IconsArrow className="icons-arrow" />
                </div> 
              <Carousel className="carousel-item active">
                <Carousel.Item>
                  <div className="instashot">
                    <img  className="img" alt="Img" src={img} />
                    <div className="title-tags">
                      <div className="likes-comments">
                        <div className="div-2">
                          <IconsHeart3 className="icon-instance-node" />
                          <div className="text-wrapper-5">270</div>
                        </div>
                        <div className="div-2">
                          <IconsChat1 className="icon-instance-node" />
                          <div className="text-wrapper-5">22</div>
                        </div>
                      </div>
                      <div className="text-wrapper-6">enjoying</div>
                      <p className="p">#music #concert #conference #london #event #artist #dj #soundtrack #dance</p>
                    </div>
                  </div>


                </Carousel.Item>
                <Carousel.Item>
                  <div className="instashot-3">
                    <img className="img" alt="Img" src={img1} />
                    <div className="title-tags">
                      <div className="likes-comments">
                        <div className="div-2">
                          <IconsHeart3 className="icon-instance-node" />
                          <div className="text-wrapper-5">222</div>
                        </div>
                        <div className="div-2">
                          <IconsChat1 className="icon-instance-node" />
                          <div className="text-wrapper-5">156</div>
                        </div>
                      </div>
                      <div className="text-wrapper-6">DJ SHOWING UP</div>
                      <p className="p">#music #concert #conference #london #event #artist #dj #soundtrack #dance</p>
                    </div>
                  </div>
                </Carousel.Item>
               
                <Carousel.Item>
                  <div className="instashot-3">
                    <img className="img" alt="Img" src={img2} />
                    <div className="title-tags">
                      <div className="likes-comments">
                        <div className="div-2">
                          <IconsHeart3 className="icon-instance-node" />
                          <div className="text-wrapper-5">382</div>
                        </div>
                        <div className="div-2">
                          <IconsChat1 className="icon-instance-node" />
                          <div className="text-wrapper-5">120</div>
                        </div>
                      </div>
                      <div className="text-wrapper-6">Before concert</div>
                      <p className="p">#music #concert #conference #london #event #artist #dj #soundtrack #dance</p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="instashot-4">
                    <img className="img" alt="Img" src={img3} />
                    <div className="title-tags">
                      <div className="likes-comments">
                        <div className="div-2">
                          <IconsHeart3 className="icon-instance-node" />
                          <div className="text-wrapper-5">239</div>
                        </div>
                        <div className="div-2">
                          <IconsChat1 className="icon-instance-node" />
                          <div className="text-wrapper-5">152</div>
                        </div>
                      </div>
                      <div className="text-wrapper-6">Main area</div>
                      <p className="p">#music #concert #conference #london #event #artist #dj #soundtrack #dance</p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="instashot-2">
                    <img className="img-3" alt="Img" src={img4} />
                    <div className="title-tags">
                      <div className="likes-comments">
                        <div className="div-2">
                          <IconsHeart3 className="icon-instance-node" />
                          <div className="text-wrapper-5">412</div>
                        </div>
                        <div className="div-2">
                          <IconsChat1 className="icon-instance-node" />
                          <div className="text-wrapper-5">140</div>
                        </div>
                      </div>
                      <div className="text-wrapper-6">Somewhere</div>
                      <p className="p">#music #concert #conference #london #event #artist #dj #soundtrack #dance</p>
                    </div>
                  </div>
                </Carousel.Item>
                

              </Carousel>
               <div className="arrow2">
                  <IconsArrow1 className="icons-arrow" />
                </div> 
            </div>




          </div>
        </div>
      </div>
    </div>
  );
};
