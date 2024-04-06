import axios from 'axios';

const createService = (newService) => {
  console.log("Entering the function createService");
  axios
    .get("http://localhost:3000/api/service")
    .then(response => {
      console.log("Getting the data");
      if (response.data.length === 0) {
        axios
          .post("http://localhost:3000/api/service", newService)
          .then(() => {
          })
          .catch((err) => {
            console.log("Error creating service:", err);
          });
      }; 
    })
    .catch((err) => {
      console.log("Error checking service:", err);
    });
};

const serviceData1 = {
  name: 'mySis',
  status: true,
  faults: 0
};

const serviceData2 = {
  name: 'QmPlus',
  status: true,
  faults: 0
};

const serviceData3 = {
  name: 'Library Catalogue',
  status: true,
  faults: 0
};

const serviceData4 = {
  name: 'Example Service4',
  status: true,
  faults: 0
};

function initializeService(navigate) {
  console.log("Entering the function initializeService");
  createService(serviceData1);
  createService(serviceData2);
  createService(serviceData3);
  navigate("/");
}

export default initializeService;
