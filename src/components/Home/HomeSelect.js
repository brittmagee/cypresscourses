import Link from "next/link";
import React from "react";

const HomeSelect = () => {
  return (
    <section id="select" className="bg-fixed select-section division">
      <div className="container-fluid">
        <div className="st-content">
          <div className="row">
            <div className="col-md-12 section-title p-0">
              <h3>Creative Templates That Impress</h3>
              <p>
                eTreeks comes with 9 ready to use stunning demos to help people
                build nice and fancy website without being a professional
                designers
              </p>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="hover-overlay">
                <Link href="/demo-1">
                  <a target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-1.jpg"
                      alt="layout-1-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Home Page #1</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSelect;
