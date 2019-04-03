import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Tbl} from './Tbl';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Tbl data={this.dataSet}>
        </Tbl>
      </div>
    )
  }

  dataSet = [
    [ "<b>Completely isolate the error overlay script from the main app <sup style='color: #ffffff; background-color: #ff0000'>Deployment failed</sup><div><sub>The bug is pending to be resolved next sprint</sub></div>", "", "", "", "","", "1" ],
    [ "<b>Allow to override 'resetMocks' and 'resetModules' test configuration<sup style='color: #ffffff; background-color: #009933'>QA Passed</sup><div><sub>To be deployed in Prod</sub></div>", "", "", "", "","", "2" ],
    [ "<b>Confusion about adding code to service-workers.js<sup style='color: #ffffff; background-color: #009933'>QA Passed</sup><div><sub>To be deployed in Prod</sub></div>", "", "", "", "", "","1" ],
    [ "<b>Quitting react dev server closes browser and any open tabs<sup style='color: #ffffff; background-color: #ff0000'>Deployment failed</sup><div><sub>The bug is pending to be resolved next sprint</sub></div>", "", "", "", "", "","1" ],
    [ "<b>Print process PID for running application<sup style='color: #ffffff; background-color: #009933'>QA Passed</sup><div><sub>To be deployed in Prod</sub></div>", "", "", "", "","", "1" ],
    [ "<b>Remove prop types in production build<sup style='color: #000000; background-color: #ffff00'>QA Pending</sup><div><sub>To be tested</sub></div>", "", "", "", "","","1" ],
    [ "<b>Log deleter for logs older than 6 months", "", "", "", "", "","1" ],
    [ "<b>Auto reset facility for jobs blocked for more than 24 hours<sup style='color: #ffffff; background-color: #009933'>QA Passed</sup><div><sub>To be deployed in Prod</sub></div>", "", "", "", "","", "2" ],
    [ "<b>SSO Login facility instead of dedicated username/password", "", "", "", "", "","1" ],
    [ "<b>Adding a calculator for quick matrix<sup style='color: #000000; background-color: #ffff00'>QA Pending</sup><div><sub>To be tested</sub></div>", "", "", "", "","", "1" ],
    [ "<b>Chat bot for quick assistance<sup style='color: #ffffff; background-color: #ff0000'>Deployment failed</sup><div><sub>The bug is pending to be resolved next sprint</sub></div>", "", "", "","", ,"","2" ],
    [ "<b>Bad data identifier and deleter<sup style='color: #ffffff; background-color: #009933'>QA Passed</sup><div><sub>To be deployed in Prod</sub></div>", "", "", "", "", "","3" ],
    [ "<b>Integration with Google Maps for real time loaction data", "", "", "", "","", "1" ],
    [ "<b>Decomissioning ftp.wiley.com as ftp server", "", "", "", "","", "1" ],
    [ "<b>Opening firewall for xfer.wiley.com", "", "", "", "","", "1" ],
    [ "<b>Remove users automatically who have left Wiley<sup style='color: #ffffff; background-color: #009933'>QA Passed</sup><div><sub>To be deployed in Prod</sub></div>", "", "", "","", ,"","1" ],
    [ "<b>Automailer for status report", "", "", "", "","", "1" ],
    [ "<b>Soft delete in place of hard delete to protect sensitive data", "", "", "", "","", "2" ],
    [ "<b>Unix server patching", "", "", "", "","", "1" ],
    [ "<b>Upgrade the servers to Java 8", "", "", "", "", "","1" ],
    [ "<b>New form page for ONIX 3.0", "", "", "", "","", "2" ],
    [ "<b>Data tables for the view all requests page", "", "", "", "", "","1" ]
    
]


}

export default App;
