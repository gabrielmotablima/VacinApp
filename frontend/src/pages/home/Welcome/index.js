import React from 'react';
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from 'react-router-dom';

import { Container, LandingImage, LandingText} from './styles';
import Sidebar from './../Sidebar';
import SimpleMenu from './../SimpleMenu';
import VaccineImage from './../../../assets/vaccine.jpg';

function onClick(e, item) {
  window.alert(JSON.stringify(item, null, 2));
  }
  
  const items = [
    {name: "home", label: "Home", Icon: HomeIcon},
    "divider",
    {
      name: "citizen",
      label: "Citizen",
      Icon: HomeIcon, 
      items: [
        { name: "list-citizen", label: "List Citizen", onClick },
        { name: "add-citizen", label: "Add Citizen", onClick },
        { name: "edit-citizen", label: "Edit Citizen", onClick }
      ]
    },
    {
      name: "vaccine",
      label: "Vaccine",
      Icon: HomeIcon,
      items: [
        { name: "list-vaccine", label: "List Vaccine", onClick },
        { name: "add-vaccine", label: "Add Vaccine", onClick }
      ]
    },
    {
      name: "religion",
      label: "Religion",
      Icon: HomeIcon,
      items: [
        { name: "list-religion", label: "List Religion", onClick },
        { name: "add-religion", label: "Add Religion", onClick }
      ]
    },
    {
      name: "allergy",
      label: "Allergy",
      Icon: HomeIcon,
      items: [
        { name: "list-allergy", label: "List Allergy", onClick },
        { name: "add-allergy", label: "Add Allergy", onClick }
      ]
    },
    {
      name: "health-plan",
      label: "Health Plan",
      Icon: HomeIcon,
      items: [
        { name: "list-health-plan", label: "List Health Plan", onClick },
        { name: "add-health-plan", label: "Add Health Plan", onClick }
      ]
    },
  ];

export default function Welcome() {
  return (
    <Container>
      <Sidebar items={items}></Sidebar>
      <LandingImage>
        <img src={VaccineImage}></img>
      </LandingImage>

      <LandingText>
        <div>
          <p>
            VacinApp is an web application made with NodeJS/React to
            subscribe and change a vacination SQL database managed by MySQL.
          </p>
        </div>
      </LandingText>
    </Container>
  );
}