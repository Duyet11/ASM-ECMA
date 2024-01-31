import * as React from "react";

export function Home() {
  return (
    <div>
      <div className='container-fluid' style={{ marginTop: "60px" }}>
        <div className='px-lg-5'>
          {/* For demo purpose */}
          <div className='row py-5'>
            <div className='col-lg-12 mx-auto'>
              <div
                className='text-white p-5 shadow-sm rounded banner'
                style={{
                  height: "300px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <h1>Duyệt không ngại va chạm</h1>
              </div>
            </div>
          </div>
          {/* End */}
          <div className='row'>
            {/* Gallery item */}
            <div className='col-xl-3 col-lg-4 col-md-6 mb-4'>
              <div className='bg-white rounded shadow-sm'>
                <img
                  src='https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg'
                  alt=''
                  className='img-fluid card-img-top'
                />
                <div className='p-4'>
                  <h5>
                    {" "}
                    <a href='#' className='text-dark'>
                      Red paint cup
                    </a>
                  </h5>
                  <p className='small text-muted mb-0'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                  <div className='d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4'>
                    <p className='small mb-0'>
                      <i className='fa fa-picture-o mr-2' />
                      <span className='font-weight-bold'>JPG</span>
                    </p>
                    <div className='badge badge-danger px-3 rounded-pill font-weight-normal'>
                      New
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End */}
            {/* Gallery item */}
            <div className='col-xl-3 col-lg-4 col-md-6 mb-4'>
              <div className='bg-white rounded shadow-sm'>
                <img
                  src='https://bootstrapious.com/i/snippets/sn-gallery/img-2.jpg'
                  alt=''
                  className='img-fluid card-img-top'
                />
                <div className='p-4'>
                  <h5>
                    {" "}
                    <a href='#' className='text-dark'>
                      Blorange
                    </a>
                  </h5>
                  <p className='small text-muted mb-0'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                  <div className='d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4'>
                    <p className='small mb-0'>
                      <i className='fa fa-picture-o mr-2' />
                      <span className='font-weight-bold'>PNG</span>
                    </p>
                    <div className='badge badge-primary px-3 rounded-pill font-weight-normal'>
                      Trend
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End */}
            {/* Gallery item */}
            <div className='col-xl-3 col-lg-4 col-md-6 mb-4'>
              <div className='bg-white rounded shadow-sm'>
                <img
                  src='https://bootstrapious.com/i/snippets/sn-gallery/img-3.jpg'
                  alt=''
                  className='img-fluid card-img-top'
                />
                <div className='p-4'>
                  <h5>
                    {" "}
                    <a href='#' className='text-dark'>
                      And She Realized
                    </a>
                  </h5>
                  <p className='small text-muted mb-0'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                  <div className='d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4'>
                    <p className='small mb-0'>
                      <i className='fa fa-picture-o mr-2' />
                      <span className='font-weight-bold'>JPG</span>
                    </p>
                    <div className='badge badge-warning px-3 rounded-pill font-weight-normal text-white'>
                      Featured
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End */}
            {/* Gallery item */}
            <div className='col-xl-3 col-lg-4 col-md-6 mb-4'>
              <div className='bg-white rounded shadow-sm'>
                <img
                  src='https://bootstrapious.com/i/snippets/sn-gallery/img-4.jpg'
                  alt=''
                  className='img-fluid card-img-top'
                />
                <div className='p-4'>
                  <h5>
                    {" "}
                    <a href='#' className='text-dark'>
                      DOSE Juice
                    </a>
                  </h5>
                  <p className='small text-muted mb-0'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                  <div className='d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4'>
                    <p className='small mb-0'>
                      <i className='fa fa-picture-o mr-2' />
                      <span className='font-weight-bold'>JPEG</span>
                    </p>
                    <div className='badge badge-success px-3 rounded-pill font-weight-normal'>
                      Hot
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End */}
            {/* Gallery item */}
            <div className='col-xl-3 col-lg-4 col-md-6 mb-4'>
              <div className='bg-white rounded shadow-sm'>
                <img
                  src='https://bootstrapious.com/i/snippets/sn-gallery/img-5.jpg'
                  alt=''
                  className='img-fluid card-img-top'
                />
                <div className='p-4'>
                  <h5>
                    {" "}
                    <a href='#' className='text-dark'>
                      Pineapple
                    </a>
                  </h5>
                  <p className='small text-muted mb-0'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                  <div className='d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4'>
                    <p className='small mb-0'>
                      <i className='fa fa-picture-o mr-2' />
                      <span className='font-weight-bold'>PNG</span>
                    </p>
                    <div className='badge badge-primary px-3 rounded-pill font-weight-normal'>
                      New
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End */}
            {/* Gallery item */}
            <div className='col-xl-3 col-lg-4 col-md-6 mb-4'>
              <div className='bg-white rounded shadow-sm'>
                <img
                  src='https://bootstrapious.com/i/snippets/sn-gallery/img-6.jpg'
                  alt=''
                  className='img-fluid card-img-top'
                />
                <div className='p-4'>
                  <h5>
                    {" "}
                    <a href='#' className='text-dark'>
                      Yellow banana
                    </a>
                  </h5>
                  <p className='small text-muted mb-0'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                  <div className='d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4'>
                    <p className='small mb-0'>
                      <i className='fa fa-picture-o mr-2' />
                      <span className='font-weight-bold'>JPG</span>
                    </p>
                    <div className='badge badge-warning px-3 rounded-pill font-weight-normal text-white'>
                      Featured
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End */}
            {/* Gallery item */}
            <div className='col-xl-3 col-lg-4 col-md-6 mb-4'>
              <div className='bg-white rounded shadow-sm'>
                <img
                  src='https://bootstrapious.com/i/snippets/sn-gallery/img-7.jpg'
                  alt=''
                  className='img-fluid card-img-top'
                />
                <div className='p-4'>
                  <h5>
                    {" "}
                    <a href='#' className='text-dark'>
                      Teal Gameboy
                    </a>
                  </h5>
                  <p className='small text-muted mb-0'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                  <div className='d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4'>
                    <p className='small mb-0'>
                      <i className='fa fa-picture-o mr-2' />
                      <span className='font-weight-bold'>JPEG</span>
                    </p>
                    <div className='badge badge-info px-3 rounded-pill font-weight-normal'>
                      Hot
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End */}
            {/* Gallery item */}
            <div className='col-xl-3 col-lg-4 col-md-6 mb-4'>
              <div className='bg-white rounded shadow-sm'>
                <img
                  src='https://bootstrapious.com/i/snippets/sn-gallery/img-8.jpg'
                  alt=''
                  className='img-fluid card-img-top'
                />
                <div className='p-4'>
                  <h5>
                    {" "}
                    <a href='#' className='text-dark'>
                      Color in Guatemala.
                    </a>
                  </h5>
                  <p className='small text-muted mb-0'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                  <div className='d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4'>
                    <p className='small mb-0'>
                      <i className='fa fa-picture-o mr-2' />
                      <span className='font-weight-bold'>PNG</span>
                    </p>
                    <div className='badge badge-warning px-3 rounded-pill font-weight-normal text-white'>
                      Featured
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End */}
            {/* Gallery item */}
            <div className='col-xl-3 col-lg-4 col-md-6 mb-4'>
              <div className='bg-white rounded shadow-sm'>
                <img
                  src='https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg'
                  alt=''
                  className='img-fluid card-img-top'
                />
                <div className='p-4'>
                  <h5>
                    {" "}
                    <a href='#' className='text-dark'>
                      Red paint cup
                    </a>
                  </h5>
                  <p className='small text-muted mb-0'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                  <div className='d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4'>
                    <p className='small mb-0'>
                      <i className='fa fa-picture-o mr-2' />
                      <span className='font-weight-bold'>JPG</span>
                    </p>
                    <div className='badge badge-danger px-3 rounded-pill font-weight-normal'>
                      New
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End */}
            {/* Gallery item */}
            <div className='col-xl-3 col-lg-4 col-md-6 mb-4'>
              <div className='bg-white rounded shadow-sm'>
                <img
                  src='https://bootstrapious.com/i/snippets/sn-gallery/img-2.jpg'
                  alt=''
                  className='img-fluid card-img-top'
                />
                <div className='p-4'>
                  <h5>
                    {" "}
                    <a href='#' className='text-dark'>
                      Lorem ipsum dolor
                    </a>
                  </h5>
                  <p className='small text-muted mb-0'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                  <div className='d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4'>
                    <p className='small mb-0'>
                      <i className='fa fa-picture-o mr-2' />
                      <span className='font-weight-bold'>PNG</span>
                    </p>
                    <div className='badge badge-primary px-3 rounded-pill font-weight-normal'>
                      Trend
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End */}
            {/* Gallery item */}
            <div className='col-xl-3 col-lg-4 col-md-6 mb-4'>
              <div className='bg-white rounded shadow-sm'>
                <img
                  src='https://bootstrapious.com/i/snippets/sn-gallery/img-3.jpg'
                  alt=''
                  className='img-fluid card-img-top'
                />
                <div className='p-4'>
                  <h5>
                    {" "}
                    <a href='#' className='text-dark'>
                      Lorem ipsum dolor
                    </a>
                  </h5>
                  <p className='small text-muted mb-0'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                  <div className='d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4'>
                    <p className='small mb-0'>
                      <i className='fa fa-picture-o mr-2' />
                      <span className='font-weight-bold'>JPG</span>
                    </p>
                    <div className='badge badge-warning px-3 rounded-pill font-weight-normal text-white'>
                      Featured
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End */}
            {/* Gallery item */}
            <div className='col-xl-3 col-lg-4 col-md-6 mb-4'>
              <div className='bg-white rounded shadow-sm'>
                <img
                  src='https://bootstrapious.com/i/snippets/sn-gallery/img-4.jpg'
                  alt=''
                  className='img-fluid card-img-top'
                />
                <div className='p-4'>
                  <h5>
                    {" "}
                    <a href='#' className='text-dark'>
                      Lorem ipsum dolor
                    </a>
                  </h5>
                  <p className='small text-muted mb-0'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                  <div className='d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4'>
                    <p className='small mb-0'>
                      <i className='fa fa-picture-o mr-2' />
                      <span className='font-weight-bold'>JPEG</span>
                    </p>
                    <div className='badge badge-success px-3 rounded-pill font-weight-normal'>
                      Hot
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End */}
          </div>
          <div className='py-5 text-right'>
            <a href='#' className='btn btn-dark px-5 py-3 text-uppercase'>
              Show me more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
