import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  Typography,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Collapse, Fade,
  Row,
  Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'



const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40],
    }
  ],
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40],
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
    },
  ],
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};



// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      collapse: true,
      fadeIn: true,
      timeout: 300

    };

  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      collapse: !this.state.collapse
    });
  }


  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState } });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn" >
        <Row style={{ marginTop: '30px' }}>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <div className="text-value">897</div>
                <div>Monument historique</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData2} options={cardChartOpts2} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
                <div className="text-value">361</div>
                <div>Site archiologique</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData1} options={cardChartOpts1} height={70} />
              </div>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                <div className="text-value">540</div>
                <div>Festival</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Bar data={cardChartData4} options={cardChartOpts4} height={70} />
              </div>
            </Card>
          </Col>


          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-warning">
              <CardBody className="pb-0">
                <div className="text-value">25</div>
                <div>Commissariart</div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                <Line data={cardChartData3} options={cardChartOpts3} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" md="4">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                  Ariana
                  <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>
                    {/*eslint-disable-next-line*/}

                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>



                    <p className="mb-0"> nombre des  	monuments historiques:4	</p>
                    <p className="mb-0"> nombre des sites archeologiques:3</p>
                    <p className="mb-0">  nombre des  musees historiques:0</p>
                    <p className="mb-0">  nombre des festivals:14</p>




                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>

          <Col xs="12" sm="6" md="4">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                Tunis
                  <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>
                    {/*eslint-disable-next-line*/}

                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>



                    <p className="mb-0"> nombre des  	monuments historiques: 159	</p>
                    <p className="mb-0"> nombre des sites archeologiques:14</p>
                    <p className="mb-0">  nombre des  musees historiques:5</p>
                    <p className="mb-0">  nombre des festivals:36</p>




                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>

          <Col xs="12" sm="6" md="4">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                Ben Arous
                  <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>
                    {/*eslint-disable-next-line*/}

                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>



                    <p className="mb-0"> nombre des  	monuments historiques:18	</p>
                    <p className="mb-0"> nombre des sites archeologiques:5</p>
                    <p className="mb-0">  nombre des  musees historiques:0</p>
                    <p className="mb-0">  nombre des festivals:22</p>




                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>

          <Col xs="12" sm="6" md="4">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                Manubah
                  <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>
                    {/*eslint-disable-next-line*/}

                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>

                    <p className="mb-0"> nombre des  	monuments historiques:13</p>
                    <p className="mb-0"> nombre des sites archeologiques:3</p>
                    <p className="mb-0">  nombre des  musees historiques:0</p>
                    <p className="mb-0">  nombre des festivals:14</p>

                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>
          

          <Col xs="12" sm="6" md="4">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                Manubah
                  <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>
                    {/*eslint-disable-next-line*/}

                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>

                    <p className="mb-0"> nombre des  	monuments historiques:13</p>
                    <p className="mb-0"> nombre des sites archeologiques:3</p>
                    <p className="mb-0">  nombre des  musees historiques:0</p>
                    <p className="mb-0">  nombre des festivals:14</p>

                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>
          


          <Col xs="12" sm="6" md="4">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                Sousse
                  <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>
                    {/*eslint-disable-next-line*/}

                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>

                    <p className="mb-0"> nombre des  	monuments historiques:13</p>
                    <p className="mb-0"> nombre des sites archeologiques:3</p>
                    <p className="mb-0">  nombre des  musees historiques:0</p>
                    <p className="mb-0">  nombre des festivals:14</p>

                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>
          


          <Col xs="12" sm="6" md="4">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                Monastir
                  <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>
                    {/*eslint-disable-next-line*/}

                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>

                    <p className="mb-0"> nombre des  	monuments historiques:13</p>
                    <p className="mb-0"> nombre des sites archeologiques:3</p>
                    <p className="mb-0">  nombre des  musees historiques:0</p>
                    <p className="mb-0">  nombre des festivals:14</p>

                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>
          


          <Col xs="12" sm="6" md="4">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                Mahdia
                  <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>
                    {/*eslint-disable-next-line*/}

                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>

                    <p className="mb-0"> nombre des  	monuments historiques:13</p>
                    <p className="mb-0"> nombre des sites archeologiques:3</p>
                    <p className="mb-0">  nombre des  musees historiques:0</p>
                    <p className="mb-0">  nombre des festivals:14</p>

                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>
          


          <Col xs="12" sm="6" md="4">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                Sfax
                  <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>
                    {/*eslint-disable-next-line*/}

                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>

                    <p className="mb-0"> nombre des  	monuments historiques:13</p>
                    <p className="mb-0"> nombre des sites archeologiques:3</p>
                    <p className="mb-0">  nombre des  musees historiques:0</p>
                    <p className="mb-0">  nombre des festivals:14</p>

                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>
          


          <Col xs="12" sm="6" md="4">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                Madnin
                  <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>
                    {/*eslint-disable-next-line*/}

                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>

                    <p className="mb-0"> nombre des  	monuments historiques:13</p>
                    <p className="mb-0"> nombre des sites archeologiques:3</p>
                    <p className="mb-0">  nombre des  musees historiques:0</p>
                    <p className="mb-0">  nombre des festivals:14</p>

                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>
          


          <Col xs="12" sm="6" md="4">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                Kairoun
                  <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>
                    {/*eslint-disable-next-line*/}

                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>

                    <p className="mb-0"> nombre des  	monuments historiques:13</p>
                    <p className="mb-0"> nombre des sites archeologiques:3</p>
                    <p className="mb-0">  nombre des  musees historiques:0</p>
                    <p className="mb-0">  nombre des festivals:14</p>

                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>
          


          <Col xs="12" sm="6" md="4">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                Zaghouan
                  <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>
                    {/*eslint-disable-next-line*/}

                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>

                    <p className="mb-0"> nombre des  	monuments historiques:13</p>
                    <p className="mb-0"> nombre des sites archeologiques:3</p>
                    <p className="mb-0">  nombre des  musees historiques:0</p>
                    <p className="mb-0">  nombre des festivals:14</p>

                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>
          


          <Col xs="12" sm="6" md="4">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                Bizerte
                  <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>
                    {/*eslint-disable-next-line*/}

                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>

                    <p className="mb-0"> nombre des  	monuments historiques:13</p>
                    <p className="mb-0"> nombre des sites archeologiques:3</p>
                    <p className="mb-0">  nombre des  musees historiques:0</p>
                    <p className="mb-0">  nombre des festivals:14</p>

                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>
          


          <Col xs="12" sm="6" md="4">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                Béja
                  <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>
                    {/*eslint-disable-next-line*/}

                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>

                    <p className="mb-0"> nombre des  	monuments historiques:13</p>
                    <p className="mb-0"> nombre des sites archeologiques:3</p>
                    <p className="mb-0">  nombre des  musees historiques:0</p>
                    <p className="mb-0">  nombre des festivals:14</p>

                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>
          


          <Col xs="12" sm="6" md="4">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                Jendouba
                  <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>
                    {/*eslint-disable-next-line*/}

                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>

                    <p className="mb-0"> nombre des  	monuments historiques:13</p>
                    <p className="mb-0"> nombre des sites archeologiques:3</p>
                    <p className="mb-0">  nombre des  musees historiques:0</p>
                    <p className="mb-0">  nombre des festivals:14</p>

                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>
          


          <Col xs="12" sm="6" md="4">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                Manubah
                  <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>
                    {/*eslint-disable-next-line*/}

                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>

                    <p className="mb-0"> nombre des  	monuments historiques:13</p>
                    <p className="mb-0"> nombre des sites archeologiques:3</p>
                    <p className="mb-0">  nombre des  musees historiques:0</p>
                    <p className="mb-0">  nombre des festivals:14</p>

                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>
          


          <Col xs="12" sm="6" md="4">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                Manubah
                  <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>
                    {/*eslint-disable-next-line*/}

                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>

                    <p className="mb-0"> nombre des  	monuments historiques:13</p>
                    <p className="mb-0"> nombre des sites archeologiques:3</p>
                    <p className="mb-0">  nombre des  musees historiques:0</p>
                    <p className="mb-0">  nombre des festivals:14</p>

                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>
          


          <Col xs="12" sm="6" md="4">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                Manubah
                  <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>
                    {/*eslint-disable-next-line*/}

                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>

                    <p className="mb-0"> nombre des  	monuments historiques:13</p>
                    <p className="mb-0"> nombre des sites archeologiques:3</p>
                    <p className="mb-0">  nombre des  musees historiques:0</p>
                    <p className="mb-0">  nombre des festivals:14</p>

                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>
          



        </Row>
      </div>
    );
  }
}

export default Dashboard;
